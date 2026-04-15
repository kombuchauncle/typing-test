const PASSAGES = {
  "Contracts": [
    {
      title: "Offer and Acceptance",
      source: "CA Bar Review",
      text: "An offer is a manifestation of willingness to enter into a bargain, made in such a way that the offeree can reasonably understand that assent will conclude the deal. An offer must be definite and certain as to its essential terms, including the parties, subject matter, price, and time of performance. Acceptance requires the offeree to manifest assent to the terms of the offer in the manner invited or required. Under the mailbox rule, acceptance is effective upon dispatch if sent by reasonable means."
    },
    {
      title: "Consideration",
      source: "CA Bar Review",
      text: "Consideration requires a bargained-for exchange in which each party gives something of legal value. The detriment to the promisee need not be an economic loss; any act, forbearance, or promise that the promisee was not previously obligated to perform constitutes valid consideration. Courts will not inquire into the adequacy of consideration, only its existence. Past consideration — a benefit already conferred before the promise was made — does not support an enforceable contract because the exchange was not bargained for."
    },
    {
      title: "Breach and Damages",
      source: "CA Bar Review",
      text: "A material breach excuses the non-breaching party from further performance and entitles that party to seek damages. Expectation damages, the standard remedy in contract law, are designed to put the non-breaching party in the position they would have occupied had the contract been performed. Consequential damages are recoverable only if they were foreseeable at the time of contracting. A party also has a duty to mitigate, meaning they must take reasonable steps to reduce their losses following a breach."
    }
  ],
  "Torts": [
    {
      title: "Negligence",
      source: "CA Bar Review",
      text: "To establish negligence, a plaintiff must prove that the defendant owed a duty of reasonable care, breached that duty by failing to act as a reasonable person would under the circumstances, and that the breach was the actual and proximate cause of the plaintiff's damages. The duty of care is generally owed to all foreseeable plaintiffs within the zone of danger created by the defendant's conduct. The standard is that of a reasonably prudent person acting under similar circumstances, not perfection."
    },
    {
      title: "Strict Products Liability",
      source: "CA Bar Review",
      text: "Under strict products liability, a manufacturer, distributor, or retailer who places a defective product into the stream of commerce is liable for physical harm caused by that defect without any showing of negligence. A product may be defective in its design, manufacture, or warnings. A manufacturing defect exists when a specific unit deviates from the intended design. A design defect exists when the entire product line is unreasonably dangerous as designed, evaluated under either the consumer expectations test or the risk-utility balancing test."
    },
    {
      title: "Battery and False Imprisonment",
      source: "CA Bar Review",
      text: "Battery is the intentional harmful or offensive contact with another person's body. The intent required is the intent to make contact, not the intent to harm. An offensive touching is one that would offend a reasonable person's sense of personal dignity. False imprisonment requires the intentional confinement of a person within fixed boundaries without consent, a means of escape, or legal authority. Confinement may be effected by physical barriers, force, threat of force, or the assertion of legal authority."
    }
  ],
  "Constitutional Law": [
    {
      title: "Equal Protection",
      source: "CA Bar Review",
      text: "The Equal Protection Clause of the Fourteenth Amendment prohibits states from denying any person within their jurisdiction the equal protection of the laws. Courts apply strict scrutiny to classifications based on race, national origin, or alienage, and to laws that burden fundamental rights. Under strict scrutiny, the government must show that the law is necessary to achieve a compelling governmental interest. Intermediate scrutiny applies to gender and legitimacy classifications, requiring the law to be substantially related to an important government interest."
    },
    {
      title: "First Amendment Speech",
      source: "CA Bar Review",
      text: "The First Amendment protects freedom of speech from government infringement. Content-based restrictions on speech — those that target speech because of its message — are presumptively unconstitutional and subject to strict scrutiny. Content-neutral restrictions on the time, place, or manner of speech must serve a significant governmental interest, be narrowly tailored, and leave open alternative channels of communication. Prior restraints on speech carry a heavy presumption against their constitutional validity and are subject to immediate judicial review."
    },
    {
      title: "Due Process",
      source: "CA Bar Review",
      text: "The Due Process Clause prohibits the government from depriving any person of life, liberty, or property without due process of law. Procedural due process requires notice and an opportunity to be heard before such a deprivation occurs. Substantive due process protects fundamental rights from government interference absent a compelling justification. Fundamental rights recognized under substantive due process include the right to marry, the right to privacy, and the right to direct the upbringing and education of one's children."
    }
  ],
  "Criminal Law": [
    {
      title: "Actus Reus and Mens Rea",
      source: "CA Bar Review",
      text: "Every crime requires both an actus reus — a voluntary physical act or legally cognizable omission — and a mens rea, the mental state specified by the crime. The Model Penal Code recognizes four levels of culpability: purpose, knowledge, recklessness, and negligence. A person acts purposely when it is their conscious object to engage in the conduct or cause the result. A person acts knowingly when they are aware that their conduct is of that nature or that a result is practically certain to follow."
    },
    {
      title: "Homicide",
      source: "CA Bar Review",
      text: "Murder at common law is the unlawful killing of another with malice aforethought. Malice may be express — intent to kill — or implied by intent to cause grievous bodily harm, depraved heart recklessness, or felony murder. First degree murder requires premeditation and deliberation. Second degree murder covers all other malicious killings. Voluntary manslaughter reduces an intentional killing when the defendant acted in the heat of passion upon adequate provocation, before a reasonable cooling-off period had elapsed."
    }
  ],
  "Criminal Procedure": [
    {
      title: "Fourth Amendment Search and Seizure",
      source: "CA Bar Review",
      text: "The Fourth Amendment prohibits unreasonable searches and seizures and requires that warrants be supported by probable cause, particularly describe the place to be searched, and describe the persons or things to be seized. A search occurs when the government intrudes upon a person's reasonable expectation of privacy. Probable cause exists when the facts and circumstances known to the officer would lead a reasonable person to believe that evidence of a crime will be found in the place to be searched."
    },
    {
      title: "Miranda and Custodial Interrogation",
      source: "CA Bar Review",
      text: "The Fifth Amendment privilege against self-incrimination protects individuals from being compelled to testify against themselves in a criminal proceeding. Miranda v. Arizona requires law enforcement to advise suspects of their rights to silence and counsel before custodial interrogation. A suspect is in custody when, from the totality of the circumstances, a reasonable person would not feel free to terminate the encounter. A valid waiver of Miranda rights must be made voluntarily, knowingly, and intelligently."
    }
  ],
  "Evidence": [
    {
      title: "Hearsay",
      source: "CA Bar Review",
      text: "Hearsay is an out-of-court statement offered to prove the truth of the matter asserted. Courts exclude hearsay because the declarant is not subject to cross-examination and the trier of fact cannot assess their credibility. A statement not offered for its truth — but rather for its effect on the listener, as a verbal act, or as circumstantial evidence of the declarant's state of mind — is not hearsay and is generally admissible. Numerous exceptions permit admission when adequate guarantees of trustworthiness exist."
    },
    {
      title: "Relevance and Prejudice",
      source: "CA Bar Review",
      text: "Evidence is relevant if it has any tendency to make a fact of consequence to the action more or less probable than it would be without the evidence. The threshold for relevance is low, but even relevant evidence may be excluded if its probative value is substantially outweighed by the danger of unfair prejudice, confusion of the issues, or misleading the jury. Character evidence is generally inadmissible to prove conduct in conformity therewith, but may be admitted to show motive, intent, identity, or absence of mistake."
    }
  ],
  "Civil Procedure": [
    {
      title: "Personal Jurisdiction",
      source: "CA Bar Review",
      text: "A court may exercise personal jurisdiction over a defendant only if the defendant has sufficient contacts with the forum state such that requiring them to litigate there does not offend traditional notions of fair play and substantial justice. Specific jurisdiction arises when claims arise out of or relate to the defendant's forum contacts. General jurisdiction requires contacts so continuous and systematic as to render the defendant essentially at home in the forum. Consent and physical presence within the forum are also traditional bases for jurisdiction."
    },
    {
      title: "Subject Matter Jurisdiction",
      source: "CA Bar Review",
      text: "Federal courts have limited subject matter jurisdiction, requiring either a federal question or diversity of citizenship. Federal question jurisdiction exists when the plaintiff's claim arises under the Constitution, laws, or treaties of the United States. Diversity jurisdiction requires complete diversity — no plaintiff may be a citizen of the same state as any defendant — and an amount in controversy exceeding $75,000. A corporation is deemed a citizen of both its state of incorporation and the state where it maintains its principal place of business."
    }
  ],
  "Real Property": [
    {
      title: "Adverse Possession",
      source: "CA Bar Review",
      text: "A person may acquire title to land through adverse possession by maintaining open, notorious, actual, exclusive, hostile, and continuous possession of the property for the statutory period. Hostility does not require ill will but only possession without the owner's permission. The claimant's use must be the type that a reasonable true owner would make of the land. Tacking allows a claimant to add their period of possession to that of a predecessor in privity of possession to satisfy the statutory period."
    },
    {
      title: "Joint Tenancy and Tenancy in Common",
      source: "CA Bar Review",
      text: "A joint tenancy requires four unities: time, title, interest, and possession. All joint tenants must acquire their interests at the same time, by the same instrument, in equal shares, with equal rights to possession. The distinguishing feature of joint tenancy is the right of survivorship — upon the death of one joint tenant, the surviving tenants take the deceased's share automatically. A tenancy in common carries no right of survivorship; each tenant may freely transfer their fractional interest by deed or devise."
    }
  ],
  "Community Property": [
    {
      title: "Characterization of Property",
      source: "CA Bar Review",
      text: "Under California's community property system, property acquired during marriage by either spouse through labor or effort is presumed to be community property, equally owned by both spouses. Property owned before marriage or acquired during marriage by gift, devise, or bequest remains the separate property of the acquiring spouse. The transmutation doctrine allows spouses to change the character of property by express written agreement. Commingling of separate and community funds creates a presumption that the entire fund is community property, rebuttable by tracing."
    },
    {
      title: "Management and Division",
      source: "CA Bar Review",
      text: "Each spouse has equal management and control over community property during marriage. Either spouse may act alone in ordinary transactions but both must join in transactions affecting the family home, gifts of community property, or transactions that substantially impair the other spouse's interest. Upon dissolution of marriage, the court must divide community property equally absent a valid agreement or other recognized exception. Earnings and business interests acquired through the labor and skill of either spouse during marriage constitute community property."
    }
  ],
  "Wills and Trusts": [
    {
      title: "Testamentary Capacity",
      source: "CA Bar Review",
      text: "A testator must have testamentary capacity at the time of execution: they must be at least 18 years old and of sound mind, meaning they understand the nature of the testamentary act, the nature and extent of their property, the natural objects of their bounty, and how these elements relate to form a coherent plan of distribution. A diagnosis of dementia does not automatically preclude capacity if the testator had a lucid interval at execution. The capacity required for a will is less demanding than that required for other legal acts."
    },
    {
      title: "Express Trust Formation",
      source: "CA Bar Review",
      text: "A valid express trust requires a settlor with capacity, a present manifestation of intent to create a trust, a definite beneficiary or valid charitable purpose, identifiable trust property, and a trustee. A trustee owes fiduciary duties of loyalty and prudence to the beneficiaries. The duty of loyalty requires the trustee to administer the trust solely in the interest of the beneficiaries and to avoid conflicts of interest. Under the prudent investor standard, the trustee must manage trust assets as a prudent investor would, considering the purposes and circumstances of the trust."
    }
  ],
  "Professional Responsibility": [
    {
      title: "Duty of Confidentiality",
      source: "CA Bar Review",
      text: "An attorney owes a duty of confidentiality to clients regarding all information relating to the representation, regardless of the source or whether the client has requested secrecy. This duty is broader than the attorney-client privilege and persists after the representation ends. The attorney may reveal confidential information only with the client's informed consent, when impliedly authorized to carry out the representation, or when disclosure is required or permitted by law. California permits — but does not require — disclosure to prevent reasonably certain death or substantial bodily harm."
    },
    {
      title: "Conflicts of Interest",
      source: "CA Bar Review",
      text: "A lawyer must not represent a client if the representation involves a concurrent conflict of interest, which exists when representation of one client is directly adverse to another client, or when there is a significant risk that the representation will be materially limited by the lawyer's responsibilities to another client or the lawyer's own interests. Concurrent conflicts may be waived by informed written consent if the lawyer reasonably believes they can provide competent and diligent representation to each affected client and applicable law does not prohibit the waiver."
    }
  ],
  "Business Associations": [
    {
      title: "Agency Authority",
      source: "CA Bar Review",
      text: "Agency is a consensual fiduciary relationship in which the agent agrees to act on behalf of and subject to the control of the principal. An agent has actual authority to bind the principal when the principal expressly or impliedly communicates to the agent that the agent may act. Apparent authority arises when the principal's manifestations to a third party reasonably lead that party to believe the agent has authority to act. A principal is vicariously liable for torts committed by an agent acting within the scope of the agency relationship."
    },
    {
      title: "Piercing the Corporate Veil",
      source: "CA Bar Review",
      text: "The corporate form generally shields shareholders from liability for corporate obligations; creditors may look only to corporate assets. This limited liability may be set aside — the corporate veil pierced — when the corporate form is used to perpetrate fraud, when the corporation is inadequately capitalized, or when corporate formalities are not observed such that the corporation is the alter ego of its shareholders. In California, courts consider the unity of interest between shareholder and corporation and whether adherence to the corporate form would sanction fraud or promote injustice."
    }
  ],
  "Remedies": [
    {
      title: "Injunctive Relief",
      source: "CA Bar Review",
      text: "A plaintiff seeking a permanent injunction must demonstrate success on the merits, that they will suffer irreparable harm absent relief, that the balance of hardships tips in their favor, and that the public interest would not be disserved by the injunction. Injunctive relief is an equitable remedy available only when legal remedies are inadequate. Irreparable harm exists when the injury cannot be adequately compensated by money damages, typically because the harm is ongoing, impossible to calculate, or threatens unique property interests."
    },
    {
      title: "Restitution and Unjust Enrichment",
      source: "CA Bar Review",
      text: "Restitution is an equitable remedy designed to prevent unjust enrichment by requiring a party to disgorge benefits wrongfully obtained or retained at another's expense. Unlike compensatory damages, which focus on the plaintiff's loss, restitution focuses on the defendant's gain. A plaintiff may elect restitution in lieu of expectation damages when the defendant's gain exceeds the plaintiff's loss. In quasi-contract, courts imply a duty to pay for benefits conferred under circumstances where it would be unjust to allow retention without compensation."
    }
  ],
  "Federal Powers": [
    {
      title: "Commerce Clause",
      source: "CA Bar Review",
      text: "Congress has broad authority under the Commerce Clause to regulate channels of interstate commerce, instrumentalities of interstate commerce, and activities that substantially affect interstate commerce. The substantial effects doctrine permits regulation of purely local activities if they, when aggregated with similar activities nationwide, have a substantial effect on interstate commerce. Lopez and Morrison require courts to distinguish economic from non-economic activity, with Congress having less authority to regulate non-economic local conduct even if it incidentally affects commerce."
    },
    {
      title: "Supremacy and Preemption",
      source: "CA Bar Review",
      text: "The Supremacy Clause provides that federal law is the supreme law of the land, preempting inconsistent state law. Express preemption occurs when Congress explicitly states its intent to occupy a field. Implied preemption includes field preemption — where the scheme of federal regulation is so pervasive that Congress intended to leave no room for state regulation — and conflict preemption, which arises when compliance with both federal and state law is impossible, or when state law stands as an obstacle to the accomplishment of federal objectives."
    }
  ]
};

const ALL_PASSAGES = [];
for (const [subject, passages] of Object.entries(PASSAGES)) {
  for (const p of passages) {
    ALL_PASSAGES.push({ ...p, subject });
  }
}

function getRandomPassage(excludeText = null) {
  const pool = excludeText ? ALL_PASSAGES.filter(p => p.text !== excludeText) : ALL_PASSAGES;
  return pool[Math.floor(Math.random() * pool.length)];
}
