import { useState } from "react";
import { Screen, Chapter } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import schoolBg from "@/assets/school-bg.jpg";
import societyBg from "@/assets/society-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { getCasesByChapter } from "@/game/cases";

interface Props {
  onNavigate: (s: Screen) => void;
  onSelectCase: (caseId: string) => void;
}

const QuestScreen = ({ onNavigate, onSelectCase }: Props) => {
  const [chapter, setChapter] = useState<Chapter | null>(null);

  if (!chapter) {
    return (
      <GameFrame background={courthouseBg}>
        <div className="pt-[4%] px-[5%] flex items-center">
          <button
            onClick={() => onNavigate("home")}
            className="pixel-btn pixel-btn-secondary w-12 h-12 text-xs"
            aria-label="Back to home"
          >
            ◀
          </button>
          <h2 className="pixel-title flex-1 text-[clamp(1rem,3.6vw,1.6rem)] pr-12">
            Choose Your Chapter
          </h2>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-[5%] px-[8%]">
          <ChapterCard
            title="School Chapter"
            subtitle="Theft · Cheating · Bullying"
            level="Level 1 · Foundations"
            bg={schoolBg}
            onClick={() => setChapter("school")}
          />
          <ChapterCard
            title="Society Chapter"
            subtitle="Fraud · Disputes · Negligence"
            level="Level 2 · Real World"
            bg={societyBg}
            onClick={() => setChapter("society")}
          />
        </div>

        <div className="pb-[6%] text-center font-retro text-parchment-dark text-base">
          ✦ progress from school to society ✦
        </div>
      </GameFrame>
    );
  }

  const cases = getCasesByChapter(chapter);
  const bg = chapter === "school" ? schoolBg : societyBg;

  return (
    <GameFrame background={bg}>
      <div className="pt-[4%] px-[5%] flex items-center">
        <button
          onClick={() => setChapter(null)}
          className="pixel-btn pixel-btn-secondary w-12 h-12 text-xs"
          aria-label="Back to chapters"
        >
          ◀
        </button>
        <h2 className="pixel-title flex-1 text-[clamp(0.9rem,3.4vw,1.4rem)] pr-12">
          {chapter === "school" ? "School Cases" : "Society Cases"}
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-[3%] px-[6%] py-[4%] overflow-y-auto">
        {cases.map((c, i) => (
          <button
            key={c.id}
            onClick={() => onSelectCase(c.id)}
            className="pixel-panel text-left p-3 hover:bg-navy-light/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="font-pixel text-gold-bright text-xs shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-pixel text-gold text-[clamp(0.7rem,2.4vw,0.95rem)] truncate">
                  {c.title}
                </div>
                <div className="font-retro text-parchment text-[clamp(0.85rem,2.2vw,1.05rem)] leading-tight mt-1 line-clamp-2">
                  {c.brief}
                </div>
              </div>
              <span className="font-pixel text-gold text-base shrink-0">▶</span>
            </div>
          </button>
        ))}
      </div>

      <div className="pb-[5%] text-center font-retro text-parchment-dark text-base">
        ✦ tap a case to begin judgement ✦
      </div>
    </GameFrame>
  );
};

const ChapterCard = ({
  title,
  subtitle,
  level,
  bg,
  onClick,
}: {
  title: string;
  subtitle: string;
  level: string;
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
    <div className="absolute inset-0 bg-navy-deep/60" />
    <div className="relative z-10 h-full flex flex-col justify-center px-5">
      <span className="font-pixel text-gold-bright text-[clamp(0.85rem,3vw,1.2rem)]">
        {title}
      </span>
      <span className="font-retro text-parchment text-[clamp(0.85rem,2.2vw,1.1rem)] mt-1">
        {subtitle}
      </span>
      <span className="font-pixel text-gold-dark text-[clamp(0.5rem,1.6vw,0.7rem)] mt-2">
        {level}
      </span>
    </div>
  </button>
);

export default QuestScreen;
