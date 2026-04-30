import type { Lang } from "./SettingsContext";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Dict = Record<string, string>;

// ============= ENGLISH =============
const EN: Dict = {
  // ============================================================
  // S1 — The Missing Laptop  (Presence ≠ Guilt)
  // ============================================================
  "case.s1.title": "The Missing Laptop",
  "case.s1.brief":
    "After-school in the empty classroom. A student's laptop has gone missing from a desk. A nearby classmate is suspected — but were they really involved? Search the scene before you accuse anyone.",
  "case.s1.stmt.0.who": "Owner",
  "case.s1.stmt.0.quote":
    "I left my laptop on the desk. When I came back it was gone — and they were sitting right there!",
  "case.s1.stmt.1.who": "Suspect",
  "case.s1.stmt.1.quote":
    "I was just reading. I didn't even touch their stuff. The window was open the whole time.",
  "case.s1.stmt.2.who": "Cleaner",
  "case.s1.stmt.2.quote":
    "I came in 20 minutes ago. The window was already open — and I saw a charging cable on the floor.",

  "case.s1.ev.empty_desk.label": "Empty space on desk",
  "case.s1.ev.empty_desk.short": "Where the laptop was",
  "case.s1.ev.empty_desk.detail":
    "A clean rectangular outline in the desk dust shows exactly where the laptop sat. Nothing else was disturbed.",

  "case.s1.ev.open_bag.label": "Open school bag",
  "case.s1.ev.open_bag.short": "Unzipped, on the floor",
  "case.s1.ev.open_bag.detail":
    "A school bag lies open on the floor. Books are inside but no laptop — and the zip is undamaged.",

  "case.s1.ev.cable.label": "Charging cable on floor ⭐",
  "case.s1.ev.cable.short": "Coiled near the desk",
  "case.s1.ev.cable.detail":
    "A black charging cable lies coiled on the floor — still plugged into the wall. The laptop end is empty. Whoever took the laptop unplugged the device but left the cable behind, suggesting a hurried grab — not necessarily by someone who was sitting nearby.",

  "case.s1.ev.student.label": "Student sitting nearby",
  "case.s1.ev.student.short": "Reading two desks away",
  "case.s1.ev.student.detail":
    "A classmate sits two desks away, reading a book. Being close to a missing item is not the same as taking it.",

  "case.s1.ev.window.label": "Open window",
  "case.s1.ev.window.short": "Wide open, curtains blowing",
  "case.s1.ev.window.detail":
    "A large rear window is wide open. The room is on the ground floor — anyone could have entered or reached in from outside.",

  "case.s1.legal.insufficient": "Insufficient Evidence",
  "case.s1.legal.insufficient.r":
    "No witness saw the suspect take the laptop. Open window + missing cable end = many possibilities. You cannot convict on proximity alone.",
  "case.s1.legal.theft": "Theft (against suspect)",
  "case.s1.legal.theft.r":
    "There is no direct evidence linking this person to the act — only that they were nearby.",
  "case.s1.legal.misconduct": "Minor Misconduct",
  "case.s1.legal.misconduct.r":
    "There is no misconduct to charge — they were simply present in a public space.",

  "case.s1.pun.none":      "No Action",
  "case.s1.pun.warning":   "Verbal Caution",
  "case.s1.pun.detention": "Detention",

  "case.s1.realWorld":
    "Singapore courts and school disciplinary boards both require positive evidence of an act — being near a scene is never proof of guilt.",
  "case.s1.standard":
    "“Beyond reasonable doubt.” Mere presence does not meet this standard.",

  // ============================================================
  // S2 — Exam Cheating  (Similarity ≠ Confirmed cheating)
  // ============================================================
  "case.s2.title": "Exam Cheating?",
  "case.s2.brief":
    "An invigilator marked two students for similar answers in the math finals. Did they cheat — or did similar workings simply emerge from similar study?",
  "case.s2.stmt.0.who": "Invigilator",
  "case.s2.stmt.0.quote":
    "Their answer sheets look almost identical. I didn't see anything during the test, but the papers worry me.",
  "case.s2.stmt.1.who": "Suspect",
  "case.s2.stmt.1.quote":
    "We studied together from the same notes. Of course our methods look alike — but I never copied.",
  "case.s2.stmt.2.who": "Classmate (other party)",
  "case.s2.stmt.2.quote":
    "I covered my paper. If our answers match, that's just because the topic was simple.",

  "case.s2.ev.answers.label": "Two near-identical answer sheets ⭐",
  "case.s2.ev.answers.short": "High overlap, same workings",
  "case.s2.ev.answers.detail":
    "Both papers share many identical answers and similar handwriting layout — but no identical wrong answers, and final results differ. Similarity alone does not prove copying.",

  "case.s2.ev.seating.label": "Seating chart",
  "case.s2.ev.seating.short": "Seated very close",
  "case.s2.ev.seating.detail":
    "The two students were seated next to each other. Standard exam-hall layout for the day, not assigned by them.",

  "case.s2.ev.glance.label": "A sideways glance",
  "case.s2.ev.glance.short": "Brief, partial sighting",
  "case.s2.ev.glance.detail":
    "The invigilator saw the suspect look sideways once. Not clear whether they could actually see the other paper. Partial evidence at best.",

  "case.s2.ev.invigilator.label": "Invigilator log",
  "case.s2.ev.invigilator.short": "No formal report at the time",
  "case.s2.ev.invigilator.detail":
    "During the exam, the invigilator did not stop, warn, or formally record any cheating. The suspicion arose only after marking.",

  "case.s2.ev.rough.label": "Rough working paper",
  "case.s2.ev.rough.short": "Same method, same notes",
  "case.s2.ev.rough.detail":
    "Both rough papers show the same step-by-step approach taught by their tutor. Common preparation can produce common workings.",

  "case.s2.legal.misconduct": "Minor Misconduct (warning)",
  "case.s2.legal.misconduct.r":
    "Treat the seating + glance as a procedural concern, not as proof of cheating. Issue a caution and move on.",
  "case.s2.legal.insufficient": "Insufficient Evidence",
  "case.s2.legal.insufficient.r":
    "No direct observation, no identical wrong answers. Cannot conclude cheating beyond doubt.",
  "case.s2.legal.cheating": "Confirmed Cheating",
  "case.s2.legal.cheating.r":
    "Similar answers from a shared topic and shared notes do not prove intent to copy.",

  "case.s2.pun.warning":   "Warning + Re-mark",
  "case.s2.pun.retake":    "Zero + Retake",
  "case.s2.pun.suspension": "Suspension",

  "case.s2.realWorld":
    "Academic integrity boards require evidence of intent or direct observation — not just statistical resemblance.",
  "case.s2.standard":
    "“Preponderance of evidence,” but resemblance alone is rarely enough.",

  // ============================================================
  // S3 — The Broken Window  (Group presence, no clear actor)
  // ============================================================
  "case.s3.title": "The Broken Window",
  "case.s3.brief":
    "A corridor window has been smashed. A soccer ball lies under it and a few students were nearby. Who is responsible — and can it be proven?",
  "case.s3.stmt.0.who": "Discipline Master",
  "case.s3.stmt.0.quote":
    "I found this group standing here when the window was already broken. Someone has to pay for this.",
  "case.s3.stmt.1.who": "Nervous Student",
  "case.s3.stmt.1.quote":
    "I-I just walked past. I don't even play soccer. I don't know whose ball that is!",
  "case.s3.stmt.2.who": "Other Student",
  "case.s3.stmt.2.quote":
    "We heard a crash from outside, then saw the glass. None of us threw anything.",

  "case.s3.ev.glass.label": "Broken glass on floor",
  "case.s3.ev.glass.short": "Shards across the corridor",
  "case.s3.ev.glass.detail":
    "Glass shards spread inward — meaning the impact came from outside the window, not from the corridor.",

  "case.s3.ev.ball.label": "Soccer ball nearby ⭐",
  "case.s3.ev.ball.short": "Resting under the window",
  "case.s3.ev.ball.detail":
    "A soccer ball rests under the broken window. There is no name on it, no fingerprints checked, and no record of who was kicking it. The most plausible cause — but not tied to anyone here.",

  "case.s3.ev.group.label": "Group of students present",
  "case.s3.ev.group.short": "Three bystanders",
  "case.s3.ev.group.detail":
    "Three students stood in the corridor when staff arrived. None of them was seen kicking, throwing, or holding anything.",

  "case.s3.ev.nervous.label": "One nervous student",
  "case.s3.ev.nervous.short": "Looking down, fidgeting",
  "case.s3.ev.nervous.detail":
    "One student looks visibly nervous. Nervousness is normal under accusation — it is not evidence of guilt.",

  "case.s3.ev.witness.label": "No direct witness",
  "case.s3.ev.witness.short": "No one saw it happen",
  "case.s3.ev.witness.detail":
    "No staff member, camera, or student saw who actually kicked the ball. Without a witness, blame cannot be assigned.",

  "case.s3.legal.insufficient": "Insufficient Evidence",
  "case.s3.legal.insufficient.r":
    "Glass + ball point outdoors. No witness ties any specific student to the act. Correct call: no individual can be charged.",
  "case.s3.legal.shared": "Shared Responsibility",
  "case.s3.legal.shared.r":
    "Punishing everyone present is unfair without evidence that they were involved. Partial credit only.",
  "case.s3.legal.misconduct": "Charge the nervous student",
  "case.s3.legal.misconduct.r":
    "Nervousness is not evidence — punishing on suspicion alone is wrong.",

  "case.s3.pun.none":      "No Action",
  "case.s3.pun.warning":   "Group Caution",
  "case.s3.pun.mediation": "Restorative Talk",

  "case.s3.realWorld":
    "Schools and courts cannot lawfully punish a group when no individual act is proven — collective punishment is widely criticised.",
  "case.s3.standard":
    "“Balance of probabilities” for discipline; but you still need a link to a specific act.",

  // ============================================================
  // C1 — Shoplifting  (Crime is clear, but motive matters)
  // ============================================================
  "case.c1.title": "Shoplifting at the Corner Store",
  "case.c1.brief":
    "A person was caught at a convenience store with food they did not pay for. The act is clear — but the context might change the punishment.",
  "case.c1.stmt.0.who": "Store Clerk",
  "case.c1.stmt.0.quote":
    "I saw them slip the bread under their jacket. They didn't even try to pay.",
  "case.c1.stmt.1.who": "Suspect",
  "case.c1.stmt.1.quote":
    "I haven't eaten in two days. I lost my job last week. I know it was wrong.",
  "case.c1.stmt.2.who": "Officer",
  "case.c1.stmt.2.quote":
    "We've checked: no prior record, no weapons, low value of goods.",

  "case.c1.ev.cctv.label": "CCTV footage ⭐",
  "case.c1.ev.cctv.short": "Item taken without payment",
  "case.c1.ev.cctv.detail":
    "Clear, timestamped footage shows the suspect placing the item inside their jacket and walking past the cashier. No ambiguity.",

  "case.c1.ev.no_pay.label": "No payment recorded ⭐",
  "case.c1.ev.no_pay.short": "Cash register has no entry",
  "case.c1.ev.no_pay.detail":
    "The till and digital receipt log show no transaction during the relevant minute. The item was not bought.",

  "case.c1.ev.distress.label": "Suspect looks distressed",
  "case.c1.ev.distress.short": "Visibly shaking, hungry",
  "case.c1.ev.distress.detail":
    "The suspect looks pale, shaky, and distressed. Emotional state is not a defence, but it can speak to motive.",

  "case.c1.ev.wallet.label": "Empty wallet",
  "case.c1.ev.wallet.short": "No cash, no cards",
  "case.c1.ev.wallet.detail":
    "The suspect's wallet is empty. Combined with the distressed state, it suggests genuine financial hardship — relevant to sentencing, not to guilt.",

  "case.c1.ev.staff.label": "Staff testimony",
  "case.c1.ev.staff.short": "Clerk's direct account",
  "case.c1.ev.staff.detail":
    "Direct eyewitness statement from the cashier. Consistent with the CCTV.",

  "case.c1.legal.theft_light": "Theft — with mitigation",
  "case.c1.legal.theft_light.r":
    "Crime is clearly proven. Hunger, no record, low value → light, restorative consequence.",
  "case.c1.legal.theft_full": "Theft — full punishment",
  "case.c1.legal.theft_full.r":
    "The act is clear, but ignoring context produces a disproportionately harsh outcome.",
  "case.c1.legal.insufficient": "Insufficient Evidence",
  "case.c1.legal.insufficient.r":
    "Both CCTV and the till log directly prove the act. This option ignores clear evidence.",

  "case.c1.pun.warning":   "Warning + Counselling",
  "case.c1.pun.community": "Community Service + Pay-back",
  "case.c1.pun.jail":      "Custodial Sentence",

  "case.c1.realWorld":
    "Most jurisdictions allow magistrates to consider hardship in petty theft — the law punishes the act, but mercy shapes the sentence.",
  "case.c1.standard":
    "Criminal: 'beyond reasonable doubt' — easily met here. Sentencing weighs context.",

  // ============================================================
  // C2 — Traffic Accident  (Conflicting evidence — shared)
  // ============================================================
  "case.c2.title": "The Intersection Crash",
  "case.c2.brief":
    "Two cars collided at an intersection. Witnesses give opposite accounts. Who is at fault — or are both?",
  "case.c2.stmt.0.who": "Driver 1 (red car)",
  "case.c2.stmt.0.quote":
    "My light was green. The blue car came flying out of nowhere.",
  "case.c2.stmt.1.who": "Driver 2 (blue car)",
  "case.c2.stmt.1.quote":
    "I had the right of way. The red car ran the light at full speed.",
  "case.c2.stmt.2.who": "Witness A",
  "case.c2.stmt.2.quote":
    "I'm sure Driver 1 ran the red light. I was right there.",
  "case.c2.stmt.3.who": "Witness B",
  "case.c2.stmt.3.quote":
    "No, the blue car was speeding way over the limit. I saw it clearly.",

  "case.c2.ev.cars.label": "Two damaged cars",
  "case.c2.ev.cars.short": "Front & side damage",
  "case.c2.ev.cars.detail":
    "Both vehicles show significant damage consistent with high-speed impact at the centre of the intersection. Damage pattern is symmetrical.",

  "case.c2.ev.light.label": "Traffic light (state unclear)",
  "case.c2.ev.light.short": "Glitchy / ambiguous",
  "case.c2.ev.light.detail":
    "The signal was reportedly faulty earlier that day. No video confirms which side had green at the moment of impact.",

  "case.c2.ev.witnessA.label": "Witness A statement",
  "case.c2.ev.witnessA.short": "Blames Driver 1",
  "case.c2.ev.witnessA.detail":
    "Witness A is confident — but stood at an angle that did not have a clear view of the signal. Possibly biased.",

  "case.c2.ev.witnessB.label": "Witness B statement",
  "case.c2.ev.witnessB.short": "Blames Driver 2",
  "case.c2.ev.witnessB.detail":
    "Witness B is also confident — but his estimate of speed is informal, no radar reading. Conflicts with Witness A.",

  "case.c2.ev.skid.label": "Skid marks on the road ⭐",
  "case.c2.ev.skid.short": "Long marks from blue car",
  "case.c2.ev.skid.detail":
    "Long, dark skid marks trail from the blue car — physical evidence of late, hard braking, suggesting excessive speed. The red car shows shorter marks consistent with a late reaction. Both contributed.",

  "case.c2.legal.shared": "Shared Responsibility",
  "case.c2.legal.shared.r":
    "Skid marks + symmetrical damage + conflicting witnesses → both drivers contributed. The fairest call.",
  "case.c2.legal.insufficient": "Insufficient Clarity",
  "case.c2.legal.insufficient.r":
    "Acceptable: the testimonies cancel out and the light state is unknown. Refer for further investigation.",
  "case.c2.legal.driver1": "Driver 1 fully at fault",
  "case.c2.legal.driver1.r":
    "Pinning it on one driver ignores the skid marks and the conflicting witnesses.",

  "case.c2.pun.mediation":   "Mediation between drivers",
  "case.c2.pun.shared_fine": "Shared fines + retraining",
  "case.c2.pun.license":     "License suspension (one party)",

  "case.c2.realWorld":
    "Insurance claims often apportion fault by percentage when evidence is conflicting — rarely 100/0.",
  "case.c2.standard":
    "Civil: 'balance of probabilities,' weighing each party independently.",

  // ============================================================
  // C3 — Online Scam  (Intent vs misunderstanding)
  // ============================================================
  "case.c3.title": "The Online Job Scam",
  "case.c3.brief":
    "A victim was promised a high-paying job and asked to transfer money for 'training fees.' The accused claims it was all a misunderstanding.",
  "case.c3.stmt.0.who": "Victim",
  "case.c3.stmt.0.quote":
    "They promised me a real job. I sent the money — and then they vanished.",
  "case.c3.stmt.1.who": "Accused",
  "case.c3.stmt.1.quote":
    "It's a misunderstanding. They sent the money on their own. I never forced them.",
  "case.c3.stmt.2.who": "Investigator",
  "case.c3.stmt.2.quote":
    "We pulled the chats and bank logs. The 'company' doesn't exist anywhere in our records.",

  "case.c3.ev.chat.label": "Chat promising a job ⭐",
  "case.c3.ev.chat.short": "Explicit job offer",
  "case.c3.ev.chat.detail":
    "Saved chat logs show the accused promising a 'guaranteed' job and demanding a refundable training fee. The wording is precise and intentional — not casual conversation.",

  "case.c3.ev.transfer.label": "Victim transferred money ⭐",
  "case.c3.ev.transfer.short": "Bank transfer confirmed",
  "case.c3.ev.transfer.detail":
    "Bank records confirm the victim transferred a substantial amount to an account controlled by the accused. The funds were withdrawn in cash within hours.",

  "case.c3.ev.contract.label": "No official contract",
  "case.c3.ev.contract.short": "Nothing in writing",
  "case.c3.ev.contract.detail":
    "There is no signed employment contract, no offer letter, and no official paperwork — only an informal chat. A real employer leaves a paper trail.",

  "case.c3.ev.profile.label": "Fake company profile",
  "case.c3.ev.profile.short": "Not registered",
  "case.c3.ev.profile.detail":
    "The 'company' page used a stolen logo. The business is not registered in any commercial registry. Clear sign of fabrication.",

  "case.c3.ev.claim.label": "Suspect claims misunderstanding",
  "case.c3.ev.claim.short": "Self-serving statement",
  "case.c3.ev.claim.detail":
    "The accused now says the victim 'misunderstood' the offer. This conflicts with the explicit chat wording — likely a defence story.",

  "case.c3.legal.fraud": "Fraud (Cheating)",
  "case.c3.legal.fraud.r":
    "False promise + induced transfer + fake company + immediate cash withdrawal = clear intent to deceive. Textbook fraud.",
  "case.c3.legal.negligence": "Negligence Only",
  "case.c3.legal.negligence.r":
    "Negligence implies carelessness. The fake company and immediate withdrawal show intent — this is more than negligence.",
  "case.c3.legal.insufficient": "Insufficient Evidence",
  "case.c3.legal.insufficient.r":
    "Chats + transfer + fake company + statements form a strong, complete chain.",

  "case.c3.pun.fine":      "Fine + Restitution",
  "case.c3.pun.fine_jail": "Restitution + Jail Term",
  "case.c3.pun.max":       "Maximum Sentence",

  "case.c3.realWorld":
    "Job-scam cases are typically prosecuted as cheating under criminal law, with restitution orders and imprisonment.",
  "case.c3.standard":
    "Criminal: 'beyond reasonable doubt' — easily met by chats + bank records.",

  // ============= Feedback / impact UI =============
  "case.eval": "Court Evaluation",
  "case.sound": "⚖ Sound Judgement",
  "case.reconsider": "⚠ Reconsider Reasoning",
  "case.standardMet": "Your verdict meets the standard of proof.",
  "case.standardNotMet": "Your verdict does not fully meet the standard of proof.",
  "case.score.evidence": "Evidence",
  "case.score.legal": "Legal Fit",
  "case.score.verdict": "Verdict",
  "case.score.punishment": "Punishment",
  "case.impact": "Impact on Society",
  "case.impact.justice": "Justice",
  "case.impact.trust": "Public Trust",
  "case.impact.fairness": "Fairness",
  "case.impact.overall": "Overall",
  "case.realWorld.show": "Compare real-world ▾",
  "case.realWorld.hide": "Hide real-world ▾",
  "case.retry": "↻ Retry",
  "case.continue": "Continue ▶",
  "case.notFound": "Case not found",
  "case.back": "Back",
  "case.reliable.note":
    "Direct, verifiable source. Safe to weigh heavily in your judgement.",
  "case.unreliable.note":
    "Hearsay, contradicted, or unverified. Treat with caution.",

  // ===== Source & Caveats (long-press detail) =====
  // S1
  "case.s1.ev.empty_desk.detail.more":
    "Source: First-on-scene staff observation, photographed. Caveat: dust outline only proves the laptop was there — not who took it.",
  "case.s1.ev.open_bag.detail.more":
    "Source: Inventory check by the head of year. Caveat: an unzipped bag is not a hiding place; the laptop was not inside.",
  "case.s1.ev.cable.detail.more":
    "Source: Floor sweep. The cable was photographed in place. Caveat: a hurried thief leaves cables — points away from a calm, seated suspect.",
  "case.s1.ev.student.detail.more":
    "Source: Eyewitness placement. Caveat: proximity is not action. No one saw them touch the laptop.",
  "case.s1.ev.window.detail.more":
    "Source: Caretaker confirmation that the window was open since lunchtime. Caveat: ground-floor access opens many alternative suspects.",

  // S2
  "case.s2.ev.answers.detail.more":
    "Source: Both papers compared by two markers. Caveat: similar correct answers ≠ copying. No identical wrong answers.",
  "case.s2.ev.seating.detail.more":
    "Source: Official seating chart. Caveat: standard layout — not chosen by the students.",
  "case.s2.ev.glance.detail.more":
    "Source: Invigilator memory only. Caveat: angle and distance make 'seeing the paper' unlikely.",
  "case.s2.ev.invigilator.detail.more":
    "Source: Official exam log. Caveat: no live warning was issued — accusation arose only after marking.",
  "case.s2.ev.rough.detail.more":
    "Source: Tutor's lesson notes. Caveat: shared preparation easily produces shared workings.",

  // S3
  "case.s3.ev.glass.detail.more":
    "Source: Photograph of debris pattern. Caveat: shards spread inward → impact came from outside.",
  "case.s3.ev.ball.detail.more":
    "Source: Item logged by the discipline office. Caveat: unmarked, no owner identified, no fingerprints taken.",
  "case.s3.ev.group.detail.more":
    "Source: Staff observation on arrival. Caveat: bystanders, not actors. No one was seen kicking.",
  "case.s3.ev.nervous.detail.more":
    "Source: Subjective impression. Caveat: nervousness under accusation is normal — not evidence.",
  "case.s3.ev.witness.detail.more":
    "Source: Canvass of corridor and CCTV. Caveat: no witness, no camera angle covered the act.",

  // C1
  "case.c1.ev.cctv.detail.more":
    "Source: Store CCTV with timestamp. Caveat: footage is clear and continuous — chain of custody preserved.",
  "case.c1.ev.no_pay.detail.more":
    "Source: Point-of-sale transaction log. Caveat: matches CCTV minute-by-minute.",
  "case.c1.ev.distress.detail.more":
    "Source: Officer's body-cam observation. Caveat: state of mind speaks to motive, not to whether the act happened.",
  "case.c1.ev.wallet.detail.more":
    "Source: Inventory at booking. Caveat: empty wallet is mitigating context, not a defence.",
  "case.c1.ev.staff.detail.more":
    "Source: Sworn statement from the cashier. Caveat: consistent with CCTV — strong corroboration.",

  // C2
  "case.c2.ev.cars.detail.more":
    "Source: Crash-scene photographs by the responding officer. Caveat: symmetrical damage suggests both vehicles were moving at speed.",
  "case.c2.ev.light.detail.more":
    "Source: Council maintenance log shows a fault report earlier that day. Caveat: no video proves which colour was shown at impact.",
  "case.c2.ev.witnessA.detail.more":
    "Source: Roadside statement. Caveat: angle did not afford a clear view of the signal.",
  "case.c2.ev.witnessB.detail.more":
    "Source: Roadside statement. Caveat: speed estimate is informal; no radar reading.",
  "case.c2.ev.skid.detail.more":
    "Source: Forensic measurement of skid length. Caveat: physical evidence — much stronger than memory.",

  // C3
  "case.c3.ev.chat.detail.more":
    "Source: Phone export with hashes preserved. Caveat: wording is precise — not casual misunderstanding.",
  "case.c3.ev.transfer.detail.more":
    "Source: Official bank statement. Caveat: rapid cash withdrawal is a classic indicator of intent.",
  "case.c3.ev.contract.detail.more":
    "Source: Search of victim's records and email. Caveat: a real employer would always provide written terms.",
  "case.c3.ev.profile.detail.more":
    "Source: Commercial registry check + reverse image search. Caveat: stolen logo proves fabrication.",
  "case.c3.ev.claim.detail.more":
    "Source: Accused's statement to investigators. Caveat: contradicted by the explicit chat wording.",
};

// ============= 中文 =============
const ZH: Dict = {
  // S1
  "case.s1.title": "失踪的笔记本电脑",
  "case.s1.brief":
    "放学后空无一人的教室，一台学生的笔记本电脑从桌上不翼而飞。附近的同学被怀疑了——但他们真的有份吗？在指控任何人之前，先仔细搜查现场。",
  "case.s1.stmt.0.who": "失主",
  "case.s1.stmt.0.quote": "我把笔记本放在桌上。回来时它就不见了——而他们就坐在那里！",
  "case.s1.stmt.1.who": "嫌疑人",
  "case.s1.stmt.1.quote": "我只是在看书，根本没碰他们的东西。窗户一直开着。",
  "case.s1.stmt.2.who": "清洁工",
  "case.s1.stmt.2.quote": "我20分钟前进来。窗户当时已经开着——而且我看到地上有条充电线。",

  "case.s1.ev.empty_desk.label": "桌面上的空位",
  "case.s1.ev.empty_desk.short": "笔记本原本所在的位置",
  "case.s1.ev.empty_desk.detail":
    "桌面灰尘上留下一块干净的长方形痕迹，正是笔记本所在的位置。其他物品都未被动过。",
  "case.s1.ev.open_bag.label": "敞开的书包",
  "case.s1.ev.open_bag.short": "未拉拉链，掉在地上",
  "case.s1.ev.open_bag.detail":
    "一只书包敞着口躺在地上，里面有书但没有笔记本，拉链完好无损。",
  "case.s1.ev.cable.label": "地上的充电线 ⭐",
  "case.s1.ev.cable.short": "盘绕在桌旁",
  "case.s1.ev.cable.detail":
    "一条黑色充电线盘在地上，仍插在墙上。笔记本端却空着。拿走笔记本的人匆忙拔走设备，却把线留下——更像是匆忙抢走，未必是坐在附近的人。",
  "case.s1.ev.student.label": "附近坐着的学生",
  "case.s1.ev.student.short": "在两张桌子外看书",
  "case.s1.ev.student.detail":
    "一位同学坐在两张桌子外看书。靠近失物现场，并不等于拿了它。",
  "case.s1.ev.window.label": "敞开的窗户",
  "case.s1.ev.window.short": "大开，窗帘飘动",
  "case.s1.ev.window.detail":
    "后方一扇大窗大开。教室在一楼，任何人都可能从外面进来或伸手拿东西。",

  "case.s1.legal.insufficient": "证据不足",
  "case.s1.legal.insufficient.r":
    "无人目睹嫌疑人拿走笔记本。开窗+缺失的设备端=多种可能。仅凭距离不能定罪。",
  "case.s1.legal.theft": "盗窃（指控嫌疑人）",
  "case.s1.legal.theft.r": "没有直接证据将此人与行为相连——只是他在附近。",
  "case.s1.legal.misconduct": "轻微违规",
  "case.s1.legal.misconduct.r": "没有违规可指控——他只是出现在公共空间。",

  "case.s1.pun.none": "不予处理",
  "case.s1.pun.warning": "口头告诫",
  "case.s1.pun.detention": "留堂",
  "case.s1.realWorld":
    "新加坡法院和学校纪律委员会都要求确凿的行为证据——靠近现场绝不能作为有罪证明。",
  "case.s1.standard": "“排除合理怀疑”。仅在场不符合此标准。",

  // S2
  "case.s2.title": "考试作弊？",
  "case.s2.brief":
    "监考员标记了两位答案相似的同学。是作弊？还是相同的复习方式产生了相似的答题过程？",
  "case.s2.stmt.0.who": "监考员",
  "case.s2.stmt.0.quote": "他们的答卷几乎一模一样。考试时我没看到什么，但答卷让我担忧。",
  "case.s2.stmt.1.who": "嫌疑人",
  "case.s2.stmt.1.quote": "我们一起用同一份笔记复习，方法当然像，但我从没抄过。",
  "case.s2.stmt.2.who": "同学（另一方）",
  "case.s2.stmt.2.quote": "我遮住了卷子。如果答案相同，那只是因为题目简单。",

  "case.s2.ev.answers.label": "两份近乎一致的答卷 ⭐",
  "case.s2.ev.answers.short": "高度重叠，做法相同",
  "case.s2.ev.answers.detail":
    "两份答卷有许多相同答案、布局相似——但没有相同的错题，最终成绩也不同。仅相似不能证明抄袭。",
  "case.s2.ev.seating.label": "座位表",
  "case.s2.ev.seating.short": "相邻而坐",
  "case.s2.ev.seating.detail":
    "两位同学相邻而坐。当天考场标准编排，并非他们自选。",
  "case.s2.ev.glance.label": "侧目一眼",
  "case.s2.ev.glance.short": "短暂、片面的目击",
  "case.s2.ev.glance.detail":
    "监考员看到嫌疑人侧目一次。是否真能看到对方答卷不明，最多是部分证据。",
  "case.s2.ev.invigilator.label": "监考记录",
  "case.s2.ev.invigilator.short": "考试时没正式上报",
  "case.s2.ev.invigilator.detail":
    "考试期间监考员未制止、未警告、也未正式记录任何作弊。怀疑只在阅卷后才出现。",
  "case.s2.ev.rough.label": "草稿纸",
  "case.s2.ev.rough.short": "方法相同、笔记相同",
  "case.s2.ev.rough.detail":
    "两人草稿都展示了补习老师教的相同步骤。共同准备容易产生共同做法。",

  "case.s2.legal.misconduct": "轻微违规（警告）",
  "case.s2.legal.misconduct.r":
    "把座位+侧目视为程序问题而非作弊证明。给予警告即可。",
  "case.s2.legal.insufficient": "证据不足",
  "case.s2.legal.insufficient.r":
    "无直接观察、无相同错题。无法排除合理怀疑认定作弊。",
  "case.s2.legal.cheating": "确认作弊",
  "case.s2.legal.cheating.r":
    "源于共同题材与共同笔记的相似答案，不能证明抄袭意图。",

  "case.s2.pun.warning": "警告并复评",
  "case.s2.pun.retake": "零分并重考",
  "case.s2.pun.suspension": "停学",
  "case.s2.realWorld":
    "学术诚信委员会要求意图证据或直接观察——不能仅凭相似性。",
  "case.s2.standard": "“证据优势”，但仅相似性通常不足。",

  // S3
  "case.s3.title": "破碎的窗户",
  "case.s3.brief":
    "走廊一扇窗被打碎，下面有一颗足球，附近站着几位学生。谁该负责，又能否被证明？",
  "case.s3.stmt.0.who": "训导主任",
  "case.s3.stmt.0.quote": "我到时这群学生就在这里，窗已破。总得有人赔。",
  "case.s3.stmt.1.who": "紧张的学生",
  "case.s3.stmt.1.quote": "我——我只是路过。我都不踢球。我也不知道那球是谁的！",
  "case.s3.stmt.2.who": "其他学生",
  "case.s3.stmt.2.quote": "我们听到外面砰一声，才看到玻璃。我们没人扔东西。",

  "case.s3.ev.glass.label": "地上的碎玻璃",
  "case.s3.ev.glass.short": "散落在走廊",
  "case.s3.ev.glass.detail": "碎片向内飞散——表示冲击来自窗外，而非走廊内。",
  "case.s3.ev.ball.label": "附近的足球 ⭐",
  "case.s3.ev.ball.short": "停在窗下",
  "case.s3.ev.ball.detail":
    "一颗足球停在破窗下。没有名字、未取指纹、没有踢球者记录。最可能的成因——但并不指向在场任何人。",
  "case.s3.ev.group.label": "在场的学生群",
  "case.s3.ev.group.short": "三位旁观者",
  "case.s3.ev.group.detail":
    "训导员到达时三位学生站在走廊。没人被看到踢、扔或拿任何东西。",
  "case.s3.ev.nervous.label": "一位紧张的学生",
  "case.s3.ev.nervous.short": "低头、不安",
  "case.s3.ev.nervous.detail":
    "一位学生明显紧张。被指控时紧张是常见反应，并非有罪证据。",
  "case.s3.ev.witness.label": "无直接目击者",
  "case.s3.ev.witness.short": "无人目睹",
  "case.s3.ev.witness.detail":
    "没有教职员、镜头或学生看到是谁踢的球。无目击者，便无法归责。",

  "case.s3.legal.insufficient": "证据不足",
  "case.s3.legal.insufficient.r":
    "玻璃+球指向室外。无目击者将任何具体学生与行为联系起来。正确判断：不能起诉任何个人。",
  "case.s3.legal.shared": "共同责任",
  "case.s3.legal.shared.r":
    "在没有证据证明参与的情况下处罚所有人不公。仅可获部分分。",
  "case.s3.legal.misconduct": "处罚紧张的学生",
  "case.s3.legal.misconduct.r": "紧张不是证据——仅凭怀疑处罚是错的。",

  "case.s3.pun.none": "不予处理",
  "case.s3.pun.warning": "集体告诫",
  "case.s3.pun.mediation": "修复式谈话",
  "case.s3.realWorld":
    "无法证明个人行为时，学校与法院不能合法惩罚整个群体——集体处罚普遍受批评。",
  "case.s3.standard": "纪律采用“可能性权衡”，但仍需将责任与具体行为连接。",

  // C1
  "case.c1.title": "便利店行窃",
  "case.c1.brief":
    "一名男子被发现在便利店拿走未付钱的食物。行为很清楚——但情境可能改变处罚。",
  "case.c1.stmt.0.who": "店员",
  "case.c1.stmt.0.quote": "我看到他把面包塞进外套，连付钱都没尝试。",
  "case.c1.stmt.1.who": "嫌疑人",
  "case.c1.stmt.1.quote": "我两天没吃饭了。上周失业。我知道这样不对。",
  "case.c1.stmt.2.who": "警员",
  "case.c1.stmt.2.quote": "我们查过：无前科、无武器、物品价值低。",

  "case.c1.ev.cctv.label": "监控录像 ⭐",
  "case.c1.ev.cctv.short": "未付款拿走商品",
  "case.c1.ev.cctv.detail":
    "带时间戳的清晰录像显示嫌疑人将商品藏入外套并走过收银台。无任何模糊。",
  "case.c1.ev.no_pay.label": "无付款记录 ⭐",
  "case.c1.ev.no_pay.short": "收银机无该笔记录",
  "case.c1.ev.no_pay.detail":
    "收银机与电子收据日志在相关时间内无任何交易。商品未被购买。",
  "case.c1.ev.distress.label": "嫌疑人显得困窘",
  "case.c1.ev.distress.short": "明显发抖、饥饿",
  "case.c1.ev.distress.detail":
    "嫌疑人脸色苍白、发抖、显得焦虑。情绪状态不能成为辩护，但与动机相关。",
  "case.c1.ev.wallet.label": "空钱包",
  "case.c1.ev.wallet.short": "无现金、无银行卡",
  "case.c1.ev.wallet.detail":
    "嫌疑人钱包是空的。结合困窘状态，提示真实的经济困难——与量刑相关，与定罪无关。",
  "case.c1.ev.staff.label": "员工证词",
  "case.c1.ev.staff.short": "店员的直接陈述",
  "case.c1.ev.staff.detail": "店员的直接目击陈述。与监控一致。",

  "case.c1.legal.theft_light": "盗窃——附减刑情节",
  "case.c1.legal.theft_light.r":
    "罪行明确成立。饥饿、无前科、价值低 → 轻量、修复性处理。",
  "case.c1.legal.theft_full": "盗窃——按最重处罚",
  "case.c1.legal.theft_full.r":
    "行为虽明确，但忽视情境会带来不成比例的严厉结果。",
  "case.c1.legal.insufficient": "证据不足",
  "case.c1.legal.insufficient.r": "监控与收银日志直接证明行为。此选项无视确凿证据。",

  "case.c1.pun.warning": "警告+辅导",
  "case.c1.pun.community": "社区服务+赔偿",
  "case.c1.pun.jail": "监禁",
  "case.c1.realWorld":
    "多数司法管辖区允许法官在轻微盗窃中考虑困境——法律惩罚行为，宽恕影响量刑。",
  "case.c1.standard": "刑事：“排除合理怀疑”——此处轻易达到。量刑权衡情境。",

  // C2
  "case.c2.title": "十字路口的车祸",
  "case.c2.brief": "两辆车在十字路口相撞。证人陈述相反。谁的责任——还是双方都有？",
  "case.c2.stmt.0.who": "司机1（红车）",
  "case.c2.stmt.0.quote": "我的灯是绿的，蓝车不知从哪冲出来。",
  "case.c2.stmt.1.who": "司机2（蓝车）",
  "case.c2.stmt.1.quote": "我有路权，红车闯红灯还全速驶来。",
  "case.c2.stmt.2.who": "证人A",
  "case.c2.stmt.2.quote": "我确定司机1闯了红灯。我就在那里。",
  "case.c2.stmt.3.who": "证人B",
  "case.c2.stmt.3.quote": "不，蓝车严重超速。我看得很清楚。",

  "case.c2.ev.cars.label": "两辆受损车辆",
  "case.c2.ev.cars.short": "前部和侧部损坏",
  "case.c2.ev.cars.detail":
    "两车均显示与高速碰撞一致的严重损坏，发生在十字路口中央。损坏程度对称。",
  "case.c2.ev.light.label": "信号灯（状态不明）",
  "case.c2.ev.light.short": "故障/模糊",
  "case.c2.ev.light.detail":
    "据报当日早些时候信号灯已故障。无视频确认撞击瞬间哪边为绿灯。",
  "case.c2.ev.witnessA.label": "证人A陈述",
  "case.c2.ev.witnessA.short": "指责司机1",
  "case.c2.ev.witnessA.detail": "证人A很确定——但所站位置无法清楚看到信号灯。可能存在偏见。",
  "case.c2.ev.witnessB.label": "证人B陈述",
  "case.c2.ev.witnessB.short": "指责司机2",
  "case.c2.ev.witnessB.detail":
    "证人B同样确定——但他对车速的估计是非正式的，无雷达读数。与证人A矛盾。",
  "case.c2.ev.skid.label": "路面刹车痕 ⭐",
  "case.c2.ev.skid.short": "蓝车留下长长痕迹",
  "case.c2.ev.skid.detail":
    "长长的黑色刹车痕从蓝车后方延伸——表明晚刹、急刹，提示超速。红车痕迹较短，与反应迟滞一致。双方都有责任。",

  "case.c2.legal.shared": "共同责任",
  "case.c2.legal.shared.r":
    "刹车痕+对称损坏+矛盾证词 → 双方都有过错。最公平的结论。",
  "case.c2.legal.insufficient": "情况不明",
  "case.c2.legal.insufficient.r":
    "可接受：证词相互抵消，信号灯状态未知。可建议进一步调查。",
  "case.c2.legal.driver1": "司机1全责",
  "case.c2.legal.driver1.r": "归咎一方忽视了刹车痕和矛盾证词。",

  "case.c2.pun.mediation": "司机间调解",
  "case.c2.pun.shared_fine": "共同罚款+再培训",
  "case.c2.pun.license": "吊销一方驾照",
  "case.c2.realWorld":
    "证据相互冲突时保险理赔常按比例划分责任——很少100/0。",
  "case.c2.standard": "民事：“可能性权衡”，对各方分别评估。",

  // C3
  "case.c3.title": "网络求职诈骗",
  "case.c3.brief":
    "一名受害者被许诺高薪职位，并被要求转账缴“培训费”。被告声称只是误会。",
  "case.c3.stmt.0.who": "受害者",
  "case.c3.stmt.0.quote": "他们承诺给我一份真工作。我转了钱——然后他们消失了。",
  "case.c3.stmt.1.who": "被告",
  "case.c3.stmt.1.quote": "这是误会。他们自己转的钱。我从没强迫。",
  "case.c3.stmt.2.who": "调查员",
  "case.c3.stmt.2.quote": "我们调取了聊天和银行记录。这家“公司”在记录中根本不存在。",

  "case.c3.ev.chat.label": "承诺工作的聊天 ⭐",
  "case.c3.ev.chat.short": "明确的工作机会",
  "case.c3.ev.chat.detail":
    "保存的聊天记录显示被告承诺“包括”职位并要求“可退还”培训费。措辞精准、有意——而非随意闲聊。",
  "case.c3.ev.transfer.label": "受害者已转账 ⭐",
  "case.c3.ev.transfer.short": "确认银行转账",
  "case.c3.ev.transfer.detail":
    "银行记录确认受害者向被告控制的账户转入大额资金，资金在数小时内被取现。",
  "case.c3.ev.contract.label": "无正式合同",
  "case.c3.ev.contract.short": "无书面文件",
  "case.c3.ev.contract.detail":
    "没有签署的雇佣合同、没有录用通知、也没有任何官方文件——只有一段非正式聊天。真正的雇主会留下书面材料。",
  "case.c3.ev.profile.label": "假冒公司资料",
  "case.c3.ev.profile.short": "未注册",
  "case.c3.ev.profile.detail":
    "“公司”页面盗用了Logo。该商号在任何工商登记都不存在。明显伪造。",
  "case.c3.ev.claim.label": "嫌疑人声称是误会",
  "case.c3.ev.claim.short": "自利陈述",
  "case.c3.ev.claim.detail":
    "被告现在说受害者“误解”了offer。这与聊天明确措辞相矛盾——很可能是辩护说辞。",

  "case.c3.legal.fraud": "欺诈（行骗）",
  "case.c3.legal.fraud.r":
    "虚假承诺+诱导转账+伪公司+立即取现 = 明确欺诈意图。教科书式的欺诈。",
  "case.c3.legal.negligence": "仅过失",
  "case.c3.legal.negligence.r":
    "过失意指疏忽。伪公司与立即取现显示意图——超出过失范围。",
  "case.c3.legal.insufficient": "证据不足",
  "case.c3.legal.insufficient.r":
    "聊天+转账+伪公司+陈述构成完整、强力的证据链。",

  "case.c3.pun.fine": "罚款+赔偿",
  "case.c3.pun.fine_jail": "赔偿+监禁",
  "case.c3.pun.max": "最高刑罚",
  "case.c3.realWorld":
    "求职诈骗通常按刑事“行骗”起诉，附以赔偿与监禁。",
  "case.c3.standard": "刑事：“排除合理怀疑”——聊天+银行记录易于达到。",

  // ============= UI 反馈 =============
  "case.eval": "法庭评估",
  "case.sound": "⚖ 判决合理",
  "case.reconsider": "⚠ 请重新考虑推理",
  "case.standardMet": "您的判决符合证明标准。",
  "case.standardNotMet": "您的判决未完全符合证明标准。",
  "case.score.evidence": "证据",
  "case.score.legal": "法律契合",
  "case.score.verdict": "判决",
  "case.score.punishment": "处罚",
  "case.impact": "对社会的影响",
  "case.impact.justice": "正义",
  "case.impact.trust": "公众信任",
  "case.impact.fairness": "公平",
  "case.impact.overall": "总体",
  "case.realWorld.show": "对照现实 ▾",
  "case.realWorld.hide": "隐藏现实 ▾",
  "case.retry": "↻ 重试",
  "case.continue": "继续 ▶",
  "case.notFound": "未找到案件",
  "case.back": "返回",
  "case.reliable.note": "直接、可核实的来源，可在判决中重要权衡。",
  "case.unreliable.note": "传闻、矛盾或未经证实，请谨慎对待。",

  // ===== 来源与注意事项 =====
  "case.s1.ev.empty_desk.detail.more":
    "来源：第一到场教职员观察并拍照。注意：灰尘痕迹只能证明笔记本曾在那里——不能证明谁拿的。",
  "case.s1.ev.open_bag.detail.more":
    "来源：年级主任清点。注意：未拉拉链的书包不是藏匿处；笔记本不在里面。",
  "case.s1.ev.cable.detail.more":
    "来源：地面巡查。线被现场拍照。注意：匆忙的窃贼会留下电缆——指向并非冷静坐着的嫌疑人。",
  "case.s1.ev.student.detail.more":
    "来源：目击位置。注意：靠近不等于行为。无人见其触碰笔记本。",
  "case.s1.ev.window.detail.more":
    "来源：管理员确认窗户自午餐起就开着。注意：一楼可触及，扩大了可能的嫌疑范围。",

  "case.s2.ev.answers.detail.more":
    "来源：两位阅卷人对比。注意：相同正确答案≠抄袭。无相同错题。",
  "case.s2.ev.seating.detail.more":
    "来源：官方座位表。注意：标准编排——并非学生自选。",
  "case.s2.ev.glance.detail.more":
    "来源：仅监考员记忆。注意：角度与距离使“能看清答卷”可能性低。",
  "case.s2.ev.invigilator.detail.more":
    "来源：官方考试日志。注意：当场未发警告——指控仅在阅卷后出现。",
  "case.s2.ev.rough.detail.more":
    "来源：补习老师讲义。注意：共同准备容易产生共同做法。",

  "case.s3.ev.glass.detail.more":
    "来源：碎片散布照片。注意：碎片向内飞散→冲击来自外面。",
  "case.s3.ev.ball.detail.more":
    "来源：训导处登记物品。注意：无标记、无人认领、未取指纹。",
  "case.s3.ev.group.detail.more":
    "来源：到达时教职员观察。注意：旁观者，不是行为人。无人被看到踢球。",
  "case.s3.ev.nervous.detail.more":
    "来源：主观印象。注意：被指控时紧张属正常——非证据。",
  "case.s3.ev.witness.detail.more":
    "来源：走廊与监控排查。注意：无目击者、无监控覆盖该行为。",

  "case.c1.ev.cctv.detail.more":
    "来源：店内带时间戳的监控。注意：画面清晰连续——证据链完整。",
  "case.c1.ev.no_pay.detail.more":
    "来源：销售点交易日志。注意：与监控逐分匹配。",
  "case.c1.ev.distress.detail.more":
    "来源：警员执法记录仪。注意：心理状态与动机相关，与是否发生无关。",
  "case.c1.ev.wallet.detail.more":
    "来源：拘留时财物清点。注意：空钱包是减刑情境，不是辩护。",
  "case.c1.ev.staff.detail.more":
    "来源：店员宣誓陈述。注意：与监控一致——强力佐证。",

  "case.c2.ev.cars.detail.more":
    "来源：到场警员现场照片。注意：对称损坏暗示双方均高速行驶。",
  "case.c2.ev.light.detail.more":
    "来源：市政维修日志显示当日早些时候有故障报告。注意：无视频证明撞击时是何颜色。",
  "case.c2.ev.witnessA.detail.more":
    "来源：路边陈述。注意：所在位置无法清楚看到信号。",
  "case.c2.ev.witnessB.detail.more":
    "来源：路边陈述。注意：车速估计为非正式；无雷达读数。",
  "case.c2.ev.skid.detail.more":
    "来源：刹车痕长度的法医测量。注意：物理证据——比记忆有力得多。",

  "case.c3.ev.chat.detail.more":
    "来源：手机导出并保留哈希。注意：措辞精准——不是随意误会。",
  "case.c3.ev.transfer.detail.more":
    "来源：官方银行对账单。注意：迅速取现是意图的典型指标。",
  "case.c3.ev.contract.detail.more":
    "来源：搜查受害者记录与邮件。注意：真正雇主总会提供书面条款。",
  "case.c3.ev.profile.detail.more":
    "来源：工商登记+反向图片搜索。注意：盗用Logo证明伪造。",
  "case.c3.ev.claim.detail.more":
    "来源：被告对调查员的陈述。注意：与聊天明确措辞相矛盾。",
};

// ============= Bahasa Melayu =============
const MS: Dict = {
  // S1
  "case.s1.title": "Komputer Riba Yang Hilang",
  "case.s1.brief":
    "Selepas waktu sekolah dalam kelas yang kosong. Komputer riba seorang pelajar hilang dari mejanya. Seorang rakan sekelas berdekatan disyaki — tetapi adakah mereka benar-benar terlibat? Cari di tempat kejadian sebelum menuduh sesiapa.",
  "case.s1.stmt.0.who": "Pemilik",
  "case.s1.stmt.0.quote":
    "Saya tinggalkan komputer riba di atas meja. Bila saya kembali, ia hilang — dan mereka duduk tepat di sana!",
  "case.s1.stmt.1.who": "Suspek",
  "case.s1.stmt.1.quote":
    "Saya cuma membaca. Saya tak sentuh barang mereka. Tingkap terbuka sepanjang masa.",
  "case.s1.stmt.2.who": "Pencuci",
  "case.s1.stmt.2.quote":
    "Saya masuk 20 minit lalu. Tingkap dah terbuka — dan saya nampak kabel pengecas di lantai.",

  "case.s1.ev.empty_desk.label": "Ruang kosong di atas meja",
  "case.s1.ev.empty_desk.short": "Tempat komputer riba dahulu",
  "case.s1.ev.empty_desk.detail":
    "Garisan segi empat tepat yang bersih pada habuk meja menunjukkan tepat di mana komputer riba berada. Tiada benda lain diganggu.",
  "case.s1.ev.open_bag.label": "Beg sekolah terbuka",
  "case.s1.ev.open_bag.short": "Tidak berzip, di lantai",
  "case.s1.ev.open_bag.detail":
    "Beg sekolah terbuka di lantai. Buku ada di dalam tetapi tiada komputer riba — zip tidak rosak.",
  "case.s1.ev.cable.label": "Kabel pengecas di lantai ⭐",
  "case.s1.ev.cable.short": "Bergulung dekat meja",
  "case.s1.ev.cable.detail":
    "Kabel pengecas hitam bergulung di lantai — masih dipalam ke dinding. Hujung komputer ribanya kosong. Pencuri yang tergesa-gesa meninggalkan kabel — petanda bukan seseorang yang duduk dengan tenang berdekatan.",
  "case.s1.ev.student.label": "Pelajar duduk berdekatan",
  "case.s1.ev.student.short": "Membaca dua meja jauh",
  "case.s1.ev.student.detail":
    "Seorang rakan duduk dua meja jauh, membaca buku. Berdekatan dengan barang yang hilang bukan bermakna mengambilnya.",
  "case.s1.ev.window.label": "Tingkap terbuka",
  "case.s1.ev.window.short": "Terbuka luas, langsir berkibar",
  "case.s1.ev.window.detail":
    "Tingkap belakang yang besar terbuka luas. Bilik di tingkat bawah — sesiapa boleh masuk atau menjangkau dari luar.",

  "case.s1.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.s1.legal.insufficient.r":
    "Tiada saksi nampak suspek mengambil komputer riba. Tingkap terbuka + hujung kabel kosong = banyak kemungkinan. Tidak boleh menyabit hanya berdasarkan kedekatan.",
  "case.s1.legal.theft": "Kecurian (terhadap suspek)",
  "case.s1.legal.theft.r":
    "Tiada bukti langsung yang menghubungkan orang ini dengan perbuatan — hanya berdekatan.",
  "case.s1.legal.misconduct": "Salah Laku Kecil",
  "case.s1.legal.misconduct.r":
    "Tiada salah laku untuk dituduh — mereka hanya hadir di ruang awam.",

  "case.s1.pun.none": "Tiada Tindakan",
  "case.s1.pun.warning": "Amaran Lisan",
  "case.s1.pun.detention": "Tahanan",
  "case.s1.realWorld":
    "Mahkamah dan lembaga disiplin memerlukan bukti positif perbuatan — kedekatan tempat kejadian bukan bukti kesalahan.",
  "case.s1.standard":
    "“Tanpa keraguan munasabah.” Kehadiran semata tidak memenuhi piawaian ini.",

  // S2
  "case.s2.title": "Tuduhan Meniru?",
  "case.s2.brief":
    "Pengawas peperiksaan menanda dua pelajar atas jawapan yang serupa. Adakah mereka meniru — atau ulangkaji yang sama menghasilkan jawapan serupa?",
  "case.s2.stmt.0.who": "Pengawas",
  "case.s2.stmt.0.quote":
    "Kertas mereka hampir sama. Saya tidak nampak apa-apa semasa peperiksaan, tetapi kertas itu membimbangkan.",
  "case.s2.stmt.1.who": "Suspek",
  "case.s2.stmt.1.quote":
    "Kami belajar bersama dari nota yang sama. Sudah tentu kaedah kami serupa — tetapi saya tidak meniru.",
  "case.s2.stmt.2.who": "Rakan (pihak lain)",
  "case.s2.stmt.2.quote":
    "Saya tutup kertas saya. Jika jawapan kami sama, itu kerana topiknya mudah.",

  "case.s2.ev.answers.label": "Dua kertas hampir serupa ⭐",
  "case.s2.ev.answers.short": "Pertindihan tinggi, kaedah sama",
  "case.s2.ev.answers.detail":
    "Kedua kertas berkongsi banyak jawapan yang sama dan susun atur tulisan yang serupa — tetapi tiada jawapan salah yang sama, dan keputusan akhir berbeza. Persamaan sahaja tidak membuktikan meniru.",
  "case.s2.ev.seating.label": "Carta tempat duduk",
  "case.s2.ev.seating.short": "Duduk berdekatan",
  "case.s2.ev.seating.detail":
    "Kedua pelajar duduk berdekatan. Susunan biasa dewan peperiksaan — bukan pilihan mereka.",
  "case.s2.ev.glance.label": "Pandangan sisi",
  "case.s2.ev.glance.short": "Singkat, tidak menyeluruh",
  "case.s2.ev.glance.detail":
    "Pengawas nampak suspek melihat sisi sekali. Tidak jelas sama ada mereka boleh nampak kertas itu. Bukti separa sahaja.",
  "case.s2.ev.invigilator.label": "Log pengawas",
  "case.s2.ev.invigilator.short": "Tiada laporan rasmi semasa itu",
  "case.s2.ev.invigilator.detail":
    "Semasa peperiksaan, pengawas tidak menghentikan, memberi amaran, atau mencatat sebarang penipuan. Syak hanya muncul selepas penandaan.",
  "case.s2.ev.rough.label": "Kertas kerja kasar",
  "case.s2.ev.rough.short": "Kaedah sama, nota sama",
  "case.s2.ev.rough.detail":
    "Kedua kertas kasar menunjukkan langkah-langkah sama yang diajar tutor mereka. Persiapan bersama menghasilkan kerja serupa.",

  "case.s2.legal.misconduct": "Salah Laku Kecil (amaran)",
  "case.s2.legal.misconduct.r":
    "Anggap tempat duduk + pandangan sebagai hal prosedur, bukan bukti meniru. Beri amaran sahaja.",
  "case.s2.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.s2.legal.insufficient.r":
    "Tiada pemerhatian langsung, tiada jawapan salah yang sama. Tidak boleh disabitkan meniru.",
  "case.s2.legal.cheating": "Meniru Disahkan",
  "case.s2.legal.cheating.r":
    "Jawapan serupa dari topik dan nota kongsi tidak membuktikan niat meniru.",

  "case.s2.pun.warning": "Amaran + Tanda Semula",
  "case.s2.pun.retake": "Sifar + Ulang",
  "case.s2.pun.suspension": "Gantung",
  "case.s2.realWorld":
    "Lembaga integriti akademik memerlukan bukti niat atau pemerhatian langsung — bukan persamaan statistik sahaja.",
  "case.s2.standard": "“Keutamaan bukti,” tetapi persamaan jarang mencukupi.",

  // S3
  "case.s3.title": "Tingkap Pecah",
  "case.s3.brief":
    "Tingkap koridor pecah. Bola sepak terletak di bawahnya dan beberapa pelajar berdekatan. Siapa bertanggungjawab — dan bolehkah ia dibuktikan?",
  "case.s3.stmt.0.who": "Guru Disiplin",
  "case.s3.stmt.0.quote":
    "Saya jumpa kumpulan ini berdiri di sini bila tingkap sudah pecah. Seseorang mesti bayar.",
  "case.s3.stmt.1.who": "Pelajar Gementar",
  "case.s3.stmt.1.quote":
    "Sa-saya cuma lalu sahaja. Saya tak main bola. Saya tak tahu bola siapa itu!",
  "case.s3.stmt.2.who": "Pelajar Lain",
  "case.s3.stmt.2.quote":
    "Kami dengar bunyi pecah dari luar, kemudian nampak kaca. Tiada antara kami yang membaling apa-apa.",

  "case.s3.ev.glass.label": "Pecahan kaca di lantai",
  "case.s3.ev.glass.short": "Serpihan merentasi koridor",
  "case.s3.ev.glass.detail":
    "Serpihan kaca tersebar ke dalam — bermakna hentaman datang dari luar tingkap, bukan dari koridor.",
  "case.s3.ev.ball.label": "Bola sepak berdekatan ⭐",
  "case.s3.ev.ball.short": "Terletak di bawah tingkap",
  "case.s3.ev.ball.detail":
    "Bola sepak terletak di bawah tingkap pecah. Tiada nama, tiada cap jari diperiksa, tiada rekod siapa menendangnya. Punca paling munasabah — tetapi tidak terikat kepada sesiapa di sini.",
  "case.s3.ev.group.label": "Kumpulan pelajar hadir",
  "case.s3.ev.group.short": "Tiga orang penonton",
  "case.s3.ev.group.detail":
    "Tiga pelajar berdiri di koridor bila kakitangan tiba. Tiada antara mereka dilihat menendang, membaling atau memegang apa-apa.",
  "case.s3.ev.nervous.label": "Seorang pelajar gementar",
  "case.s3.ev.nervous.short": "Menunduk, gelisah",
  "case.s3.ev.nervous.detail":
    "Seorang pelajar kelihatan amat gementar. Gementar di bawah tuduhan adalah normal — bukan bukti kesalahan.",
  "case.s3.ev.witness.label": "Tiada saksi langsung",
  "case.s3.ev.witness.short": "Tiada siapa nampak ia berlaku",
  "case.s3.ev.witness.detail":
    "Tiada kakitangan, kamera atau pelajar nampak siapa sebenarnya menendang bola. Tanpa saksi, kesalahan tidak boleh diberikan.",

  "case.s3.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.s3.legal.insufficient.r":
    "Kaca + bola menunjuk ke luar. Tiada saksi mengaitkan pelajar tertentu dengan perbuatan. Keputusan tepat: tiada individu boleh dituduh.",
  "case.s3.legal.shared": "Tanggungjawab Bersama",
  "case.s3.legal.shared.r":
    "Menghukum semua yang hadir tanpa bukti penglibatan adalah tidak adil. Kredit separa sahaja.",
  "case.s3.legal.misconduct": "Hukum pelajar gementar",
  "case.s3.legal.misconduct.r":
    "Gementar bukan bukti — menghukum atas syak sahaja adalah salah.",

  "case.s3.pun.none": "Tiada Tindakan",
  "case.s3.pun.warning": "Amaran Berkumpulan",
  "case.s3.pun.mediation": "Perbualan Restoratif",
  "case.s3.realWorld":
    "Sekolah dan mahkamah tidak boleh menghukum kumpulan tanpa bukti perbuatan individu — hukuman kolektif dikritik.",
  "case.s3.standard":
    "“Imbangan kebarangkalian” untuk disiplin; tetapi tetap perlukan kaitan kepada perbuatan tertentu.",

  // C1
  "case.c1.title": "Mencuri di Kedai Runcit",
  "case.c1.brief":
    "Seseorang ditangkap di kedai runcit dengan makanan yang tidak dibayar. Perbuatannya jelas — tetapi konteks mungkin mengubah hukuman.",
  "case.c1.stmt.0.who": "Juruwang",
  "case.c1.stmt.0.quote":
    "Saya nampak dia selitkan roti di bawah jaket. Tidak cuba bayar pun.",
  "case.c1.stmt.1.who": "Suspek",
  "case.c1.stmt.1.quote":
    "Saya tak makan dua hari. Saya kehilangan kerja minggu lepas. Saya tahu ia salah.",
  "case.c1.stmt.2.who": "Pegawai",
  "case.c1.stmt.2.quote":
    "Kami dah semak: tiada rekod, tiada senjata, nilai barang rendah.",

  "case.c1.ev.cctv.label": "Rakaman CCTV ⭐",
  "case.c1.ev.cctv.short": "Barang diambil tanpa bayar",
  "case.c1.ev.cctv.detail":
    "Rakaman jelas dengan cap masa menunjukkan suspek meletakkan barang dalam jaketnya dan berjalan melepasi juruwang. Tiada kekaburan.",
  "case.c1.ev.no_pay.label": "Tiada bayaran direkodkan ⭐",
  "case.c1.ev.no_pay.short": "Mesin tunai tiada entri",
  "case.c1.ev.no_pay.detail":
    "Mesin tunai dan log resit digital tiada transaksi semasa minit relevan. Barang tidak dibeli.",
  "case.c1.ev.distress.label": "Suspek kelihatan tertekan",
  "case.c1.ev.distress.short": "Kelihatan menggigil, lapar",
  "case.c1.ev.distress.detail":
    "Suspek pucat, menggigil, dan tertekan. Keadaan emosi bukan pembelaan, tetapi boleh berkaitan motif.",
  "case.c1.ev.wallet.label": "Dompet kosong",
  "case.c1.ev.wallet.short": "Tiada wang, tiada kad",
  "case.c1.ev.wallet.detail":
    "Dompet suspek kosong. Bersama keadaan tertekan, ini menunjukkan kesusahan kewangan tulen — relevan dengan hukuman, bukan kesalahan.",
  "case.c1.ev.staff.label": "Keterangan kakitangan",
  "case.c1.ev.staff.short": "Akaun langsung juruwang",
  "case.c1.ev.staff.detail":
    "Keterangan saksi mata langsung dari juruwang. Konsisten dengan CCTV.",

  "case.c1.legal.theft_light": "Kecurian — dengan peringanan",
  "case.c1.legal.theft_light.r":
    "Jenayah jelas terbukti. Lapar, tiada rekod, nilai rendah → hukuman ringan dan restoratif.",
  "case.c1.legal.theft_full": "Kecurian — hukuman penuh",
  "case.c1.legal.theft_full.r":
    "Perbuatan jelas, tetapi mengabaikan konteks menghasilkan hukuman terlalu berat.",
  "case.c1.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.c1.legal.insufficient.r":
    "CCTV dan log mesin tunai membuktikan perbuatan secara langsung. Pilihan ini mengabaikan bukti yang jelas.",

  "case.c1.pun.warning": "Amaran + Kaunseling",
  "case.c1.pun.community": "Khidmat Komuniti + Bayar Balik",
  "case.c1.pun.jail": "Hukuman Penjara",
  "case.c1.realWorld":
    "Kebanyakan bidang kuasa membenarkan majistret mempertimbangkan kesusahan dalam kecurian kecil — undang-undang menghukum perbuatan, belas kasihan membentuk hukuman.",
  "case.c1.standard":
    "Jenayah: 'tanpa keraguan munasabah' — mudah dipenuhi di sini. Penghakiman menimbang konteks.",

  // C2
  "case.c2.title": "Kemalangan di Persimpangan",
  "case.c2.brief":
    "Dua kereta berlanggar di persimpangan. Saksi memberi keterangan bertentangan. Siapa yang bersalah — atau kedua-duanya?",
  "case.c2.stmt.0.who": "Pemandu 1 (kereta merah)",
  "case.c2.stmt.0.quote":
    "Lampu saya hijau. Kereta biru muncul tiba-tiba.",
  "case.c2.stmt.1.who": "Pemandu 2 (kereta biru)",
  "case.c2.stmt.1.quote":
    "Saya yang berhak. Kereta merah langgar lampu merah pada kelajuan penuh.",
  "case.c2.stmt.2.who": "Saksi A",
  "case.c2.stmt.2.quote":
    "Saya pasti Pemandu 1 langgar lampu merah. Saya berada di sana.",
  "case.c2.stmt.3.who": "Saksi B",
  "case.c2.stmt.3.quote":
    "Tidak, kereta biru memandu jauh melebihi had laju. Saya nampak dengan jelas.",

  "case.c2.ev.cars.label": "Dua kereta rosak",
  "case.c2.ev.cars.short": "Kerosakan depan & sisi",
  "case.c2.ev.cars.detail":
    "Kedua kenderaan menunjukkan kerosakan teruk konsisten dengan hentaman laju di tengah persimpangan. Corak kerosakan simetri.",
  "case.c2.ev.light.label": "Lampu isyarat (tidak jelas)",
  "case.c2.ev.light.short": "Glic / kabur",
  "case.c2.ev.light.detail":
    "Isyarat dilaporkan rosak awal hari itu. Tiada video mengesahkan pihak mana hijau pada saat hentaman.",
  "case.c2.ev.witnessA.label": "Keterangan Saksi A",
  "case.c2.ev.witnessA.short": "Salahkan Pemandu 1",
  "case.c2.ev.witnessA.detail":
    "Saksi A yakin — tetapi berdiri pada sudut yang tidak melihat isyarat dengan jelas. Mungkin berat sebelah.",
  "case.c2.ev.witnessB.label": "Keterangan Saksi B",
  "case.c2.ev.witnessB.short": "Salahkan Pemandu 2",
  "case.c2.ev.witnessB.detail":
    "Saksi B juga yakin — tetapi anggaran kelajuannya tidak rasmi, tiada bacaan radar. Bercanggah dengan Saksi A.",
  "case.c2.ev.skid.label": "Kesan brek di jalan ⭐",
  "case.c2.ev.skid.short": "Kesan panjang dari kereta biru",
  "case.c2.ev.skid.detail":
    "Kesan brek panjang dan gelap mengikuti kereta biru — bukti fizikal brek lewat & kuat, menunjukkan kelajuan berlebihan. Kereta merah menunjukkan kesan lebih pendek konsisten dengan tindak balas lewat. Kedua-dua menyumbang.",

  "case.c2.legal.shared": "Tanggungjawab Bersama",
  "case.c2.legal.shared.r":
    "Kesan brek + kerosakan simetri + saksi bercanggah → kedua pemandu menyumbang. Keputusan paling adil.",
  "case.c2.legal.insufficient": "Tidak Cukup Jelas",
  "case.c2.legal.insufficient.r":
    "Boleh diterima: keterangan bercanggah dan keadaan lampu tidak diketahui. Rujuk untuk siasatan lanjut.",
  "case.c2.legal.driver1": "Pemandu 1 sepenuhnya bersalah",
  "case.c2.legal.driver1.r":
    "Menyalahkan satu pihak mengabaikan kesan brek dan saksi bercanggah.",

  "case.c2.pun.mediation": "Pengantaraan antara pemandu",
  "case.c2.pun.shared_fine": "Denda dikongsi + latihan semula",
  "case.c2.pun.license": "Penggantungan lesen (satu pihak)",
  "case.c2.realWorld":
    "Tuntutan insurans selalunya membahagi kesalahan secara peratus apabila bukti bercanggah — jarang 100/0.",
  "case.c2.standard": "Sivil: 'imbangan kebarangkalian,' menilai setiap pihak berasingan.",

  // C3
  "case.c3.title": "Penipuan Pekerjaan Dalam Talian",
  "case.c3.brief":
    "Mangsa dijanjikan kerja bergaji tinggi dan diminta memindahkan wang sebagai 'yuran latihan.' Tertuduh dakwa ia salah faham.",
  "case.c3.stmt.0.who": "Mangsa",
  "case.c3.stmt.0.quote":
    "Mereka janji saya kerja sebenar. Saya hantar wang — kemudian mereka hilang.",
  "case.c3.stmt.1.who": "Tertuduh",
  "case.c3.stmt.1.quote":
    "Salah faham sahaja. Mereka hantar wang sendiri. Saya tidak pernah memaksa.",
  "case.c3.stmt.2.who": "Penyiasat",
  "case.c3.stmt.2.quote":
    "Kami dapatkan sembang dan log bank. 'Syarikat' itu tiada di mana-mana dalam rekod.",

  "case.c3.ev.chat.label": "Sembang menjanjikan kerja ⭐",
  "case.c3.ev.chat.short": "Tawaran kerja eksplisit",
  "case.c3.ev.chat.detail":
    "Log sembang yang disimpan menunjukkan tertuduh menjanjikan kerja 'dijamin' dan menuntut yuran latihan boleh dikembalikan. Ungkapannya tepat dan disengajakan — bukan perbualan kasual.",
  "case.c3.ev.transfer.label": "Mangsa pindah wang ⭐",
  "case.c3.ev.transfer.short": "Pindahan bank disahkan",
  "case.c3.ev.transfer.detail":
    "Rekod bank mengesahkan mangsa memindahkan jumlah besar ke akaun yang dikawal tertuduh. Dana dikeluarkan tunai dalam beberapa jam.",
  "case.c3.ev.contract.label": "Tiada kontrak rasmi",
  "case.c3.ev.contract.short": "Tiada bertulis",
  "case.c3.ev.contract.detail":
    "Tiada kontrak pekerjaan yang ditandatangani, tiada surat tawaran, tiada dokumen rasmi — hanya sembang tidak rasmi. Majikan sebenar meninggalkan jejak kertas.",
  "case.c3.ev.profile.label": "Profil syarikat palsu",
  "case.c3.ev.profile.short": "Tidak berdaftar",
  "case.c3.ev.profile.detail":
    "Halaman 'syarikat' menggunakan logo yang dicuri. Perniagaan tidak berdaftar dalam mana-mana pendaftaran komersial. Tanda jelas pemalsuan.",
  "case.c3.ev.claim.label": "Suspek dakwa salah faham",
  "case.c3.ev.claim.short": "Kenyataan untuk diri sendiri",
  "case.c3.ev.claim.detail":
    "Tertuduh kini berkata mangsa 'salah faham' tawaran. Bercanggah dengan ungkapan jelas dalam sembang — kemungkinan cerita pembelaan.",

  "case.c3.legal.fraud": "Penipuan",
  "case.c3.legal.fraud.r":
    "Janji palsu + pindahan teraruh + syarikat palsu + pengeluaran tunai segera = niat menipu yang jelas. Penipuan klasik.",
  "case.c3.legal.negligence": "Kecuaian Sahaja",
  "case.c3.legal.negligence.r":
    "Kecuaian bermakna kelalaian. Syarikat palsu dan pengeluaran segera menunjukkan niat — lebih dari kecuaian.",
  "case.c3.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.c3.legal.insufficient.r":
    "Sembang + pindahan + syarikat palsu + kenyataan membentuk rantaian yang kuat dan lengkap.",

  "case.c3.pun.fine": "Denda + Gantirugi",
  "case.c3.pun.fine_jail": "Gantirugi + Penjara",
  "case.c3.pun.max": "Hukuman Maksimum",
  "case.c3.realWorld":
    "Kes penipuan kerja biasanya didakwa sebagai penipuan jenayah, dengan perintah gantirugi dan penjara.",
  "case.c3.standard":
    "Jenayah: 'tanpa keraguan munasabah' — mudah dipenuhi dengan sembang + rekod bank.",

  // ============= UI =============
  "case.eval": "Penilaian Mahkamah",
  "case.sound": "⚖ Penghakiman Wajar",
  "case.reconsider": "⚠ Pertimbangkan Semula",
  "case.standardMet": "Penghakiman anda memenuhi piawaian bukti.",
  "case.standardNotMet":
    "Penghakiman anda tidak sepenuhnya memenuhi piawaian bukti.",
  "case.score.evidence": "Bukti",
  "case.score.legal": "Kesesuaian Undang",
  "case.score.verdict": "Penghakiman",
  "case.score.punishment": "Hukuman",
  "case.impact": "Kesan ke atas Masyarakat",
  "case.impact.justice": "Keadilan",
  "case.impact.trust": "Kepercayaan Awam",
  "case.impact.fairness": "Kesaksamaan",
  "case.impact.overall": "Keseluruhan",
  "case.realWorld.show": "Bandingkan dunia sebenar ▾",
  "case.realWorld.hide": "Sembunyikan ▾",
  "case.retry": "↻ Cuba Lagi",
  "case.continue": "Teruskan ▶",
  "case.notFound": "Kes tidak dijumpai",
  "case.back": "Kembali",
  "case.reliable.note":
    "Sumber langsung & boleh disahkan. Selamat ditimbang berat.",
  "case.unreliable.note":
    "Khabar angin atau tidak disahkan. Berhati-hati.",

  // ===== Sumber & Peringatan =====
  "case.s1.ev.empty_desk.detail.more":
    "Sumber: Pemerhatian kakitangan pertama tiba, difoto. Peringatan: garis habuk hanya membuktikan komputer riba pernah di sana — bukan siapa mengambilnya.",
  "case.s1.ev.open_bag.detail.more":
    "Sumber: Pemeriksaan oleh ketua tingkatan. Peringatan: beg terbuka bukan tempat sembunyi; komputer riba tiada di dalam.",
  "case.s1.ev.cable.detail.more":
    "Sumber: Pemeriksaan lantai. Kabel difoto di tempatnya. Peringatan: pencuri yang tergesa-gesa meninggalkan kabel — petanda bukan suspek yang duduk tenang.",
  "case.s1.ev.student.detail.more":
    "Sumber: Letakan saksi. Peringatan: kedekatan bukan tindakan. Tiada siapa nampak mereka menyentuh komputer.",
  "case.s1.ev.window.detail.more":
    "Sumber: Pengesahan penjaga bahawa tingkap dibuka sejak waktu makan. Peringatan: akses tingkat bawah membuka banyak suspek alternatif.",

  "case.s2.ev.answers.detail.more":
    "Sumber: Kedua kertas dibandingkan oleh dua pemeriksa. Peringatan: jawapan betul yang sama ≠ meniru. Tiada jawapan salah yang sama.",
  "case.s2.ev.seating.detail.more":
    "Sumber: Carta tempat duduk rasmi. Peringatan: susunan biasa — bukan dipilih pelajar.",
  "case.s2.ev.glance.detail.more":
    "Sumber: Ingatan pengawas sahaja. Peringatan: sudut & jarak menjadikan 'nampak kertas' tidak mungkin.",
  "case.s2.ev.invigilator.detail.more":
    "Sumber: Log peperiksaan rasmi. Peringatan: tiada amaran semasa — tuduhan timbul selepas penandaan.",
  "case.s2.ev.rough.detail.more":
    "Sumber: Nota pelajaran tutor. Peringatan: persiapan bersama mudah hasilkan kerja serupa.",

  "case.s3.ev.glass.detail.more":
    "Sumber: Foto corak serpihan. Peringatan: serpihan tersebar ke dalam → hentaman dari luar.",
  "case.s3.ev.ball.detail.more":
    "Sumber: Item dilog di pejabat disiplin. Peringatan: tiada tanda, tiada pemilik dikenal pasti, tiada cap jari diambil.",
  "case.s3.ev.group.detail.more":
    "Sumber: Pemerhatian kakitangan ketika tiba. Peringatan: penonton, bukan pelaku. Tiada siapa dilihat menendang.",
  "case.s3.ev.nervous.detail.more":
    "Sumber: Tanggapan subjektif. Peringatan: gementar di bawah tuduhan adalah normal — bukan bukti.",
  "case.s3.ev.witness.detail.more":
    "Sumber: Tinjauan koridor & CCTV. Peringatan: tiada saksi, tiada sudut kamera meliputi perbuatan.",

  "case.c1.ev.cctv.detail.more":
    "Sumber: CCTV kedai dengan cap masa. Peringatan: rakaman jelas dan berterusan — rantaian penjagaan terpelihara.",
  "case.c1.ev.no_pay.detail.more":
    "Sumber: Log transaksi titik jualan. Peringatan: sepadan dengan CCTV minit demi minit.",
  "case.c1.ev.distress.detail.more":
    "Sumber: Pemerhatian kamera badan pegawai. Peringatan: keadaan minda berkaitan motif, bukan sama ada perbuatan berlaku.",
  "case.c1.ev.wallet.detail.more":
    "Sumber: Inventori semasa pendaftaran. Peringatan: dompet kosong adalah konteks peringanan, bukan pembelaan.",
  "case.c1.ev.staff.detail.more":
    "Sumber: Kenyataan bersumpah juruwang. Peringatan: konsisten dengan CCTV — sokongan kuat.",

  "case.c2.ev.cars.detail.more":
    "Sumber: Foto tempat kejadian oleh pegawai. Peringatan: kerosakan simetri menunjukkan kedua kenderaan bergerak laju.",
  "case.c2.ev.light.detail.more":
    "Sumber: Log penyelenggaraan majlis menunjukkan laporan kerosakan awal hari itu. Peringatan: tiada video membuktikan warna semasa hentaman.",
  "case.c2.ev.witnessA.detail.more":
    "Sumber: Kenyataan tepi jalan. Peringatan: sudut tidak memberi pandangan jelas isyarat.",
  "case.c2.ev.witnessB.detail.more":
    "Sumber: Kenyataan tepi jalan. Peringatan: anggaran kelajuan tidak rasmi; tiada bacaan radar.",
  "case.c2.ev.skid.detail.more":
    "Sumber: Pengukuran forensik panjang kesan brek. Peringatan: bukti fizikal — jauh lebih kuat dari ingatan.",

  "case.c3.ev.chat.detail.more":
    "Sumber: Eksport telefon dengan hash dipelihara. Peringatan: ungkapan tepat — bukan salah faham kasual.",
  "case.c3.ev.transfer.detail.more":
    "Sumber: Penyata bank rasmi. Peringatan: pengeluaran tunai pantas adalah penunjuk klasik niat.",
  "case.c3.ev.contract.detail.more":
    "Sumber: Carian rekod & e-mel mangsa. Peringatan: majikan sebenar selalu menyediakan terma bertulis.",
  "case.c3.ev.profile.detail.more":
    "Sumber: Semakan pendaftaran komersial + carian imej terbalik. Peringatan: logo dicuri membuktikan pemalsuan.",
  "case.c3.ev.claim.detail.more":
    "Sumber: Kenyataan tertuduh kepada penyiasat. Peringatan: bercanggah dengan ungkapan eksplisit dalam sembang.",
};

export const CASE_DICT: Record<Lang, Dict> = { en: EN, zh: ZH, ms: MS };
