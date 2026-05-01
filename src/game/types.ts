export type Screen =
  | "home"
  | "quest"
  | "settings"
  | "store"
  | "triumph"
  | "case";

export type Chapter =
  | "ch1_silent_classroom"
  | "ch2_exam_papers"
  | "ch3_manipulated_truth"
  | "ch4_shadow_network"
  | "ch5_web_abyss";

/** Legacy aliases — many existing components/strings still use these. */
export type LegacyChapter = "school" | "society";

export interface EvidenceHotspot {
  /** Center X as % of scene width (0-100) */
  x: number;
  /** Center Y as % of scene height (0-100) */
  y: number;
  /** Hit radius as % of min(scene width, height). Keep small for challenge. */
  r: number;
}

export interface Evidence {
  id: string;
  label: string;
  short: string;
  detail: string;
  reliable: boolean;
  /** Hidden hotspot coordinates on the scene image (click-to-discover). */
  hotspot?: EvidenceHotspot;
}

export interface LegalOption {
  id: string;
  label: string;
  correct: boolean;
  reasoning: string;
}

export interface VerdictOption {
  id: "guilty" | "not_guilty";
  label: string;
}

export interface PunishmentOption {
  id: string;
  label: string;
  severity: number; // 0..3
}

export interface ImpactWeights {
  // Effect on metrics if this verdict+punishment is the IDEAL choice
  justice: number;
  publicTrust: number;
  fairness: number;
}

export interface CaseData {
  id: string;
  chapter: Chapter;
  title: string;
  image?: string;
  brief: string;
  statements: { who: string; quote: string }[];
  evidence: Evidence[];
  legalOptions: LegalOption[];
  correctVerdict: VerdictOption["id"];
  recommendedPunishmentId: string | null;
  punishments: PunishmentOption[];
  realWorldNote: string;
  standardOfProof: string;
}

export interface JudgementResult {
  selectedEvidenceIds: string[];
  legalChoiceId: string;
  verdict: VerdictOption["id"];
  punishmentId: string | null;
}
