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
 * Actual text lives in `CASE_DICT` per language and is merged into the
 * SettingsContext dictionary so that `t(key)` resolves them. This means
 * switching language instantly translates every quest title, brief,
 * dialogue line, evidence label, reasoning option and punishment.
 */

export const CASES: CaseData[] = [
  // ============ SCHOOL CHAPTER ============
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
      { id: "cctv",   label: "case.s1.ev.cctv.label",   short: "case.s1.ev.cctv.short",   detail: "case.s1.ev.cctv.detail",   reliable: true },
      { id: "locker", label: "case.s1.ev.locker.label", short: "case.s1.ev.locker.short", detail: "case.s1.ev.locker.detail", reliable: true },
      { id: "rumor",  label: "case.s1.ev.rumor.label",  short: "case.s1.ev.rumor.short",  detail: "case.s1.ev.rumor.detail",  reliable: false },
      { id: "alibi",  label: "case.s1.ev.alibi.label",  short: "case.s1.ev.alibi.short",  detail: "case.s1.ev.alibi.detail",  reliable: false },
    ],
    legalOptions: [
      { id: "theft",        label: "case.s1.legal.theft",        correct: true,  reasoning: "case.s1.legal.theft.r" },
      { id: "misconduct",   label: "case.s1.legal.misconduct",   correct: false, reasoning: "case.s1.legal.misconduct.r" },
      { id: "insufficient", label: "case.s1.legal.insufficient", correct: false, reasoning: "case.s1.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "suspension",
    punishments: [
      { id: "warning",    label: "case.s1.pun.warning",    severity: 1 },
      { id: "detention",  label: "case.s1.pun.detention",  severity: 2 },
      { id: "suspension", label: "case.s1.pun.suspension", severity: 3 },
    ],
    realWorldNote: "case.s1.realWorld",
    standardOfProof: "case.s1.standard",
  },
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
      { id: "answers", label: "case.s2.ev.answers.label", short: "case.s2.ev.answers.short", detail: "case.s2.ev.answers.detail", reliable: true },
      { id: "history", label: "case.s2.ev.history.label", short: "case.s2.ev.history.short", detail: "case.s2.ev.history.detail", reliable: true },
      { id: "gossip",  label: "case.s2.ev.gossip.label",  short: "case.s2.ev.gossip.short",  detail: "case.s2.ev.gossip.detail",  reliable: false },
      { id: "tutor",   label: "case.s2.ev.tutor.label",   short: "case.s2.ev.tutor.short",   detail: "case.s2.ev.tutor.detail",   reliable: true },
    ],
    legalOptions: [
      { id: "cheating",     label: "case.s2.legal.cheating",     correct: true,  reasoning: "case.s2.legal.cheating.r" },
      { id: "misconduct",   label: "case.s2.legal.misconduct",   correct: false, reasoning: "case.s2.legal.misconduct.r" },
      { id: "insufficient", label: "case.s2.legal.insufficient", correct: false, reasoning: "case.s2.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "retake",
    punishments: [
      { id: "warning",    label: "case.s2.pun.warning",    severity: 1 },
      { id: "retake",     label: "case.s2.pun.retake",     severity: 2 },
      { id: "suspension", label: "case.s2.pun.suspension", severity: 3 },
    ],
    realWorldNote: "case.s2.realWorld",
    standardOfProof: "case.s2.standard",
  },
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
      { who: "case.s3.stmt.3.who", quote: "case.s3.stmt.3.quote" },
    ],
    evidence: [
      { id: "bruise",  label: "case.s3.ev.bruise.label",  short: "case.s3.ev.bruise.short",  detail: "case.s3.ev.bruise.detail",  reliable: true },
      { id: "history", label: "case.s3.ev.history.label", short: "case.s3.ev.history.short", detail: "case.s3.ev.history.detail", reliable: true },
      { id: "anon",    label: "case.s3.ev.anon.label",    short: "case.s3.ev.anon.short",    detail: "case.s3.ev.anon.detail",    reliable: false },
      { id: "cctv",    label: "case.s3.ev.cctv.label",    short: "case.s3.ev.cctv.short",    detail: "case.s3.ev.cctv.detail",    reliable: true },
    ],
    legalOptions: [
      { id: "bullying",     label: "case.s3.legal.bullying",     correct: false, reasoning: "case.s3.legal.bullying.r" },
      { id: "misconduct",   label: "case.s3.legal.misconduct",   correct: true,  reasoning: "case.s3.legal.misconduct.r" },
      { id: "insufficient", label: "case.s3.legal.insufficient", correct: false, reasoning: "case.s3.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "mediation",
    punishments: [
      { id: "warning",    label: "case.s3.pun.warning",    severity: 1 },
      { id: "mediation",  label: "case.s3.pun.mediation",  severity: 2 },
      { id: "suspension", label: "case.s3.pun.suspension", severity: 3 },
    ],
    realWorldNote: "case.s3.realWorld",
    standardOfProof: "case.s3.standard",
  },

  // ============ SOCIETY CHAPTER ============
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
      { id: "bank",     label: "case.c1.ev.bank.label",     short: "case.c1.ev.bank.short",     detail: "case.c1.ev.bank.detail",     reliable: true },
      { id: "supplier", label: "case.c1.ev.supplier.label", short: "case.c1.ev.supplier.short", detail: "case.c1.ev.supplier.detail", reliable: false },
      { id: "site",     label: "case.c1.ev.site.label",     short: "case.c1.ev.site.short",     detail: "case.c1.ev.site.detail",     reliable: true },
      { id: "social",   label: "case.c1.ev.social.label",   short: "case.c1.ev.social.short",   detail: "case.c1.ev.social.detail",   reliable: false },
      { id: "history",  label: "case.c1.ev.history.label",  short: "case.c1.ev.history.short",  detail: "case.c1.ev.history.detail",  reliable: true },
    ],
    legalOptions: [
      { id: "fraud",        label: "case.c1.legal.fraud",        correct: true,  reasoning: "case.c1.legal.fraud.r" },
      { id: "negligence",   label: "case.c1.legal.negligence",   correct: false, reasoning: "case.c1.legal.negligence.r" },
      { id: "insufficient", label: "case.c1.legal.insufficient", correct: false, reasoning: "case.c1.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "fine_jail",
    punishments: [
      { id: "fine",      label: "case.c1.pun.fine",      severity: 1 },
      { id: "fine_jail", label: "case.c1.pun.fine_jail", severity: 2 },
      { id: "max",       label: "case.c1.pun.max",       severity: 3 },
    ],
    realWorldNote: "case.c1.realWorld",
    standardOfProof: "case.c1.standard",
  },
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
    ],
    evidence: [
      { id: "decibel",     label: "case.c2.ev.decibel.label",     short: "case.c2.ev.decibel.short",     detail: "case.c2.ev.decibel.detail",     reliable: true },
      { id: "post",        label: "case.c2.ev.post.label",        short: "case.c2.ev.post.short",        detail: "case.c2.ev.post.detail",        reliable: true },
      { id: "screenshots", label: "case.c2.ev.screenshots.label", short: "case.c2.ev.screenshots.short", detail: "case.c2.ev.screenshots.detail", reliable: false },
      { id: "permit",      label: "case.c2.ev.permit.label",      short: "case.c2.ev.permit.short",      detail: "case.c2.ev.permit.detail",      reliable: true },
    ],
    legalOptions: [
      { id: "both",         label: "case.c2.legal.both",         correct: true,  reasoning: "case.c2.legal.both.r" },
      { id: "defamation",   label: "case.c2.legal.defamation",   correct: false, reasoning: "case.c2.legal.defamation.r" },
      { id: "insufficient", label: "case.c2.legal.insufficient", correct: false, reasoning: "case.c2.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "mediation",
    punishments: [
      { id: "mediation", label: "case.c2.pun.mediation", severity: 1 },
      { id: "fines",     label: "case.c2.pun.fines",     severity: 2 },
      { id: "court",     label: "case.c2.pun.court",     severity: 3 },
    ],
    realWorldNote: "case.c2.realWorld",
    standardOfProof: "case.c2.standard",
  },
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
      { id: "harness",  label: "case.c3.ev.harness.label",  short: "case.c3.ev.harness.short",  detail: "case.c3.ev.harness.detail",  reliable: true },
      { id: "log",      label: "case.c3.ev.log.label",      short: "case.c3.ev.log.short",      detail: "case.c3.ev.log.detail",      reliable: true },
      { id: "training", label: "case.c3.ev.training.label", short: "case.c3.ev.training.short", detail: "case.c3.ev.training.detail", reliable: true },
      { id: "anon",     label: "case.c3.ev.anon.label",     short: "case.c3.ev.anon.short",     detail: "case.c3.ev.anon.detail",     reliable: false },
    ],
    legalOptions: [
      { id: "negligence",   label: "case.c3.legal.negligence",   correct: true,  reasoning: "case.c3.legal.negligence.r" },
      { id: "shared",       label: "case.c3.legal.shared",       correct: false, reasoning: "case.c3.legal.shared.r" },
      { id: "insufficient", label: "case.c3.legal.insufficient", correct: false, reasoning: "case.c3.legal.insufficient.r" },
    ],
    correctVerdict: "guilty",
    recommendedPunishmentId: "fine_ban",
    punishments: [
      { id: "warning",  label: "case.c3.pun.warning",  severity: 1 },
      { id: "fine_ban", label: "case.c3.pun.fine_ban", severity: 2 },
      { id: "jail",     label: "case.c3.pun.jail",     severity: 3 },
    ],
    realWorldNote: "case.c3.realWorld",
    standardOfProof: "case.c3.standard",
  },
];

export const getCasesByChapter = (chapter: "school" | "society") =>
  CASES.filter((c) => c.chapter === chapter);

export const getCaseById = (id: string) => CASES.find((c) => c.id === id);
