import { Screen } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { toast } from "sonner";

interface Props {
  onNavigate: (s: Screen) => void;
}

const ITEMS = [
  { icon: "⚖", name: "Scales of Truth", price: 250 },
  { icon: "🛡", name: "Shield of Law", price: 400 },
  { icon: "📜", name: "Ancient Scroll", price: 150 },
  { icon: "🗝", name: "Verdict Key", price: 600 },
  { icon: "👑", name: "Judge's Crown", price: 999 },
  { icon: "💎", name: "Justice Gem", price: 320 },
];

const StoreScreen = ({ onNavigate }: Props) => {
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
          Store
        </h2>
      </div>

      <div className="px-[5%] mt-3 flex items-center justify-between pixel-panel py-2 px-3">
        <span className="font-retro text-parchment text-base">Coins</span>
        <span className="font-pixel text-gold-bright text-[clamp(0.7rem,2.4vw,1rem)]">
          ⛁ 1,250
        </span>
      </div>

      <div className="flex-1 px-[5%] py-[4%] grid grid-cols-2 gap-3 overflow-y-auto">
        {ITEMS.map((item) => (
          <button
            key={item.name}
            onClick={() => toast.success(`Purchased ${item.name}!`)}
            className="pixel-panel p-3 flex flex-col items-center justify-between gap-2 hover:bg-navy-light/50 transition-colors cursor-pointer"
          >
            <span className="text-[clamp(1.4rem,5vw,2.2rem)] leading-none">{item.icon}</span>
            <span className="font-pixel text-[clamp(0.45rem,1.5vw,0.65rem)] text-parchment text-center leading-tight">
              {item.name}
            </span>
            <span className="font-pixel text-gold-bright text-[clamp(0.5rem,1.7vw,0.75rem)]">
              ⛁ {item.price}
            </span>
          </button>
        ))}
      </div>
    </GameFrame>
  );
};

export default StoreScreen;
