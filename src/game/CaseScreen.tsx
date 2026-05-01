import { useEffect, useMemo, useRef, useState } from "react";
import { Screen, JudgementResult } from "@/game/types";
import { getCaseById } from "@/game/cases";
import { isSchoolChapter } from "@/game/cases";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import schoolBg from "@/assets/school-bg.jpg";
import societyBg from "@/assets/society-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { useSettings } from "@/game/SettingsContext";
import { useInventory } from "@/game/InventoryContext";
import { ITEMS, ShopItem } from "@/game/items";
import { toast } from "sonner";

interface Props {
  caseId: string;
  onNavigate: (s: Screen) => void;
}

type Phase = "brief" | "evidence" | "reasoning" | "verdict" | "feedback";

const CaseScreen = ({ caseId, onNavigate }: Props) => {
  const { t } = useSettings();
  const inv = useInventory();
  const data = getCaseById(caseId);
  const [phase, setPhase] = useState<Phase>("brief");
  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([]);
  const [openEvidence, setOpenEvidence] = useState<string | null>(null);
  const [legalChoice, setLegalChoice] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<"guilty" | "not_guilty" | "special" | null>(null);
  const [punishment, setPunishment] = useState<string | null>(null);
  const [showRealWorld, setShowRealWorld] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [pendingItem, setPendingItem] = useState<ShopItem | null>(null);

  // Reset active item effects whenever a new case is opened
  useEffect(() => {
    inv.resetActiveEffects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseId]);

  const bg = useMemo(() => {
    if (!data) return courthouseBg;
    return isSchoolChapter(data.chapter) ? schoolBg : societyBg;
  }, [data]);

  if (!data) {
    return (
      <GameFrame background={courthouseBg}>
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="pixel-title text-lg">{t("case.notFound")}</p>
          <button className="pixel-btn px-4 py-2 text-xs" onClick={() => onNavigate("quest")}>
            {t("case.back")}
          </button>
        </div>
      </GameFrame>
    );
  }

  const result: JudgementResult = {
    selectedEvidenceIds: selectedEvidence,
    legalChoiceId: legalChoice ?? "",
    // Treat "special" as not_guilty for scoring base; bonus applied in feedback
    verdict: verdict === "special" ? "not_guilty" : verdict ?? "not_guilty",
    punishmentId: punishment,
  };

  const confirmUseItem = () => {
    if (!pendingItem) return;
    const res = inv.consume(pendingItem.id);
    if (res.ok) {
      toast.success(t("bag.used").replace("{name}", t(pendingItem.nameKey)));
      setBagOpen(false);
    }
    setPendingItem(null);
  };

  return (
    <GameFrame background={bg}>
      {/* Top bar */}
      <div className="pt-[3%] px-[4%] flex items-center gap-2">
        <button
          onClick={() => onNavigate("quest")}
          className="pixel-btn pixel-btn-secondary w-10 h-10 text-xs hover:scale-105 active:scale-95 transition-transform"
          aria-label="Quit case"
        >
          ◀
        </button>
        <div className="flex-1 pixel-panel px-2 py-1 text-center">
          <div className="font-pixel text-gold-bright text-[clamp(0.55rem,1.8vw,0.75rem)] truncate">
            {t(data.title)}
          </div>
          <PhaseProgress phase={phase} />
        </div>
        <button
          onClick={() => setBagOpen(true)}
          className="pixel-btn w-10 h-10 text-xs relative hover:scale-105 active:scale-95 transition-transform"
          aria-label={t("bag.open")}
        >
          🎒
          {Object.values(inv.bag).reduce((a, b) => a + b, 0) > 0 && (
            <span className="absolute -top-1 -right-1 font-pixel text-[8px] bg-gold-bright text-navy-deep px-1">
              {Object.values(inv.bag).reduce((a, b) => a + b, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Pixel character active-effects overlay */}
      {inv.activeEffects.length > 0 && (
        <div className="px-[4%] pt-2 flex flex-wrap items-center gap-1">
          <span className="font-pixel text-gold text-[8px] uppercase tracking-wider">
            {t("bag.activeEffects")}:
          </span>
          {inv.activeEffects.map((e) => {
            const item = ITEMS.find((i) => i.effect === e);
            if (!item) return null;
            return (
              <span
                key={e}
                className="font-pixel text-[9px] text-gold-bright bg-navy-deep border-2 border-gold-bright px-1.5 py-0.5 animate-pulse"
                title={t(item.funcKey)}
              >
                {item.icon} {t(`effect.${e}.label`)}
              </span>
            );
          })}
        </div>
      )}

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
            revealReliability={inv.hasEffect("truth_lens")}
            onNext={() => setPhase("reasoning")}
          />
        )}
        {phase === "reasoning" && (
          <ReasoningView
            data={data}
            choice={legalChoice}
            setChoice={setLegalChoice}
            highlightCorrect={inv.hasEffect("scroll")}
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
            specialUnlocked={inv.hasEffect("verdict_key")}
            onNext={() => setPhase("feedback")}
          />
        )}
        {phase === "feedback" && (
          <FeedbackView
            data={data}
            result={result}
            usedSpecial={verdict === "special"}
            shieldActive={inv.hasEffect("shield")}
            crownActive={inv.hasEffect("crown")}
            gemActive={inv.hasEffect("gem")}
            showRealWorld={showRealWorld}
            setShowRealWorld={setShowRealWorld}
            onRetry={() => {
              setSelectedEvidence([]);
              setLegalChoice(null);
              setVerdict(null);
              setPunishment(null);
              setShowRealWorld(false);
              inv.resetActiveEffects();
              setPhase("brief");
            }}
            onDone={() => onNavigate("quest")}
          />
        )}
      </div>

      {/* Bag drawer */}
      {bagOpen && (
        <BagDrawer
          onClose={() => setBagOpen(false)}
          onPick={(item) => setPendingItem(item)}
        />
      )}

      {/* Use-item double confirmation */}
      {pendingItem && (
        <div
          className="fixed inset-0 z-50 bg-navy-deep/85 flex items-center justify-center p-4"
          onClick={() => setPendingItem(null)}
        >
          <div
            className="pixel-panel p-4 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-3xl mb-2">{pendingItem.icon}</div>
            <div className="font-pixel text-gold-bright text-xs mb-1">
              {t(pendingItem.nameKey)}
            </div>
            <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] mb-3">
              {t(pendingItem.funcKey)}
            </p>
            <div className="font-pixel text-gold text-xs mb-3">
              {t("bag.confirm")}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPendingItem(null)}
                className="pixel-btn pixel-btn-secondary py-2 text-xs hover:scale-105 active:scale-95 transition-transform"
              >
                {t("bag.no")}
              </button>
              <button
                onClick={confirmUseItem}
                className="pixel-btn py-2 text-xs hover:scale-105 active:scale-95 transition-transform"
              >
                {t("bag.yes")}
              </button>
            </div>
          </div>
        </div>
      )}
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
            alt={`Scene depicting: ${t(data.title)}`}
            loading="lazy"
            className="w-full h-[28%] max-h-[180px] min-h-[110px] object-cover [image-rendering:pixelated]"
          />
        </div>
      )}
      <div className="pixel-panel p-3">
        <p className="font-retro text-parchment text-[clamp(0.95rem,2.6vw,1.15rem)] leading-snug">
          {t(data.brief)}
        </p>
      </div>

      <SectionLabel>{t("case.statements")}</SectionLabel>
      <div className="flex flex-col gap-2">
        {data.statements.map((s, i) => (
          <div key={i} className="pixel-panel p-2">
            <div className="font-pixel text-gold text-[10px] mb-1">
              {t(s.who)}
            </div>
            <div className="font-retro text-parchment text-[clamp(0.9rem,2.4vw,1.1rem)] leading-snug">
              "{t(s.quote)}"
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

// ============== EVIDENCE (click-to-discover scene) ==============
const MAX_ATTEMPTS = 10;

const EvidenceView = ({
  data,
  selected,
  onToggle,
  openId,
  setOpenId,
  revealReliability,
  onNext,
}: {
  data: ReturnType<typeof getCaseById>;
  selected: string[];
  onToggle: (id: string) => void;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  revealReliability: boolean;
  onNext: () => void;
}) => {
  const { t } = useSettings();
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [edgeFlash, setEdgeFlash] = useState(false);
  const flashTimer = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  if (!data) return null;
  const open = data.evidence.find((e) => e.id === openId);
  const found = selected;
  const totalEvidence = data.evidence.length;
  const outOfAttempts = attemptsLeft <= 0;

  const playWarn = () => {
    try {
      const AC =
        (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AC();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = 180;
      gain.gain.value = 0.04;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      /* ignore */
    }
  };

  const playSuccess = () => {
    try {
      const AC =
        (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AC();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 880;
      gain.gain.value = 0.05;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      /* ignore */
    }
  };

  const triggerEdgeFlash = () => {
    setEdgeFlash(true);
    if (flashTimer.current) window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setEdgeFlash(false), 350);
  };

  const handleSceneClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sceneRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    // Use the smaller dimension as reference for radius (matches definition)
    const minDim = Math.min(rect.width, rect.height);

    // Check hotspots
    let hit: string | null = null;
    for (const ev of data.evidence) {
      if (!ev.hotspot) continue;
      if (found.includes(ev.id)) continue;
      const dxPx = ((ev.hotspot.x - px) / 100) * rect.width;
      const dyPx = ((ev.hotspot.y - py) / 100) * rect.height;
      const distPx = Math.hypot(dxPx, dyPx);
      const radiusPx = (ev.hotspot.r / 100) * minDim;
      if (distPx <= radiusPx) {
        hit = ev.id;
        break;
      }
    }

    if (hit) {
      onToggle(hit);
      setOpenId(hit);
      playSuccess();
      return;
    }

    // Miss: ripple + attempt deduction (only if attempts remain)
    const id = Date.now() + Math.random();
    setRipples((r) => [...r, { id, x: px, y: py }]);
    window.setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);

    if (!outOfAttempts) {
      setAttemptsLeft((a) => Math.max(0, a - 1));
      triggerEdgeFlash();
      playWarn();
    }
  };

  // Intensity scales as attempts dwindle
  const flashIntensity = Math.min(0.85, 0.35 + (1 - attemptsLeft / MAX_ATTEMPTS) * 0.55);

  return (
    <div className="flex flex-col h-full gap-2 overflow-hidden relative">
      <SectionLabel>{t("case.evidence")}</SectionLabel>
      <p className="font-retro text-parchment-dark text-[clamp(0.8rem,2.1vw,0.95rem)] leading-tight">
        {outOfAttempts ? t("case.outOfAttempts") : t("case.evidenceHint")}
      </p>

      {/* HUD */}
      <div className="flex items-center justify-between gap-2 font-pixel text-[9px]">
        <span className="pixel-panel px-2 py-1 text-gold-bright">
          🔎 {t("case.found")}: <span className="text-gold-bright">{found.length}/{totalEvidence}</span>
        </span>
        <span
          className={`pixel-panel px-2 py-1 ${
            attemptsLeft <= 3 ? "text-destructive animate-pulse" : "text-gold"
          }`}
        >
          ⚠ {t("case.attempts")}: {attemptsLeft}/{MAX_ATTEMPTS}
        </span>
      </div>

      {/* Scene */}
      <div
        ref={sceneRef}
        onClick={handleSceneClick}
        className="relative flex-1 min-h-[180px] border-4 border-gold/70 bg-navy-deep overflow-hidden cursor-crosshair select-none"
        role="img"
        aria-label="Investigation scene — tap to search for evidence"
      >
        {data.image && (
          <img
            src={data.image}
            alt=""
            aria-hidden
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover [image-rendering:pixelated] pointer-events-none"
          />
        )}
        {/* Subtle dim overlay for atmosphere */}
        <div className="absolute inset-0 bg-navy-deep/25 pointer-events-none" />

        {/* Found markers (red marker-style circles) */}
        {data.evidence
          .filter((e) => e.hotspot && found.includes(e.id))
          .map((e) => (
            <button
              key={e.id}
              onClick={(ev) => {
                ev.stopPropagation();
                setOpenId(e.id);
              }}
              style={{
                left: `${e.hotspot!.x}%`,
                top: `${e.hotspot!.y}%`,
                width: `${e.hotspot!.r * 2.4}%`,
                aspectRatio: "1 / 1",
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-destructive bg-destructive/10 hover:bg-destructive/25 transition-colors animate-scale-in"
              aria-label={t(e.label)}
              title={t(e.label)}
            >
              <span className="absolute -top-1 -right-1 font-pixel text-[8px] bg-destructive text-destructive-foreground px-1 leading-tight">
                ✓
              </span>
            </button>
          ))}

        {/* Miss ripples */}
        {ripples.map((r) => (
          <span
            key={r.id}
            style={{ left: `${r.x}%`, top: `${r.y}%` }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-parchment/70 animate-ping"
          />
        ))}

        {/* Empty hint when nothing found */}
        {found.length === 0 && (
          <div className="absolute bottom-2 left-2 right-2 text-center font-retro text-parchment text-[clamp(0.75rem,1.9vw,0.9rem)] bg-navy-deep/60 px-2 py-1 pointer-events-none">
            {t("case.noneFound")}
          </div>
        )}

        {/* Edge red flash on wrong click */}
        {edgeFlash && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: `inset 0 0 60px hsl(var(--destructive) / ${flashIntensity}), inset 0 0 12px hsl(var(--destructive) / ${flashIntensity})`,
              border: `4px solid hsl(var(--destructive) / ${flashIntensity})`,
            }}
          />
        )}
      </div>

      {/* Found list (compact) */}
      {found.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {found.map((id) => {
            const ev = data.evidence.find((x) => x.id === id);
            if (!ev) return null;
            return (
              <button
                key={id}
                onClick={() => setOpenId(id)}
                className="font-pixel text-[8px] bg-navy-light border-2 border-gold text-gold-bright px-1.5 py-0.5 hover:bg-gold/20 active:scale-95 transition"
              >
                {t(ev.label)}
              </button>
            );
          })}
        </div>
      )}

      <div className="pt-2 flex justify-between items-center gap-2">
        <span className="font-retro text-parchment-dark text-xs">
          {found.length} {t("case.markedReliable")}
        </span>
        <button onClick={onNext} className="pixel-btn px-4 py-2 text-[10px]">
          {t("case.proceed")}
        </button>
      </div>

      {/* Detail modal (shown on discovery and on marker click) */}
      {open && (
        <div
          className="absolute inset-0 z-30 bg-navy-deep/85 flex items-center justify-center p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            className="pixel-panel p-4 max-w-[92%] w-full max-h-[85%] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="font-pixel text-gold-bright text-xs">
                🔴 {t(open.label)}
              </div>
              {revealReliability && (
                <span
                  className={`font-pixel text-[9px] px-2 py-1 border-2 ${
                    open.reliable
                      ? "text-gold-bright border-gold-bright bg-gold/15"
                      : "text-parchment-dark border-parchment-dark bg-navy-light"
                  }`}
                >
                  {open.reliable ? t("case.reliable") : t("case.unreliable")}
                </span>
              )}
            </div>

            <div className="font-pixel text-gold text-[9px] mt-2 mb-1 uppercase tracking-wider">
              {t("case.summary")}
            </div>
            <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
              {t(open.short)}
            </p>

            <div className="font-pixel text-gold text-[9px] mt-3 mb-1 uppercase tracking-wider">
              {t("case.keyFacts")}
            </div>
            <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
              {t(open.detail)}
            </p>

            {(() => {
              const moreKey = `${open.detail}.more`;
              const moreText = t(moreKey);
              if (moreText === moreKey) return null;
              return (
                <>
                  <div className="font-pixel text-gold text-[9px] mt-3 mb-1 uppercase tracking-wider">
                    » {t("case.sourceCaveats")}
                  </div>
                  <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
                    {moreText}
                  </p>
                </>
              );
            })()}

            {revealReliability && (
              <>
                <div className="font-pixel text-gold text-[9px] mt-3 mb-1 uppercase tracking-wider">
                  {t("case.notes")}
                </div>
                <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
                  {open.reliable
                    ? t("case.reliable.note")
                    : t("case.unreliable.note")}
                </p>
              </>
            )}

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
  highlightCorrect,
  onNext,
}: {
  data: ReturnType<typeof getCaseById>;
  choice: string | null;
  setChoice: (id: string) => void;
  highlightCorrect: boolean;
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
          const hinted = highlightCorrect && o.correct;
          return (
            <button
              key={o.id}
              onClick={() => setChoice(o.id)}
              className={`pixel-btn ${active ? "pixel-btn-active" : "pixel-btn-secondary"} text-left p-3 normal-case ${hinted ? "ring-2 ring-gold-bright animate-pulse" : ""}`}
            >
              <span className="font-pixel text-[clamp(0.65rem,2vw,0.85rem)]">
                {hinted && "★ "}{t(o.label)}
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
  specialUnlocked,
  onNext,
}: {
  data: ReturnType<typeof getCaseById>;
  verdict: "guilty" | "not_guilty" | "special" | null;
  setVerdict: (v: "guilty" | "not_guilty" | "special") => void;
  punishment: string | null;
  setPunishment: (id: string) => void;
  specialUnlocked: boolean;
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

      {specialUnlocked && (
        <button
          onClick={() => setVerdict("special")}
          className={`pixel-btn py-3 text-xs col-span-2 ring-2 ring-gold-bright ${
            verdict === "special" ? "pixel-btn-active" : "pixel-btn-secondary"
          }`}
        >
          {t("bag.specialChoice")}
        </button>
      )}

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
                    {t(p.label)}
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
  usedSpecial,
  shieldActive,
  crownActive,
  gemActive,
  showRealWorld,
  setShowRealWorld,
  onRetry,
  onDone,
}: {
  data: ReturnType<typeof getCaseById>;
  result: JudgementResult;
  usedSpecial: boolean;
  shieldActive: boolean;
  crownActive: boolean;
  gemActive: boolean;
  showRealWorld: boolean;
  setShowRealWorld: (v: boolean) => void;
  onRetry: () => void;
  onDone: () => void;
}) => {
  const { t } = useSettings();
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
  // Verdict Key "Special" choice always counts as correct path
  const verdictCorrect = usedSpecial || result.verdict === data.correctVerdict;
  const punishmentCorrect =
    result.verdict === "guilty"
      ? result.punishmentId === data.recommendedPunishmentId
      : true;

  // Impact metrics
  let justice = clamp(
    50 +
      (verdictCorrect ? 25 : -25) +
      (legalCorrect ? 15 : -10) +
      (punishmentCorrect ? 10 : -10),
  );
  let publicTrust = clamp(
    50 + Math.round(evidenceScore * 0.3) + (verdictCorrect ? 15 : -20),
  );
  let fairness = clamp(
    50 +
      (legalCorrect ? 20 : -15) +
      (punishmentCorrect ? 20 : -15) +
      Math.round(evidenceScore * 0.1),
  );

  // Item effect bonuses applied at evaluation time
  if (crownActive) publicTrust = clamp(publicTrust + 20);
  if (shieldActive) fairness = clamp(Math.max(fairness, 60));
  let overall = Math.round((justice + publicTrust + fairness) / 3);
  if (gemActive) overall = clamp(Math.round(overall * 1.25));

  const meetsStandard = verdictCorrect && (legalCorrect || usedSpecial) && evidenceScore >= 50;

  return (
    <div className="flex flex-col h-full gap-2 overflow-y-auto">
      <SectionLabel>{t("case.eval")}</SectionLabel>

      <div className="pixel-panel p-3">
        <div className="font-pixel text-gold-bright text-xs mb-1">
          {meetsStandard ? t("case.sound") : t("case.reconsider")}
        </div>
        <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
          {meetsStandard ? t("case.standardMet") : t("case.standardNotMet")} {t(data.standardOfProof)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ScoreCell label={t("case.score.evidence")} value={evidenceScore} />
        <ScoreCell label={t("case.score.legal")} value={legalCorrect ? 100 : 30} />
        <ScoreCell label={t("case.score.verdict")} value={verdictCorrect ? 100 : 0} />
        <ScoreCell
          label={t("case.score.punishment")}
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

      <SectionLabel>{t("case.impact")}</SectionLabel>
      <div className="pixel-panel p-3 flex flex-col gap-2">
        <Bar label={t("case.impact.justice")} value={justice} />
        <Bar label={t("case.impact.trust")} value={publicTrust} />
        <Bar label={t("case.impact.fairness")} value={fairness} />
        <div className="border-t-2 border-gold/40 mt-1 pt-2 flex justify-between items-center">
          <span className="font-pixel text-gold text-[10px]">{t("case.impact.overall")}</span>
          <span className="font-pixel text-gold-bright text-base">{overall}</span>
        </div>
      </div>

      <button
        onClick={() => setShowRealWorld(!showRealWorld)}
        className="pixel-btn pixel-btn-secondary px-3 py-1.5 text-[10px] self-start"
      >
        {showRealWorld ? t("case.realWorld.hide") : t("case.realWorld.show")}
      </button>
      {showRealWorld && (
        <div className="pixel-panel p-3">
          <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug">
            {t(data.realWorldNote)}
          </p>
        </div>
      )}

      <div className="mt-auto pt-3 grid grid-cols-2 gap-2">
        <button onClick={onRetry} className="pixel-btn pixel-btn-secondary py-2 text-[10px]">
          {t("case.retry")}
        </button>
        <button onClick={onDone} className="pixel-btn py-2 text-[10px]">
          {t("case.continue")}
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

// ============== BAG DRAWER ==============
const BagDrawer = ({
  onClose,
  onPick,
}: {
  onClose: () => void;
  onPick: (item: ShopItem) => void;
}) => {
  const { t } = useSettings();
  const { bag } = useInventory();
  const ownedItems = ITEMS.filter((i) => (bag[i.id] ?? 0) > 0);
  const [info, setInfo] = useState<ShopItem | null>(null);

  return (
    <div
      className="fixed inset-0 z-40 bg-navy-deep/80 flex items-end sm:items-center justify-center p-3"
      onClick={onClose}
    >
      <div
        className="pixel-panel p-4 w-full max-w-md max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-pixel text-gold-bright text-sm">🎒 {t("bag.title")}</span>
          <button
            onClick={onClose}
            className="pixel-btn pixel-btn-secondary px-2 py-1 text-[10px] hover:scale-105 active:scale-95 transition-transform"
          >
            {t("common.close")}
          </button>
        </div>

        {ownedItems.length === 0 ? (
          <p className="font-retro text-parchment-dark text-center py-6">
            {t("bag.empty")}
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {ownedItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setInfo(item)}
                className="pixel-panel p-2 flex flex-col items-center gap-1 hover:bg-navy-light/50 hover:scale-[1.05] active:scale-95 transition-all relative"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-pixel text-[8px] text-parchment text-center leading-tight">
                  {t(item.nameKey)}
                </span>
                <span className="absolute top-1 right-1 font-pixel text-[8px] bg-gold-bright text-navy-deep px-1">
                  ×{bag[item.id]}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Info preview before commit */}
        {info && (
          <div
            className="fixed inset-0 z-50 bg-navy-deep/85 flex items-center justify-center p-4"
            onClick={() => setInfo(null)}
          >
            <div
              className="pixel-panel p-4 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{info.icon}</span>
                <div>
                  <div className="font-pixel text-gold-bright text-xs">
                    {t("store.info.title")}
                  </div>
                  <div className="font-pixel text-gold text-sm mt-1">
                    {t(info.nameKey)}
                  </div>
                </div>
              </div>
              <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] mb-3">
                {t(info.funcKey)}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setInfo(null)}
                  className="pixel-btn pixel-btn-secondary py-2 text-[10px] hover:scale-105 active:scale-95 transition-transform"
                >
                  {t("common.close")}
                </button>
                <button
                  onClick={() => {
                    onPick(info);
                    setInfo(null);
                  }}
                  className="pixel-btn py-2 text-[10px] hover:scale-105 active:scale-95 transition-transform"
                >
                  {t("bag.yes")} ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseScreen;
