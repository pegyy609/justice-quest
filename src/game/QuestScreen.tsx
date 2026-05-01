import { useState } from "react";
import { Screen, Chapter } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import schoolBg from "@/assets/school-bg.jpg";
import societyBg from "@/assets/society-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { getCasesByChapter, ALL_CHAPTERS, isSchoolChapter } from "@/game/cases";
import { useSettings } from "@/game/SettingsContext";

interface Props {
  onNavigate: (s: Screen) => void;
  onSelectCase: (caseId: string) => void;
}

const CHAPTER_META: Record<
  Chapter,
  { titleKey: string; subKey: string; lvlKey: string }
> = {
  ch1_silent_classroom: {
    titleKey: "chapter.ch1.title",
    subKey: "chapter.ch1.sub",
    lvlKey: "chapter.ch1.lvl",
  },
  ch2_exam_papers: {
    titleKey: "chapter.ch2.title",
    subKey: "chapter.ch2.sub",
    lvlKey: "chapter.ch2.lvl",
  },
  ch3_manipulated_truth: {
    titleKey: "chapter.ch3.title",
    subKey: "chapter.ch3.sub",
    lvlKey: "chapter.ch3.lvl",
  },
  ch4_shadow_network: {
    titleKey: "chapter.ch4.title",
    subKey: "chapter.ch4.sub",
    lvlKey: "chapter.ch4.lvl",
  },
  ch5_web_abyss: {
    titleKey: "chapter.ch5.title",
    subKey: "chapter.ch5.sub",
    lvlKey: "chapter.ch5.lvl",
  },
};

const QuestScreen = ({ onNavigate, onSelectCase }: Props) => {
  const { t } = useSettings();
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
            {t("quest.choose")}
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-[2.5%] px-[6%] py-[3%] overflow-y-auto">
          {ALL_CHAPTERS.map((ch, i) => {
            const meta = CHAPTER_META[ch];
            const bg = isSchoolChapter(ch) ? schoolBg : societyBg;
            return (
              <ChapterCard
                key={ch}
                index={i + 1}
                title={t(meta.titleKey)}
                subtitle={t(meta.subKey)}
                level={t(meta.lvlKey)}
                bg={bg}
                onClick={() => setChapter(ch)}
              />
            );
          })}
        </div>

        <div className="pb-[5%] text-center font-retro text-parchment-dark text-base">
          {t("quest.progress")}
        </div>
      </GameFrame>
    );
  }

  const cases = getCasesByChapter(chapter);
  const bg = isSchoolChapter(chapter) ? schoolBg : societyBg;
  const meta = CHAPTER_META[chapter];

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
        <h2 className="pixel-title flex-1 text-[clamp(0.85rem,3vw,1.3rem)] pr-12 truncate">
          {t(meta.titleKey)}
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
                  {t(c.title)}
                </div>
                <div className="font-retro text-parchment text-[clamp(0.85rem,2.2vw,1.05rem)] leading-tight mt-1 line-clamp-2">
                  {t(c.brief)}
                </div>
              </div>
              <span className="font-pixel text-gold text-base shrink-0">▶</span>
            </div>
          </button>
        ))}
      </div>

      <div className="pb-[5%] text-center font-retro text-parchment-dark text-base">
        {t("quest.tap")}
      </div>
    </GameFrame>
  );
};

const ChapterCard = ({
  index,
  title,
  subtitle,
  level,
  bg,
  onClick,
}: {
  index: number;
  title: string;
  subtitle: string;
  level: string;
  bg: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="pixel-btn w-full p-0 overflow-hidden text-left min-h-[88px] relative group"
  >
    <img
      src={bg}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
    />
    <div className="absolute inset-0 bg-navy-deep/60" />
    <div className="relative z-10 h-full flex flex-col justify-center px-3 py-2">
      <div className="flex items-center gap-2">
        <span className="font-pixel text-gold-dark text-[clamp(0.6rem,2vw,0.85rem)] shrink-0">
          CH.{String(index).padStart(2, "0")}
        </span>
        <span className="font-pixel text-gold-bright text-[clamp(0.75rem,2.6vw,1.1rem)] truncate">
          {title}
        </span>
      </div>
      <span className="font-retro text-parchment text-[clamp(0.85rem,2.1vw,1.05rem)] mt-1 line-clamp-1">
        {subtitle}
      </span>
      <span className="font-pixel text-gold-dark text-[clamp(0.5rem,1.5vw,0.7rem)] mt-1">
        {level}
      </span>
    </div>
  </button>
);

export default QuestScreen;
