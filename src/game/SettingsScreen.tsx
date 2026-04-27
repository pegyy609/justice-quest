import { useState } from "react";
import { Screen } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import GameFrame from "@/components/GameFrame";

interface Props {
  onNavigate: (s: Screen) => void;
}

type Theme = "light" | "dark";
type Lang = "zh" | "ms" | "en";

const SettingsScreen = ({ onNavigate }: Props) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [volume, setVolume] = useState(60);
  const [lang, setLang] = useState<Lang>("en");

  return (
    <GameFrame background={courthouseBg}>
      {/* Top bar */}
      <div className="pt-[4%] px-[5%] flex items-center">
        <button
          onClick={() => onNavigate("home")}
          className="pixel-btn pixel-btn-secondary w-12 h-12 text-xs"
          aria-label="Back"
        >
          ◀
        </button>
        <h2 className="pixel-title flex-1 text-[clamp(1rem,3.6vw,1.6rem)] pr-12">
          Settings
        </h2>
      </div>

      {/* Rows */}
      <div className="flex-1 flex flex-col gap-[3%] px-[5%] pt-[4%] overflow-y-auto">
        {/* Brightness */}
        <Row>
          <LabelBtn>Brightness</LabelBtn>
          <SquareToggle active={theme === "light"} onClick={() => setTheme("light")} aria="Light">
            ☀
          </SquareToggle>
          <SquareToggle active={theme === "dark"} onClick={() => setTheme("dark")} aria="Dark">
            ☾
          </SquareToggle>
        </Row>

        {/* Sound */}
        <Row>
          <LabelBtn>Sound</LabelBtn>
          <SquareToggle onClick={() => setVolume((v) => Math.max(0, v - 10))} aria="Decrease">
            −
          </SquareToggle>
          <div className="pixel-btn pixel-btn-secondary flex-1 h-12 text-xs sm:text-sm cursor-default">
            {volume}%
          </div>
          <SquareToggle onClick={() => setVolume((v) => Math.min(100, v + 10))} aria="Increase">
            +
          </SquareToggle>
        </Row>

        {/* Language */}
        <Row>
          <LabelBtn>Language</LabelBtn>
        </Row>
        <Row>
          <LangBtn active={lang === "zh"} onClick={() => setLang("zh")}>华文</LangBtn>
          <LangBtn active={lang === "ms"} onClick={() => setLang("ms")}>Bahasa</LangBtn>
          <LangBtn active={lang === "en"} onClick={() => setLang("en")}>English</LangBtn>
        </Row>

        <div className="flex-1" />
      </div>

      {/* Bottom row */}
      <div className="pb-[6%] px-[5%] flex gap-3">
        <button className="pixel-btn pixel-btn-secondary flex-1 h-12 text-[clamp(0.55rem,1.8vw,0.75rem)]">
          Terms of Policy
        </button>
        <button className="pixel-btn flex-1 h-12 text-[clamp(0.55rem,1.8vw,0.75rem)]">
          Feedback
        </button>
      </div>
    </GameFrame>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-stretch gap-2 sm:gap-3 h-12">{children}</div>
);

const LabelBtn = ({ children }: { children: React.ReactNode }) => (
  <div className="pixel-btn flex-1 cursor-default text-[clamp(0.55rem,1.8vw,0.75rem)]">
    {children}
  </div>
);

const SquareToggle = ({
  children,
  onClick,
  active,
  aria,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  aria?: string;
}) => (
  <button
    onClick={onClick}
    aria-label={aria}
    className={`pixel-btn aspect-square h-full text-base ${active ? "pixel-btn-active" : ""}`}
  >
    {children}
  </button>
);

const LangBtn = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`pixel-btn flex-1 text-[clamp(0.55rem,1.8vw,0.8rem)] ${
      active ? "pixel-btn-active" : "pixel-btn-secondary"
    }`}
  >
    {children}
  </button>
);

export default SettingsScreen;
