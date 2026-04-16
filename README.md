# bar typist

a typing practice app for the california bar exam.

## access

**local:** open `bar-typist/index.html` directly in any browser — no server needed.

**github pages:** once this branch is merged to `main` and github pages is enabled for the repo, the site will be live at:

```
https://kombuchauncle.github.io/typing-test/bar-typist/
```

to enable: repo → Settings → Pages → Source → Deploy from branch → `main` → `/root`

## what it does

- loads a random passage from 14 california bar subjects on page load
- highlights correct / incorrect characters as you type
- tracks live wpm, accuracy, and elapsed time
- shows final results with one-sentence feedback on completion
- saves top 10 scores to localstorage
- **new passage** loads a different subject passage; **try again** reloads the same one

## subjects covered

contracts · torts · constitutional law · criminal law · criminal procedure · evidence · civil procedure · real property · community property · wills and trusts · professional responsibility · business associations · remedies · federal powers

## files

```
bar-typist/
  index.html    page structure
  style.css     cloud background, translucent card aesthetic
  passages.js   28 rule-statement passages across 14 subjects
  typist.js     typing engine, timer, scoring, localstorage
```
