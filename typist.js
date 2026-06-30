(function () {
  'use strict';

  // ── state ──────────────────────────────────────────────────────────────────
  let currentPassage = null;
  let startTime = null;
  let timerInterval = null;
  let finished = false;
  let pendingScore = null;  // { wpm, acc, elapsed, errors }

  // ── elements ───────────────────────────────────────────────────────────────
  const passageMeta    = document.getElementById('passage-meta');
  const passageDisplay = document.getElementById('passage-display');
  const typeInput      = document.getElementById('type-input');
  const liveWpm        = document.getElementById('stat-wpm');
  const liveAcc        = document.getElementById('stat-acc');
  const liveTime       = document.getElementById('stat-time');
  const testSection    = document.getElementById('test-section');
  const resultsSection = document.getElementById('results-section');
  const resWpm         = document.getElementById('res-wpm');
  const resAcc         = document.getElementById('res-acc');
  const resTime        = document.getElementById('res-time');
  const resErrors      = document.getElementById('res-errors');
  const feedbackBox    = document.getElementById('feedback-box');
  const scoreEntry     = document.getElementById('score-entry');
  const scoreNameInput = document.getElementById('score-name');
  const scoresList     = document.getElementById('scores-list');
  const subjectSelect  = document.getElementById('subject-select');

  // ── subject dropdown ──────────────────────────────────────────────────────
  Object.keys(PASSAGES).sort().forEach(function (subject) {
    const opt = document.createElement('option');
    opt.value = subject;
    opt.textContent = subject;
    subjectSelect.appendChild(opt);
  });

  subjectSelect.addEventListener('change', function () {
    newPassage();
  });

  // ── init ───────────────────────────────────────────────────────────────────
  function init(passage) {
    currentPassage = passage;
    startTime = null;
    finished = false;
    pendingScore = null;

    clearInterval(timerInterval);
    timerInterval = null;

    typeInput.value = '';
    typeInput.disabled = false;
    typeInput.focus();

    passageMeta.textContent =
      (passage.subject || '') + ' · ' + passage.title + ' · ' + passage.source;

    renderDisplay('');
    liveWpm.textContent  = '0 wpm';
    liveAcc.textContent  = '100% acc';
    liveTime.textContent = '0:00';

    testSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    scoreEntry.classList.add('hidden');
  }

  // ── render passage display ─────────────────────────────────────────────────
  function renderDisplay(typed) {
    const text = currentPassage.text;
    let html = '';
    for (let i = 0; i < text.length; i++) {
      const ch = escapeHtml(text[i]);
      if (i < typed.length) {
        if (typed[i] === text[i]) {
          html += '<span class="char-correct">' + ch + '</span>';
        } else {
          html += '<span class="char-error">' + ch + '</span>';
        }
      } else if (i === typed.length) {
        html += '<span class="char-cursor char-pending">' + ch + '</span>';
      } else {
        html += '<span class="char-pending">' + ch + '</span>';
      }
    }
    passageDisplay.innerHTML = html;
  }

  function escapeHtml(ch) {
    if (ch === '&') return '&amp;';
    if (ch === '<') return '&lt;';
    if (ch === '>') return '&gt;';
    if (ch === '"') return '&quot;';
    return ch;
  }

  // ── timer ──────────────────────────────────────────────────────────────────
  function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(function () {
      const elapsed = (Date.now() - startTime) / 1000;
      liveTime.textContent = formatTime(elapsed);
      updateLiveStats(typeInput.value, elapsed);
    }, 200);
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ── live stats ─────────────────────────────────────────────────────────────
  function updateLiveStats(typed, elapsed) {
    const minutes = elapsed / 60;
    const words = typed.trim().split(/\s+/).filter(Boolean).length;
    const wpm = minutes > 0 ? Math.round(words / minutes) : 0;

    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === currentPassage.text[i]) correct++;
    }
    const acc = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 100;

    liveWpm.textContent = wpm + ' wpm';
    liveAcc.textContent = acc + '% acc';
  }

  // ── input handler ──────────────────────────────────────────────────────────
  typeInput.addEventListener('input', function () {
    if (finished) return;
    const typed = typeInput.value;

    // start timer on first keystroke
    if (!startTime && typed.length > 0) {
      startTimer();
    }

    renderDisplay(typed);

    if (startTime) {
      const elapsed = (Date.now() - startTime) / 1000;
      updateLiveStats(typed, elapsed);
    }

    // completion check
    if (typed.length >= currentPassage.text.length) {
      completeTest(typed);
    }
  });

  // block paste
  typeInput.addEventListener('paste', function (e) {
    e.preventDefault();
  });

  // ── completion ─────────────────────────────────────────────────────────────
  function completeTest(typed) {
    finished = true;
    clearInterval(timerInterval);
    timerInterval = null;
    typeInput.disabled = true;

    const elapsed = (Date.now() - startTime) / 1000;
    const text = currentPassage.text;

    // count errors (per character)
    let errors = 0;
    for (let i = 0; i < Math.min(typed.length, text.length); i++) {
      if (typed[i] !== text[i]) errors++;
    }
    // extra characters beyond passage length count as errors
    errors += Math.max(0, typed.length - text.length);

    // final WPM based on passage word count
    const words = text.trim().split(/\s+/).length;
    const minutes = elapsed / 60;
    const wpm = Math.round(words / minutes);

    let correct = 0;
    for (let i = 0; i < Math.min(typed.length, text.length); i++) {
      if (typed[i] === text[i]) correct++;
    }
    const acc = Math.round((correct / text.length) * 100);

    showResults(wpm, acc, elapsed, errors);
  }

  // ── results ────────────────────────────────────────────────────────────────
  function showResults(wpm, acc, elapsed, errors) {
    resWpm.textContent    = wpm;
    resAcc.textContent    = acc + '%';
    resTime.textContent   = formatTime(elapsed);
    resErrors.textContent = errors;

    feedbackBox.textContent = generateFeedback(wpm, acc);

    pendingScore = { wpm, acc, elapsed, errors };

    // check high score eligibility
    const scores = getScores();
    if (scores.length < 10 || wpm > scores[scores.length - 1].wpm) {
      scoreEntry.classList.remove('hidden');
      scoreNameInput.value = '';
      setTimeout(function () { scoreNameInput.focus(); }, 50);
    }

    testSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
  }

  function generateFeedback(wpm, acc) {
    if (acc < 85) {
      return 'focus on accuracy — slow down until errors drop below 2%, then rebuild speed.';
    }
    if (wpm < 30) {
      return 'good start. practice the home row and trust your fingers without looking down.';
    }
    if (wpm < 50) {
      return 'solid foundation. try chunking legal phrases as single units to increase fluency.';
    }
    if (wpm < 70) {
      return 'strong typing. keep accuracy above 95% as you push toward 70+ wpm.';
    }
    if (wpm < 90) {
      return 'excellent speed. at this pace you can take notes in real time during a bar exam essay.';
    }
    return 'outstanding. you are well above average — focus on maintaining accuracy at full speed.';
  }

  // ── high scores ────────────────────────────────────────────────────────────
  const SCORES_KEY = 'barTypist_scores';

  function getScores() {
    try {
      return JSON.parse(localStorage.getItem(SCORES_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveScores(scores) {
    localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
  }

  window.saveScore = function () {
    const name = scoreNameInput.value.trim() || 'anonymous';
    if (!pendingScore) return;

    const entry = {
      name: name,
      wpm: pendingScore.wpm,
      acc: pendingScore.acc,
      time: Math.round(pendingScore.elapsed),
      errors: pendingScore.errors,
      subject: currentPassage.subject || '',
      title: currentPassage.title,
      date: new Date().toLocaleDateString()
    };

    const scores = getScores();
    scores.push(entry);
    scores.sort(function (a, b) { return b.wpm - a.wpm; });
    scores.splice(10); // keep top 10
    saveScores(scores);

    scoreEntry.classList.add('hidden');
    renderScores();
  };

  function renderScores() {
    const scores = getScores();
    if (scores.length === 0) {
      scoresList.innerHTML = '<p style="font-size:0.85em;color:#999;">no scores yet.</p>';
      return;
    }
    let html = '';
    scores.forEach(function (s, i) {
      html += '<div class="score-row">'
        + '<span class="score-rank">' + (i + 1) + '.</span>'
        + '<span class="score-wpm">' + s.wpm + ' wpm</span>'
        + '<span class="score-detail">'
        + escapeHtml(s.name) + ' &nbsp;·&nbsp; '
        + s.acc + '% &nbsp;·&nbsp; '
        + escapeHtml(s.subject) + ' &nbsp;·&nbsp; '
        + s.date
        + '</span>'
        + '</div>';
    });
    scoresList.innerHTML = html;
  }

  window.clearScores = function () {
    if (confirm('clear all high scores?')) {
      localStorage.removeItem(SCORES_KEY);
      renderScores();
    }
  };

  // ── navigation ─────────────────────────────────────────────────────────────
  window.tryAgain = function () {
    init(currentPassage);
  };

  window.newPassage = function () {
    const subject = subjectSelect.value || null;
    const p = getRandomPassage(currentPassage ? currentPassage.text : null, subject);
    init(p);
  };

  // ── start ──────────────────────────────────────────────────────────────────
  renderScores();
  init(getRandomPassage(null, subjectSelect.value || null));

}());
