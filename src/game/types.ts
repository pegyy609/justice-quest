export type Screen =
  | "home"
  | "quest"
  | "settings"
  | "store"
  | "triumph"
  | "case";

export type Chapter = "school" | "society";

export interface Evidence {
  id: string;
  label: string;
  short: string;
  detail: string;
  reliable: boolean;
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
