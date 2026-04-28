import { useMemo, useRef, useState } from "react";
import { Screen, JudgementResult } from "@/game/types";
import { getCaseById } from "@/game/cases";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import schoolBg from "@/assets/school-bg.jpg";
import societyBg from "@/assets/society-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { useSettings } from "@/game/SettingsContext";

interface Props {
  caseId: string;
  onNavigate: (s: Screen) => void;
}

type Phase = "brief" | "evidence" | "reasoning" | "verdict" | "feedback";

const CaseScreen = ({ caseId, onNavigate }: Props) => {
  const { t } = useSettings();
  const data = getCaseById(caseId);
  const [phase, setPhase] = useState<Phase>("brief");
  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([]);
  const [openEvidence, setOpenEvidence] = useState<string | null>(null);
  const [legalChoice, setLegalChoice] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<"guilty" | "not_guilty" | null>(null);
  const [punishment, setPunishment] = useState<string | null>(null);
  const [showRealWorld, setShowRealWorld] = useState(false);

  const bg = useMemo(() => {
    if (!data) return courthouseBg;
    return data.chapter === "school" ? schoolBg : societyBg;
  }, [data]);

  if (!data) {
    return (
      <GameFrame background={courthouseBg}>
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="pixel-title text-lg">Case not found</p>
          <button className="pixel-btn px-4 py-2 text-xs" onClick={() => onNavigate("quest")}>
            Back
          </button>
        </div>
      </GameFrame>
    );
  }

  const result: JudgementResult = {
    selectedEvidenceIds: selectedEvidence,
    legalChoiceId: legalChoice ?? "",
    verdict: verdict ?? "not_guilty",
    punishmentId: punishment,
  };

  return (
    <GameFrame background={bg}>
      {/* Top bar */}
      <div className="pt-[3%] px-[4%] flex items-center gap-2">
        <button
          onClick={() => onNavigate("quest")}
          className="pixel-btn pixel-btn-secondary w-10 h-10 text-xs"
          aria-label="Quit case"
        >
          ◀
        </button>
        <div className="flex-1 pixel-panel px-2 py-1 text-center">
          <div className="font-pixel text-gold-bright text-[clamp(0.55rem,1.8vw,0.75rem)] truncate">
            {data.title}
          </div>
          <PhaseProgress phase={phase} />
        </div>
      </div>

      <div className="flex-1 flex flex-col px-[4%] py-[3%] overflow-hidden">
        {phase === "brief" && (
          <BriefView data={data} onNext={() => setPhase("evidence")} />
        )}
        {phase === "evidence" && (
          <EvidenceView
            data={data}
            selected={selectedEvidence}
            onToggle={(id) =>
              setSelectedEvidence((s) =>
                s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
              )
            }
            openId={openEvidence}
            setOpenId={setOpenEvidence}
            onNext={() => setPhase("reasoning")}
          />
        )}
        {phase === "reasoning" && (
          <ReasoningView
            data={data}
            choice={legalChoice}
            setChoice={setLegalChoice}
            onNext={() => setPhase("verdict")}
          />
        )}
        {phase === "verdict" && (
          <VerdictView
            data={data}
            verdict={verdict}
            setVerdict={setVerdict}
            punishment={punishment}
            setPunishment={setPunishment}
            onNext={() => setPhase("feedback")}
          />
        )}
        {phase === "feedback" && (
          <FeedbackView
            data={data}
            result={result}
            showRealWorld={showRealWorld}
            setShowRealWorld={setShowRealWorld}
            onRetry={() => {
              setSelectedEvidence([]);
              setLegalChoice(null);
              setVerdict(null);
              setPunishment(null);
              setShowRealWorld(false);
              setPhase("brief");
            }}
            onDone={() => onNavigate("quest")}
          />
        )}
      </div>
    </GameFrame>
  );
};

// ============== PHASE PROGRESS ==============
const PhaseProgress = ({ phase }: { phase: Phase }) => {
  const steps: Phase[] = ["brief", "evidence", "reasoning", "verdict", "feedback"];
  const idx = steps.indexOf(phase);
  return (
    <div className="flex justify-center gap-1 mt-1">
      {steps.map((s, i) => (
        <span
          key={s}
          className={`h-1.5 w-4 ${
            i <= idx ? "bg-gold-bright" : "bg-navy-light"
          } border border-navy-deep`}
        />
      ))}
    </div>
  );
};

// ============== BRIEF ==============
const BriefView = ({
  data,
  onNext,
}: {
  data: ReturnType<typeof getCaseById>;
  onNext: () => void;
}) => {
  const { t } = useSettings();
  if (!data) return null;
  return (
    <div className="flex flex-col h-full gap-3 overflow-y-auto">
      <SectionLabel>{t("case.brief")}</SectionLabel>
      {data.image && (
        <div className="pixel-panel p-1 overflow-hidden">
          <img
            src={data.image}
            alt={`Scene depicting: ${data.title}`}
            loading="lazy"
            className="w-full h-[28%] max-h-[180px] min-h-[110px] object-cover [image-rendering:pixelated]"
          />
        </div>
      )}
      <div className="pixel-panel p-3">
        <p className="font-retro text-parchment text-[clamp(0.95rem,2.6vw,1.15rem)] leading-snug">
          {data.brief}
        </p>
      </div>

      <SectionLabel>{t("case.statements")}</SectionLabel>
      <div className="flex flex-col gap-2">
        {data.statements.map((s, i) => (
          <div key={i} className="pixel-panel p-2">
            <div className="font-pixel text-gold text-[10px] mb-1">
              {s.who}
            </div>
            <div className="font-retro text-parchment text-[clamp(0.9rem,2.4vw,1.1rem)] leading-snug">
              "{s.quote}"
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-3 flex justify-end">
        <button onClick={onNext} className="pixel-btn px-5 py-2 text-xs">
          {t("common.next")}
        </button>
      </div>
    </div>
  );
};

// ============== EVIDENCE ==============
const EvidenceView = ({
  data,
  selected,
  onToggle,
  openId,
  setOpenId,
  onNext,
}: {
  data: ReturnType<typeof getCaseById>;
  selected: string[];
  onToggle: (id: string) => void;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  onNext: () => void;
}) => {
  const { t } = useSettings();
  const pressTimers = useRef<Record<string, number>>({});
  const longPressFired = useRef<Record<string, boolean>>({});

  const startPress = (id: string) => {
    longPressFired.current[id] = false;
    pressTimers.current[id] = window.setTimeout(() => {
      longPressFired.current[id] = true;
      setOpenId(id);
    }, 450);
  };
  const endPress = (id: string) => {
    if (pressTimers.current[id]) {
      clearTimeout(pressTimers.current[id]);
      delete pressTimers.current[id];
    }
  };
  const handleClick = (id: string) => {
    // Suppress the toggle if a long-press just opened the modal
    if (longPressFired.current[id]) {
      longPressFired.current[id] = false;
      return;
    }
    onToggle(id);
  };

  if (!data) return null;
  const open = data.evidence.find((e) => e.id === openId);

  return (
    <div className="flex flex-col h-full gap-2 overflow-y-auto relative">
      <SectionLabel>{t("case.evidence")}</SectionLabel>
      <p className="font-retro text-parchment-dark text-[clamp(0.85rem,2.2vw,1rem)] leading-tight">
        {t("case.evidenceHint")}
      </p>

      <div className="flex flex-col gap-2 mt-1">
        {data.evidence.map((e) => {
          const picked = selected.includes(e.id);
          return (
            <button
              key={e.id}
              onClick={() => handleClick(e.id)}
              onMouseDown={() => startPress(e.id)}
              onMouseUp={() => endPress(e.id)}
              onMouseLeave={() => endPress(e.id)}
              onTouchStart={() => startPress(e.id)}
              onTouchEnd={() => endPress(e.id)}
              onTouchMove={() => endPress(e.id)}
              onContextMenu={(ev) => ev.preventDefault()}
              className={`pixel-panel text-left p-2 transition-colors select-none ${
                picked ? "!bg-gold/20 !border-gold-bright" : ""
              }`}
            >
              <div className="flex items-start gap-2">
                <span
                  className={`font-pixel text-base shrink-0 mt-0.5 ${
                    picked ? "text-gold-bright" : "text-parchment-dark"
                  }`}
                >
                  {picked ? "✓" : "□"}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-pixel text-gold text-[10px] truncate">
                    {e.label}
                  </div>
                  <div className="font-retro text-parchment text-[clamp(0.85rem,2.2vw,1.05rem)] leading-tight">
                    {e.short}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-3 flex justify-between items-center gap-2">
        <span className="font-retro text-parchment-dark text-sm">
          {selected.length} {t("case.markedReliable")}
        </span>
        <button
          onClick={onNext}
          disabled={selected.length === 0}
          className="pixel-btn px-5 py-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("common.next")}
        </button>
      </div>

      {/* Detail modal */}
      {open && (
        <div
          className="absolute inset-0 z-30 bg-navy-deep/80 flex items-center justify-center p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            className="pixel-panel p-4 max-w-[92%] w-full max-h-[85%] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="font-pixel text-gold-bright text-xs">
                {open.label}
              </div>
              <span
                className={`font-pixel text-[9px] px-2 py-1 border-2 ${
                  open.reliable
                    ? "text-gold-bright border-gold-bright bg-gold/15"
                    : "text-parchment-dark border-parchment-dark bg-navy-light"
                }`}
              >
                {open.reliable ? t("case.reliable") : t("case.unreliable")}
              </span>
            </div>

            <div className="font-pixel text-gold text-[9px] mt-2 mb-1 uppercase tracking-wider">
              {t("case.summary")}
            </div>
            <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
              {open.short}
            </p>

            <div className="font-pixel text-gold text-[9px] mt-3 mb-1 uppercase tracking-wider">
              {t("case.keyFacts")}
            </div>
            <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
              {open.detail}
            </p>

            <div className="font-pixel text-gold text-[9px] mt-3 mb-1 uppercase tracking-wider">
              {t("case.notes")}
            </div>
            <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
              {open.reliable
                ? "Direct, verifiable source. Safe to weigh heavily in your judgement."
                : "Hearsay, contradicted, or unverified. Treat with caution — do not mark as reliable."}
            </p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setOpenId(null)}
                className="pixel-btn px-3 py-1.5 text-[10px]"
              
              >
                {t("common.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============== REASONING ==============
const ReasoningView = ({
  data,
  choice,
  setChoice,
  onNext,
}: {
  data: ReturnType<typeof getCaseById>;
  choice: string | null;
  setChoice: (id: string) => void;
  onNext: () => void;
}) => {
  const { t } = useSettings();
  if (!data) return null;
  return (
    <div className="flex flex-col h-full gap-3 overflow-y-auto">
      <SectionLabel>{t("case.reasoning")}</SectionLabel>
      <p className="font-retro text-parchment-dark text-[clamp(0.85rem,2.2vw,1rem)] leading-tight">
        {t("case.reasoningHint")}
      </p>

      <div className="flex flex-col gap-2 mt-1">
        {data.legalOptions.map((o) => {
          const active = choice === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setChoice(o.id)}
              className={`pixel-btn ${active ? "pixel-btn-active" : "pixel-btn-secondary"} text-left p-3 normal-case`}
            >
              <span className="font-pixel text-[clamp(0.65rem,2vw,0.85rem)]">
                {o.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-3 flex justify-end">
        <button
          onClick={onNext}
          disabled={!choice}
          className="pixel-btn px-5 py-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("common.next")}
        </button>
      </div>
    </div>
  );
};

// ============== VERDICT ==============
const VerdictView = ({
  data,
  verdict,
  setVerdict,
  punishment,
  setPunishment,
  onNext,
}: {
  data: ReturnType<typeof getCaseById>;
  verdict: "guilty" | "not_guilty" | null;
  setVerdict: (v: "guilty" | "not_guilty") => void;
  punishment: string | null;
  setPunishment: (id: string) => void;
  onNext: () => void;
}) => {
  const { t } = useSettings();
  if (!data) return null;
  return (
    <div className="flex flex-col h-full gap-3 overflow-y-auto">
      <SectionLabel>{t("case.verdict")}</SectionLabel>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setVerdict("guilty")}
          className={`pixel-btn py-3 text-xs ${
            verdict === "guilty" ? "pixel-btn-active" : ""
          }`}
        >
          {t("case.guilty")}
        </button>
        <button
          onClick={() => setVerdict("not_guilty")}
          className={`pixel-btn py-3 text-xs ${
            verdict === "not_guilty" ? "pixel-btn-active" : "pixel-btn-secondary"
          }`}
        >
          {t("case.notGuilty")}
        </button>
      </div>

      {verdict === "guilty" && (
        <>
          <SectionLabel>{t("case.punishment")}</SectionLabel>
          <div className="flex flex-col gap-2">
            {data.punishments.map((p) => {
              const active = punishment === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setPunishment(p.id)}
                  className={`pixel-btn ${active ? "pixel-btn-active" : "pixel-btn-secondary"} text-left p-2 normal-case`}
                >
                  <span className="font-pixel text-[clamp(0.6rem,1.9vw,0.8rem)]">
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}

      <div className="mt-auto pt-3 flex justify-end">
        <button
          onClick={onNext}
          disabled={!verdict || (verdict === "guilty" && !punishment)}
          className="pixel-btn px-5 py-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("case.deliver")}
        </button>
      </div>
    </div>
  );
};

// ============== FEEDBACK ==============
const FeedbackView = ({
  data,
  result,
  showRealWorld,
  setShowRealWorld,
  onRetry,
  onDone,
}: {
  data: ReturnType<typeof getCaseById>;
  result: JudgementResult;
  showRealWorld: boolean;
  setShowRealWorld: (v: boolean) => void;
  onRetry: () => void;
  onDone: () => void;
}) => {
  if (!data) return null;

  // Score reliable evidence selection
  const reliableTotal = data.evidence.filter((e) => e.reliable).length;
  const correctlyChosen = result.selectedEvidenceIds.filter(
    (id) => data.evidence.find((e) => e.id === id)?.reliable,
  ).length;
  const wrongChosen = result.selectedEvidenceIds.filter(
    (id) => !data.evidence.find((e) => e.id === id)?.reliable,
  ).length;

  const evidenceScore = Math.max(
    0,
    Math.round(((correctlyChosen - wrongChosen) / reliableTotal) * 100),
  );

  const legalCorrect =
    data.legalOptions.find((o) => o.id === result.legalChoiceId)?.correct ?? false;
  const verdictCorrect = result.verdict === data.correctVerdict;
  const punishmentCorrect =
    result.verdict === "guilty"
      ? result.punishmentId === data.recommendedPunishmentId
      : true;

  // Impact metrics
  const justice = clamp(
    50 +
      (verdictCorrect ? 25 : -25) +
      (legalCorrect ? 15 : -10) +
      (punishmentCorrect ? 10 : -10),
  );
  const publicTrust = clamp(
    50 + Math.round(evidenceScore * 0.3) + (verdictCorrect ? 15 : -20),
  );
  const fairness = clamp(
    50 +
      (legalCorrect ? 20 : -15) +
      (punishmentCorrect ? 20 : -15) +
      Math.round(evidenceScore * 0.1),
  );

  const overall = Math.round((justice + publicTrust + fairness) / 3);

  const meetsStandard = verdictCorrect && legalCorrect && evidenceScore >= 50;

  return (
    <div className="flex flex-col h-full gap-2 overflow-y-auto">
      <SectionLabel>Court Evaluation</SectionLabel>

      <div className="pixel-panel p-3">
        <div className="font-pixel text-gold-bright text-xs mb-1">
          {meetsStandard ? "⚖ Sound Judgement" : "⚠ Reconsider Reasoning"}
        </div>
        <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
          {meetsStandard
            ? `Your verdict meets the standard of proof. ${data.standardOfProof}`
            : `Your verdict does not fully meet the standard of proof. ${data.standardOfProof}`}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ScoreCell label="Evidence" value={evidenceScore} />
        <ScoreCell label="Legal Fit" value={legalCorrect ? 100 : 30} />
        <ScoreCell label="Verdict" value={verdictCorrect ? 100 : 0} />
        <ScoreCell
          label="Punishment"
          value={
            result.verdict === "not_guilty"
              ? verdictCorrect
                ? 100
                : 0
              : punishmentCorrect
                ? 100
                : 50
          }
        />
      </div>

      <SectionLabel>Impact on Society</SectionLabel>
      <div className="pixel-panel p-3 flex flex-col gap-2">
        <Bar label="Justice" value={justice} />
        <Bar label="Public Trust" value={publicTrust} />
        <Bar label="Fairness" value={fairness} />
        <div className="border-t-2 border-gold/40 mt-1 pt-2 flex justify-between items-center">
          <span className="font-pixel text-gold text-[10px]">Overall</span>
          <span className="font-pixel text-gold-bright text-base">{overall}</span>
        </div>
      </div>

      <button
        onClick={() => setShowRealWorld(!showRealWorld)}
        className="pixel-btn pixel-btn-secondary px-3 py-1.5 text-[10px] self-start"
      >
        {showRealWorld ? "Hide" : "Compare"} real-world ▾
      </button>
      {showRealWorld && (
        <div className="pixel-panel p-3">
          <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
            {data.realWorldNote}
          </p>
        </div>
      )}

      <div className="mt-auto pt-3 grid grid-cols-2 gap-2">
        <button onClick={onRetry} className="pixel-btn pixel-btn-secondary py-2 text-[10px]">
          ↻ Retry
        </button>
        <button onClick={onDone} className="pixel-btn py-2 text-[10px]">
          Continue ▶
        </button>
      </div>
    </div>
  );
};

const ScoreCell = ({ label, value }: { label: string; value: number }) => (
  <div className="pixel-panel p-2 text-center">
    <div className="font-pixel text-gold text-[9px]">{label}</div>
    <div className="font-pixel text-gold-bright text-lg mt-1">{value}</div>
  </div>
);

const Bar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between font-pixel text-[9px] text-gold mb-1">
      <span>{label}</span>
      <span className="text-gold-bright">{value}</span>
    </div>
    <div className="h-2 bg-navy-light border-2 border-navy-deep">
      <div
        className="h-full bg-gold-bright"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="font-pixel text-gold-bright text-[clamp(0.6rem,1.9vw,0.8rem)] uppercase tracking-wider">
    » {children}
  </div>
);

const clamp = (n: number) => Math.max(0, Math.min(100, n));

export default CaseScreen;
