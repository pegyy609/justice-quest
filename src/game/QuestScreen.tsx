import { Screen } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import schoolBg from "@/assets/school-bg.jpg";
import societyBg from "@/assets/society-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { toast } from "sonner";

interface Props {
  onNavigate: (s: Screen) => void;
}

const QuestScreen = ({ onNavigate }: Props) => {
  const choose = (q: string) => {
    toast.success(`Quest selected: ${q}`, {
      description: "Adventure loading… (demo)",
    });
  };

  return (
    <GameFrame background={courthouseBg}>
      {/* Top bar with back */}
      <div className="pt-[4%] px-[5%] flex items-center">
        <button
          onClick={() => onNavigate("home")}
          className="pixel-btn pixel-btn-secondary w-12 h-12 text-xs"
          aria-label="Back"
        >
          ◀
        </button>
        <h2 className="pixel-title flex-1 text-[clamp(1rem,3.6vw,1.6rem)] pr-12">
          Choose Your Quest
        </h2>
      </div>

      {/* Quests */}
      <div className="flex-1 flex flex-col justify-center gap-[5%] px-[8%]">
        <QuestCard
          title="School Life"
          subtitle="Bullying · Honesty · Rules"
          bg={schoolBg}
          onClick={() => choose("School Life")}
        />
        <QuestCard
          title="Society Life"
          subtitle="Rights · Duties · Citizenship"
          bg={societyBg}
          onClick={() => choose("Society Life")}
        />
      </div>

      <div className="pb-[6%] text-center font-retro text-parchment-dark text-base">
        ✦ select a chapter to begin ✦
      </div>
    </GameFrame>
  );
};

const QuestCard = ({
  title,
  subtitle,
  bg,
  onClick,
}: {
  title: string;
  subtitle: string;
  bg: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="pixel-btn w-full p-0 overflow-hidden text-left h-[28%] min-h-[110px] relative group"
  >
    <img
      src={bg}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
    />
    <div className="absolute inset-0 bg-navy-deep/55" />
    <div className="relative z-10 h-full flex flex-col justify-center px-5">
      <span className="font-pixel text-gold-bright text-[clamp(0.85rem,3vw,1.2rem)]">
        {title}
      </span>
      <span className="font-retro text-parchment text-[clamp(0.85rem,2.2vw,1.1rem)] mt-1">
        {subtitle}
      </span>
    </div>
  </button>
);

export default QuestScreen;
