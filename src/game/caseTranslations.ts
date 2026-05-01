import type { Lang } from "./SettingsContext";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Dict = Record<string, string>;

/**
 * Chapter & case translations for the 5-chapter Malaysian narrative.
 * Setting: Kuala Lumpur. Player = trainee at Special Case Investigation Unit.
 *
 * Ch1 — The Silent Classroom: bullying, secret recording, distribution
 * Ch2 — The Missing Exam Papers: leak, fraud, computer crime
 * Ch3 — The Manipulated Truth: deepfake defamation, cyberbullying
 * Ch4 — Shadow Network: blackmail ring, illegal recording syndicate
 * Ch5 — Web of the Abyss: trafficking, drugs, murder, money laundering
 */

// ============================================================
// ENGLISH
// ============================================================
const EN: Dict = {
  // ---------- Chapter cards (QuestScreen) ----------
  "chapter.ch1.title": "Silent Classroom",
  "chapter.ch1.sub": "Bullying · Secret Recording · Distribution",
  "chapter.ch1.lvl": "Ch.1 · School Arc · Intro",
  "chapter.ch2.title": "Missing Exam Papers",
  "chapter.ch2.sub": "Leak · Fraud · Computer Crime",
  "chapter.ch2.lvl": "Ch.2 · School Arc · Intermediate",
  "chapter.ch3.title": "The Manipulated Truth",
  "chapter.ch3.sub": "Deepfake · Defamation · Cyberbullying",
  "chapter.ch3.lvl": "Ch.3 · Society Arc",
  "chapter.ch4.title": "Shadow Network",
  "chapter.ch4.sub": "Blackmail · Illegal Recording Ring",
  "chapter.ch4.lvl": "Ch.4 · Main Story · Advanced",
  "chapter.ch5.title": "Web of the Abyss",
  "chapter.ch5.sub": "Trafficking · Drugs · Murder",
  "chapter.ch5.lvl": "Ch.5 · Final Boss",

  // ============================================================
  // CH.1 — The Silent Classroom
  // ============================================================
  "case.ch1.title": "The Silent Classroom",
  "case.ch1.brief":
    "A secondary school student in Kuala Lumpur, Lin Zixuan (16), was found in the restroom in a mental breakdown. A suspicious video was discovered on his phone. You — a trainee from the Special Case Investigation Unit — must determine whether this is bullying, sexual harassment, or a chain of crimes.",
  "case.ch1.stmt.0.who": "Ms. Li (Homeroom Teacher)",
  "case.ch1.stmt.0.quote":
    "He hasn't been acting like himself lately… stopped talking, avoided eye contact, started skipping class. I thought it was just stress.",
  "case.ch1.stmt.1.who": "Chen Junhao (17, Suspect A)",
  "case.ch1.stmt.1.quote":
    "Everyone jokes around like this. He's just too sensitive. We didn't think it would go this far.",
  "case.ch1.stmt.2.who": "Wang Kai (16, Suspect B)",
  "case.ch1.stmt.2.quote":
    "I only recorded the video. I didn't hit him! I never told anyone to share it.",
  "case.ch1.stmt.3.who": "Lin Zixuan (Victim)",
  "case.ch1.stmt.3.quote":
    "They told me to pay or they would post it online. I had nowhere to go.",

  "case.ch1.ev.phone_video.label": "Phone video — bullying ⭐",
  "case.ch1.ev.phone_video.short": "Physical assault + humiliation",
  "case.ch1.ev.phone_video.detail":
    "A 47-second clip on Lin's phone shows Chen pushing him to the ground while others laugh. His shirt is lifted on camera — humiliation that crosses into sexual harassment under Penal Code §509.",
  "case.ch1.ev.chat_logs.label": "WhatsApp chat — extortion ⭐",
  "case.ch1.ev.chat_logs.short": "'Pay us or we post it'",
  "case.ch1.ev.chat_logs.detail":
    "Saved chats: 'Pay RM200 or the video goes to the share group tonight.' Mentions of a 'sharing group' — a structured, knowing demand for money under threat of release.",
  "case.ch1.ev.cctv.label": "CCTV footage — corridor",
  "case.ch1.ev.cctv.short": "Chen striking the victim",
  "case.ch1.ev.cctv.detail":
    "Hallway camera shows Chen Junhao physically attacking Lin during recess. Wang Kai stands nearby, holding his phone steady — clearly recording, not intervening.",
  "case.ch1.ev.cloud_upload.label": "Cloud upload record ⭐",
  "case.ch1.ev.cloud_upload.short": "Video uploaded by Wang Kai",
  "case.ch1.ev.cloud_upload.detail":
    "Forensic recovery shows the same clip uploaded from Wang Kai's account to an anonymous file-share site. Distribution is independent of the original act — a separate offence.",
  "case.ch1.ev.medical.label": "Medical report",
  "case.ch1.ev.medical.short": "Psychological trauma confirmed",
  "case.ch1.ev.medical.detail":
    "Hospital report confirms acute stress reaction, signs of self-harm. Establishes harm under Penal Code §323 and supports the gravity of the offence at sentencing.",
  "case.ch1.ev.teacher_note.label": "Teacher's late note",
  "case.ch1.ev.teacher_note.short": "Vague, written after the fact",
  "case.ch1.ev.teacher_note.detail":
    "Ms. Li's hand-written note mentions 'long-term changes' but no dates, no incidents reported. Useful context, but cannot ground a conviction on its own.",

  "case.ch1.legal.criminal_assault":
    "Criminal Assault + §509 + CMA §233",
  "case.ch1.legal.criminal_assault.r":
    "Physical attack (§323), humiliation/sexual harassment (§509), and online distribution of obscene content (CMA §233) all proven by direct evidence. Chen and Wang each face their own charges.",
  "case.ch1.legal.school_discipline": "School Discipline Only",
  "case.ch1.legal.school_discipline.r":
    "Treating recorded assault + extortion + online distribution as merely a school matter ignores criminal evidence and lets the harm continue.",
  "case.ch1.legal.insufficient": "Insufficient Evidence",
  "case.ch1.legal.insufficient.r":
    "Phone video, chats, CCTV, upload logs and medical report form a strong, independent chain. There is no evidence gap.",

  "case.ch1.pun.discipline_only": "Suspension + Counselling",
  "case.ch1.pun.detention_counsel":
    "Detention + Community Service + Mandatory Counselling",
  "case.ch1.pun.max_custodial": "Maximum Custodial Sentence",

  "case.ch1.realWorld":
    "Malaysia: Penal Code §323 (causing hurt), §384 (extortion), §509 (insult of modesty), and Communications & Multimedia Act 1998 §233 (improper online content). Schools also bear administrative duty.",
  "case.ch1.standard":
    "'Beyond reasonable doubt' for criminal charges. Direct video + chats + CCTV easily meet it.",

  // ============================================================
  // CH.2 — The Missing Exam Papers
  // ============================================================
  "case.ch2.title": "The Missing Exam Papers",
  "case.ch2.brief":
    "Several students suddenly score full marks. Social posts boast 'predicted questions all came out exactly.' The school suspects an exam paper leak — but who stole the papers, who sold them, and were grades tampered with after?",
  "case.ch2.stmt.0.who": "Mr. Lin (Exam Coordinator)",
  "case.ch2.stmt.0.quote":
    "I lock the papers every night. I don't know how they got out. I — I may have forgotten to lock the lab once.",
  "case.ch2.stmt.1.who": "Zhang Wei (17, Suspect A)",
  "case.ch2.stmt.1.quote":
    "I was just helping classmates revise. The transfers were for tuition notes, not for exam papers.",
  "case.ch2.stmt.2.who": "Ah Ming (16, Suspect B · IT Club)",
  "case.ch2.stmt.2.quote":
    "I only checked the system. I didn't take anything. Anyone could have logged in.",
  "case.ch2.stmt.3.who": "Chen Meiling (17, Top Student)",
  "case.ch2.stmt.3.quote":
    "Yes, someone offered me the questions. I refused. I will testify to that.",

  "case.ch2.ev.login_log.label": "Computer login record",
  "case.ch2.ev.login_log.short": "Midnight login from school lab",
  "case.ch2.ev.login_log.detail":
    "Server log shows a login at 02:14 from a school lab terminal, three days before the exam. Account: Mr. Lin's — but Mr. Lin was at home. A student must have used his cached credentials.",
  "case.ch2.ev.usb_record.label": "USB device record ⭐",
  "case.ch2.ev.usb_record.short": "Ah Ming's USB inserted",
  "case.ch2.ev.usb_record.detail":
    "USB serial number on the lab PC matches a device registered to Ah Ming for IT Club use. Files copied at 02:18 — three minutes after the suspicious login. He is the one who actually took the papers.",
  "case.ch2.ev.transactions.label": "Transaction records ⭐",
  "case.ch2.ev.transactions.short": "'RM200 per paper'",
  "case.ch2.ev.transactions.detail":
    "Chat: 'RM200 per paper, want? Guaranteed original questions.' Multiple buyers replied. This is fraud — a paid offer of stolen material.",
  "case.ch2.ev.ewallet.label": "E-wallet receipts",
  "case.ch2.ev.ewallet.short": "Zhang Wei collected payments",
  "case.ch2.ev.ewallet.detail":
    "Touch 'n Go and DuitNow logs show Zhang Wei received RM200–RM400 from at least seven students in the days before the exam. He is the seller / middleman — not the source.",
  "case.ch2.ev.grade_edit.label": "Tampered grade record",
  "case.ch2.ev.grade_edit.short": "Two scores altered after marking",
  "case.ch2.ev.grade_edit.detail":
    "Audit trail of the grade-management system shows two grades edited after submission, from the same lab IP. Falsification + computer crime — a separate offence beyond the leak.",
  "case.ch2.ev.rumor.label": "Common-room rumour",
  "case.ch2.ev.rumor.short": "'Mr. Lin sold them'",
  "case.ch2.ev.rumor.detail":
    "Several students 'heard' Mr. Lin himself was selling papers. No source, no proof — contradicted by the login + USB chain. Hearsay only.",

  "case.ch2.legal.computer_crime":
    "Computer Crime + Theft + Fraud",
  "case.ch2.legal.computer_crime.r":
    "Unauthorised system access (Computer Crimes Act 1997) + theft of exam papers (§379) + paid sale of stolen material (§420) + grade tampering. Ah Ming = mastermind, Zhang Wei = seller.",
  "case.ch2.legal.fraud_only": "Fraud Only",
  "case.ch2.legal.fraud_only.r":
    "Selling is fraud, but ignoring the unauthorised system access misses the real source — Ah Ming, the one who actually took the papers.",
  "case.ch2.legal.discipline":
    "School Discipline Only",
  "case.ch2.legal.discipline.r":
    "Theft of exam papers and tampering with the grading system are criminal offences in Malaysia, not just school misconduct.",

  "case.ch2.pun.discipline_only": "Suspension + Re-sit",
  "case.ch2.pun.fine_jail_short": "Fine + Short Custodial + Disciplinary",
  "case.ch2.pun.max_jail": "Maximum Imprisonment",

  "case.ch2.realWorld":
    "Malaysia: Penal Code §379 (theft), §420 (cheating/fraud), Computer Crimes Act 1997 §3–§5 (unauthorised access). Buyers usually face disciplinary action, not criminal charges.",
  "case.ch2.standard":
    "'Beyond reasonable doubt' for criminal charges. The USB record + login log + payments form a closed chain of evidence.",

  // ============================================================
  // CH.3 — The Manipulated Truth
  // ============================================================
  "case.ch3.title": "The Manipulated Truth",
  "case.ch3.brief":
    "An influencer in KL, Zhou Jing (22), is destroyed online by a viral 'intimate video.' She insists it isn't her — and the visuals look strange. Is this real, a deepfake, or a coordinated takedown by a rival?",
  "case.ch3.stmt.0.who": "Zhou Jing (Victim)",
  "case.ch3.stmt.0.quote":
    "That isn't me. I have never met that person. Everyone now believes a lie.",
  "case.ch3.stmt.1.who": "Liu Kai (Rival Influencer)",
  "case.ch3.stmt.1.quote":
    "We just hired an editor for some collaboration content. I have nothing to do with that video.",
  "case.ch3.stmt.2.who": "IT Technician (Freelancer)",
  "case.ch3.stmt.2.quote":
    "I was hired to do 'face-swap edits.' I asked no questions. The client said it was a parody.",
  "case.ch3.stmt.3.who": "Anonymous Account",
  "case.ch3.stmt.3.quote":
    "(Account first uploaded the video — IP traced to a Subang internet café used by Liu Kai's assistant.)",

  "case.ch3.ev.video_analysis.label": "Forensic video analysis ⭐",
  "case.ch3.ev.video_analysis.short": "Deepfake artefacts confirmed",
  "case.ch3.ev.video_analysis.detail":
    "Frame-by-frame report: facial blending artefacts at the jawline, lighting inconsistent with the body, ear-shape mismatch. The face is digitally swapped — high confidence this is a deepfake.",
  "case.ch3.ev.server_log.label": "Server upload log",
  "case.ch3.ev.server_log.short": "First upload from Subang café",
  "case.ch3.ev.server_log.detail":
    "First publication traced to an internet café in Subang. CCTV at the café shows Liu Kai's personal assistant at that terminal during the exact window.",
  "case.ch3.ev.chat_proof.label": "Commissioning chats ⭐",
  "case.ch3.ev.chat_proof.short": "'Make it look very real'",
  "case.ch3.ev.chat_proof.detail":
    "Telegram chats between Liu Kai and the IT technician: 'Use her face. Make it look very real. We need it before her brand deal next week.' Direct, knowing commission.",
  "case.ch3.ev.money_trail.label": "Payment to technician ⭐",
  "case.ch3.ev.money_trail.short": "RM3,000 from Liu Kai",
  "case.ch3.ev.money_trail.detail":
    "Bank trail shows RM3,000 from Liu Kai's account to the IT technician one day before the upload. Memo: 'edit job.' Establishes the financial link.",
  "case.ch3.ev.spread_map.label": "Distribution map",
  "case.ch3.ev.spread_map.short": "Coordinated re-uploads",
  "case.ch3.ev.spread_map.detail":
    "Same clip re-uploaded by 14 newly-created accounts within 30 minutes. Coordinated amplification — not organic spread.",
  "case.ch3.ev.comments.label": "Hostile comment threads",
  "case.ch3.ev.comments.short": "Public outrage",
  "case.ch3.ev.comments.detail":
    "Thousands of hostile comments. Public reaction is loud, but unverified opinion — not evidence of what actually happened.",

  "case.ch3.legal.defamation_233":
    "Defamation §499 + CMA §233 + Distribution",
  "case.ch3.legal.defamation_233.r":
    "Knowingly fabricated content + commissioned creation + paid distribution = criminal defamation under §499 and improper online content under CMA §233. Liu = principal, technician = accomplice.",
  "case.ch3.legal.free_speech": "Protected by Free Speech",
  "case.ch3.legal.free_speech.r":
    "Free speech does not protect knowingly false, fabricated content created to harm another person. The chats show clear intent.",
  "case.ch3.legal.civil_only": "Civil Suit Only",
  "case.ch3.legal.civil_only.r":
    "Civil damages alone leave the criminal conduct unpunished. Malaysia treats this as a criminal matter, especially with CMA §233 engaged.",

  "case.ch3.pun.fine_only": "Fine + Public Apology",
  "case.ch3.pun.fine_jail_takedown":
    "Fine + Jail Term + Mandatory Takedown",
  "case.ch3.pun.max_jail": "Maximum Imprisonment",

  "case.ch3.realWorld":
    "Malaysia: Penal Code §499 (defamation), CMA §233 (improper content). Platforms can be ordered to remove content. Sharers who knew it was false may also be liable.",
  "case.ch3.standard":
    "'Beyond reasonable doubt' for criminal defamation. Forensic deepfake report + payment trail + chats meet the standard.",

  // ============================================================
  // CH.4 — Shadow Network (Main Story)
  // ============================================================
  "case.ch4.title": "Shadow Network",
  "case.ch4.brief":
    "Files seized from Ch.3's IT technician reveal a categorised library of secret recordings — labelled 'Students,' 'Couples,' 'VIP.' They are being sold and used to extort victims. You must prove this is organised crime, not a one-man operation.",
  "case.ch4.stmt.0.who": "Ah Ming (Informant, from Ch.2)",
  "case.ch4.stmt.0.quote":
    "I was paid in crypto to upload videos to a folder. I never met the boss. They called him 'Ray.' Ray is just a middle agent.",
  "case.ch4.stmt.1.who": "Ray (Underground Trader)",
  "case.ch4.stmt.1.quote":
    "I'm just a freelancer. People send me files, I list them. Whatever happens after, that's not on me.",
  "case.ch4.stmt.2.who": "Student Victim",
  "case.ch4.stmt.2.quote":
    "They sent me a clip of myself and said: pay weekly, or your family sees it. Then they made me deliver packages.",
  "case.ch4.stmt.3.who": "Cyber-forensic Officer",
  "case.ch4.stmt.3.quote":
    "Same wallet receives all the payments. Same upload pattern across 200+ files. This is one operation.",

  "case.ch4.ev.video_db.label": "Categorised video database ⭐",
  "case.ch4.ev.video_db.short": "Tagged 'Students/Couples/VIP'",
  "case.ch4.ev.video_db.detail":
    "Database of 200+ secret recordings, organised in folders with price tags and 'client' notes. The structure shows industrial scale — not a hobbyist.",
  "case.ch4.ev.crypto_wallet.label": "Crypto wallet ledger ⭐",
  "case.ch4.ev.crypto_wallet.short": "All payments → one wallet",
  "case.ch4.ev.crypto_wallet.detail":
    "Blockchain analysis: every buyer and every extortion victim ultimately funnels into the same controller wallet within 48 hours. One operation, many faces.",
  "case.ch4.ev.extort_msgs.label": "Extortion messages",
  "case.ch4.ev.extort_msgs.short": "Threats with proof of clip",
  "case.ch4.ev.extort_msgs.detail":
    "Recovered messages: 'Pay weekly or your family gets the link.' Each message includes a thumbnail of the victim. Textbook §384 extortion.",
  "case.ch4.ev.encrypted_chat.label": "Encrypted operator chat",
  "case.ch4.ev.encrypted_chat.short": "Chain of command revealed",
  "case.ch4.ev.encrypted_chat.detail":
    "Decrypted Signal logs show Ray taking orders from a higher account ('boss'), assigning uploads to Ah Ming, payouts to runners. Hierarchy is clear.",
  "case.ch4.ev.ip_chain.label": "IP rerouting chain ⭐",
  "case.ch4.ev.ip_chain.short": "VPN bounces back to KL",
  "case.ch4.ev.ip_chain.detail":
    "After three VPN hops, the operator endpoint resolves to a serviced office in KL Sentral leased by a shell company. Anonymity is a costume — not a defence.",
  "case.ch4.ev.anon_tip.label": "Anonymous tip-off",
  "case.ch4.ev.anon_tip.short": "Names a public figure",
  "case.ch4.ev.anon_tip.detail":
    "Walk-in tip from an unverified caller naming a businessman as 'the boss.' Suggestive but uncorroborated — cannot ground charges by itself.",

  "case.ch4.legal.organised_crime":
    "Organised Crime: Extortion + Distribution + Recording",
  "case.ch4.legal.organised_crime.r":
    "§384 (extortion), §292 (distribution of obscene material), CMA §233, plus organised-crime aggravators. The chain — wallet, hierarchy, IP — proves a syndicate, not an individual.",
  "case.ch4.legal.individual_only": "Individual Offences Only",
  "case.ch4.legal.individual_only.r":
    "Charging only Ray ignores the wallet ledger and the chain of command. The structure is the offence.",
  "case.ch4.legal.civil_dispute": "Civil Privacy Dispute",
  "case.ch4.legal.civil_dispute.r":
    "Extortion + organised distribution of obscene content are criminal — civil suits do not match the conduct.",

  "case.ch4.pun.fine_jail": "Fine + Jail Term",
  "case.ch4.pun.long_jail": "Long Custodial + Asset Seizure",
  "case.ch4.pun.max_life": "Life Imprisonment",

  "case.ch4.realWorld":
    "Malaysia: Penal Code §384 (extortion), §292 (obscene material), CMA §233; organised crime adds aggravators under SOSMA. Asset seizure is standard.",
  "case.ch4.standard":
    "'Beyond reasonable doubt' for criminal charges. Wallet trail + decrypted hierarchy chats meet it for the network as a whole.",

  // ============================================================
  // CH.5 — Web of the Abyss (Final Boss)
  // ============================================================
  "case.ch5.title": "Web of the Abyss",
  "case.ch5.brief":
    "All threads converge on one man — a celebrated KL philanthropist. Behind the foundations and charity galas lies a chain: secret recording → blackmail → forced criminal acts → drug trafficking and worse. You must decide: arrest now with what you have, or wait and risk more victims.",
  "case.ch5.stmt.0.who": "The Boss (Philanthropist)",
  "case.ch5.stmt.0.quote":
    "I fund schools and shelters. These accusations are politically motivated. I have never met any of these people.",
  "case.ch5.stmt.1.who": "Forensic Accountant",
  "case.ch5.stmt.1.quote":
    "The charity foundation cleans the wallet. RM47 million has cycled through fake invoices in 18 months.",
  "case.ch5.stmt.2.who": "Rescued Witness",
  "case.ch5.stmt.2.quote":
    "I saw him at the warehouse. He chose which of us would 'travel.' He gave the order. I will testify in court.",
  "case.ch5.stmt.3.who": "Anti-Trafficking Officer",
  "case.ch5.stmt.3.quote":
    "ATIPSOM, Dangerous Drugs Act, and §302 are all on the table. We need every link airtight.",

  "case.ch5.ev.laundering_ledger.label": "Laundering ledger ⭐",
  "case.ch5.ev.laundering_ledger.short": "Foundation → wallet trail",
  "case.ch5.ev.laundering_ledger.detail":
    "Internal ledger seized at the foundation HQ shows RM47M cycled through fake 'consulting' invoices into the same wallet from Ch.4. The boss's signature appears on 31 of them.",
  "case.ch5.ev.shell_contracts.label": "Shell company contracts",
  "case.ch5.ev.shell_contracts.short": "Three layers of front companies",
  "case.ch5.ev.shell_contracts.detail":
    "Three nested shell companies share the same registered agent, the same secretary, and the same beneficial owner — the boss. Corporate veil is paper-thin.",
  "case.ch5.ev.encrypted_comms.label": "Encrypted command messages ⭐",
  "case.ch5.ev.encrypted_comms.short": "Boss giving direct orders",
  "case.ch5.ev.encrypted_comms.detail":
    "Decrypted messages on a recovered burner phone: 'Move the package tonight.' 'Silence the witness.' Forensic timestamps tie each message to events that actually occurred.",
  "case.ch5.ev.medical_records.label": "Medical records ⭐",
  "case.ch5.ev.medical_records.short": "Trafficking pattern confirmed",
  "case.ch5.ev.medical_records.detail":
    "Records from a private clinic linked to the boss show pre-departure 'health checks' on victims — a documented marker of trafficking.",
  "case.ch5.ev.drug_seizure.label": "Drug seizure inventory ⭐",
  "case.ch5.ev.drug_seizure.short": "Class-A controlled substances",
  "case.ch5.ev.drug_seizure.detail":
    "Warehouse raid: 4.2 kg of methamphetamine, packaged for distribution. Lease and CCTV trace the warehouse to the boss's holding company.",
  "case.ch5.ev.weapon.label": "Recovered firearm",
  "case.ch5.ev.weapon.short": "Linked to the witness murder",
  "case.ch5.ev.weapon.detail":
    "Ballistics match the firearm recovered at the boss's safehouse to the shell that killed the Ch.4 key witness. Murder under §302.",
  "case.ch5.ev.press_clippings.label": "Press clippings",
  "case.ch5.ev.press_clippings.short": "Charity profiles and awards",
  "case.ch5.ev.press_clippings.detail":
    "Glossy profiles describing him as 'the city's quiet benefactor.' Reputation is not evidence — but it explains why no one looked.",

  "case.ch5.legal.syndicate_full":
    "Syndicate: Trafficking + Drugs + Murder + Laundering",
  "case.ch5.legal.syndicate_full.r":
    "ATIPSOM (trafficking), Dangerous Drugs Act 1952 §39B (trafficking), Penal Code §302 (murder), AMLA (laundering). Every link is independently proven and physically corroborated.",
  "case.ch5.legal.money_only": "Money Laundering Only",
  "case.ch5.legal.money_only.r":
    "Charging only the financial offence lets the trafficking, drug, and murder counts go unanswered — the harm continues.",
  "case.ch5.legal.premature_arrest":
    "Premature Arrest (insufficient)",
  "case.ch5.legal.premature_arrest.r":
    "With the ledger, ballistics, drug seizure and live witness, the chain is complete. Waiting longer endangers the rescued witness.",

  "case.ch5.pun.long_jail": "Long Custodial + Asset Seizure",
  "case.ch5.pun.life_imprisonment":
    "Life Imprisonment + Full Asset Forfeiture",
  "case.ch5.pun.max_capital": "Capital Sentence (where applicable)",

  "case.ch5.realWorld":
    "Malaysia: ATIPSOM 2007, Dangerous Drugs Act 1952 §39B (trafficking — life or death penalty), Penal Code §302 (murder), Anti-Money Laundering Act. Convictions require an unbroken chain — exactly what the player builds.",
  "case.ch5.standard":
    "'Beyond reasonable doubt' for every count. The forensic ledger, ballistics, recovered drugs and witness together meet it.",

  // ============================================================
  // Generic feedback / impact UI strings (kept as before)
  // ============================================================
  "case.eval": "Court Evaluation",
  "case.sound": "⚖ Sound Judgement",
  "case.reconsider": "⚠ Reconsider Reasoning",
  "case.standardMet": "Your verdict meets the standard of proof.",
  "case.standardNotMet":
    "Your verdict does not fully meet the standard of proof.",
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
};

// ============================================================
// 中文 (Simplified Chinese)
// ============================================================
const ZH: Dict = {
  "chapter.ch1.title": "沉默的教室",
  "chapter.ch1.sub": "霸凌 · 偷拍 · 散布",
  "chapter.ch1.lvl": "第1章 · 校园篇 · 入门",
  "chapter.ch2.title": "失踪的考卷",
  "chapter.ch2.sub": "泄题 · 欺诈 · 计算机犯罪",
  "chapter.ch2.lvl": "第2章 · 校园篇 · 中级",
  "chapter.ch3.title": "被操纵的真相",
  "chapter.ch3.sub": "深伪 · 诽谤 · 网络霸凌",
  "chapter.ch3.lvl": "第3章 · 社会篇",
  "chapter.ch4.title": "暗影网络",
  "chapter.ch4.sub": "勒索 · 偷拍集团",
  "chapter.ch4.lvl": "第4章 · 主线 · 进阶",
  "chapter.ch5.title": "深渊之网",
  "chapter.ch5.sub": "贩运 · 毒品 · 谋杀",
  "chapter.ch5.lvl": "第5章 · 最终关",

  // CH.1
  "case.ch1.title": "沉默的教室",
  "case.ch1.brief":
    "吉隆坡一名中学生林子轩（16岁）在厕所被发现精神崩溃，手机里有可疑视频。你——特别案件调查组的实习员——必须判断这是霸凌、性骚扰，还是一连串的犯罪。",
  "case.ch1.stmt.0.who": "李老师（班主任）",
  "case.ch1.stmt.0.quote":
    "他最近不太对劲……不说话、避免眼神接触、开始旷课。我以为只是压力大。",
  "case.ch1.stmt.1.who": "陈俊豪（17岁，嫌疑人A）",
  "case.ch1.stmt.1.quote":
    "大家都这样开玩笑。他只是太敏感。我们没想到事情会闹到这地步。",
  "case.ch1.stmt.2.who": "王凯（16岁，嫌疑人B）",
  "case.ch1.stmt.2.quote":
    "我只是录像，没动手！我也没叫人转发。",
  "case.ch1.stmt.3.who": "林子轩（受害者）",
  "case.ch1.stmt.3.quote":
    "他们说不给钱就把视频发上网。我无处可逃。",

  "case.ch1.ev.phone_video.label": "手机视频 — 霸凌 ⭐",
  "case.ch1.ev.phone_video.short": "肢体攻击 + 羞辱",
  "case.ch1.ev.phone_video.detail":
    "林手机里 47 秒的片段：陈把他推倒在地，其他人嘲笑。镜头还故意掀起他的衣服——已构成《刑法典》第509条性骚扰。",
  "case.ch1.ev.chat_logs.label": "WhatsApp 聊天记录 — 勒索 ⭐",
  "case.ch1.ev.chat_logs.short": "“给钱否则上传”",
  "case.ch1.ev.chat_logs.detail":
    "聊天：“今晚给RM200，否则视频丢去转发群。”有“分享群”——结构化、明知的胁迫取财。",
  "case.ch1.ev.cctv.label": "走廊监控录像",
  "case.ch1.ev.cctv.short": "陈殴打受害者",
  "case.ch1.ev.cctv.detail":
    "走廊监控显示陈俊豪在课间殴打林。王凯站在旁边稳稳举着手机——明显在录像，没有制止。",
  "case.ch1.ev.cloud_upload.label": "云端上传记录 ⭐",
  "case.ch1.ev.cloud_upload.short": "王凯上传视频",
  "case.ch1.ev.cloud_upload.detail":
    "取证恢复显示同一片段从王凯的账户上传至匿名档案站。散布是独立罪行，与原始行为分开。",
  "case.ch1.ev.medical.label": "医疗报告",
  "case.ch1.ev.medical.short": "心理创伤已确认",
  "case.ch1.ev.medical.detail":
    "医院报告确认急性应激反应、自残迹象。佐证《刑法典》第323条之伤害，并影响量刑。",
  "case.ch1.ev.teacher_note.label": "老师事后记录",
  "case.ch1.ev.teacher_note.short": "模糊、事后补写",
  "case.ch1.ev.teacher_note.detail":
    "李老师手写的纪录提到“长期变化”，但无日期、无具体事件。可作背景，但不能单独定罪。",

  "case.ch1.legal.criminal_assault": "刑事伤害 + 第509条 + CMA第233条",
  "case.ch1.legal.criminal_assault.r":
    "肢体攻击（323）、羞辱/性骚扰（509）、网络散布淫亵内容（CMA 233）皆有直接证据。陈与王各自承担相应罪行。",
  "case.ch1.legal.school_discipline": "仅校内纪律处分",
  "case.ch1.legal.school_discipline.r":
    "把录像殴打+勒索+散布当成校内问题处理，等于忽视刑事证据并放任伤害继续。",
  "case.ch1.legal.insufficient": "证据不足",
  "case.ch1.legal.insufficient.r":
    "手机视频、聊天、监控、上传记录、医疗报告构成完整链条，并无证据缺口。",

  "case.ch1.pun.discipline_only": "停学 + 辅导",
  "case.ch1.pun.detention_counsel": "拘留 + 社区服务 + 强制辅导",
  "case.ch1.pun.max_custodial": "最重监禁",

  "case.ch1.realWorld":
    "马来西亚：刑法典323（伤害）、384（勒索）、509（侮辱端庄）、《1998通讯与多媒体法》第233条（不当网络内容）。学校亦负行政责任。",
  "case.ch1.standard":
    "刑事采“排除合理怀疑”。直接视频+聊天+监控可轻松达到。",

  // CH.2
  "case.ch2.title": "失踪的考卷",
  "case.ch2.brief":
    "几名学生突然全科满分，社交媒体上还炫耀“押题全中”。学校怀疑泄题——但谁拿走考卷？谁卖出去？事后是否还篡改了成绩？",
  "case.ch2.stmt.0.who": "林老师（考务主任）",
  "case.ch2.stmt.0.quote":
    "我每晚都锁考卷。我不知怎么会外流。我……可能有一次忘了锁电脑室。",
  "case.ch2.stmt.1.who": "张伟（17岁，嫌疑人A）",
  "case.ch2.stmt.1.quote":
    "我只是帮同学复习。转账是补习笔记，不是考卷。",
  "case.ch2.stmt.2.who": "阿明（16岁，嫌疑人B · IT社）",
  "case.ch2.stmt.2.quote":
    "我只是检查系统，没拿任何东西。任何人都能登录。",
  "case.ch2.stmt.3.who": "陈美玲（17岁，尖子生）",
  "case.ch2.stmt.3.quote":
    "对，有人卖给我考题，我拒绝了。我愿意作证。",

  "case.ch2.ev.login_log.label": "电脑登录记录",
  "case.ch2.ev.login_log.short": "凌晨从校内电脑室登录",
  "case.ch2.ev.login_log.detail":
    "考前三天凌晨2:14，从校内电脑室终端登录。账户为林老师——但他在家。学生用了缓存的凭据。",
  "case.ch2.ev.usb_record.label": "USB设备记录 ⭐",
  "case.ch2.ev.usb_record.short": "阿明的USB插入",
  "case.ch2.ev.usb_record.detail":
    "电脑上记录的USB序列号与阿明在IT社注册的设备一致。2:18复制档案——可疑登录后三分钟。他才是真正拿走考卷的人。",
  "case.ch2.ev.transactions.label": "交易记录 ⭐",
  "case.ch2.ev.transactions.short": "“一份RM200”",
  "case.ch2.ev.transactions.detail":
    "聊天：“一份RM200，要吗？保证原题。”多名买家回应。这是欺诈——付费出售赃物。",
  "case.ch2.ev.ewallet.label": "电子钱包收据",
  "case.ch2.ev.ewallet.short": "张伟收款",
  "case.ch2.ev.ewallet.detail":
    "Touch'n Go 与 DuitNow 记录显示考前数日，张伟从至少七名学生收到 RM200–RM400。他是中间卖家，不是源头。",
  "case.ch2.ev.grade_edit.label": "成绩篡改记录",
  "case.ch2.ev.grade_edit.short": "两笔成绩被改",
  "case.ch2.ev.grade_edit.detail":
    "成绩管理系统的审计日志显示两笔成绩在提交后被修改，IP同样来自电脑室。学术造假+计算机犯罪——独立罪行。",
  "case.ch2.ev.rumor.label": "茶水间传言",
  "case.ch2.ev.rumor.short": "“是林老师卖的”",
  "case.ch2.ev.rumor.detail":
    "几位学生“听说”林老师自己卖考卷，无来源、无证据，且与登录+USB链相反。仅为传闻。",

  "case.ch2.legal.computer_crime": "计算机犯罪 + 盗窃 + 欺诈",
  "case.ch2.legal.computer_crime.r":
    "未授权访问（1997计算机犯罪法）+ 盗窃考卷（379）+ 售卖赃物（420）+ 篡改成绩。阿明=主谋，张伟=卖家。",
  "case.ch2.legal.fraud_only": "仅欺诈",
  "case.ch2.legal.fraud_only.r":
    "出售构成欺诈，但忽略未授权访问就漏掉了真正的源头——拿走考卷的阿明。",
  "case.ch2.legal.discipline": "仅校内纪律",
  "case.ch2.legal.discipline.r":
    "盗窃考卷与篡改成绩在马来西亚属刑事罪行，不只是校内违规。",

  "case.ch2.pun.discipline_only": "停学 + 重考",
  "case.ch2.pun.fine_jail_short": "罚款 + 短期监禁 + 纪律处分",
  "case.ch2.pun.max_jail": "最长监禁",

  "case.ch2.realWorld":
    "马来西亚：刑法典379（盗窃）、420（欺诈），1997计算机犯罪法第3–5条（未授权访问）。买家通常受纪律处分，非刑事追究。",
  "case.ch2.standard":
    "刑事采“排除合理怀疑”。USB+登录日志+付款形成闭环。",

  // CH.3
  "case.ch3.title": "被操纵的真相",
  "case.ch3.brief":
    "吉隆坡网红周静（22岁）被一段疯传的“私密视频”打垮。她坚称那不是她，画面也确实奇怪。这是真实、深伪，还是竞争对手的协调打击？",
  "case.ch3.stmt.0.who": "周静（受害者）",
  "case.ch3.stmt.0.quote":
    "那不是我。我从没见过那个人。所有人现在都相信谎言。",
  "case.ch3.stmt.1.who": "刘凯（竞争对手网红）",
  "case.ch3.stmt.1.quote":
    "我们只是请了个剪辑师做合作内容。和那段视频无关。",
  "case.ch3.stmt.2.who": "IT技术员（自由职业者）",
  "case.ch3.stmt.2.quote":
    "我接的是“换脸剪辑”活，没问问题。客户说是恶搞。",
  "case.ch3.stmt.3.who": "匿名账号",
  "case.ch3.stmt.3.quote":
    "（首次上传该视频的账号——IP追溯至刘凯助理常去的梳邦网吧。）",

  "case.ch3.ev.video_analysis.label": "视频取证分析 ⭐",
  "case.ch3.ev.video_analysis.short": "确认深伪痕迹",
  "case.ch3.ev.video_analysis.detail":
    "逐帧报告：下颌融合痕迹、光线与身体不一致、耳形不符。确认是数字换脸——高度概率为深伪。",
  "case.ch3.ev.server_log.label": "服务器上传日志",
  "case.ch3.ev.server_log.short": "首次上传来自梳邦网吧",
  "case.ch3.ev.server_log.detail":
    "首次发布追溯至梳邦一家网吧。该时段的网吧监控显示刘凯的私人助理坐在该终端。",
  "case.ch3.ev.chat_proof.label": "委托聊天 ⭐",
  "case.ch3.ev.chat_proof.short": "“做得很真”",
  "case.ch3.ev.chat_proof.detail":
    "刘凯与IT技术员的Telegram：“用她的脸，做得很真，下周她有品牌合约。”直接、明知的委托。",
  "case.ch3.ev.money_trail.label": "支付给技术员 ⭐",
  "case.ch3.ev.money_trail.short": "刘凯付RM3,000",
  "case.ch3.ev.money_trail.detail":
    "上传前一天，刘凯账户向IT技术员转账RM3,000，备注“剪辑费”。建立资金链。",
  "case.ch3.ev.spread_map.label": "扩散图谱",
  "case.ch3.ev.spread_map.short": "协调式重传",
  "case.ch3.ev.spread_map.detail":
    "30分钟内有14个新建账号重传同一片段。协调放大——非自然传播。",
  "case.ch3.ev.comments.label": "敌意留言",
  "case.ch3.ev.comments.short": "公众愤怒",
  "case.ch3.ev.comments.detail":
    "数千条敌意留言。公众反应强烈，但属未经核实的意见——并非事实证据。",

  "case.ch3.legal.defamation_233": "诽谤§499 + CMA §233 + 散布",
  "case.ch3.legal.defamation_233.r":
    "明知伪造内容+委托制作+付费散布=刑事诽谤（499）与CMA §233。刘=主犯，技术员=共犯。",
  "case.ch3.legal.free_speech": "受言论自由保护",
  "case.ch3.legal.free_speech.r":
    "言论自由不保护明知伪造、用于伤害他人的内容。聊天显示明确意图。",
  "case.ch3.legal.civil_only": "仅民事索赔",
  "case.ch3.legal.civil_only.r":
    "仅民事赔偿不能制裁刑事行为。马来西亚此类案件属刑事，尤其涉及CMA §233。",

  "case.ch3.pun.fine_only": "罚款 + 公开道歉",
  "case.ch3.pun.fine_jail_takedown": "罚款 + 监禁 + 强制下架",
  "case.ch3.pun.max_jail": "最长监禁",

  "case.ch3.realWorld":
    "马来西亚：刑法典499（诽谤）、CMA §233。可命令平台下架。明知虚假仍转发者也可能负责。",
  "case.ch3.standard":
    "刑事诽谤采“排除合理怀疑”。深伪取证报告+付款链+聊天可达到。",

  // CH.4
  "case.ch4.title": "暗影网络",
  "case.ch4.brief":
    "从第3章IT技术员处缴获的档案揭露一个分类的偷拍库——“学生”“情侣”“VIP”。这些视频被出售并用于勒索。你必须证明这是有组织犯罪，而非个人作案。",
  "case.ch4.stmt.0.who": "阿明（线人，第2章人物）",
  "case.ch4.stmt.0.quote":
    "我以加密货币收酬，把视频上传到指定文件夹。我没见过老板。他们叫他“雷”。雷只是中间代理。",
  "case.ch4.stmt.1.who": "雷（地下交易商）",
  "case.ch4.stmt.1.quote":
    "我只是个体户。别人发档案给我，我上架。后面的事不归我。",
  "case.ch4.stmt.2.who": "学生受害者",
  "case.ch4.stmt.2.quote":
    "他们发了我自己的片段，说每周付钱，否则给家人看。后来还逼我送包裹。",
  "case.ch4.stmt.3.who": "网络取证警官",
  "case.ch4.stmt.3.quote":
    "所有付款都进同一钱包。200多个档案有相同的上传模式。这就是一个组织。",

  "case.ch4.ev.video_db.label": "分类视频数据库 ⭐",
  "case.ch4.ev.video_db.short": "标签“学生/情侣/VIP”",
  "case.ch4.ev.video_db.detail":
    "200多段偷拍，按文件夹分类，附价格与“客户”备注。这种结构是工业化作业，非业余。",
  "case.ch4.ev.crypto_wallet.label": "加密钱包账本 ⭐",
  "case.ch4.ev.crypto_wallet.short": "所有款项→同一钱包",
  "case.ch4.ev.crypto_wallet.detail":
    "区块链分析：48小时内每位买家与每位被勒索人最终都汇入同一控制钱包。一个组织，多张面孔。",
  "case.ch4.ev.extort_msgs.label": "勒索讯息",
  "case.ch4.ev.extort_msgs.short": "附片段缩图威胁",
  "case.ch4.ev.extort_msgs.detail":
    "恢复的讯息：“每周付钱否则你家人收链接。”每条都附受害者缩图。教科书式刑法典第384条勒索。",
  "case.ch4.ev.encrypted_chat.label": "加密操作聊天",
  "case.ch4.ev.encrypted_chat.short": "层级清晰",
  "case.ch4.ev.encrypted_chat.detail":
    "解密的Signal记录显示雷接收上层（“老板”）指令，分配上传给阿明、付款给跑腿。层级明确。",
  "case.ch4.ev.ip_chain.label": "IP跳转链 ⭐",
  "case.ch4.ev.ip_chain.short": "VPN绕回吉隆坡",
  "case.ch4.ev.ip_chain.detail":
    "经三段VPN跳转后，操作端解析至吉隆坡中环一间由空壳公司租用的服务式办公室。匿名只是外衣，不是抗辩。",
  "case.ch4.ev.anon_tip.label": "匿名举报",
  "case.ch4.ev.anon_tip.short": "点名某公众人物",
  "case.ch4.ev.anon_tip.detail":
    "未经核实的来电点名某商人为“老板”。具暗示性但无佐证——不能单独立案。",

  "case.ch4.legal.organised_crime": "有组织犯罪：勒索+散布+偷拍",
  "case.ch4.legal.organised_crime.r":
    "刑法典384（勒索）、292（淫亵物品）、CMA §233，加上有组织犯罪加重。钱包+层级+IP证明这是集团而非个人。",
  "case.ch4.legal.individual_only": "仅个人罪行",
  "case.ch4.legal.individual_only.r":
    "只起诉雷会忽视钱包账本与命令链。结构本身就是罪行。",
  "case.ch4.legal.civil_dispute": "民事隐私纠纷",
  "case.ch4.legal.civil_dispute.r":
    "勒索+有组织散布淫亵物属刑事——民事不匹配。",

  "case.ch4.pun.fine_jail": "罚款 + 监禁",
  "case.ch4.pun.long_jail": "长期监禁 + 没收资产",
  "case.ch4.pun.max_life": "终身监禁",

  "case.ch4.realWorld":
    "马来西亚：刑法典384（勒索）、292（淫亵物）、CMA §233；SOSMA对有组织犯罪可加重。资产没收为常规。",
  "case.ch4.standard":
    "刑事采“排除合理怀疑”。钱包链+解密层级聊天对整网络达到此标准。",

  // CH.5
  "case.ch5.title": "深渊之网",
  "case.ch5.brief":
    "所有线索指向一人——吉隆坡知名慈善家。基金会与慈善晚会背后，是一条链：偷拍→勒索→胁迫犯罪→毒品贩运甚至更糟。你必须决定：现在以现有证据逮捕，还是等待并冒险让更多人受害？",
  "case.ch5.stmt.0.who": "老板（慈善家）",
  "case.ch5.stmt.0.quote":
    "我资助学校与庇护所。这些指控是政治动机。我从未见过这些人。",
  "case.ch5.stmt.1.who": "法务会计师",
  "case.ch5.stmt.1.quote":
    "慈善基金会负责洗钱。18个月内有RM4,700万通过虚假发票循环。",
  "case.ch5.stmt.2.who": "获救证人",
  "case.ch5.stmt.2.quote":
    "我在仓库见过他。他选谁“出国”。命令是他下的。我会出庭作证。",
  "case.ch5.stmt.3.who": "反贩运警官",
  "case.ch5.stmt.3.quote":
    "ATIPSOM、危险毒品法、第302条都在桌上。每一环都必须严密。",

  "case.ch5.ev.laundering_ledger.label": "洗钱账本 ⭐",
  "case.ch5.ev.laundering_ledger.short": "基金会→钱包链",
  "case.ch5.ev.laundering_ledger.detail":
    "在基金会总部缴获的内部账本显示：RM4,700万经虚构“顾问”发票循环至第4章相同钱包。其中31笔由老板亲笔签字。",
  "case.ch5.ev.shell_contracts.label": "空壳公司合同",
  "case.ch5.ev.shell_contracts.short": "三层前置公司",
  "case.ch5.ev.shell_contracts.detail":
    "三层嵌套的空壳公司共用同一注册代理、同一秘书、同一实益拥有人——老板。公司面纱薄如纸。",
  "case.ch5.ev.encrypted_comms.label": "加密命令讯息 ⭐",
  "case.ch5.ev.encrypted_comms.short": "老板亲自下令",
  "case.ch5.ev.encrypted_comms.detail":
    "缴获一次性手机解密讯息：“今晚送货。”“封口证人。”取证时间戳与实际事件一一对应。",
  "case.ch5.ev.medical_records.label": "医疗记录 ⭐",
  "case.ch5.ev.medical_records.short": "确认贩运模式",
  "case.ch5.ev.medical_records.detail":
    "与老板挂钩的私人诊所记录显示对受害者作“出发前体检”——贩运的标志性记录。",
  "case.ch5.ev.drug_seizure.label": "毒品缴获清单 ⭐",
  "case.ch5.ev.drug_seizure.short": "甲类管制毒品",
  "case.ch5.ev.drug_seizure.detail":
    "仓库突袭：4.2公斤甲基苯丙胺，已分装待销。租约与监控指向老板的控股公司。",
  "case.ch5.ev.weapon.label": "缴获枪械",
  "case.ch5.ev.weapon.short": "与证人谋杀关联",
  "case.ch5.ev.weapon.detail":
    "弹道比对显示老板安全屋的枪械与第4章关键证人遇害的弹壳一致。构成第302条谋杀。",
  "case.ch5.ev.press_clippings.label": "媒体剪报",
  "case.ch5.ev.press_clippings.short": "慈善人物专访",
  "case.ch5.ev.press_clippings.detail":
    "光鲜专访形容他为“城市的低调恩人”。声誉非证据——但能解释为何无人调查。",

  "case.ch5.legal.syndicate_full": "集团犯罪：贩运+毒品+谋杀+洗钱",
  "case.ch5.legal.syndicate_full.r":
    "ATIPSOM（贩运）、1952危险毒品法第39B（贩毒）、刑法典302（谋杀）、AMLA（洗钱）。每一环独立证明且有物证佐证。",
  "case.ch5.legal.money_only": "仅洗钱",
  "case.ch5.legal.money_only.r":
    "只起诉财务罪行，会让贩运、毒品与谋杀逃罪——伤害继续。",
  "case.ch5.legal.premature_arrest": "过早逮捕（证据不足）",
  "case.ch5.legal.premature_arrest.r":
    "已有账本、弹道、毒品与活证人，链条完整。再等会危及获救证人。",

  "case.ch5.pun.long_jail": "长期监禁 + 没收资产",
  "case.ch5.pun.life_imprisonment": "终身监禁 + 全资产没收",
  "case.ch5.pun.max_capital": "（适用时）极刑",

  "case.ch5.realWorld":
    "马来西亚：2007 ATIPSOM、1952危险毒品法第39B（贩毒——终身或死刑）、刑法典302（谋杀）、反洗钱法。定罪需完整不断的证据链——正是玩家所要建立的。",
  "case.ch5.standard":
    "每一项罪名均采“排除合理怀疑”。账本、弹道、毒品与证人合力达到。",

  // generic
  "case.eval": "法庭评估",
  "case.sound": "⚖ 合理判决",
  "case.reconsider": "⚠ 重新思考推理",
  "case.standardMet": "你的判决达到证据标准。",
  "case.standardNotMet": "你的判决未完全达到证据标准。",
  "case.score.evidence": "证据",
  "case.score.legal": "法律契合度",
  "case.score.verdict": "判决",
  "case.score.punishment": "处罚",
  "case.impact": "对社会的影响",
  "case.impact.justice": "正义",
  "case.impact.trust": "公众信任",
  "case.impact.fairness": "公平",
  "case.impact.overall": "总体",
  "case.realWorld.show": "对照真实世界 ▾",
  "case.realWorld.hide": "隐藏真实世界 ▾",
  "case.retry": "↻ 重试",
  "case.continue": "继续 ▶",
  "case.notFound": "找不到案件",
  "case.back": "返回",
  "case.reliable.note": "直接、可核实的来源。判决时可重视。",
  "case.unreliable.note": "传闻、被反驳或未经核实。请谨慎对待。",
};

// ============================================================
// Bahasa Melayu
// ============================================================
const MS: Dict = {
  "chapter.ch1.title": "Bilik Darjah Senyap",
  "chapter.ch1.sub": "Buli · Rakaman Curi · Penyebaran",
  "chapter.ch1.lvl": "Bab 1 · Sekolah · Pengenalan",
  "chapter.ch2.title": "Kertas Peperiksaan Hilang",
  "chapter.ch2.sub": "Bocor · Penipuan · Jenayah Komputer",
  "chapter.ch2.lvl": "Bab 2 · Sekolah · Pertengahan",
  "chapter.ch3.title": "Kebenaran Dimanipulasi",
  "chapter.ch3.sub": "Deepfake · Fitnah · Buli Siber",
  "chapter.ch3.lvl": "Bab 3 · Masyarakat",
  "chapter.ch4.title": "Rangkaian Bayang",
  "chapter.ch4.sub": "Ugutan · Sindiket Rakaman",
  "chapter.ch4.lvl": "Bab 4 · Cerita Utama · Lanjutan",
  "chapter.ch5.title": "Jaringan Lembah",
  "chapter.ch5.sub": "Pemerdagangan · Dadah · Bunuh",
  "chapter.ch5.lvl": "Bab 5 · Bos Akhir",

  // CH.1
  "case.ch1.title": "Bilik Darjah Senyap",
  "case.ch1.brief":
    "Pelajar sekolah menengah di Kuala Lumpur, Lin Zixuan (16), ditemui dalam keadaan tertekan di tandas. Video mencurigakan ditemui dalam telefonnya. Anda — pelatih Unit Siasatan Kes Khas — mesti tentukan: buli, gangguan seksual, atau rangkaian jenayah?",
  "case.ch1.stmt.0.who": "Cikgu Li (Guru Kelas)",
  "case.ch1.stmt.0.quote":
    "Dia tidak seperti biasa kebelakangan ini… berhenti bercakap, elak pandang mata, mula ponteng. Saya sangka tertekan biasa.",
  "case.ch1.stmt.1.who": "Chen Junhao (17, Suspek A)",
  "case.ch1.stmt.1.quote":
    "Semua orang bergurau begini. Dia terlalu sensitif. Kami tak sangka jadi besar.",
  "case.ch1.stmt.2.who": "Wang Kai (16, Suspek B)",
  "case.ch1.stmt.2.quote":
    "Saya cuma rakam. Saya tak pukul! Saya tak suruh sesiapa kongsi.",
  "case.ch1.stmt.3.who": "Lin Zixuan (Mangsa)",
  "case.ch1.stmt.3.quote":
    "Mereka kata bayar atau video naik internet. Saya tiada tempat lari.",

  "case.ch1.ev.phone_video.label": "Video telefon — buli ⭐",
  "case.ch1.ev.phone_video.short": "Serangan fizikal + memalukan",
  "case.ch1.ev.phone_video.detail":
    "Klip 47 saat dalam telefon Lin: Chen menolaknya jatuh sementara yang lain ketawa. Bajunya diangkat dalam kamera — sudah merangkumi gangguan seksual di bawah Kanun Keseksaan §509.",
  "case.ch1.ev.chat_logs.label": "Log WhatsApp — ugutan ⭐",
  "case.ch1.ev.chat_logs.short": "'Bayar atau kami sebar'",
  "case.ch1.ev.chat_logs.detail":
    "Log: 'Bayar RM200 atau video naik dalam grup malam ini.' Disebut 'kumpulan kongsi' — permintaan wang berstruktur dengan ancaman penyebaran.",
  "case.ch1.ev.cctv.label": "Rakaman CCTV — koridor",
  "case.ch1.ev.cctv.short": "Chen memukul mangsa",
  "case.ch1.ev.cctv.detail":
    "CCTV koridor menunjukkan Chen Junhao menyerang Lin secara fizikal pada waktu rehat. Wang Kai berdiri berdekatan, memegang telefon dengan stabil — jelas merakam, bukan membantu.",
  "case.ch1.ev.cloud_upload.label": "Rekod muat naik awan ⭐",
  "case.ch1.ev.cloud_upload.short": "Wang Kai memuat naik",
  "case.ch1.ev.cloud_upload.detail":
    "Pemulihan forensik menunjukkan klip yang sama dimuat naik dari akaun Wang Kai ke laman perkongsian fail tanpa nama. Penyebaran adalah kesalahan berasingan.",
  "case.ch1.ev.medical.label": "Laporan perubatan",
  "case.ch1.ev.medical.short": "Trauma psikologi disahkan",
  "case.ch1.ev.medical.detail":
    "Laporan hospital mengesahkan reaksi tekanan akut, tanda-tanda mencederakan diri. Menyokong §323 dan menambah berat hukuman.",
  "case.ch1.ev.teacher_note.label": "Nota lewat guru",
  "case.ch1.ev.teacher_note.short": "Kabur, ditulis kemudian",
  "case.ch1.ev.teacher_note.detail":
    "Nota tulisan tangan Cikgu Li menyebut 'perubahan jangka panjang' tetapi tiada tarikh atau kejadian. Berguna sebagai konteks, tetapi tidak boleh menjadi asas sabitan.",

  "case.ch1.legal.criminal_assault": "Serangan Jenayah + §509 + CMA §233",
  "case.ch1.legal.criminal_assault.r":
    "Serangan fizikal (§323), memalukan/gangguan seksual (§509), penyebaran kandungan lucah dalam talian (CMA §233) — semua dibuktikan secara langsung. Chen dan Wang masing-masing pertanggungjawab.",
  "case.ch1.legal.school_discipline": "Disiplin Sekolah Sahaja",
  "case.ch1.legal.school_discipline.r":
    "Menganggap serangan dirakam + ugutan + penyebaran sebagai isu sekolah sahaja mengabaikan bukti jenayah dan membenarkan kemudaratan berterusan.",
  "case.ch1.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.ch1.legal.insufficient.r":
    "Video, log sembang, CCTV, log muat naik dan laporan perubatan membentuk rangkaian kukuh dan saling sokong.",

  "case.ch1.pun.discipline_only": "Penggantungan + Kaunseling",
  "case.ch1.pun.detention_counsel": "Tahanan + Khidmat Komuniti + Kaunseling Wajib",
  "case.ch1.pun.max_custodial": "Hukuman Penjara Maksimum",

  "case.ch1.realWorld":
    "Malaysia: Kanun Keseksaan §323 (mencederakan), §384 (memeras ugut), §509 (menghina kesopanan), Akta Komunikasi & Multimedia 1998 §233 (kandungan dalam talian tidak wajar). Sekolah juga ada tanggungjawab pentadbiran.",
  "case.ch1.standard":
    "'Tanpa keraguan munasabah' untuk pertuduhan jenayah. Video langsung + sembang + CCTV mudah memenuhi piawaian.",

  // CH.2
  "case.ch2.title": "Kertas Peperiksaan Hilang",
  "case.ch2.brief":
    "Beberapa pelajar tiba-tiba dapat markah penuh. Hantaran media sosial memuji 'soalan yang diramal semua keluar.' Sekolah mengesyaki kebocoran — tetapi siapa mencuri kertas, siapa menjualnya, dan adakah gred diubah selepas itu?",
  "case.ch2.stmt.0.who": "Encik Lin (Penyelaras Peperiksaan)",
  "case.ch2.stmt.0.quote":
    "Saya kunci kertas setiap malam. Saya tak tahu macam mana ia keluar. Saya — mungkin saya pernah lupa kunci makmal sekali.",
  "case.ch2.stmt.1.who": "Zhang Wei (17, Suspek A)",
  "case.ch2.stmt.1.quote":
    "Saya cuma bantu rakan ulangkaji. Pemindahan itu untuk nota tuisyen, bukan kertas peperiksaan.",
  "case.ch2.stmt.2.who": "Ah Ming (16, Suspek B · Kelab IT)",
  "case.ch2.stmt.2.quote":
    "Saya cuma periksa sistem. Saya tak ambil apa-apa. Sesiapa boleh log masuk.",
  "case.ch2.stmt.3.who": "Chen Meiling (17, Pelajar Cemerlang)",
  "case.ch2.stmt.3.quote":
    "Ya, ada orang tawarkan soalan. Saya tolak. Saya sanggup beri keterangan.",

  "case.ch2.ev.login_log.label": "Rekod log masuk komputer",
  "case.ch2.ev.login_log.short": "Log masuk tengah malam dari makmal",
  "case.ch2.ev.login_log.detail":
    "Log pelayan: log masuk pukul 02:14 dari terminal makmal sekolah, tiga hari sebelum peperiksaan. Akaun: Encik Lin — tetapi beliau di rumah. Pelajar gunakan kelayakan tersimpan.",
  "case.ch2.ev.usb_record.label": "Rekod peranti USB ⭐",
  "case.ch2.ev.usb_record.short": "USB Ah Ming dimasukkan",
  "case.ch2.ev.usb_record.detail":
    "Nombor siri USB pada PC makmal sepadan dengan peranti yang didaftarkan kepada Ah Ming untuk Kelab IT. Fail disalin pukul 02:18 — tiga minit selepas log masuk mencurigakan. Dialah yang sebenarnya mengambil kertas itu.",
  "case.ch2.ev.transactions.label": "Rekod transaksi ⭐",
  "case.ch2.ev.transactions.short": "'RM200 setiap kertas'",
  "case.ch2.ev.transactions.detail":
    "Sembang: 'RM200 setiap kertas, mahu? Soalan asal.' Beberapa pembeli membalas. Ini penipuan — tawaran berbayar bahan curi.",
  "case.ch2.ev.ewallet.label": "Resit e-dompet",
  "case.ch2.ev.ewallet.short": "Zhang Wei kutip bayaran",
  "case.ch2.ev.ewallet.detail":
    "Log Touch 'n Go dan DuitNow menunjukkan Zhang Wei menerima RM200–RM400 daripada sekurang-kurangnya tujuh pelajar sebelum peperiksaan. Dia penjual / orang tengah — bukan sumber.",
  "case.ch2.ev.grade_edit.label": "Rekod gred diubah",
  "case.ch2.ev.grade_edit.short": "Dua skor diubah selepas tanda",
  "case.ch2.ev.grade_edit.detail":
    "Jejak audit sistem pengurusan gred menunjukkan dua gred diubah selepas penyerahan, dari IP makmal yang sama. Pemalsuan + jenayah komputer — kesalahan berasingan.",
  "case.ch2.ev.rumor.label": "Khabar angin bilik rehat",
  "case.ch2.ev.rumor.short": "'Encik Lin yang jual'",
  "case.ch2.ev.rumor.detail":
    "Beberapa pelajar 'dengar' Encik Lin sendiri menjual kertas. Tiada sumber, tiada bukti — bertentangan dengan rangkaian log + USB. Khabar angin sahaja.",

  "case.ch2.legal.computer_crime": "Jenayah Komputer + Curi + Penipuan",
  "case.ch2.legal.computer_crime.r":
    "Akses tanpa kebenaran (Akta Jenayah Komputer 1997) + curi kertas (§379) + jualan berbayar barang curi (§420) + manipulasi gred. Ah Ming = dalang, Zhang Wei = penjual.",
  "case.ch2.legal.fraud_only": "Penipuan Sahaja",
  "case.ch2.legal.fraud_only.r":
    "Menjual ialah penipuan, tetapi mengabaikan akses tanpa kebenaran melepaskan sumber sebenar — Ah Ming yang mengambil kertas itu.",
  "case.ch2.legal.discipline": "Disiplin Sekolah Sahaja",
  "case.ch2.legal.discipline.r":
    "Mencuri kertas peperiksaan dan mengubah sistem gred adalah kesalahan jenayah di Malaysia, bukan sekadar salah laku sekolah.",

  "case.ch2.pun.discipline_only": "Penggantungan + Periksa Semula",
  "case.ch2.pun.fine_jail_short": "Denda + Penjara Pendek + Disiplin",
  "case.ch2.pun.max_jail": "Penjara Maksimum",

  "case.ch2.realWorld":
    "Malaysia: Kanun Keseksaan §379 (curi), §420 (menipu), Akta Jenayah Komputer 1997 §3–§5 (akses tanpa kebenaran). Pembeli biasanya tindakan disiplin, bukan jenayah.",
  "case.ch2.standard":
    "'Tanpa keraguan munasabah' untuk jenayah. Rekod USB + log masuk + bayaran membentuk rangkaian tertutup.",

  // CH.3
  "case.ch3.title": "Kebenaran Dimanipulasi",
  "case.ch3.brief":
    "Pengaruh KL, Zhou Jing (22), dimusnahkan dalam talian oleh 'video intim' viral. Dia berkeras bahawa itu bukan dia — dan visualnya kelihatan ganjil. Adakah ini benar, deepfake, atau serangan terancang oleh saingan?",
  "case.ch3.stmt.0.who": "Zhou Jing (Mangsa)",
  "case.ch3.stmt.0.quote":
    "Itu bukan saya. Saya tak pernah jumpa orang itu. Sekarang semua percaya pembohongan.",
  "case.ch3.stmt.1.who": "Liu Kai (Saingan)",
  "case.ch3.stmt.1.quote":
    "Kami cuma upah editor untuk kandungan kerjasama. Saya tiada kaitan dengan video itu.",
  "case.ch3.stmt.2.who": "Juruteknik IT (Bebas)",
  "case.ch3.stmt.2.quote":
    "Saya diupah untuk 'suntingan tukar muka.' Saya tak tanya apa-apa. Pelanggan kata ia parodi.",
  "case.ch3.stmt.3.who": "Akaun Tanpa Nama",
  "case.ch3.stmt.3.quote":
    "(Akaun yang mula-mula muat naik — IP dijejak ke kafe siber Subang yang biasa digunakan pembantu Liu Kai.)",

  "case.ch3.ev.video_analysis.label": "Analisis forensik video ⭐",
  "case.ch3.ev.video_analysis.short": "Tanda deepfake disahkan",
  "case.ch3.ev.video_analysis.detail":
    "Laporan bingkai demi bingkai: tanda gabungan muka di rahang, pencahayaan tidak konsisten, bentuk telinga tidak sepadan. Wajah ditukar secara digital — kebarangkalian tinggi deepfake.",
  "case.ch3.ev.server_log.label": "Log muat naik pelayan",
  "case.ch3.ev.server_log.short": "Muat naik pertama dari kafe Subang",
  "case.ch3.ev.server_log.detail":
    "Penerbitan pertama dijejak ke kafe siber di Subang. CCTV kafe menunjukkan pembantu peribadi Liu Kai di terminal itu pada tetingkap masa yang tepat.",
  "case.ch3.ev.chat_proof.label": "Sembang menempah ⭐",
  "case.ch3.ev.chat_proof.short": "'Buat ia kelihatan sangat nyata'",
  "case.ch3.ev.chat_proof.detail":
    "Telegram antara Liu Kai dan juruteknik: 'Guna mukanya. Buat ia kelihatan sangat nyata. Perlu sebelum kontrak jenamanya minggu depan.' Tempahan langsung dan disedari.",
  "case.ch3.ev.money_trail.label": "Bayaran kepada juruteknik ⭐",
  "case.ch3.ev.money_trail.short": "RM3,000 dari Liu Kai",
  "case.ch3.ev.money_trail.detail":
    "Jejak bank: RM3,000 dari akaun Liu Kai kepada juruteknik IT sehari sebelum muat naik. Memo: 'kerja edit.' Mengukuhkan jaringan kewangan.",
  "case.ch3.ev.spread_map.label": "Peta penyebaran",
  "case.ch3.ev.spread_map.short": "Muat naik semula tersusun",
  "case.ch3.ev.spread_map.detail":
    "Klip yang sama dimuat naik semula oleh 14 akaun baharu dalam 30 minit. Penguatan terancang — bukan penyebaran organik.",
  "case.ch3.ev.comments.label": "Komen bermusuhan",
  "case.ch3.ev.comments.short": "Kemarahan awam",
  "case.ch3.ev.comments.detail":
    "Beribu-ribu komen bermusuhan. Reaksi awam kuat tetapi pendapat tidak disahkan — bukan bukti.",

  "case.ch3.legal.defamation_233": "Fitnah §499 + CMA §233 + Penyebaran",
  "case.ch3.legal.defamation_233.r":
    "Kandungan rekaan yang disedari + tempahan + penyebaran berbayar = fitnah jenayah §499 dan CMA §233. Liu = utama, juruteknik = bersubahat.",
  "case.ch3.legal.free_speech": "Dilindungi Kebebasan Bersuara",
  "case.ch3.legal.free_speech.r":
    "Kebebasan bersuara tidak melindungi kandungan rekaan yang disedari, dicipta untuk memudaratkan orang lain. Sembang menunjukkan niat jelas.",
  "case.ch3.legal.civil_only": "Saman Sivil Sahaja",
  "case.ch3.legal.civil_only.r":
    "Ganti rugi sivil sahaja membiarkan tindakan jenayah tanpa hukuman. Malaysia menganggapnya jenayah, terutama dengan CMA §233.",

  "case.ch3.pun.fine_only": "Denda + Permohonan Maaf Awam",
  "case.ch3.pun.fine_jail_takedown": "Denda + Penjara + Penurunan Wajib",
  "case.ch3.pun.max_jail": "Penjara Maksimum",

  "case.ch3.realWorld":
    "Malaysia: Kanun Keseksaan §499 (fitnah), CMA §233. Platform boleh diarahkan turun. Pengkongsi yang tahu ia palsu juga boleh dipertanggungjawabkan.",
  "case.ch3.standard":
    "'Tanpa keraguan munasabah' untuk fitnah jenayah. Laporan deepfake + jejak bayaran + sembang memenuhinya.",

  // CH.4
  "case.ch4.title": "Rangkaian Bayang",
  "case.ch4.brief":
    "Fail dirampas dari juruteknik IT Bab 3 mendedahkan perpustakaan rakaman curi yang dikategorikan — 'Pelajar,' 'Pasangan,' 'VIP.' Ia dijual dan digunakan untuk memeras mangsa. Anda mesti buktikan ini jenayah terancang, bukan operasi seorang.",
  "case.ch4.stmt.0.who": "Ah Ming (Pemberi Maklumat, Bab 2)",
  "case.ch4.stmt.0.quote":
    "Saya dibayar dengan kripto untuk muat naik ke folder. Saya tak pernah jumpa bos. Mereka panggil dia 'Ray.' Ray cuma agen pertengahan.",
  "case.ch4.stmt.1.who": "Ray (Peniaga Bawah Tanah)",
  "case.ch4.stmt.1.quote":
    "Saya bebas. Orang hantar fail, saya senaraikan. Apa berlaku selepas itu, bukan saya.",
  "case.ch4.stmt.2.who": "Mangsa Pelajar",
  "case.ch4.stmt.2.quote":
    "Mereka hantar klip saya sendiri dan kata: bayar mingguan, atau keluarga anda lihat. Kemudian mereka suruh saya hantar bungkusan.",
  "case.ch4.stmt.3.who": "Pegawai Forensik Siber",
  "case.ch4.stmt.3.quote":
    "Dompet yang sama menerima semua bayaran. Corak muat naik sama merentas 200+ fail. Ini satu operasi.",

  "case.ch4.ev.video_db.label": "Pangkalan data video ⭐",
  "case.ch4.ev.video_db.short": "Tag 'Pelajar/Pasangan/VIP'",
  "case.ch4.ev.video_db.detail":
    "Pangkalan 200+ rakaman curi, disusun dalam folder dengan tag harga dan nota 'pelanggan.' Strukturnya menunjukkan skala industri — bukan amatur.",
  "case.ch4.ev.crypto_wallet.label": "Lejar dompet kripto ⭐",
  "case.ch4.ev.crypto_wallet.short": "Semua bayaran → satu dompet",
  "case.ch4.ev.crypto_wallet.detail":
    "Analisis blockchain: setiap pembeli dan setiap mangsa ugutan akhirnya masuk ke dompet pengawal yang sama dalam 48 jam. Satu operasi, banyak wajah.",
  "case.ch4.ev.extort_msgs.label": "Mesej ugutan",
  "case.ch4.ev.extort_msgs.short": "Ancaman dengan klip bukti",
  "case.ch4.ev.extort_msgs.detail":
    "Mesej dipulihkan: 'Bayar mingguan atau keluarga anda dapat pautan.' Setiap mesej menyertakan thumbnail mangsa. Ugutan §384 buku teks.",
  "case.ch4.ev.encrypted_chat.label": "Sembang operator disulitkan",
  "case.ch4.ev.encrypted_chat.short": "Hierarki arahan didedahkan",
  "case.ch4.ev.encrypted_chat.detail":
    "Log Signal yang disahsulit menunjukkan Ray menerima arahan dari akaun lebih tinggi ('bos'), menugaskan muat naik kepada Ah Ming, bayaran kepada larian. Hierarki jelas.",
  "case.ch4.ev.ip_chain.label": "Rangkaian IP ⭐",
  "case.ch4.ev.ip_chain.short": "VPN melantun balik ke KL",
  "case.ch4.ev.ip_chain.detail":
    "Selepas tiga lompatan VPN, titik akhir operator diselesaikan ke pejabat servis di KL Sentral yang disewa oleh syarikat dorman. Tanpa nama hanya kostum — bukan pembelaan.",
  "case.ch4.ev.anon_tip.label": "Maklumat tanpa nama",
  "case.ch4.ev.anon_tip.short": "Menamakan tokoh awam",
  "case.ch4.ev.anon_tip.detail":
    "Panggilan masuk tanpa pengesahan menamakan ahli perniagaan sebagai 'bos.' Bersugesti tetapi tidak disokong — tidak boleh menjadi asas pertuduhan.",

  "case.ch4.legal.organised_crime": "Jenayah Terancang: Ugut + Sebar + Rakam",
  "case.ch4.legal.organised_crime.r":
    "§384 (ugutan), §292 (bahan lucah), CMA §233, ditambah pemberat jenayah terancang. Dompet + hierarki + IP membuktikan sindiket, bukan individu.",
  "case.ch4.legal.individual_only": "Kesalahan Individu Sahaja",
  "case.ch4.legal.individual_only.r":
    "Mendakwa Ray sahaja mengabaikan lejar dompet dan hierarki arahan. Strukturnya itulah kesalahannya.",
  "case.ch4.legal.civil_dispute": "Pertikaian Sivil",
  "case.ch4.legal.civil_dispute.r":
    "Ugutan + penyebaran terancang bahan lucah ialah jenayah — saman sivil tidak sepadan.",

  "case.ch4.pun.fine_jail": "Denda + Penjara",
  "case.ch4.pun.long_jail": "Penjara Panjang + Rampasan Aset",
  "case.ch4.pun.max_life": "Penjara Seumur Hidup",

  "case.ch4.realWorld":
    "Malaysia: Kanun §384 (ugutan), §292 (lucah), CMA §233; SOSMA boleh menambah pemberat untuk jenayah terancang. Rampasan aset rutin.",
  "case.ch4.standard":
    "'Tanpa keraguan munasabah' untuk jenayah. Jejak dompet + sembang hierarki disahsulit memenuhinya untuk seluruh rangkaian.",

  // CH.5
  "case.ch5.title": "Jaringan Lembah",
  "case.ch5.brief":
    "Semua benang menumpu pada seorang — dermawan KL yang disanjungi. Di sebalik yayasan dan gala amal terdapat satu rantai: rakaman curi → ugutan → paksaan jenayah → pemerdagangan dadah dan lebih teruk. Anda mesti tentukan: tangkap sekarang dengan apa yang ada, atau tunggu dan risikokan lebih ramai mangsa.",
  "case.ch5.stmt.0.who": "Bos (Dermawan)",
  "case.ch5.stmt.0.quote":
    "Saya membiayai sekolah dan rumah perlindungan. Tuduhan ini bermotif politik. Saya tak pernah jumpa orang-orang ini.",
  "case.ch5.stmt.1.who": "Akauntan Forensik",
  "case.ch5.stmt.1.quote":
    "Yayasan amal membersihkan dompet. RM47 juta telah berkitar melalui invois palsu dalam 18 bulan.",
  "case.ch5.stmt.2.who": "Saksi Diselamatkan",
  "case.ch5.stmt.2.quote":
    "Saya nampak dia di gudang. Dia memilih siapa antara kami akan 'mengembara.' Dia beri arahan. Saya akan beri keterangan di mahkamah.",
  "case.ch5.stmt.3.who": "Pegawai Anti-Pemerdagangan",
  "case.ch5.stmt.3.quote":
    "ATIPSOM, Akta Dadah Berbahaya, dan §302 semuanya di atas meja. Setiap rangkaian mesti rapi.",

  "case.ch5.ev.laundering_ledger.label": "Lejar pengubahan wang ⭐",
  "case.ch5.ev.laundering_ledger.short": "Yayasan → jejak dompet",
  "case.ch5.ev.laundering_ledger.detail":
    "Lejar dalaman dirampas di ibu pejabat yayasan menunjukkan RM47J berkitar melalui invois 'perundingan' palsu ke dompet sama dari Bab 4. Tandatangan bos pada 31 daripadanya.",
  "case.ch5.ev.shell_contracts.label": "Kontrak syarikat dorman",
  "case.ch5.ev.shell_contracts.short": "Tiga lapis syarikat depan",
  "case.ch5.ev.shell_contracts.detail":
    "Tiga syarikat dorman bertingkat berkongsi ejen pendaftar, setiausaha dan benefisiari yang sama — bos. Tabir korporat amat nipis.",
  "case.ch5.ev.encrypted_comms.label": "Mesej arahan disulitkan ⭐",
  "case.ch5.ev.encrypted_comms.short": "Bos memberi arahan langsung",
  "case.ch5.ev.encrypted_comms.detail":
    "Mesej disahsulit pada telefon pakai-buang: 'Pindahkan bungkusan malam ini.' 'Bungkamkan saksi.' Cap masa forensik mengikat setiap mesej kepada peristiwa sebenar.",
  "case.ch5.ev.medical_records.label": "Rekod perubatan ⭐",
  "case.ch5.ev.medical_records.short": "Corak pemerdagangan disahkan",
  "case.ch5.ev.medical_records.detail":
    "Rekod klinik swasta yang dikaitkan dengan bos menunjukkan 'pemeriksaan kesihatan pra-perjalanan' ke atas mangsa — penanda pemerdagangan yang didokumenkan.",
  "case.ch5.ev.drug_seizure.label": "Inventori rampasan dadah ⭐",
  "case.ch5.ev.drug_seizure.short": "Bahan kawalan kelas-A",
  "case.ch5.ev.drug_seizure.detail":
    "Serbuan gudang: 4.2 kg metamfetamina, dibungkus untuk pengedaran. Pajakan dan CCTV menjejaki gudang ke syarikat induk bos.",
  "case.ch5.ev.weapon.label": "Senjata api dipulihkan",
  "case.ch5.ev.weapon.short": "Berkait dengan pembunuhan saksi",
  "case.ch5.ev.weapon.detail":
    "Balistik memadankan senjata di rumah selamat bos dengan kelongsong yang membunuh saksi utama Bab 4. Pembunuhan §302.",
  "case.ch5.ev.press_clippings.label": "Keratan akhbar",
  "case.ch5.ev.press_clippings.short": "Profil & anugerah amal",
  "case.ch5.ev.press_clippings.detail":
    "Profil indah menggambarkannya sebagai 'penderma senyap kota.' Reputasi bukan bukti — tetapi menjelaskan mengapa tiada siapa siasat.",

  "case.ch5.legal.syndicate_full": "Sindiket: Pemerdagangan + Dadah + Bunuh + Pengubahan Wang",
  "case.ch5.legal.syndicate_full.r":
    "ATIPSOM, Akta Dadah Berbahaya 1952 §39B (pemerdagangan), Kanun §302 (bunuh), AMLA. Setiap rangkaian dibuktikan dan disokong fizikal.",
  "case.ch5.legal.money_only": "Pengubahan Wang Sahaja",
  "case.ch5.legal.money_only.r":
    "Mendakwa hanya kesalahan kewangan membiarkan pemerdagangan, dadah dan pembunuhan tanpa jawapan — kemudaratan berterusan.",
  "case.ch5.legal.premature_arrest": "Penangkapan Pramatang (tidak cukup)",
  "case.ch5.legal.premature_arrest.r":
    "Dengan lejar, balistik, rampasan dadah dan saksi hidup, rangkaian lengkap. Menunggu lebih lama membahayakan saksi yang diselamatkan.",

  "case.ch5.pun.long_jail": "Penjara Panjang + Rampasan Aset",
  "case.ch5.pun.life_imprisonment": "Penjara Seumur Hidup + Rampasan Penuh",
  "case.ch5.pun.max_capital": "Hukuman Mati (jika berkenaan)",

  "case.ch5.realWorld":
    "Malaysia: ATIPSOM 2007, Akta Dadah Berbahaya 1952 §39B (pemerdagangan — seumur hidup atau hukuman mati), Kanun §302 (bunuh), Akta Pencegahan Pengubahan Wang. Sabitan memerlukan rantaian tidak terputus.",
  "case.ch5.standard":
    "'Tanpa keraguan munasabah' bagi setiap pertuduhan. Lejar forensik, balistik, dadah dan saksi bersama-sama memenuhi piawaian.",

  // generic
  "case.eval": "Penilaian Mahkamah",
  "case.sound": "⚖ Penghakiman Wajar",
  "case.reconsider": "⚠ Pertimbang Semula",
  "case.standardMet": "Keputusan anda memenuhi piawai bukti.",
  "case.standardNotMet": "Keputusan anda tidak sepenuhnya memenuhi piawai bukti.",
  "case.score.evidence": "Bukti",
  "case.score.legal": "Padanan Undang-undang",
  "case.score.verdict": "Keputusan",
  "case.score.punishment": "Hukuman",
  "case.impact": "Kesan ke atas Masyarakat",
  "case.impact.justice": "Keadilan",
  "case.impact.trust": "Kepercayaan Awam",
  "case.impact.fairness": "Kesaksamaan",
  "case.impact.overall": "Keseluruhan",
  "case.realWorld.show": "Bandingkan dunia sebenar ▾",
  "case.realWorld.hide": "Sembunyikan dunia sebenar ▾",
  "case.retry": "↻ Cuba Semula",
  "case.continue": "Teruskan ▶",
  "case.notFound": "Kes tidak dijumpai",
  "case.back": "Kembali",
  "case.reliable.note": "Sumber langsung dan boleh disahkan. Selamat ditimbang berat.",
  "case.unreliable.note": "Khabar angin, ditentang atau tidak disahkan. Berhati-hati.",
};

export const CASE_DICT: Record<Lang, Dict> = { en: EN, zh: ZH, ms: MS };
