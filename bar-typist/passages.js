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
    },
    {
      title: "Standing",
      source: "Feb 2023 Essay 2",
      text: "In order for a party to bring suit, they must have standing. Standing requires injury — some harm suffered due to the actions of another party — causation, meaning the defendant caused the injury, and redressability, meaning there is a way for the court to remedy the harm. A party also lacks standing on ripeness grounds if there is no injury yet or the injury is merely anticipated and not yet concrete."
    },
    {
      title: "Equal Protection and Facial Classification",
      source: "Feb 2023 Essay 2",
      text: "Equal protection is raised when a government act impedes on the rights of people in a way determined by facial classification. Facial classification exists when there is a clear distinction in who benefits from the legislation and who is disadvantaged. Groups bringing equal protection arguments must be an identifiable group that is fundamentally protected. If a group is being discriminated against, there must be a history of discrimination that the government is attempting to remedy."
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
    },
    {
      title: "Conspiracy",
      source: "CA Essay Q1, Feb 2022",
      text: "Conspiracy is an agreement between two or more people to commit a crime together with the intent to complete the crime planned. Conspiracy is usually complete once the parties agree and take a step in furtherance of this plan; mere preparation is sufficient. Once conspiracy is completed, co-conspirators are liable for the crime intended and any other foreseeable crimes committed by each other during the commission of the conspired act, unless they effectively withdraw."
    },
    {
      title: "Conspiracy Withdrawal",
      source: "CA Essay Q1, Feb 2022",
      text: "Withdrawal from conspiracy itself is not possible once it is completed. However, withdrawal from subsequent crimes is possible by timely notice to all co-conspirators, letting them reconsider their choices to continue or withdraw, and immediately stopping any participation in the act. Conspiracy is an inchoate crime that, unlike attempt and solicitation, can be charged separately and does not merge into the crime conspired for. It is a specific intent crime requiring each conspirator to intentionally enter into the agreement."
    },
    {
      title: "Felony Murder",
      source: "CA Essay Q1, Feb 2022",
      text: "A felony murder is a murder resulting from and during the commission of a felony crime — burglary, arson, robbery, rape, and kidnapping. It encompasses the period from the initiation of the crime until the felon reaches safety and has walked away from the scene. A felon is held responsible for any death resulting during the felony, satisfying the prima facie case of murder: the killing of another with intent or reckless disregard for human life."
    },
    {
      title: "Larceny, Burglary, and Arson",
      source: "July 2023 CA Essay Q4",
      text: "Under common law, larceny is the trespassory taking and carrying away the property of another with the intent to permanently deprive the owner of the property. Burglary at common law is the breaking and entering of a dwelling at night with the intention to commit a felony within; modernly, statutes have eliminated the nighttime and dwelling requirements. Arson at common law is the burning of a dwelling of another; modernly, statutes have expanded this to cover any structure or building."
    },
    {
      title: "Degrees of Homicide",
      source: "July 2023 CA Essay Q4",
      text: "Under common law, murder is the unlawful killing of a human being done with malice aforethought. First degree murder requires premeditation and deliberation. Second degree murder encompasses intent to kill, intent to cause grave bodily harm, reckless disregard for human life, and felony murder. Voluntary manslaughter is a killing done with adequate provocation or under imperfect self-defense. The defense of necessity is never available as a defense to any homicide charge."
    },
    {
      title: "Attempt",
      source: "CA Essay Q1, Feb 2022",
      text: "Attempt is a specific intent crime, and it merges into the completed crime if the crime is carried out. Even though the attempted offense might be only a general intent or malice crime, attempt itself always requires specific intent — unless that specific intent is found, the person cannot be charged for attempt. Attempt also requires a substantial step toward the targeted offense."
    }
  ],
  "Criminal Procedure": [
    {
      title: "Fourth Amendment Search and Seizure",
      source: "CA Bar Review",
      text: "The Fourth Amendment prohibits unreasonable searches and seizures and requires that warrants be supported by probable cause, particularly describe the place to be searched, and describe the persons or things to be seized. A search occurs when the government intrudes upon a person's reasonable expectation of privacy. Probable cause exists when the facts and circumstances known to the officer would lead a reasonable person to believe that evidence of a crime will be found in the place to be searched."
    },
    {
      title: "Warrant Exceptions",
      source: "CA Essay Q1, Feb 2022",
      text: "Under the Fourth Amendment, individuals are protected from unreasonable searches and seizures. The general rule is that a police officer must have probable cause to obtain a search or arrest warrant before proceeding. However, there are exceptions to the warrant requirement: stop and frisk, plain view, the automobile exception, consent, exigent circumstances and hot pursuit, and search incident to a lawful arrest."
    },
    {
      title: "Voluntariness of Statements",
      source: "Feb Bar Exam 75, Feb 2023",
      text: "A statement is involuntary if it is not a product of a rational intellect and free will. In cases of claimed psychological coercion, the question is whether the influences brought to bear upon the accused were such as to overbear the accused's will to resist and bring about confessions not freely determined. Absent some indication of coercive police activity, an admission or confession cannot be deemed involuntary within the Due Process Clause of the Fourteenth Amendment."
    },
    {
      title: "Surrounding Circumstances Test",
      source: "Feb Bar Exam 75, Feb 2023",
      text: "In determining whether an accused's will is overborne, an examination must be made of all the surrounding circumstances including: the characteristics of the accused, such as the defendant's maturity, education, physical condition, and mental health and acuity; and the details of the interrogation that indicate coercion, including the length of the interrogation, the location, and whether the questioning was continuous."
    },
    {
      title: "Exclusionary Rule and Miranda Custody and Interrogation",
      source: "July 2023 CA Essay Q4",
      text: "The Exclusionary Rule prohibits the introduction of evidence obtained in violation of one's Fourth, Fifth, or Sixth Amendment rights. Miranda rights are triggered only when a suspect is in custody and subject to interrogation. Custody means the person is not free to leave. Interrogation occurs when a question from a state actor is likely to elicit an incriminating response. A voluntary statement is not subject to Miranda and does not violate the Fifth Amendment privilege against self-incrimination."
    },
    {
      title: "Sixth Amendment Right to Counsel Attachment",
      source: "Feb 2024 Q4 Report",
      text: "The Sixth Amendment guarantees a defendant the right to counsel once formally charged with a crime. While a defendant does not have the right to counsel during a pre-arraignment lineup or at an arraignment hearing, the right officially attaches once the defendant has been formally charged. Once formal charges are brought, any subsequent elicitation of incriminating statements from the defendant without counsel present raises a constitutional question under the Sixth Amendment."
    },
    {
      title: "Miranda and Custodial Interrogation",
      source: "CA Bar Review",
      text: "The Fifth Amendment privilege against self-incrimination protects individuals from being compelled to testify against themselves in a criminal proceeding. Miranda v. Arizona requires law enforcement to advise suspects of their rights to silence and counsel before custodial interrogation. A suspect is in custody when, from the totality of the circumstances, a reasonable person would not feel free to terminate the encounter. A valid waiver of Miranda rights must be made voluntarily, knowingly, and intelligently."
    }
  ],
  "Evidence": [
    {
      title: "California Relevance and Evidence Code 352",
      source: "Feb 2024 Q4 Report",
      text: "Under California law, evidence is relevant if its admission tends to prove or disprove a material fact of the situation at hand. The court may exercise its discretion to exclude relevant evidence if its probative value is substantially outweighed by the risk of unfair prejudice to the party against whom it is offered. Under Evidence Code 352, relevant evidence can also be excluded if it is needlessly cumulative, confusing to the jury, or designed to shock or upset the trier of fact."
    },
    {
      title: "Hearsay Exceptions and Prior Inconsistent Statements",
      source: "Feb 2024 Q4 Report",
      text: "Under California law, hearsay is an out-of-court statement offered by a declarant for the truth of the matter asserted. Statements deemed hearsay are inadmissible unless an exception applies, such as statements made for medical diagnosis, spontaneous statements, statements made under the belief of imminent death, or statements by a party opponent. A prior inconsistent statement — where a witness's prior assertion contradicts their in-court testimony — may be used to attack credibility on cross-examination, provided the witness is available to explain or deny the inconsistency."
    },
    {
      title: "Party Opponent Admissions and Attorney-Client Privilege",
      source: "Q4 2022 Report",
      text: "Statements by party opponents — statements made by one of the parties to the litigation — are classified as non-hearsay and are admissible. Unlike statements against interest, the declarant need not be unavailable. Attorney-client privilege applies to all communications made with clients in anticipation of litigation and survives the end of the attorney-client relationship. Work product prepared by an attorney in preparation for litigation is similarly privileged and may not be admitted against the client."
    },
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
    },
    {
      title: "Community Property Defined",
      source: "CA Essay 5, July 2021",
      text: "California is a community property state. Property acquired during marriage is Community Property. Property acquired before or after marriage via bequest, gift, or devise is considered Separate Property. Property can be classified by source, characterization of property, or special presumptions."
    },
    {
      title: "Transmutation",
      source: "CA Essay 5, July 2021",
      text: "Transmutation is an agreement between two parties to change the characterization of the property. After 1985, it must be in signed writing by the adversely affected spouse, unless it is for an item of insubstantial value."
    },
    {
      title: "Community Property Presumption",
      source: "Comm Prop Essay, Feb 2022",
      text: "California is a community property state, which means that all property acquired prior to marriage is considered separate property, and all property acquired during the marriage is considered to be community property unless it was from a bequest, descent, the rents and profits of separate property, or when separate property is used to purchase property directly during the marriage. Community property is divided in kind at the time of judgment unless an exception applies."
    },
    {
      title: "Direct Tracing and Exhaustion Method",
      source: "Comm Prop Essay, Feb 2022",
      text: "A direct tracing can be accomplished by showing that separate property flowed directly from one account into another that was not commingled with community property funds. When a commingled account exists, the separate property claim can instead be proven through the exhaustion method by showing that the community funds therein were insufficient to cover the community expenses at the time those expenses arose."
    },
    {
      title: "Spousal Fiduciary Duty",
      source: "Comm Prop Essay, Feb 2022",
      text: "The Family Code requires that married spouses have a fiduciary duty to one another. This duty requires good faith and fair dealing, and to act as a reasonable person in making investment decisions. One spouse's poor investment alone is not enough to breach this duty; there must be reckless negligence on the part of the breaching spouse."
    },
    {
      title: "Separation and Post-Separation Debt",
      source: "Comm Prop Essay, Feb 2022",
      text: "The court defines separation as at least one party's intent to abandon the marriage without hope of reconciliation. When a debt is incurred by a party post-separation, it may be considered community in nature only if it was used for the benefit of the community or to improve community property."
    },
    {
      title: "Equal Management and Community Debts",
      source: "Feb 2024 CA Essay Q1",
      text: "Married spouses have equal management power over community finances. Either spouse may purchase property or apply for a loan without the other spouse's knowledge, and debts incurred during the marriage are presumed to be community property. However, when one spouse commits a criminal act such as forgery in obtaining a loan, the innocent spouse is not liable for debts arising from that criminal activity."
    },
    {
      title: "Spousal Fiduciary Duty and Remedy",
      source: "Feb 2024 CA Essay Q1",
      text: "Spouses owe each other the highest fiduciary duty, requiring honesty, good faith, and full disclosure of their financial situation. When one spouse breaches this duty, the court may assign the entirety of the undisclosed asset or liability to the breaching spouse. Marital community property ends at separation, which occurs when at least one spouse intends to end the marriage and does not return, even without a formal divorce filing."
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
    },
    {
      title: "Attested Will Requirements",
      source: "CA Essay 5, July 2021",
      text: "A valid will requires a signed writing signed by the testator with present intent and capacity in the joint presence of two disinterested witnesses who sign during the testator's lifetime."
    },
    {
      title: "Disinterested Witnesses",
      source: "CA Essay 5, July 2021",
      text: "The two disinterested witnesses must be in the presence of the testator when he signs or when the testator acknowledges his signature to them. The witnesses must understand they are signing a will, but do not need to know its content. Additionally, the witnesses must sign during the testator's lifetime, but both do not need to sign in his presence or each other."
    },
    {
      title: "Harmless Error",
      source: "CA Essay 5, July 2021",
      text: "Under California law, if the witness requirement is not met, the will may still be admitted to probate if there is clear and convincing evidence that the testator intended it to be his will."
    },
    {
      title: "Holographic Will",
      source: "CA Essay 5, July 2021",
      text: "A holographic will requires signature and material provisions in the testator's own handwriting. There is no witness requirement, but a date is required."
    },
    {
      title: "Omitted Child",
      source: "CA Essay 5, July 2021",
      text: "An omitted child can receive an intestate share if born or adopted after the will, unless intentionally omitted, provided for outside the will, or the other parent receives a substantial part of the estate."
    },
    {
      title: "Omitted Spouse",
      source: "CA Essay 5, July 2021",
      text: "An omitted spouse can receive an intestate share if married after the will was executed, unless intentionally omitted, provided for outside the will, or the spouse has signed a valid waiver."
    }
  ],
  "Professional Responsibility": [
    {
      title: "CRPC vs ABA on Confidentiality",
      source: "Q4 2022 Report",
      text: "Under both the CRPC and ABA rules, an attorney has a duty of confidentiality. In California, a lawyer may reveal client confidences only to prevent a criminal act likely to result in substantial bodily harm or death. The ABA recognizes the same exception but also permits disclosure to prevent damage to the financial interests of another when the lawyer's services are being used to further that harm, and permits disclosure when the client consents."
    },
    {
      title: "Mandatory and Permissive Withdrawal",
      source: "Q4 2022 Report",
      text: "In California, withdrawal is mandatory where the attorney has probable cause to believe the client is using their services to harass or maliciously injure another, where representation would violate the CRPC, where a mental or physical impairment renders representation unreasonably difficult, or where the client has discharged the attorney. The ABA aligns on the latter three grounds and additionally permits permissive withdrawal when the attorney finds the client's actions to be morally reprehensible."
    },
    {
      title: "Duty of Confidentiality",
      source: "CA Bar Review",
      text: "An attorney owes a duty of confidentiality to clients regarding all information relating to the representation, regardless of the source or whether the client has requested secrecy. This duty is broader than the attorney-client privilege and persists after the representation ends. The attorney may reveal confidential information only with the client's informed consent, when impliedly authorized to carry out the representation, or when disclosure is required or permitted by law. California permits — but does not require — disclosure to prevent reasonably certain death or substantial bodily harm."
    },
    {
      title: "Conflicts of Interest",
      source: "CA Bar Review",
      text: "A lawyer must not represent a client if the representation involves a concurrent conflict of interest, which exists when representation of one client is directly adverse to another client, or when there is a significant risk that the representation will be materially limited by the lawyer's responsibilities to another client or the lawyer's own interests. Concurrent conflicts may be waived by informed written consent if the lawyer reasonably believes they can provide competent and diligent representation to each affected client and applicable law does not prohibit the waiver."
    },
    {
      title: "Criminal Contingency Fees and Client Gifts",
      source: "Feb 2024 Q3 Report",
      text: "It is an ethical violation under both California and ABA rules for an attorney to base compensation on a contingency fee in a criminal case. A lawyer can never be paid on a contingency for services rendered in criminal matters. Additionally, under both California and ABA Rules, lawyers are not allowed to accept large gifts in connection with their services, although small gifts as a token of appreciation for representation or referrals tend to be acceptable."
    },
    {
      title: "Witness and Expert Witness Compensation",
      source: "Feb 2024 Q3 Report",
      text: "Under California and ABA Rules, lay witnesses may be reasonably compensated for time spent testifying, typically by reimbursement for travel and lodging rather than a direct fee. Expert witnesses, by contrast, may be reasonably compensated for their time and appearance at trial. There are no bright-line rules about how much an expert should be compensated, as it varies by field and level of expertise."
    },
    {
      title: "Supervising Subordinates and Duty of Candor",
      source: "Q2 2021 Report July",
      text: "Lawyers are responsible to properly supervise subordinates, whether they be junior attorneys or office staff, and are ultimately responsible for the subordinate's actions. A lawyer also has a duty of honesty and candor to opposing counsel and to the court. When a conflict or error arises — including one caused by a supervised employee — the attorney must disclose it to the affected parties rather than concealing it out of personal or professional loyalty."
    },
    {
      title: "Conflict of Interest and Withdrawal",
      source: "Q2 2021 Report July",
      text: "When an attorney believes or knows that she has a conflict related to the case, she must disclose it to her client and resolve the issue by either withdrawing or obtaining written consent. California requires written consent by the client to continue representation despite a conflict. A lawyer may attempt to withdraw if it would not materially impact the client's case; if withdrawal would be materially harmful, a court must resolve the situation."
    },
    {
      title: "Duty of Competence, Communication, and Loyalty",
      source: "Q2 2021 Report July",
      text: "An attorney has a duty to represent her client with the knowledge and skill required for the matter. A lawyer also has a duty to communicate with her client regarding decisions, settlements, and information material to the case. Every lawyer owes a duty of loyalty to her client and must represent the case with zeal. A lawyer has a corresponding duty to keep client information and case evidence secure to prevent loss or damage."
    },
    {
      title: "Duty of Candor and Personal Opinion",
      source: "Feb 2024 Q3 Report",
      text: "A lawyer may ask the court to find their client not guilty, but may not express a personal opinion about the merits of the case or the credibility of witnesses. Conditioning an expert witness's compensation on changing their opinion is a clear ethical violation — it directs the witness to commit perjury and breaches the lawyer's duty of candor to the tribunal."
    }
  ],
  "Business Associations": [
    {
      title: "General Partnership Formation and Joint Liability",
      source: "July 2023 CA Essay Q1",
      text: "A general partnership is formed when two or more persons come together to form a business for profit. No formal filing with the state is required for a partnership to exist. In a partnership, all partners are jointly and severally liable for the torts and damages to third persons incurred by the partnership. A partner is personally liable for their own torts, but if the tort arises from partnership activity, the other partners share liability jointly and severally."
    },
    {
      title: "Respondeat Superior",
      source: "July 2023 CA Essay Q1",
      text: "Under the doctrine of respondeat superior, an employer is vicariously liable for torts committed by an employee acting within the scope of employment. The employer has authority and control over the employee, and when the employee causes harm during the work hour or in furtherance of the employer's business, the employer is responsible for the resulting damages. Whether an employee was acting within the scope of employment turns on the nature of the activity and the employer's policies."
    },
    {
      title: "Agency Authority and Partnership Liability for Agent Torts",
      source: "July 2023 CA Essay Q1",
      text: "A person may be an agent of a partnership when an agency is formed through apparent or implied authority. An implied agency exists when the partnership evidently implies that the person is acting on its behalf. Apparent authority arises when the agent works on behalf of the partnership, the partnership is aware of the relationship, and third parties reasonably believe the agent has authority. When an agent commits a tort within the scope of the agency, the partnership — not the agent — bears liability."
    },
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
    },
    {
      title: "Spending Power and Conditional Funds",
      source: "Feb 2023 Essay 2",
      text: "Congress has the power to determine where it allocates its funds. It may direct spending properly and reasonably when funds are used for the general welfare of the people. Congress may also make funding conditional, as long as the condition is reasonably connected to and has a proper nexus with the purpose of the fund allocation. A condition that is purely voluntary to the states is generally not unconstitutional on its face."
    },
    {
      title: "Commandeering",
      source: "Feb 2023 Essay 2",
      text: "In order for Congress to pass legislation, it must act through one of its enumerated powers, including the Commerce Clause and the Taxing and Spending powers. Commandeering occurs when Congress passes legislation that forces states to adopt a law, creates an unreasonable funding condition, or compels states to enact similar legislation in order to receive federal funds. Even a facially voluntary condition may be unconstitutional if it is coercive in effect."
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
