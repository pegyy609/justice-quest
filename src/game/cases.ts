import { CaseData } from "./types";
import imgS1 from "@/assets/case-s1.jpg";
import imgS2 from "@/assets/case-s2.jpg";
import imgS3 from "@/assets/case-s3.jpg";
import imgC1 from "@/assets/case-c1.jpg";
import imgC2 from "@/assets/case-c2.jpg";
import imgC3 from "@/assets/case-c3.jpg";

/**
 * NOTE on i18n:
 * All human-readable strings in CaseData are translation KEYS, not literal text.
 *
 * NOTE on hotspots:
 * Each evidence has a hidden hotspot { x, y, r } in % of the scene area.
 * Players must click/tap on the scene to discover evidence. Hotspots are
 * intentionally small and scattered to encourage careful observation.
 *
 * NOTE on verdicts:
 * The schema allows only "guilty" | "not_guilty" for correctVerdict. For cases
 * where the truly correct outcome is "insufficient evidence" or "shared
 * responsibility", we set correctVerdict to "not_guilty" and rely on the
 * `legalOptions[].correct` flag to identify the right legal reasoning.
 */

export const CASES: CaseData[] = [
  // ============ SCHOOL CHAPTER ============

  // S1 — The Missing Laptop (Presence ≠ Guilt)
  {
    id: "s1",
    chapter: "school",
    title: "case.s1.title",
    image: imgS1,
    brief: "case.s1.brief",
    statements: [
      { who: "case.s1.stmt.0.who", quote: "case.s1.stmt.0.quote" },
      { who: "case.s1.stmt.1.who", quote: "case.s1.stmt.1.quote" },
      { who: "case.s1.stmt.2.who", quote: "case.s1.stmt.2.quote" },
    ],
    evidence: [
      { id: "empty_desk", label: "case.s1.ev.empty_desk.label", short: "case.s1.ev.empty_desk.short", detail: "case.s1.ev.empty_desk.detail", reliable: true,  hotspot: { x: 50, y: 38, r: 5 } },
      { id: "open_bag",   label: "case.s1.ev.open_bag.label",   short: "case.s1.ev.open_bag.short",   detail: "case.s1.ev.open_bag.detail",   reliable: true,  hotspot: { x: 36, y: 78, r: 5 } },
      { id: "cable",      label: "case.s1.ev.cable.label",      short: "case.s1.ev.cable.short",      detail: "case.s1.ev.cable.detail",      reliable: true,  hotspot: { x: 56, y: 85, r: 5 } }, // ⭐
      { id: "student",    label: "case.s1.ev.student.label",    short: "case.s1.ev.student.short",    detail: "case.s1.ev.student.detail",    reliable: false, hotspot: { x: 82, y: 46, r: 5 } },
      { id: "window",     label: "case.s1.ev.window.label",     short: "case.s1.ev.window.short",     detail: "case.s1.ev.window.detail",     reliable: true,  hotspot: { x: 48, y: 12, r: 6 } },
    ],
    legalOptions: [
      { id: "insufficient", label: "case.s1.legal.insufficient", correct: true,  reasoning: "case.s1.legal.insufficient.r" },
      { id: "theft",        label: "case.s1.legal.theft",        correct: false, reasoning: "case.s1.legal.theft.r" },
      { id: "misconduct",   label: "case.s1.legal.misconduct",   correct: false, reasoning: "case.s1.legal.misconduct.r" },
    ],
    correctVerdict: "not_guilty",
    recommendedPunishmentId: "none",
    punishments: [
      { id: "none",     label: "case.s1.pun.none",     severity: 0 },
      { id: "warning",  label: "case.s1.pun.warning",  severity: 1 },
      { id: "detention", label: "case.s1.pun.detention", severity: 2 },
    ],
    realWorldNote: "case.s1.realWorld",
    standardOfProof: "case.s1.standard",
  },

  // S2 — Exam Cheating (Similarity ≠ Confirmed Cheating)
  {
    id: "s2",
    chapter: "school",
    title: "case.s2.title",
    image: imgS2,
    brief: "case.s2.brief",
    statements: [
      { who: "case.s2.stmt.0.who", quote: "case.s2.stmt.0.quote" },
      { who: "case.s2.stmt.1.who", quote: "case.s2.stmt.1.quote" },
      { who: "case.s2.stmt.2.who", quote: "case.s2.stmt.2.quote" },
    ],
    evidence: [
      { id: "answers",     label: "case.s2.ev.answers.label",     short: "case.s2.ev.answers.short",     detail: "case.s2.ev.answers.detail",     reliable: true,  hotspot: { x: 38, y: 56, r: 5 } }, // ⭐
      { id: "seating",     label: "case.s2.ev.seating.label",     short: "case.s2.ev.seating.short",     detail: "case.s2.ev.seating.detail",     reliable: true,  hotspot: { x: 60, y: 70, r: 5 } },
      { id: "glance",      label: "case.s2.ev.glance.label",      short: "case.s2.ev.glance.short",      detail: "case.s2.ev.glance.detail",      reliable: false, hotspot: { x: 70, y: 42, r: 5 } },
      { id: "invigilator", label: "case.s2.ev.invigilator.label", short: "case.s2.ev.invigilator.short", detail: "case.s2.ev.invigilator.detail", reliable: true,  hotspot: { x: 50, y: 18, r: 5 } },
      { id: "rough",       label: "case.s2.ev.rough.label",       short: "case.s2.ev.rough.short",       detail: "case.s2.ev.rough.detail",       reliable: true,  hotspot: { x: 50, y: 50, r: 5 } },
    ],
    legalOptions: [
      { id: "misconduct",   label: "case.s2.legal.misconduct",   correct: true,  reasoning: "case.s2.legal.misconduct.r" },
      { id: "insufficient", label: "case.s2.legal.insufficient", correct: true,  reasoning: "case.s2.legal.insufficient.r" },
      { id: "cheating",     label: "case.s2.legal.cheating",     correct: false, reasoning: "case.s2.legal.cheating.r" },
    ],
    correctVerdict: "not_guilty",
    recommendedPunishmentId: "warning",
    punishments: [
      { id: "warning",  label: "case.s2.pun.warning",  severity: 1 },
      { id: "retake",   label: "case.s2.pun.retake",   severity: 2 },
      { id: "suspension", label: "case.s2.pun.suspension", severity: 3 },
    ],
    realWorldNote: "case.s2.realWorld",
    standardOfProof: "case.s2.standard",
  },

  // S3 — Broken Window (Group presence, no clear responsibility)
  {
    id: "s3",
    chapter: "school",
    title: "case.s3.title",
    image: imgS3,
    brief: "case.s3.brief",
    statements: [
      { who: "case.s3.stmt.0.who", quote: "case.s3.stmt.0.quote" },
      { who: "case.s3.stmt.1.who", quote: "case.s3.stmt.1.quote" },
      { who: "case.s3.stmt.2.who", quote: "case.s3.stmt.2.quote" },
    ],
    evidence: [
      { id: "glass",   label: "case.s3.ev.glass.label",   short: "case.s3.ev.glass.short",   detail: "case.s3.ev.glass.detail",   reliable: true,  hotspot: { x: 32, y: 78, r: 6 } },
      { id: "ball",    label: "case.s3.ev.ball.label",    short: "case.s3.ev.ball.short",    detail: "case.s3.ev.ball.detail",    reliable: true,  hotspot: { x: 50, y: 70, r: 5 } }, // ⭐
      { id: "group",   label: "case.s3.ev.group.label",   short: "case.s3.ev.group.short",   detail: "case.s3.ev.group.detail",   reliable: true,  hotspot: { x: 70, y: 46, r: 5 } },
      { id: "nervous", label: "case.s3.ev.nervous.label", short: "case.s3.ev.nervous.short", detail: "case.s3.ev.nervous.detail", reliable: false, hotspot: { x: 76, y: 50, r: 4 } },
      { id: "witness", label: "case.s3.ev.witness.label", short: "case.s3.ev.witness.short", detail: "case.s3.ev.witness.detail", reliable: false, hotspot: { x: 14, y: 30, r: 5 } },
    ],
    legalOptions: [
      { id: "insufficient", label: "case.s3.legal.insufficient", correct: true,  reasoning: "case.s3.legal.insufficient.r" },
      { id: "shared",       label: "case.s3.legal.shared",       correct: false, reasoning: "case.s3.legal.shared.r" }, // partial credit story-wise; not the best
      { id: "misconduct",   label: "case.s3.legal.misconduct",   correct: false, reasoning: "case.s3.legal.misconduct.r" },
    ],
    correctVerdict: "not_guilty",
    recommendedPunishmentId: "none",
    punishments: [
      { id: "none",      label: "case.s3.pun.none",      severity: 0 },
      { id: "warning",   label: "case.s3.pun.warning",   severity: 1 },
      { id: "mediation", label: "case.s3.pun.mediation", severity: 2 },
    ],
    realWorldNote: "case.s3.realWorld",
    standardOfProof: "case.s3.standard",
  },

  // ============ SOCIETY CHAPTER ============

  // C1 — Shoplifting (Crime is clear, but motive matters)
  {
    id: "c1",
    chapter: "society",
    title: "case.c1.title",
    image: imgC1,
    brief: "case.c1.brief",
    statements: [
      { who: "case.c1.stmt.0.who", quote: "case.c1.stmt.0.quote" },
      { who: "case.c1.stmt.1.who", quote: "case.c1.stmt.1.quote" },
      { who: "case.c1.stmt.2.who", quote: "case.c1.stmt.2.quote" },
    ],
    evidence: [
      { id: "cctv",     label: "case.c1.ev.cctv.label",     short: "case.c1.ev.cctv.short",     detail: "case.c1.ev.cctv.detail",     reliable: true,  hotspot: { x: 12, y: 14, r: 5 } }, // ⭐
      { id: "no_pay",   label: "case.c1.ev.no_pay.label",   short: "case.c1.ev.no_pay.short",   detail: "case.c1.ev.no_pay.detail",   reliable: true,  hotspot: { x: 70, y: 44, r: 5 } }, // ⭐
      { id: "distress", label: "case.c1.ev.distress.label", short: "case.c1.ev.distress.short", detail: "case.c1.ev.distress.detail", reliable: false, hotspot: { x: 22, y: 52, r: 5 } },
      { id: "wallet",   label: "case.c1.ev.wallet.label",   short: "case.c1.ev.wallet.short",   detail: "case.c1.ev.wallet.detail",   reliable: true,  hotspot: { x: 86, y: 60, r: 5 } },
      { id: "staff",    label: "case.c1.ev.staff.label",    short: "case.c1.ev.staff.short",    detail: "case.c1.ev.staff.detail",    reliable: true,  hotspot: { x: 64, y: 36, r: 5 } },
    ],
    legalOptions: [
      { id: "theft_light", label: "case.c1.legal.theft_light", correct: true,  reasoning: "case.c1.legal.theft_light.r" },
      { id: "theft_full",  label: "case.c1.legal.theft_full",  correct: false, reasoning: "case.c1.legal.theft_full.r" },
      { id: "insufficient", label: "case.c1.legal.insufficient", correct: false, reasoning: "case.c1.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "community",
    punishments: [
      { id: "warning",   label: "case.c1.pun.warning",   severity: 1 },
      { id: "community", label: "case.c1.pun.community", severity: 2 },
      { id: "jail",      label: "case.c1.pun.jail",      severity: 3 },
    ],
    realWorldNote: "case.c1.realWorld",
    standardOfProof: "case.c1.standard",
  },

  // C2 — Traffic Accident (Conflicting evidence — shared responsibility)
  {
    id: "c2",
    chapter: "society",
    title: "case.c2.title",
    image: imgC2,
    brief: "case.c2.brief",
    statements: [
      { who: "case.c2.stmt.0.who", quote: "case.c2.stmt.0.quote" },
      { who: "case.c2.stmt.1.who", quote: "case.c2.stmt.1.quote" },
      { who: "case.c2.stmt.2.who", quote: "case.c2.stmt.2.quote" },
      { who: "case.c2.stmt.3.who", quote: "case.c2.stmt.3.quote" },
    ],
    evidence: [
      { id: "cars",     label: "case.c2.ev.cars.label",     short: "case.c2.ev.cars.short",     detail: "case.c2.ev.cars.detail",     reliable: true,  hotspot: { x: 28, y: 50, r: 6 } },
      { id: "light",    label: "case.c2.ev.light.label",    short: "case.c2.ev.light.short",    detail: "case.c2.ev.light.detail",    reliable: false, hotspot: { x: 50, y: 14, r: 5 } },
      { id: "witnessA", label: "case.c2.ev.witnessA.label", short: "case.c2.ev.witnessA.short", detail: "case.c2.ev.witnessA.detail", reliable: false, hotspot: { x: 12, y: 28, r: 5 } },
      { id: "witnessB", label: "case.c2.ev.witnessB.label", short: "case.c2.ev.witnessB.short", detail: "case.c2.ev.witnessB.detail", reliable: false, hotspot: { x: 86, y: 28, r: 5 } },
      { id: "skid",     label: "case.c2.ev.skid.label",     short: "case.c2.ev.skid.short",     detail: "case.c2.ev.skid.detail",     reliable: true,  hotspot: { x: 44, y: 78, r: 6 } }, // ⭐
    ],
    legalOptions: [
      { id: "shared",       label: "case.c2.legal.shared",       correct: true,  reasoning: "case.c2.legal.shared.r" },
      { id: "insufficient", label: "case.c2.legal.insufficient", correct: true,  reasoning: "case.c2.legal.insufficient.r" },
      { id: "driver1",      label: "case.c2.legal.driver1",      correct: false, reasoning: "case.c2.legal.driver1.r" },
    ],
    correctVerdict: "not_guilty",
    recommendedPunishmentId: "shared_fine",
    punishments: [
      { id: "mediation",   label: "case.c2.pun.mediation",   severity: 1 },
      { id: "shared_fine", label: "case.c2.pun.shared_fine", severity: 2 },
      { id: "license",     label: "case.c2.pun.license",     severity: 3 },
    ],
    realWorldNote: "case.c2.realWorld",
    standardOfProof: "case.c2.standard",
  },

  // C3 — Online Scam (Intent vs misunderstanding — fraud)
  {
    id: "c3",
    chapter: "society",
    title: "case.c3.title",
    image: imgC3,
    brief: "case.c3.brief",
    statements: [
      { who: "case.c3.stmt.0.who", quote: "case.c3.stmt.0.quote" },
      { who: "case.c3.stmt.1.who", quote: "case.c3.stmt.1.quote" },
      { who: "case.c3.stmt.2.who", quote: "case.c3.stmt.2.quote" },
    ],
    evidence: [
      { id: "chat",     label: "case.c3.ev.chat.label",     short: "case.c3.ev.chat.short",     detail: "case.c3.ev.chat.detail",     reliable: true,  hotspot: { x: 50, y: 32, r: 6 } }, // ⭐
      { id: "transfer", label: "case.c3.ev.transfer.label", short: "case.c3.ev.transfer.short", detail: "case.c3.ev.transfer.detail", reliable: true,  hotspot: { x: 50, y: 60, r: 6 } }, // ⭐
      { id: "contract", label: "case.c3.ev.contract.label", short: "case.c3.ev.contract.short", detail: "case.c3.ev.contract.detail", reliable: true,  hotspot: { x: 18, y: 46, r: 5 } },
      { id: "profile",  label: "case.c3.ev.profile.label",  short: "case.c3.ev.profile.short",  detail: "case.c3.ev.profile.detail",  reliable: true,  hotspot: { x: 60, y: 18, r: 5 } },
      { id: "claim",    label: "case.c3.ev.claim.label",    short: "case.c3.ev.claim.short",    detail: "case.c3.ev.claim.detail",    reliable: false, hotspot: { x: 80, y: 78, r: 5 } },
    ],
    legalOptions: [
      { id: "fraud",        label: "case.c3.legal.fraud",        correct: true,  reasoning: "case.c3.legal.fraud.r" },
      { id: "negligence",   label: "case.c3.legal.negligence",   correct: false, reasoning: "case.c3.legal.negligence.r" },
      { id: "insufficient", label: "case.c3.legal.insufficient", correct: false, reasoning: "case.c3.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "fine_jail",
    punishments: [
      { id: "fine",      label: "case.c3.pun.fine",      severity: 1 },
      { id: "fine_jail", label: "case.c3.pun.fine_jail", severity: 2 },
      { id: "max",       label: "case.c3.pun.max",       severity: 3 },
    ],
    realWorldNote: "case.c3.realWorld",
    standardOfProof: "case.c3.standard",
  },
];

export const getCasesByChapter = (chapter: "school" | "society") =>
  CASES.filter((c) => c.chapter === chapter);

export const getCaseById = (id: string) => CASES.find((c) => c.id === id);
