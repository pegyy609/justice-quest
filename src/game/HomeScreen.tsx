import { Screen } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import guardian from "@/assets/guardian.png";
import GameFrame from "@/components/GameFrame";

interface Props {
  onNavigate: (s: Screen) => void;
}

const HomeScreen = ({ onNavigate }: Props) => {
  return (
    <GameFrame background={courthouseBg}>
      {/* Top */}
      <div className="pt-[6%] px-[6%] text-center">
        <h1 className="pixel-title text-[clamp(1.25rem,5vw,2.5rem)] leading-tight">
          LAW
          <br />
          GUARDIAN
        </h1>
        <div className="mt-[4%] mx-auto max-w-[88%] pixel-panel px-3 py-2">
          <p className="font-retro text-[clamp(0.9rem,2.4vw,1.25rem)] text-parchment leading-tight">
            Defend justice. Learn the law.
            <br />
            Choose your path and become the
            <br />
            <span className="text-gold-bright">Guardian of the Code.</span>
          </p>
        </div>
      </div>

      {/* Middle: guardian + START */}
      <div className="flex-1 flex flex-col items-center justify-center gap-[4%] px-[6%]">
        <img
          src={guardian}
          alt="Law Guardian character"
          className="float-pixel h-[28%] max-h-[180px] w-auto drop-shadow-[4px_4px_0_hsl(var(--navy-deep))]"
        />
        <button
          onClick={() => onNavigate("quest")}
          className="pixel-btn w-[60%] py-3 text-[clamp(0.9rem,2.6vw,1.25rem)]"
          aria-label="Start game"
        >
          ▶ Start
        </button>
        <span className="font-retro text-parchment-dark text-sm blink">
          press start to begin
        </span>
      </div>

      {/* Bottom: 3 circular buttons */}
      <div className="pb-[6%] px-[6%] flex items-center justify-between gap-3">
        <CircleBtn label="Triumph" icon="🏆" onClick={() => onNavigate("triumph")} />
        <CircleBtn label="Settings" icon="⚙" onClick={() => onNavigate("settings")} />
        <CircleBtn label="Store" icon="🛒" onClick={() => onNavigate("store")} />
      </div>
    </GameFrame>
  );
};

const CircleBtn = ({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="pixel-circle aspect-square w-[26%] max-w-[110px]"
    aria-label={label}
  >
    <span className="text-[clamp(1rem,3.5vw,1.6rem)] leading-none">{icon}</span>
    <span className="font-pixel text-[clamp(0.45rem,1.4vw,0.7rem)] mt-1 leading-none">
      {label}
    </span>
  </button>
);

export default HomeScreen;
