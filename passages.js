const PASSAGES = {
  "Business Associations": [
    {
      title: "Authority of Agent to Bind Principal",
      source: "MEE Rule Statement (24.1%)",
      text: "An agent has the authority to bind a principal to a contract when the agent acts with actual or apparent authority. Actual authority can be express (created by the principal's explicit words to the agent) or implied (based on the agent's reasonable understanding of the principal's objectives)."
    },
    {
      title: "Apparent Authority",
      source: "MEE Rule Statement (24.1%)",
      text: "Apparent authority arises when a third party reasonably believes the agent has authority to act on behalf of the principal, and that belief is traceable to the principal's manifestations (outward expressions or signs)."
    },
    {
      title: "Contract Liability of the Partnership",
      source: "MEE Rule Statement (20.4%)",
      text: "A partnership is liable for contracts entered into on its behalf by a partner with authority to act for the partnership."
    },
    {
      title: "Dissolution of the Partnership",
      source: "MEE Rule Statement (18.5%)",
      text: "Dissolution of a partnership is the commencement of the winding-up (liquidating assets and settling debts) process. Events that can cause dissolution include the express will of a partner to withdraw, the expiration of the term of the partnership, or the agreement of the partners."
    },
    {
      title: "Business Judgment/Duty of Care",
      source: "MEE Rule Statement (18.5%)",
      text: "The business judgment rule protects a corporation's directors from liability for their decisions if they acted on an informed basis, in good faith, and in the honest belief that the action was in the best interests of the company. A director has a duty to act with the care that a person in a like position would reasonably believe appropriate under similar circumstances."
    },
    {
      title: "Shareholder Derivative Claims",
      source: "MEE Rule Statement (14.8%)",
      text: "A shareholder may bring a derivative claim (a lawsuit brought by a shareholder on behalf of the corporation) against a third party (often a director) for harm suffered by the corporation. The shareholder must have been a shareholder at the time of the wrongful act, must fairly and adequately represent the interests of the corporation, and must first make a written demand on the board of directors to take action, unless such a demand would be futile (pointless because the board is biased or complicit)."
    },
    {
      title: "General Partnership Formation",
      source: "MEE Rule Statement (14.8%)",
      text: "A general partnership is formed when two or more persons associate as co-owners to carry on a business for profit, regardless of their subjective intent. A sharing of profits from a business is prima facie (at first sight) evidence that a partnership exists."
    },
    {
      title: "Partner Duty of Loyalty",
      source: "MEE Rule Statement (13.0%)",
      text: "Partners in a general partnership owe a duty of loyalty to the partnership and the other partners. This duty requires a partner to account for any benefit derived from the partnership's business, to refrain from dealing with the partnership as an adverse party, and to refrain from competing with the partnership."
    },
    {
      title: "Conflict Interest Transactions",
      source: "MEE Rule Statement (13.0%)",
      text: "A conflict of interest transaction between a director and the corporation is a breach of the duty of loyalty unless the transaction is approved by a majority of disinterested directors after full disclosure, approved by a majority of disinterested shareholders after full disclosure, or is fair to the corporation at the time it was authorized."
    },
    {
      title: "Piercing the Corporate Veil",
      source: "MEE Rule Statement (11.1%)",
      text: "A court may pierce the corporate veil (disregard the corporation's separate legal identity) and hold shareholders personally liable for the corporation's obligations if the plaintiff can show that the corporation is an alter ego (a second self) or mere instrumentality (a tool) of the shareholder, that the shareholder is using the corporate form to perpetrate a fraud or injustice, and that an inequitable result will occur if the veil is not pierced."
    }
  ],
  "Civil Procedure": [
    {
      title: "Diversity Jurisdiction",
      source: "MEE Rule Statement (33.3%)",
      text: "A federal court has diversity jurisdiction over a civil action where the amount in controversy exceeds $75,000, exclusive of interest and costs, and there is complete diversity of citizenship (no plaintiff is a citizen of the same state as any defendant) between the plaintiffs and defendants."
    },
    {
      title: "Federal Question Jurisdiction",
      source: "MEE Rule Statement (20.4%)",
      text: "Federal courts have subject matter jurisdiction over cases 'arising under' the Constitution, laws, or treaties of the United States."
    },
    {
      title: "Citizenship for Diversity Purposes",
      source: "MEE Rule Statement (18.5%)",
      text: "For diversity jurisdiction purposes, an individual is a citizen of the state of their domicile (permanent home). A corporation is a citizen of every state in which it is incorporated and of the one state where it has its principal place of business."
    },
    {
      title: "Venue",
      source: "MEE Rule Statement (14.8%)",
      text: "Venue (the proper geographic district for a lawsuit) in a federal civil action is proper in a judicial district where any defendant resides, if all defendants reside in the same state; a judicial district in which a substantial part of the events or omissions giving rise to the claim occurred; or if neither of the first two apply, any judicial district in which any defendant is subject to the court's personal jurisdiction."
    },
    {
      title: "Personal Jurisdiction",
      source: "MEE Rule Statement (14.8%)",
      text: "A court may exercise personal jurisdiction over a defendant if the state's long-arm statute (a law giving courts jurisdiction over out-of-state defendants) authorizes it and the exercise of jurisdiction comports (agrees with) with the Due Process Clause of the Fourteenth Amendment. Due process requires that the defendant have sufficient minimum contacts with the forum state such that the maintenance of the suit does not offend traditional notions of fair play and substantial justice."
    },
    {
      title: "Supplemental Jurisdiction",
      source: "MEE Rule Statement (14.8%)",
      text: "A federal court with subject matter jurisdiction over a claim may exercise supplemental jurisdiction over other claims that are so related to the original claim that they form part of the same case or controversy."
    },
    {
      title: "Specific Jurisdiction",
      source: "MEE Rule Statement (13.0%)",
      text: "Specific personal jurisdiction exists when the cause of action arises out of or relates to the defendant's purposeful contacts with the forum state."
    },
    {
      title: "Motion for Summary Judgment",
      source: "MEE Rule Statement (9.3%)",
      text: "A court will grant a motion for summary judgment if the movant (the party making the motion) shows that there is no genuine dispute as to any material fact and the movant is entitled to judgment as a matter of law."
    },
    {
      title: "Change of Venue",
      source: "MEE Rule Statement (9.3%)",
      text: "For the convenience of the parties and witnesses and in the interest of justice, a district court may transfer any civil action to any other district where it might have been brought."
    },
    {
      title: "Removal",
      source: "MEE Rule Statement (7.4%)",
      text: "A defendant may remove a case from state court to the federal court for the district in which the state court action is pending if the federal court would have had original subject matter jurisdiction over the action."
    }
  ],
  "Conflict of Laws": [
    {
      title: "Collateral Estoppel",
      source: "MEE Rule Statement (9.3%)",
      text: "Collateral estoppel (a doctrine preventing an issue from being re-litigated) prevents a party from relitigating an issue that was actually litigated, determined by a valid and final judgment, and was essential to the prior judgment."
    },
    {
      title: "Erie Doctrine",
      source: "MEE Rule Statement (9.3%)",
      text: "In a diversity case, a federal court will apply its own procedural law, but must apply the substantive law of the state in which it sits. To determine if a law is substantive or procedural, the court will consider if the state law is outcome-determinative."
    },
    {
      title: "Choice of Law (COL) Approaches",
      source: "MEE Rule Statement (7.4%)",
      text: "The First Restatement on Conflict of Laws uses a vested rights approach, where the law of the place of the last event necessary to create the cause of action governs. The Second Restatement applies the law of the state with the most significant relationship to the issue. The governmental interest analysis approach applies the law of the forum state unless another state has a greater interest in the outcome."
    },
    {
      title: "Res Judicata",
      source: "MEE Rule Statement (5.6%)",
      text: "Res judicata (a doctrine preventing a claim from being re-litigated) bars a party from bringing a subsequent lawsuit on a claim that has been decided on the merits in a prior action between the same parties or their privies (persons with a mutual legal interest)."
    },
    {
      title: "Express COL Clauses in Contracts",
      source: "MEE Rule Statement (3.7%)",
      text: "Parties to a contract may choose the law to govern their contractual rights and duties, provided the choice is not contrary to a fundamental policy of a state which has a materially greater interest than the chosen state in the determination of the particular issue."
    },
    {
      title: "COL: Decedents' Estates",
      source: "MEE Rule Statement (3.7%)",
      text: "The law of the decedent's (the deceased person's) domicile at death governs the disposition of personal property, while the law of the situs (location) of the property governs the disposition of real property."
    },
    {
      title: "COL: Substance vs. Procedure",
      source: "MEE Rule Statement (3.7%)",
      text: "In choice of law, procedural matters are governed by the law of the forum (the court where the suit is brought), while substantive matters are governed by the law of the state that has the most significant relationship to the issue."
    },
    {
      title: "Full Faith and Credit",
      source: "MEE Rule Statement (3.7%)",
      text: "The Full Faith and Credit Clause of the U.S. Constitution requires that a state court give the same effect to a judgment of a sister state's court that the judgment would have in the rendering state, provided the rendering court had jurisdiction."
    },
    {
      title: "COL: Contracts",
      source: "MEE Rule Statement (1.9%)",
      text: "In the absence of an effective choice of law clause, contract disputes are typically governed by the law of the place of contracting or the state with the most significant relationship to the transaction and the parties."
    },
    {
      title: "COL: Torts",
      source: "MEE Rule Statement (1.9%)",
      text: "For tort cases, the traditional rule is to apply the law of the place of the injury. Modern approaches, like the Second Restatement, apply the law of the state with the most significant relationship to the occurrence and the parties."
    }
  ],
  "Constitutional Law": [
    {
      title: "State Action Requirement",
      source: "MEE Rule Statement (10.3%)",
      text: "The protections of the U.S. Constitution generally apply only to government action, not the actions of private individuals or entities, unless the private actor is performing a traditional public function or there is significant state involvement with the private actor's conduct."
    },
    {
      title: "State Sovereign Immunity",
      source: "MEE Rule Statement (6.9%)",
      text: "The Eleventh Amendment prohibits federal courts from hearing most private actions against state governments. This immunity does not extend to suits against state officials for injunctive relief or to suits where the state has consented to be sued."
    },
    {
      title: "Dormant Commerce Clause",
      source: "MEE Rule Statement (6.9%)",
      text: "In the absence of federal regulation, a state or local government may regulate interstate commercial activity, but may not discriminate against or unduly burden interstate commerce."
    },
    {
      title: "14th Amendment Equal Protection",
      source: "MEE Rule Statement (6.9%)",
      text: "The Equal Protection Clause of the Fourteenth Amendment prohibits states from denying any person within their jurisdiction the equal protection of the laws. Government classifications that treat similarly situated people differently are subject to different levels of scrutiny (standards of judicial review) depending on the classification and the rights involved."
    },
    {
      title: "1st Amendment Free Speech",
      source: "MEE Rule Statement (6.9%)",
      text: "The First Amendment protects freedom of speech, but this protection is not absolute. The government may regulate speech based on its content only if the regulation is necessary to achieve a compelling government interest. Content-neutral regulations of the time, place, and manner of speech are subject to intermediate scrutiny."
    },
    {
      title: "Time, Place, & Manner Restrictions",
      source: "MEE Rule Statement (6.9%)",
      text: "The government may impose reasonable restrictions on the time, place, and manner of speech in a public forum, provided the restrictions are content-neutral, narrowly tailored to serve a significant government interest, and leave open ample alternative channels for communication."
    },
    {
      title: "Unprotected Speech",
      source: "MEE Rule Statement (6.9%)",
      text: "Certain categories of speech receive no First Amendment protection, including speech that incites imminent lawless action, fighting words, defamation, and obscenity."
    },
    {
      title: "Exclusive State Powers",
      source: "MEE Rule Statement (6.9%)",
      text: "The Tenth Amendment reserves to the states powers not delegated to the federal government by the Constitution, nor prohibited by it to the states."
    },
    {
      title: "Commerce Power",
      source: "MEE Rule Statement (6.9%)",
      text: "Congress has the power to regulate the channels and instrumentalities of interstate commerce, persons and things in interstate commerce, and activities that have a substantial effect on interstate commerce."
    },
    {
      title: "Takings Clause (Eminent Domain)",
      source: "MEE Rule Statement (3.4%)",
      text: "The Fifth Amendment's Takings Clause, applicable to the states through the Fourteenth Amendment, prohibits the government from taking private property for public use without just compensation."
    }
  ],
  "Contracts": [
    {
      title: "Common Law vs. UCC",
      source: "MEE Rule Statement (41.4%)",
      text: "The Uniform Commercial Code (UCC) governs contracts for the sale of goods. The common law governs all other types of contracts, including those for services and real estate."
    },
    {
      title: "Requirements to Form a Contract",
      source: "MEE Rule Statement (27.6%)",
      text: "A valid contract requires an offer, acceptance, and consideration."
    },
    {
      title: "Expectation Damages",
      source: "MEE Rule Statement (17.2%)",
      text: "Expectation damages are the standard measure of damages for breach of contract and are intended to put the non-breaching party in the same position they would have been in had the contract been fully performed."
    },
    {
      title: "Terminating the Offer",
      source: "MEE Rule Statement (13.8%)",
      text: "An offer may be terminated by the offeror's revocation, the offeree's rejection or counteroffer, the lapse of time, or the death or incapacity of either party."
    },
    {
      title: "The Offer",
      source: "MEE Rule Statement (10.3%)",
      text: "An offer is a manifestation of a present intent to contract, communicated to an identified offeree, containing definite and certain terms."
    },
    {
      title: "Terms Required in the Offer",
      source: "MEE Rule Statement (10.3%)",
      text: "Under the common law, an offer must contain all essential terms, including the parties, subject matter, price, and quantity. Under the UCC, the only essential term is quantity."
    },
    {
      title: "Acceptance",
      source: "MEE Rule Statement (10.3%)",
      text: "Acceptance is a manifestation of assent to the terms of the offer in the manner prescribed or authorized by the offer."
    },
    {
      title: "Contract Modification",
      source: "MEE Rule Statement (10.3%)",
      text: "At common law, a modification of a contract requires new consideration. Under the UCC, an agreement modifying a contract for the sale of goods needs no consideration to be binding, but must be made in good faith."
    },
    {
      title: "Mirror Image Rule & UCC 2-207",
      source: "MEE Rule Statement (10.3%)",
      text: "Under the common law's mirror image rule, the acceptance must be a mirror image of the offer. UCC § 2-207 provides that for the sale of goods, an acceptance with additional or different terms is still an acceptance, and the new terms may become part of the contract depending on whether the parties are merchants."
    },
    {
      title: "Anticipatory Repudiation",
      source: "MEE Rule Statement (10.3%)",
      text: "Anticipatory repudiation occurs when a party to a contract, prior to the time set for performance, unequivocally indicates that he will not perform when the time comes. The non-repudiating party may sue for damages immediately, wait to sue, treat the contract as discharged, or urge the other party to perform."
    }
  ],
  "Criminal Law & Procedure": [
    {
      title: "Mental State Requirements",
      source: "MEE Rule Statement (17.2%)",
      text: "For a conviction, the prosecution must prove that the defendant had the requisite mental state, or mens rea (guilty mind), for the crime. The common law mental states are specific intent, general intent, and malice. The Model Penal Code proposes four mental states: purposely, knowingly, recklessly, and negligently."
    },
    {
      title: "Miranda Analysis",
      source: "MEE Rule Statement (17.2%)",
      text: "Law enforcement officers must provide Miranda warnings to a suspect before engaging in a custodial interrogation (questioning after being taken into custody). A suspect is in custody if a reasonable person would not feel free to leave. An interrogation is any conduct by the police that they should know is reasonably likely to elicit an incriminating response."
    },
    {
      title: "4th Amendment Searches",
      source: "MEE Rule Statement (13.8%)",
      text: "A search for Fourth Amendment purposes occurs when the government intrudes upon a person's reasonable expectation of privacy or physically intrudes upon a constitutionally protected area. A search is generally unreasonable if it is conducted without a warrant."
    },
    {
      title: "Larceny/Embezzlement",
      source: "MEE Rule Statement (10.3%)",
      text: "Larceny is the trespassory (wrongful) taking and carrying away of the personal property of another with the intent to permanently deprive the owner thereof. Embezzlement is the fraudulent conversion of the property of another by one who is in lawful possession of the property."
    },
    {
      title: "Common Law Murder",
      source: "MEE Rule Statement (6.9%)",
      text: "Common law murder is the unlawful killing of a human being with malice aforethought (the intent to kill or cause serious harm). Malice can be established by showing an intent to kill, an intent to inflict great bodily injury, a reckless indifference to an unjustifiably high risk to human life (a 'depraved heart'), or an intent to commit a felony (felony murder)."
    },
    {
      title: "Voluntary Manslaughter",
      source: "MEE Rule Statement (6.9%)",
      text: "Voluntary manslaughter is an intentional killing committed in the heat of passion upon adequate provocation."
    },
    {
      title: "Involuntary Manslaughter",
      source: "MEE Rule Statement (6.9%)",
      text: "Involuntary manslaughter is an unintentional killing committed with criminal negligence or during the commission of an unlawful act that is not a felony."
    },
    {
      title: "1st & 2nd Degree Murder",
      source: "MEE Rule Statement (6.9%)",
      text: "First-degree murder is typically defined as a deliberate and premeditated killing or a killing that occurs during the commission of an inherently dangerous felony. Second-degree murder is a killing with malice aforethought that does not qualify as first-degree murder."
    },
    {
      title: "Felony Murder Rule",
      source: "MEE Rule Statement (6.9%)",
      text: "The felony murder rule provides that a person is guilty of murder if a death results from the commission of an inherently dangerous felony."
    },
    {
      title: "Causation in Homicide",
      source: "MEE Rule Statement (6.9%)",
      text: "The defendant's act must be both the actual cause (but-for cause) and the proximate cause of the victim's death. Proximate cause is a legal determination that the defendant should be held criminally responsible for the death."
    }
  ],
  "Evidence": [
    {
      title: "Hearsay",
      source: "MEE Rule Statement (34.5%)",
      text: "Hearsay is an out-of-court statement offered in evidence to prove the truth of the matter asserted. It is generally inadmissible unless it falls under an exception or exclusion."
    },
    {
      title: "Non-Hearsay",
      source: "MEE Rule Statement (34.5%)",
      text: "Statements that are not offered to prove the truth of the matter asserted are not hearsay. This includes statements offered to show their effect on the listener, legally operative facts, and circumstantial evidence of the declarant's (the person who made the statement) state of mind."
    },
    {
      title: "Logical Relevance",
      source: "MEE Rule Statement (27.6%)",
      text: "Evidence is relevant if it has any tendency to make a fact of consequence to the determination of the action more or less probable than it would be without the evidence."
    },
    {
      title: "Character Evidence",
      source: "MEE Rule Statement (24.1%)",
      text: "Evidence of a person's character or character trait is generally inadmissible to prove that on a particular occasion the person acted in accordance with the character or trait. However, there are exceptions in criminal cases and when character is an essential element of a charge, claim, or defense."
    },
    {
      title: "M.I.M.I.C.",
      source: "MEE Rule Statement (24.1%)",
      text: "Evidence of a defendant's prior bad acts or crimes is not admissible to prove the defendant's character in order to show action in conformity therewith. However, such evidence may be admissible for other purposes, such as to prove Motive, Intent, absence of Mistake, Identity, or Common plan or scheme."
    },
    {
      title: "Unavailability Requirement",
      source: "MEE Rule Statement (10.3%)",
      text: "Certain hearsay exceptions require the declarant to be unavailable to testify, such as former testimony, statements against interest, and dying declarations. A declarant is unavailable if they are exempt from testifying due to privilege, refuse to testify, testify to not remembering the subject matter, cannot be present due to death or illness, or are absent from the hearing and the proponent has been unable to procure their attendance."
    },
    {
      title: "Present Sense Impression",
      source: "MEE Rule Statement (10.3%)",
      text: "A statement describing or explaining an event or condition made while the declarant was perceiving the event or condition, or immediately thereafter, is an exception to the hearsay rule."
    },
    {
      title: "Excited Utterance",
      source: "MEE Rule Statement (10.3%)",
      text: "A statement relating to a startling event or condition, made while the declarant was under the stress of excitement that it caused, is an exception to the hearsay rule."
    },
    {
      title: "Medical Diagnosis or Treatment",
      source: "MEE Rule Statement (10.3%)",
      text: "A statement made for—and reasonably pertinent to—medical diagnosis or treatment and describing medical history, or past or present symptoms, pain, or sensations, or the inception or general character of the cause or external source thereof, is an exception to the hearsay rule."
    },
    {
      title: "Impeachment",
      source: "MEE Rule Statement (6.9%)",
      text: "A witness's credibility may be attacked, or impeached (discredited), by various means, including showing bias, prior inconsistent statements, bad character for truthfulness, or sensory defects."
    }
  ],
  "Family Law": [
    {
      title: "Property Division at Divorce",
      source: "MEE Rule Statement (22.2%)",
      text: "Most states follow the principle of equitable distribution (a fair, but not necessarily equal, division of marital property). Marital property is generally defined as all property acquired by either spouse during the marriage. Separate property, such as property owned before the marriage or acquired by gift or inheritance, is not subject to division."
    },
    {
      title: "Child Custody: Best Interests",
      source: "MEE Rule Statement (16.7%)",
      text: "In making a determination of child custody, the court's primary consideration is the best interests of the child. Factors considered include the wishes of the parents, the wishes of the child (if of sufficient age and maturity), the interaction of the child with parents and siblings, the child's adjustment to home, school, and community, and the mental and physical health of all individuals involved."
    },
    {
      title: "Premarital Contracts",
      source: "MEE Rule Statement (13.0%)",
      text: "A premarital (or antenuptial) agreement is a contract entered into by prospective spouses in contemplation of marriage. It is enforceable if it is in writing, signed by both parties, and entered into voluntarily after full and fair disclosure of each party's assets."
    },
    {
      title: "Marital Action Jurisdiction",
      source: "MEE Rule Statement (13.0%)",
      text: "For a court to have jurisdiction to grant a divorce, at least one of the spouses must be domiciled in the state. For a court to have jurisdiction to divide marital property or order spousal support, it must have personal jurisdiction over the defendant spouse."
    },
    {
      title: "Common Law Marriage",
      source: "MEE Rule Statement (9.3%)",
      text: "A common law marriage is established when a couple holds themselves out to the public as married, cohabitates, and has the present intent to be married."
    },
    {
      title: "Modification of Child Support",
      source: "MEE Rule Statement (9.3%)",
      text: "A child support order may be modified upon a showing of a substantial and continuing change in circumstances that makes the original order unreasonable."
    },
    {
      title: "Modification of Child Custody",
      source: "MEE Rule Statement (9.3%)",
      text: "A child custody order may be modified only upon a showing of a substantial and material change in circumstances, and the modification must be in the best interests of the child."
    },
    {
      title: "Modification of Spousal Support",
      source: "MEE Rule Statement (5.6%)",
      text: "A spousal support order may be modified upon a showing of a substantial and material change in circumstances. Some states do not permit modification of spousal support if the original decree does not so provide."
    },
    {
      title: "Child Support Calculation",
      source: "MEE Rule Statement (5.6%)",
      text: "States have adopted guidelines for calculating child support, which are typically based on the income of the parents and the number of children. The court may deviate from the guidelines if application would be unjust or inappropriate."
    },
    {
      title: "Establishing Paternity/Legitimation",
      source: "MEE Rule Statement (5.6%)",
      text: "A child born to a married woman is presumed to be the child of her husband. Paternity of a child born to an unmarried woman may be established by acknowledgment of the father or by a court proceeding."
    }
  ],
  "Real Property": [
    {
      title: "Deed Types & Merger",
      source: "MEE Rule Statement (10.3%)",
      text: "The three main types of deeds are the general warranty deed, the special warranty deed, and the quitclaim deed. Under the doctrine of merger (absorption of one thing into another), the contract for the sale of land merges into the deed at closing, and the buyer's rights are thereafter governed by the deed, not the contract."
    },
    {
      title: "Recording Statutes & Notice",
      source: "MEE Rule Statement (10.3%)",
      text: "Recording statutes determine the priority of competing interests in real property. A notice statute protects a subsequent bona fide purchaser for value who takes without notice of a prior interest. A race-notice statute protects a subsequent bona fide purchaser for value who takes without notice and records first. A race statute protects a subsequent purchaser who records first, regardless of notice."
    },
    {
      title: "Leasehold Interest",
      source: "MEE Rule Statement (6.9%)",
      text: "A leasehold is an estate in land under which the tenant has a present possessory interest in the leased premises and the landlord has a future interest (a reversion). The main types of leaseholds are the tenancy for years, the periodic tenancy, the tenancy at will, and the tenancy at sufferance."
    },
    {
      title: "Assignments",
      source: "MEE Rule Statement (6.9%)",
      text: "An assignment is the transfer by a tenant of their entire remaining interest in the lease. The assignee is in privity of estate (a legal relationship based on a common interest in the same property) with the landlord and is liable for the covenants in the original lease that run with the land."
    },
    {
      title: "Abandonment",
      source: "MEE Rule Statement (6.9%)",
      text: "If a tenant abandons the leased premises, the landlord may accept the surrender and terminate the lease, or re-let the premises on the tenant's behalf and hold the tenant liable for any deficiency."
    },
    {
      title: "Duty to Mitigate",
      source: "MEE Rule Statement (6.9%)",
      text: "In a majority of states, a landlord has a duty to mitigate damages by making reasonable efforts to re-let the premises if a tenant abandons."
    },
    {
      title: "Termination of an Easement",
      source: "MEE Rule Statement (6.9%)",
      text: "An easement may be terminated by estoppel, necessity, destruction of the servient tenement (the burdened land), condemnation (government taking), release, abandonment, merger, or prescription (adverse use over time)."
    },
    {
      title: "Implied Warranty Fitness/Suitability",
      source: "MEE Rule Statement (6.9%)",
      text: "In most jurisdictions, a builder of a new home impliedly warrants that the home is fit for its intended purpose and constructed in a workmanlike manner."
    },
    {
      title: "Adverse Possession",
      source: "MEE Rule Statement (6.9%)",
      text: "A person can acquire title to real property by adverse possession if their possession is continuous, open and notorious, actual, and hostile for the statutory period."
    },
    {
      title: "Shelter Rule",
      source: "MEE Rule Statement (6.9%)",
      text: "A person who takes real property from a bona fide purchaser (one who buys in good faith) will prevail against any interest that the transferor-bona fide purchaser would have prevailed against. This is true even if the person taking the property had notice of the prior interest."
    }
  ],
  "Torts": [
    {
      title: "Negligence Elements",
      source: "MEE Rule Statement (41.4%)",
      text: "To establish a prima facie (on its face) case for negligence, a plaintiff must prove that the defendant owed a duty of care to the plaintiff, the defendant breached that duty, the breach was the actual and proximate cause of the plaintiff's injury, and the plaintiff suffered damages."
    },
    {
      title: "Respondeat Superior",
      source: "MEE Rule Statement (27.6%)",
      text: "Under the doctrine of respondeat superior (let the master answer), an employer is vicariously liable for the torts of an employee committed within the scope of employment."
    },
    {
      title: "The Reasonable Person Standard",
      source: "MEE Rule Statement (13.8%)",
      text: "In a negligence action, the defendant's conduct is measured against the standard of a reasonably prudent person under the same or similar circumstances."
    },
    {
      title: "Strict Liability",
      source: "MEE Rule Statement (13.8%)",
      text: "A defendant is strictly liable for injuries caused by an abnormally dangerous activity or by a wild animal. In a products liability case, a manufacturer, distributor, or seller of a defective product is strictly liable for harm caused by the defect."
    },
    {
      title: "Negligence Per Se",
      source: "MEE Rule Statement (13.8%)",
      text: "An unexcused violation of a statute that establishes a specific standard of care constitutes negligence per se (negligence in itself) if the plaintiff is within the class of persons intended to be protected by the statute and the harm is of the type the statute was intended to prevent."
    },
    {
      title: "Actual & Proximate Cause",
      source: "MEE Rule Statement (13.8%)",
      text: "Actual cause, or cause-in-fact, is established if the plaintiff's injury would not have occurred but for the defendant's negligent conduct. Proximate cause, or legal cause, requires that the plaintiff's injury was a foreseeable result of the defendant's negligent conduct."
    },
    {
      title: "Eggshell Plaintiff Rule",
      source: "MEE Rule Statement (10.3%)",
      text: "A defendant is liable for all harm that the plaintiff suffers as a result of the defendant's tortious conduct, even if the plaintiff suffers from a pre-existing condition that makes the harm greater than a normal person would have suffered."
    },
    {
      title: "Defective Products",
      source: "MEE Rule Statement (10.3%)",
      text: "A product may be defective due to a flaw in its manufacturing, a defective design, or an inadequate warning."
    },
    {
      title: "Comparative Fault",
      source: "MEE Rule Statement (10.3%)",
      text: "In a comparative fault jurisdiction, the plaintiff's recovery is reduced by the percentage of their own negligence. In a modified comparative fault jurisdiction, the plaintiff's recovery is barred if their negligence exceeds a certain threshold (usually 50%)."
    },
    {
      title: "Affirmative Duty to Act",
      source: "MEE Rule Statement (10.3%)",
      text: "Generally, there is no affirmative duty to act to help a person in peril. However, such a duty may arise from a special relationship between the parties, or when the defendant created the danger."
    }
  ],
  "Trusts & Estates": [
    {
      title: "Intestate Succession",
      source: "MEE Rule Statement (18.5%)",
      text: "When a person dies without a will, their property passes to their heirs according to the state's intestacy statute (laws for people who die without a will). The surviving spouse and descendants are typically the primary beneficiaries."
    },
    {
      title: "Incorporation by Reference",
      source: "MEE Rule Statement (16.7%)",
      text: "A writing that is not executed with the formalities of a will may be incorporated by reference into a will if the writing was in existence at the time the will was executed, the will manifests an intent to incorporate the document, and the will describes the document with sufficient certainty to permit its identification."
    },
    {
      title: "Duty of Care",
      source: "MEE Rule Statement (14.8%)",
      text: "The trustee of a trust owes a duty to the beneficiaries to administer the trust with the care, skill, and caution of a reasonably prudent person."
    },
    {
      title: "Devises to Classes",
      source: "MEE Rule Statement (14.8%)",
      text: "A class gift is a gift to a group of persons, uncertain in number at the time of the gift, to be ascertained at a future time, who are all to take in equal or in some other definite proportions, the share of each being dependent for its amount upon the ultimate number of persons."
    },
    {
      title: "Creation of Express Trusts",
      source: "MEE Rule Statement (13.0%)",
      text: "An express trust is created by the settlor's (the person creating the trust) intent to create a trust, a trustee, a definite beneficiary, and trust property. The settlor must have capacity to create a trust."
    },
    {
      title: "Judicial Modification of Trusts",
      source: "MEE Rule Statement (13.0%)",
      text: "A court may modify or terminate a trust if, because of circumstances not anticipated by the settlor, modification or termination will further the purposes of the trust."
    },
    {
      title: "Lapsed Legacies",
      source: "MEE Rule Statement (13.0%)",
      text: "Under the common law, if a beneficiary predeceases the testator (the will-maker), the gift to the beneficiary lapses (fails) and passes to the residuary estate. Most states have anti-lapse statutes that save the gift for the descendants of the predeceased beneficiary if the beneficiary was a relative of the testator."
    },
    {
      title: "Revocation of Will by Physical Act",
      source: "MEE Rule Statement (13.0%)",
      text: "A will may be revoked by a physical act, such as burning, tearing, canceling, or obliterating, done by the testator with the intent to revoke the will."
    },
    {
      title: "Will Execution Requirements",
      source: "MEE Rule Statement (11.1%)",
      text: "A will must be in writing, signed by the testator, and attested to by at least two credible witnesses in the testator's presence."
    },
    {
      title: "Rule Against Perpetuities",
      source: "MEE Rule Statement (11.1%)",
      text: "The Rule Against Perpetuities (a complex rule preventing property interests from being tied up for too long) provides that no interest is good unless it must vest, if at all, not later than 21 years after some life in being at the creation of the interest. Many states have modified or abolished the common law rule."
    }
  ],
  "UCC Secured Transactions": [
    {
      title: "Scope of Article 9",
      source: "MEE Rule Statement (63.0%)",
      text: "Article 9 of the Uniform Commercial Code governs security interests in personal property."
    },
    {
      title: "Attachment of the Security Interest",
      source: "MEE Rule Statement (51.9%)",
      text: "A security interest attaches (becomes enforceable) to collateral and becomes enforceable against the debtor when there is a security agreement, the secured party has given value, and the debtor has rights in the collateral."
    },
    {
      title: "Perfection of the Security Interest",
      source: "MEE Rule Statement (50.0%)",
      text: "Perfection of a security interest establishes the secured party's rights in the collateral as against third parties. A security interest is typically perfected by filing a financing statement, but may also be perfected by possession or control of the collateral, or automatically in certain situations."
    },
    {
      title: "Purchase-Money Security Interest",
      source: "MEE Rule Statement (22.2%)",
      text: "A PMSI (Purchase-Money Security Interest) is a special type of security interest that has priority over other security interests in the same collateral. A PMSI arises when a creditor sells goods to a debtor on credit, retaining a security interest in the goods, or when a creditor advances funds to a debtor to purchase goods, and the creditor takes a security interest in those goods."
    },
    {
      title: "Perfected vs. Unperfected Interests",
      source: "MEE Rule Statement (22.2%)",
      text: "A perfected security interest has priority over an unperfected security interest."
    },
    {
      title: "Multiple Perfected Creditors",
      source: "MEE Rule Statement (20.4%)",
      text: "As between two perfected secured creditors, the first to file a financing statement or to perfect their security interest has priority."
    },
    {
      title: "Buyers in the Ordinary Course of Biz",
      source: "MEE Rule Statement (16.7%)",
      text: "A buyer in the ordinary course of business takes free of a security interest created by the seller, even if the security interest is perfected and the buyer knows of its existence."
    },
    {
      title: "Types of Collateral",
      source: "MEE Rule Statement (14.8%)",
      text: "Article 9 recognizes various types of collateral, including goods (consumer goods, equipment, farm products, inventory), tangible intangibles (chattel paper, instruments, documents), and intangible intangibles (accounts, general intangibles)."
    },
    {
      title: "Right to Dispose of Collateral",
      source: "MEE Rule Statement (9.3%)",
      text: "Upon default, a secured party may sell, lease, license, or otherwise dispose of the collateral in a commercially reasonable manner."
    },
    {
      title: "Debtor's Rights",
      source: "MEE Rule Statement (9.3%)",
      text: "After default, the debtor has a right to redeem the collateral by paying the full amount of the obligation before the secured party disposes of it."
    }
  ]
};

const ALL_PASSAGES = [];
for (const [subject, passages] of Object.entries(PASSAGES)) {
  for (const p of passages) {
    ALL_PASSAGES.push({ ...p, subject });
  }
}

function getRandomPassage(excludeText = null, subject = null) {
  let pool = subject ? ALL_PASSAGES.filter(p => p.subject === subject) : ALL_PASSAGES;
  if (excludeText) pool = pool.filter(p => p.text !== excludeText);
  if (pool.length === 0) pool = subject ? ALL_PASSAGES.filter(p => p.subject === subject) : ALL_PASSAGES;
  return pool[Math.floor(Math.random() * pool.length)];
}
