import { CaseData, Chapter } from "./types";
import imgS1 from "@/assets/case-s1.jpg";
import imgS2 from "@/assets/case-s2.jpg";
import imgC1 from "@/assets/case-c1.jpg";
import imgC2 from "@/assets/case-c2.jpg";
import imgC3 from "@/assets/case-c3.jpg";
import imgS3 from "@/assets/case-s3.jpg";

/**
 * Game World: Kuala Lumpur. Player is a trainee legal investigator at the
 * Special Case Investigation Unit. Five chapters trace a hidden criminal
 * network from school bullying to a final boss syndicate.
 *
 * NOTE: human-readable strings are translation KEYS resolved by SettingsContext.
 *
 * NOTE on hotspots: each evidence has a hidden hotspot { x, y, r } in % of
 * the scene area. Players tap the scene to discover evidence. Wrong taps
 * cost 1 of 10 attempts.
 *
 * NOTE on verdicts: schema only allows "guilty" | "not_guilty". For shared
 * responsibility / insufficient evidence outcomes we set correctVerdict
 * accordingly and rely on `legalOptions[].correct` to identify the right
 * legal reasoning.
 */

export const CASES: CaseData[] = [
  // ============================================================
  // CHAPTER 1 — The Silent Classroom (School Arc · Intro)
  // Bullying + secret recording + illegal distribution
  // ============================================================
  {
    id: "ch1",
    chapter: "ch1_silent_classroom",
    title: "case.ch1.title",
    image: imgS1,
    brief: "case.ch1.brief",
    statements: [
      { who: "case.ch1.stmt.0.who", quote: "case.ch1.stmt.0.quote" }, // Ms. Li
      { who: "case.ch1.stmt.1.who", quote: "case.ch1.stmt.1.quote" }, // Chen Junhao
      { who: "case.ch1.stmt.2.who", quote: "case.ch1.stmt.2.quote" }, // Wang Kai
      { who: "case.ch1.stmt.3.who", quote: "case.ch1.stmt.3.quote" }, // Lin Zixuan (victim)
    ],
    evidence: [
      { id: "phone_video",  label: "case.ch1.ev.phone_video.label",  short: "case.ch1.ev.phone_video.short",  detail: "case.ch1.ev.phone_video.detail",  reliable: true,  hotspot: { x: 32, y: 64, r: 5 } }, // ⭐
      { id: "chat_logs",    label: "case.ch1.ev.chat_logs.label",    short: "case.ch1.ev.chat_logs.short",    detail: "case.ch1.ev.chat_logs.detail",    reliable: true,  hotspot: { x: 70, y: 38, r: 5 } }, // ⭐
      { id: "cctv",         label: "case.ch1.ev.cctv.label",         short: "case.ch1.ev.cctv.short",         detail: "case.ch1.ev.cctv.detail",         reliable: true,  hotspot: { x: 12, y: 16, r: 5 } },
      { id: "cloud_upload", label: "case.ch1.ev.cloud_upload.label", short: "case.ch1.ev.cloud_upload.short", detail: "case.ch1.ev.cloud_upload.detail", reliable: true,  hotspot: { x: 84, y: 76, r: 5 } }, // ⭐
      { id: "medical",      label: "case.ch1.ev.medical.label",      short: "case.ch1.ev.medical.short",      detail: "case.ch1.ev.medical.detail",      reliable: true,  hotspot: { x: 48, y: 86, r: 5 } },
      { id: "teacher_note", label: "case.ch1.ev.teacher_note.label", short: "case.ch1.ev.teacher_note.short", detail: "case.ch1.ev.teacher_note.detail", reliable: false, hotspot: { x: 56, y: 22, r: 5 } },
    ],
    legalOptions: [
      { id: "criminal_assault", label: "case.ch1.legal.criminal_assault", correct: true,  reasoning: "case.ch1.legal.criminal_assault.r" },
      { id: "school_discipline", label: "case.ch1.legal.school_discipline", correct: false, reasoning: "case.ch1.legal.school_discipline.r" },
      { id: "insufficient",     label: "case.ch1.legal.insufficient",     correct: false, reasoning: "case.ch1.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "detention_counsel",
    punishments: [
      { id: "discipline_only",   label: "case.ch1.pun.discipline_only",   severity: 1 },
      { id: "detention_counsel", label: "case.ch1.pun.detention_counsel", severity: 2 },
      { id: "max_custodial",     label: "case.ch1.pun.max_custodial",     severity: 3 },
    ],
    realWorldNote: "case.ch1.realWorld",
    standardOfProof: "case.ch1.standard",
  },

  // ============================================================
  // CHAPTER 2 — The Missing Exam Papers (School Arc · Intermediate)
  // Exam leak, fraud, computer crime, system tampering
  // ============================================================
  {
    id: "ch2",
    chapter: "ch2_exam_papers",
    title: "case.ch2.title",
    image: imgS2,
    brief: "case.ch2.brief",
    statements: [
      { who: "case.ch2.stmt.0.who", quote: "case.ch2.stmt.0.quote" }, // Mr. Lin
      { who: "case.ch2.stmt.1.who", quote: "case.ch2.stmt.1.quote" }, // Zhang Wei
      { who: "case.ch2.stmt.2.who", quote: "case.ch2.stmt.2.quote" }, // Ah Ming
      { who: "case.ch2.stmt.3.who", quote: "case.ch2.stmt.3.quote" }, // Chen Meiling
    ],
    evidence: [
      { id: "login_log",   label: "case.ch2.ev.login_log.label",   short: "case.ch2.ev.login_log.short",   detail: "case.ch2.ev.login_log.detail",   reliable: true,  hotspot: { x: 28, y: 30, r: 5 } },
      { id: "usb_record",  label: "case.ch2.ev.usb_record.label",  short: "case.ch2.ev.usb_record.short",  detail: "case.ch2.ev.usb_record.detail",  reliable: true,  hotspot: { x: 50, y: 50, r: 5 } }, // ⭐
      { id: "transactions", label: "case.ch2.ev.transactions.label", short: "case.ch2.ev.transactions.short", detail: "case.ch2.ev.transactions.detail", reliable: true,  hotspot: { x: 76, y: 60, r: 5 } }, // ⭐
      { id: "ewallet",     label: "case.ch2.ev.ewallet.label",     short: "case.ch2.ev.ewallet.short",     detail: "case.ch2.ev.ewallet.detail",     reliable: true,  hotspot: { x: 18, y: 76, r: 5 } },
      { id: "grade_edit",  label: "case.ch2.ev.grade_edit.label",  short: "case.ch2.ev.grade_edit.short",  detail: "case.ch2.ev.grade_edit.detail",  reliable: true,  hotspot: { x: 60, y: 18, r: 5 } },
      { id: "rumor",       label: "case.ch2.ev.rumor.label",       short: "case.ch2.ev.rumor.short",       detail: "case.ch2.ev.rumor.detail",       reliable: false, hotspot: { x: 86, y: 30, r: 5 } },
    ],
    legalOptions: [
      { id: "computer_crime", label: "case.ch2.legal.computer_crime", correct: true,  reasoning: "case.ch2.legal.computer_crime.r" },
      { id: "fraud_only",     label: "case.ch2.legal.fraud_only",     correct: false, reasoning: "case.ch2.legal.fraud_only.r" },
      { id: "discipline",     label: "case.ch2.legal.discipline",     correct: false, reasoning: "case.ch2.legal.discipline.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "fine_jail_short",
    punishments: [
      { id: "discipline_only",  label: "case.ch2.pun.discipline_only",  severity: 1 },
      { id: "fine_jail_short",  label: "case.ch2.pun.fine_jail_short",  severity: 2 },
      { id: "max_jail",         label: "case.ch2.pun.max_jail",         severity: 3 },
    ],
    realWorldNote: "case.ch2.realWorld",
    standardOfProof: "case.ch2.standard",
  },

  // ============================================================
  // CHAPTER 3 — The Manipulated Truth (Society Arc)
  // Cyberbullying + defamation + deepfake + illegal distribution
  // ============================================================
  {
    id: "ch3",
    chapter: "ch3_manipulated_truth",
    title: "case.ch3.title",
    image: imgC3,
    brief: "case.ch3.brief",
    statements: [
      { who: "case.ch3.stmt.0.who", quote: "case.ch3.stmt.0.quote" }, // Zhou Jing
      { who: "case.ch3.stmt.1.who", quote: "case.ch3.stmt.1.quote" }, // Liu Kai
      { who: "case.ch3.stmt.2.who", quote: "case.ch3.stmt.2.quote" }, // IT Tech
      { who: "case.ch3.stmt.3.who", quote: "case.ch3.stmt.3.quote" }, // Anonymous account holder (caught later)
    ],
    evidence: [
      { id: "video_analysis", label: "case.ch3.ev.video_analysis.label", short: "case.ch3.ev.video_analysis.short", detail: "case.ch3.ev.video_analysis.detail", reliable: true,  hotspot: { x: 50, y: 30, r: 5 } }, // ⭐
      { id: "server_log",     label: "case.ch3.ev.server_log.label",     short: "case.ch3.ev.server_log.short",     detail: "case.ch3.ev.server_log.detail",     reliable: true,  hotspot: { x: 22, y: 56, r: 5 } },
      { id: "chat_proof",     label: "case.ch3.ev.chat_proof.label",     short: "case.ch3.ev.chat_proof.short",     detail: "case.ch3.ev.chat_proof.detail",     reliable: true,  hotspot: { x: 78, y: 44, r: 5 } }, // ⭐
      { id: "money_trail",    label: "case.ch3.ev.money_trail.label",    short: "case.ch3.ev.money_trail.short",    detail: "case.ch3.ev.money_trail.detail",    reliable: true,  hotspot: { x: 60, y: 72, r: 5 } }, // ⭐
      { id: "spread_map",     label: "case.ch3.ev.spread_map.label",     short: "case.ch3.ev.spread_map.short",     detail: "case.ch3.ev.spread_map.detail",     reliable: true,  hotspot: { x: 32, y: 84, r: 5 } },
      { id: "comments",       label: "case.ch3.ev.comments.label",       short: "case.ch3.ev.comments.short",       detail: "case.ch3.ev.comments.detail",       reliable: false, hotspot: { x: 86, y: 14, r: 5 } },
    ],
    legalOptions: [
      { id: "defamation_233", label: "case.ch3.legal.defamation_233", correct: true,  reasoning: "case.ch3.legal.defamation_233.r" },
      { id: "free_speech",    label: "case.ch3.legal.free_speech",    correct: false, reasoning: "case.ch3.legal.free_speech.r" },
      { id: "civil_only",     label: "case.ch3.legal.civil_only",     correct: false, reasoning: "case.ch3.legal.civil_only.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "fine_jail_takedown",
    punishments: [
      { id: "fine_only",          label: "case.ch3.pun.fine_only",          severity: 1 },
      { id: "fine_jail_takedown", label: "case.ch3.pun.fine_jail_takedown", severity: 2 },
      { id: "max_jail",           label: "case.ch3.pun.max_jail",           severity: 3 },
    ],
    realWorldNote: "case.ch3.realWorld",
    standardOfProof: "case.ch3.standard",
  },

  // ============================================================
  // CHAPTER 4 — Shadow Network (Main Story · Advanced)
  // Blackmail ring, illegal recording, distribution, control
  // ============================================================
  {
    id: "ch4",
    chapter: "ch4_shadow_network",
    title: "case.ch4.title",
    image: imgC1,
    brief: "case.ch4.brief",
    statements: [
      { who: "case.ch4.stmt.0.who", quote: "case.ch4.stmt.0.quote" }, // Ah Ming (informant)
      { who: "case.ch4.stmt.1.who", quote: "case.ch4.stmt.1.quote" }, // Ray (trader)
      { who: "case.ch4.stmt.2.who", quote: "case.ch4.stmt.2.quote" }, // Student victim
      { who: "case.ch4.stmt.3.who", quote: "case.ch4.stmt.3.quote" }, // Cyber-forensic officer
    ],
    evidence: [
      { id: "video_db",       label: "case.ch4.ev.video_db.label",       short: "case.ch4.ev.video_db.short",       detail: "case.ch4.ev.video_db.detail",       reliable: true,  hotspot: { x: 30, y: 28, r: 5 } }, // ⭐
      { id: "crypto_wallet",  label: "case.ch4.ev.crypto_wallet.label",  short: "case.ch4.ev.crypto_wallet.short",  detail: "case.ch4.ev.crypto_wallet.detail",  reliable: true,  hotspot: { x: 70, y: 30, r: 5 } }, // ⭐
      { id: "extort_msgs",    label: "case.ch4.ev.extort_msgs.label",    short: "case.ch4.ev.extort_msgs.short",    detail: "case.ch4.ev.extort_msgs.detail",    reliable: true,  hotspot: { x: 50, y: 56, r: 5 } },
      { id: "encrypted_chat", label: "case.ch4.ev.encrypted_chat.label", short: "case.ch4.ev.encrypted_chat.short", detail: "case.ch4.ev.encrypted_chat.detail", reliable: true,  hotspot: { x: 18, y: 70, r: 5 } },
      { id: "ip_chain",       label: "case.ch4.ev.ip_chain.label",       short: "case.ch4.ev.ip_chain.short",       detail: "case.ch4.ev.ip_chain.detail",       reliable: true,  hotspot: { x: 82, y: 76, r: 5 } }, // ⭐
      { id: "anon_tip",       label: "case.ch4.ev.anon_tip.label",       short: "case.ch4.ev.anon_tip.short",       detail: "case.ch4.ev.anon_tip.detail",       reliable: false, hotspot: { x: 50, y: 88, r: 5 } },
    ],
    legalOptions: [
      { id: "organised_crime", label: "case.ch4.legal.organised_crime", correct: true,  reasoning: "case.ch4.legal.organised_crime.r" },
      { id: "individual_only", label: "case.ch4.legal.individual_only", correct: false, reasoning: "case.ch4.legal.individual_only.r" },
      { id: "civil_dispute",   label: "case.ch4.legal.civil_dispute",   correct: false, reasoning: "case.ch4.legal.civil_dispute.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "long_jail",
    punishments: [
      { id: "fine_jail",  label: "case.ch4.pun.fine_jail",  severity: 1 },
      { id: "long_jail",  label: "case.ch4.pun.long_jail",  severity: 2 },
      { id: "max_life",   label: "case.ch4.pun.max_life",   severity: 3 },
    ],
    realWorldNote: "case.ch4.realWorld",
    standardOfProof: "case.ch4.standard",
  },

  // ============================================================
  // CHAPTER 5 — Web of the Abyss (Final Boss)
  // Trafficking, drugs, murder, money laundering
  // ============================================================
  {
    id: "ch5",
    chapter: "ch5_web_abyss",
    title: "case.ch5.title",
    image: imgC2,
    brief: "case.ch5.brief",
    statements: [
      { who: "case.ch5.stmt.0.who", quote: "case.ch5.stmt.0.quote" }, // The Boss (philanthropist)
      { who: "case.ch5.stmt.1.who", quote: "case.ch5.stmt.1.quote" }, // Forensic accountant
      { who: "case.ch5.stmt.2.who", quote: "case.ch5.stmt.2.quote" }, // Witness (rescued victim)
      { who: "case.ch5.stmt.3.who", quote: "case.ch5.stmt.3.quote" }, // Anti-trafficking officer
    ],
    evidence: [
      { id: "laundering_ledger", label: "case.ch5.ev.laundering_ledger.label", short: "case.ch5.ev.laundering_ledger.short", detail: "case.ch5.ev.laundering_ledger.detail", reliable: true,  hotspot: { x: 28, y: 24, r: 5 } }, // ⭐
      { id: "shell_contracts",   label: "case.ch5.ev.shell_contracts.label",   short: "case.ch5.ev.shell_contracts.short",   detail: "case.ch5.ev.shell_contracts.detail",   reliable: true,  hotspot: { x: 70, y: 24, r: 5 } },
      { id: "encrypted_comms",   label: "case.ch5.ev.encrypted_comms.label",   short: "case.ch5.ev.encrypted_comms.short",   detail: "case.ch5.ev.encrypted_comms.detail",   reliable: true,  hotspot: { x: 50, y: 50, r: 5 } }, // ⭐
      { id: "medical_records",   label: "case.ch5.ev.medical_records.label",   short: "case.ch5.ev.medical_records.short",   detail: "case.ch5.ev.medical_records.detail",   reliable: true,  hotspot: { x: 22, y: 72, r: 5 } }, // ⭐
      { id: "drug_seizure",      label: "case.ch5.ev.drug_seizure.label",      short: "case.ch5.ev.drug_seizure.short",      detail: "case.ch5.ev.drug_seizure.detail",      reliable: true,  hotspot: { x: 78, y: 72, r: 5 } }, // ⭐
      { id: "weapon",            label: "case.ch5.ev.weapon.label",            short: "case.ch5.ev.weapon.short",            detail: "case.ch5.ev.weapon.detail",            reliable: true,  hotspot: { x: 50, y: 86, r: 5 } },
      { id: "press_clippings",   label: "case.ch5.ev.press_clippings.label",   short: "case.ch5.ev.press_clippings.short",   detail: "case.ch5.ev.press_clippings.detail",   reliable: false, hotspot: { x: 86, y: 12, r: 5 } },
    ],
    legalOptions: [
      { id: "syndicate_full",  label: "case.ch5.legal.syndicate_full",  correct: true,  reasoning: "case.ch5.legal.syndicate_full.r" },
      { id: "money_only",      label: "case.ch5.legal.money_only",      correct: false, reasoning: "case.ch5.legal.money_only.r" },
      { id: "premature_arrest", label: "case.ch5.legal.premature_arrest", correct: false, reasoning: "case.ch5.legal.premature_arrest.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "life_imprisonment",
    punishments: [
      { id: "long_jail",         label: "case.ch5.pun.long_jail",         severity: 1 },
      { id: "life_imprisonment", label: "case.ch5.pun.life_imprisonment", severity: 2 },
      { id: "max_capital",       label: "case.ch5.pun.max_capital",       severity: 3 },
    ],
    realWorldNote: "case.ch5.realWorld",
    standardOfProof: "case.ch5.standard",
  },
];

export const ALL_CHAPTERS: Chapter[] = [
  "ch1_silent_classroom",
  "ch2_exam_papers",
  "ch3_manipulated_truth",
  "ch4_shadow_network",
  "ch5_web_abyss",
];

export const getCasesByChapter = (chapter: Chapter) =>
  CASES.filter((c) => c.chapter === chapter);

export const getCaseById = (id: string) => CASES.find((c) => c.id === id);

/** Background classification (school vs society) for visuals only. */
export const isSchoolChapter = (c: Chapter) =>
  c === "ch1_silent_classroom" || c === "ch2_exam_papers";
