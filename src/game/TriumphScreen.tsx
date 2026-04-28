import { Screen } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { useSettings } from "@/game/SettingsContext";

interface Props {
  onNavigate: (s: Screen) => void;
}

const TROPHIES = [
  { icon: "🥇", title: "First Verdict", desc: "Win your first case", unlocked: true },
  { icon: "📚", title: "Scholar", desc: "Complete 5 school quests", unlocked: true },
  { icon: "🏛", title: "Citizen", desc: "Complete 5 society quests", unlocked: false },
  { icon: "⚖", title: "Balanced Mind", desc: "Perfect score in chapter 1", unlocked: false },
  { icon: "👑", title: "Supreme Guardian", desc: "Finish all chapters", unlocked: false },
];

const TriumphScreen = ({ onNavigate }: Props) => {
  const { t } = useSettings();
  return (
    <GameFrame background={courthouseBg}>
      <div className="pt-[4%] px-[5%] flex items-center">
        <button
          onClick={() => onNavigate("home")}
          className="pixel-btn pixel-btn-secondary w-12 h-12 text-xs"
          aria-label="Back"
        >
          ◀
        </button>
        <h2 className="pixel-title flex-1 text-[clamp(1rem,3.6vw,1.6rem)] pr-12">
          {t("triumph.title")}
        </h2>
      </div>

      <div className="flex-1 px-[5%] py-[4%] flex flex-col gap-2 overflow-y-auto">
        {TROPHIES.map((t) => (
          <div
            key={t.title}
            className={`pixel-panel p-3 flex items-center gap-3 ${
              t.unlocked ? "" : "opacity-50 grayscale"
            }`}
          >
            <span className="text-3xl">{t.icon}</span>
            <div className="flex-1">
              <div className="font-pixel text-gold-bright text-[clamp(0.55rem,1.7vw,0.8rem)]">
                {t.title}
              </div>
              <div className="font-retro text-parchment text-sm sm:text-base">{t.desc}</div>
            </div>
            <span className="font-pixel text-[0.55rem] text-parchment-dark">
              {t.unlocked ? "✓" : "🔒"}
            </span>
          </div>
        ))}
      </div>
    </GameFrame>
  );
};

export default TriumphScreen;
