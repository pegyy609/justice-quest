import { CaseData } from "./types";

export const CASES: CaseData[] = [
  // ============ SCHOOL CHAPTER ============
  {
    id: "s1",
    chapter: "school",
    title: "The Missing Laptop",
    brief:
      "A Year 10 student, Alex, is accused of stealing a classmate's laptop from the science lab during lunch break. The laptop was later found in Alex's locker.",
    statements: [
      { who: "Accuser (Sam)", quote: "My laptop was on the bench. Alex was the last one in the lab." },
      { who: "Defendant (Alex)", quote: "Someone must have planted it. My locker code isn't secret." },
      { who: "Teacher", quote: "I locked the lab at 12:45. I didn't see who entered before that." },
    ],
    evidence: [
      {
        id: "cctv",
        label: "CCTV footage",
        short: "Hallway camera, lunch break",
        detail:
          "Shows Alex entering the lab at 12:30 and leaving at 12:38 carrying a backpack. Quality is clear.",
        reliable: true,
      },
      {
        id: "locker",
        label: "Locker contents",
        short: "Laptop found in Alex's locker",
        detail:
          "Laptop confirmed as the missing device by serial number. Locker code was known by 3 classmates.",
        reliable: true,
      },
      {
        id: "rumor",
        label: "Hallway rumor",
        short: "'Alex always takes things'",
        detail:
          "Two students claim Alex 'always takes things' but neither saw the incident. Hearsay only.",
        reliable: false,
      },
      {
        id: "alibi",
        label: "Alex's alibi",
        short: "Claims they were in canteen",
        detail:
          "Alex says they were in the canteen at 12:30, but no witnesses confirm this. CCTV contradicts it.",
        reliable: false,
      },
    ],
    legalOptions: [
      { id: "theft", label: "Theft", correct: true, reasoning: "Taking property without consent — supported by CCTV and recovered item." },
      { id: "misconduct", label: "General Misconduct", correct: false, reasoning: "Too vague — evidence points to a specific act." },
      { id: "insufficient", label: "Insufficient Evidence", correct: false, reasoning: "Multiple reliable evidence pieces exist." },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "suspension",
    punishments: [
      { id: "warning", label: "Verbal Warning", severity: 1 },
      { id: "detention", label: "Detention", severity: 2 },
      { id: "suspension", label: "3-Day Suspension", severity: 3 },
    ],
    realWorldNote:
      "School policy typically treats theft of valuable property with suspension and parental notification, sometimes police referral.",
    standardOfProof: "School discipline: 'balance of probabilities' — more likely than not.",
  },
  {
    id: "s2",
    chapter: "school",
    title: "The Cheating Allegation",
    brief:
      "Jamie is accused of copying answers during a math exam. The teacher noticed Jamie glancing at a neighbor's paper several times.",
    statements: [
      { who: "Teacher", quote: "I saw Jamie look over at least four times during the test." },
      { who: "Defendant (Jamie)", quote: "I was just stretching my neck. I studied hard for this." },
      { who: "Neighbor", quote: "I covered my paper. I don't think they could see anything." },
    ],
    evidence: [
      {
        id: "answers",
        label: "Answer comparison",
        short: "70% identical answers",
        detail: "Jamie and the neighbor share 14/20 identical answers — including the same wrong answers in the same way.",
        reliable: true,
      },
      {
        id: "history",
        label: "Past performance",
        short: "Jamie usually scores low",
        detail: "Jamie averages 50% — this exam scored 90%. A sudden jump.",
        reliable: true,
      },
      {
        id: "gossip",
        label: "Friend gossip",
        short: "'Jamie always cheats'",
        detail: "Unverified claim from one student. Not direct evidence.",
        reliable: false,
      },
      {
        id: "tutor",
        label: "Tutor note",
        short: "Jamie had extra tutoring",
        detail: "A tutor confirms Jamie studied for 20 hours. Could explain improvement — but not identical wrong answers.",
        reliable: true,
      },
    ],
    legalOptions: [
      { id: "cheating", label: "Academic Dishonesty", correct: true, reasoning: "Identical wrong answers + behavior pattern = strong indication." },
      { id: "misconduct", label: "Minor Misconduct", correct: false, reasoning: "Understates the integrity violation." },
      { id: "insufficient", label: "Insufficient Evidence", correct: false, reasoning: "Statistical pattern is compelling." },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "retake",
    punishments: [
      { id: "warning", label: "Warning + Re-mark", severity: 1 },
      { id: "retake", label: "Zero + Retake Exam", severity: 2 },
      { id: "suspension", label: "Suspension", severity: 3 },
    ],
    realWorldNote: "Most schools issue a zero on the assessment and require a retake under supervision.",
    standardOfProof: "Academic integrity boards use 'preponderance of evidence'.",
  },
  {
    id: "s3",
    chapter: "school",
    title: "The Bullying Report",
    brief:
      "A junior student reports being shoved in the hallway by an older student, Ravi. There were several bystanders.",
    statements: [
      { who: "Victim", quote: "Ravi pushed me into the lockers and laughed." },
      { who: "Defendant (Ravi)", quote: "I bumped into them by accident. The hallway was crowded." },
      { who: "Bystander A", quote: "I saw Ravi laughing afterward." },
      { who: "Bystander B", quote: "It looked like an accident to me." },
    ],
    evidence: [
      {
        id: "bruise",
        label: "Medical note",
        short: "Minor bruising on shoulder",
        detail: "Nurse confirmed bruising consistent with impact against lockers.",
        reliable: true,
      },
      {
        id: "history",
        label: "Behavior record",
        short: "Ravi has 2 prior warnings",
        detail: "Two previous warnings for rough behavior, but no formal bullying findings.",
        reliable: true,
      },
      {
        id: "anon",
        label: "Anonymous note",
        short: "'Ravi targets juniors'",
        detail: "Unsigned note in the suggestion box. Source unknown.",
        reliable: false,
      },
      {
        id: "cctv",
        label: "Hallway CCTV",
        short: "Partial view",
        detail: "Camera shows contact but angle is obstructed. Cannot confirm intent.",
        reliable: true,
      },
    ],
    legalOptions: [
      { id: "bullying", label: "Bullying / Assault", correct: false, reasoning: "Intent isn't clearly proven from the footage." },
      { id: "misconduct", label: "Misconduct", correct: true, reasoning: "Behavior was inappropriate but intent ambiguous — fits misconduct best." },
      { id: "insufficient", label: "Insufficient Evidence", correct: false, reasoning: "Bruising + behavior history justify some action." },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "mediation",
    punishments: [
      { id: "warning", label: "Formal Warning", severity: 1 },
      { id: "mediation", label: "Mediation + Counseling", severity: 2 },
      { id: "suspension", label: "Suspension", severity: 3 },
    ],
    realWorldNote: "Schools often use restorative practices: mediation between parties before escalation.",
    standardOfProof: "Disciplinary: balance of probabilities; intent matters for severity.",
  },

  // ============ SOCIETY CHAPTER ============
  {
    id: "c1",
    chapter: "society",
    title: "The Online Fraud Case",
    brief:
      "A small business owner accuses Mr. Tan of operating a fake online store that took 200+ pre-orders without delivering. Mr. Tan claims he was a victim of a supplier scam.",
    statements: [
      { who: "Customer Group", quote: "We paid. Nothing arrived. The site is gone." },
      { who: "Defendant (Mr. Tan)", quote: "My supplier ran off with my money. I'm a victim too." },
      { who: "Bank", quote: "Funds were withdrawn to a personal account within 48 hours." },
    ],
    evidence: [
      {
        id: "bank",
        label: "Bank records",
        short: "Funds → personal account",
        detail: "Customer payments routed to Mr. Tan's personal account, then withdrawn as cash.",
        reliable: true,
      },
      {
        id: "supplier",
        label: "Supplier contract",
        short: "Unverified contract",
        detail: "Contract document supplied by Mr. Tan, but the supplier company doesn't exist in registry.",
        reliable: false,
      },
      {
        id: "site",
        label: "Website forensics",
        short: "Site was disabled by owner",
        detail: "Server logs show the site was intentionally taken down by Mr. Tan, not hacked.",
        reliable: true,
      },
      {
        id: "social",
        label: "Social media outrage",
        short: "Hundreds of angry posts",
        detail: "Many emotional posts but mostly opinions, not evidence of intent.",
        reliable: false,
      },
      {
        id: "history",
        label: "Prior business",
        short: "Two similar closed shops",
        detail: "Mr. Tan ran two prior online shops that closed under similar complaints.",
        reliable: true,
      },
    ],
    legalOptions: [
      { id: "fraud", label: "Fraud", correct: true, reasoning: "Pattern of intent: routing to personal account + prior history + fabricated supplier." },
      { id: "negligence", label: "Negligence", correct: false, reasoning: "Underestimates the deliberate pattern of behavior." },
      { id: "insufficient", label: "Insufficient Evidence", correct: false, reasoning: "Bank trail + prior pattern is strong." },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "fine_jail",
    punishments: [
      { id: "fine", label: "Fine + Restitution", severity: 1 },
      { id: "fine_jail", label: "Restitution + Jail Term", severity: 2 },
      { id: "max", label: "Maximum Sentence", severity: 3 },
    ],
    realWorldNote:
      "Real cases (e.g., Singapore CDSA) typically result in restitution orders plus imprisonment when intent and pattern are shown.",
    standardOfProof: "Criminal: 'beyond reasonable doubt'.",
  },
  {
    id: "c2",
    chapter: "society",
    title: "The Public Dispute",
    brief:
      "Two neighbors are in a bitter dispute over a noisy renovation. One claims harassment, the other claims defamation on social media.",
    statements: [
      { who: "Neighbor A", quote: "They've been banging walls at midnight for weeks. I had to post about it." },
      { who: "Neighbor B", quote: "Their post called me a 'criminal contractor.' My business is suffering." },
      { who: "Building Manager", quote: "We received noise complaints but no permits were violated." },
    ],
    evidence: [
      {
        id: "decibel",
        label: "Decibel logs",
        short: "Above limit at night",
        detail: "Building sensor shows nighttime noise above legal limit on 4 nights.",
        reliable: true,
      },
      {
        id: "post",
        label: "Social media post",
        short: "Public accusation",
        detail: "Post calls neighbor a 'criminal contractor' — no evidence of criminal record.",
        reliable: true,
      },
      {
        id: "screenshots",
        label: "Edited screenshots",
        short: "Possibly altered chats",
        detail: "Screenshots provided by Neighbor B appear cropped; metadata is missing.",
        reliable: false,
      },
      {
        id: "permit",
        label: "Renovation permit",
        short: "Valid daytime permit",
        detail: "Valid permit but only for daytime hours. Night work was not authorized.",
        reliable: true,
      },
    ],
    legalOptions: [
      { id: "both", label: "Mutual Liability", correct: true, reasoning: "Both parties violated norms: one breached noise rules, the other defamed without proof." },
      { id: "defamation", label: "Defamation Only", correct: false, reasoning: "Ignores the documented noise breach." },
      { id: "insufficient", label: "Insufficient Evidence", correct: false, reasoning: "Decibel logs + post are concrete." },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "mediation",
    punishments: [
      { id: "mediation", label: "Mediation + Apologies", severity: 1 },
      { id: "fines", label: "Fines on Both Parties", severity: 2 },
      { id: "court", label: "Civil Court Damages", severity: 3 },
    ],
    realWorldNote: "Most neighbor disputes are resolved through community mediation centres before reaching civil court.",
    standardOfProof: "Civil: 'balance of probabilities' — both sides assessed independently.",
  },
  {
    id: "c3",
    chapter: "society",
    title: "The Negligence Dilemma",
    brief:
      "A construction worker fell from scaffolding and was seriously injured. The site supervisor is accused of negligence, but claims the worker ignored safety protocols.",
    statements: [
      { who: "Injured Worker", quote: "The harness clip was broken. I told them last week." },
      { who: "Supervisor", quote: "Workers are trained to inspect their own gear. He skipped his check." },
      { who: "Co-worker", quote: "Everyone knew that harness was bad. Nobody wanted to use it." },
    ],
    evidence: [
      {
        id: "harness",
        label: "Inspected harness",
        short: "Confirmed faulty clip",
        detail: "Forensic inspection confirms the clip was worn and would fail under load.",
        reliable: true,
      },
      {
        id: "log",
        label: "Maintenance log",
        short: "No check in 60 days",
        detail: "Required weekly inspection log shows no entries for 60 days. Supervisor's signature missing.",
        reliable: true,
      },
      {
        id: "training",
        label: "Worker training record",
        short: "Worker was certified",
        detail: "Worker passed safety training 4 months ago — but training doesn't replace equipment maintenance.",
        reliable: true,
      },
      {
        id: "anon",
        label: "Anonymous tip",
        short: "'Supervisor cuts corners'",
        detail: "Unsigned message to safety hotline, no specifics. Cannot be verified.",
        reliable: false,
      },
    ],
    legalOptions: [
      { id: "negligence", label: "Criminal Negligence", correct: true, reasoning: "Supervisor's duty of care breached — missing inspections + known fault." },
      { id: "shared", label: "Shared Fault", correct: false, reasoning: "Worker followed training; primary duty rests with supervisor." },
      { id: "insufficient", label: "Insufficient Evidence", correct: false, reasoning: "Maintenance log + forensic inspection are strong." },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "fine_ban",
    punishments: [
      { id: "warning", label: "Warning + Retraining", severity: 1 },
      { id: "fine_ban", label: "Heavy Fine + License Suspension", severity: 2 },
      { id: "jail", label: "Imprisonment", severity: 3 },
    ],
    realWorldNote: "Workplace safety acts (e.g., WSH Act) commonly impose heavy fines and licence suspensions on negligent supervisors.",
    standardOfProof: "Criminal negligence: 'beyond reasonable doubt' for intent; civil claims separately.",
  },
];

export const getCasesByChapter = (chapter: "school" | "society") =>
  CASES.filter((c) => c.chapter === chapter);

export const getCaseById = (id: string) => CASES.find((c) => c.id === id);
