import { useState } from "react";
import { Screen } from "@/game/types";
import courthouseBg from "@/assets/courthouse-bg.jpg";
import GameFrame from "@/components/GameFrame";
import { toast } from "sonner";
import { useSettings } from "@/game/SettingsContext";
import { useInventory } from "@/game/InventoryContext";
import { ITEMS, ShopItem } from "@/game/items";

interface Props {
  onNavigate: (s: Screen) => void;
}

const StoreScreen = ({ onNavigate }: Props) => {
  const { t } = useSettings();
  const { coins, bag, buy } = useInventory();
  const [open, setOpen] = useState<ShopItem | null>(null);

  const handleBuy = (item: ShopItem) => {
    const res = buy(item.id);
    if (res.ok) {
      toast.success(t("store.purchased").replace("{name}", t(item.nameKey)));
      setOpen(null);
    } else if (res.reason === "no_coins") {
      toast.error(t("store.noCoins"));
    }
  };

  return (
    <GameFrame background={courthouseBg}>
      <div className="pt-[4%] px-[5%] flex items-center">
        <button
          onClick={() => onNavigate("home")}
          className="pixel-btn pixel-btn-secondary w-12 h-12 text-xs hover:scale-105 active:scale-95 transition-transform"
          aria-label="Back"
        >
          ◀
        </button>
        <h2 className="pixel-title flex-1 text-[clamp(1rem,3.6vw,1.6rem)] pr-12">
          {t("store.title")}
        </h2>
      </div>

      <div className="px-[5%] mt-3 flex items-center justify-between pixel-panel py-2 px-3">
        <span className="font-retro text-parchment text-base">{t("store.coins")}</span>
        <span className="font-pixel text-gold-bright text-[clamp(0.7rem,2.4vw,1rem)]">
          ⛁ {coins.toLocaleString()}
        </span>
      </div>

      <div className="flex-1 px-[5%] py-[4%] grid grid-cols-2 gap-3 overflow-y-auto relative">
        {ITEMS.map((item) => {
          const owned = bag[item.id] ?? 0;
          return (
            <button
              key={item.id}
              onClick={() => setOpen(item)}
              className="pixel-panel p-3 flex flex-col items-center justify-between gap-2 hover:bg-navy-light/50 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer relative"
            >
              <span className="text-[clamp(1.4rem,5vw,2.2rem)] leading-none">{item.icon}</span>
              <span className="font-pixel text-[clamp(0.45rem,1.5vw,0.65rem)] text-parchment text-center leading-tight">
                {t(item.nameKey)}
              </span>
              <span className="font-pixel text-gold-bright text-[clamp(0.5rem,1.7vw,0.75rem)]">
                ⛁ {item.price}
              </span>
              {owned > 0 && (
                <span className="absolute top-1 right-1 font-pixel text-[8px] bg-gold-bright text-navy-deep px-1 py-0.5">
                  ×{owned}
                </span>
              )}
            </button>
          );
        })}

        {open && (
          <ItemInfoModal
            item={open}
            owned={bag[open.id] ?? 0}
            canAfford={coins >= open.price}
            onBuy={() => handleBuy(open)}
            onClose={() => setOpen(null)}
          />
        )}
      </div>
    </GameFrame>
  );
};

const ItemInfoModal = ({
  item,
  owned,
  canAfford,
  onBuy,
  onClose,
}: {
  item: ShopItem;
  owned: number;
  canAfford: boolean;
  onBuy: () => void;
  onClose: () => void;
}) => {
  const { t } = useSettings();
  return (
    <div
      className="fixed inset-0 z-40 bg-navy-deep/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="pixel-panel p-4 max-w-[92%] w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{item.icon}</span>
          <div className="flex-1">
            <div className="font-pixel text-gold-bright text-xs">{t("store.info.title")}</div>
            <div className="font-pixel text-gold text-sm mt-1">{t(item.nameKey)}</div>
          </div>
          {owned > 0 && (
            <span className="font-pixel text-[9px] text-gold-bright">
              {t("store.owned")} ×{owned}
            </span>
          )}
        </div>

        <div className="font-pixel text-gold text-[9px] uppercase tracking-wider mb-1">
          » {t("store.info.func")}
        </div>
        <p className="font-retro text-parchment text-[clamp(0.9rem,2.3vw,1.05rem)] leading-snug mb-3">
          {t(item.funcKey)}
        </p>

        <div className="flex items-center justify-between pixel-panel py-2 px-3 mb-3">
          <span className="font-pixel text-gold text-[10px]">{t("store.info.price")}</span>
          <span className="font-pixel text-gold-bright text-sm">⛁ {item.price}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onClose}
            className="pixel-btn pixel-btn-secondary py-2 text-[10px] hover:scale-105 active:scale-95 transition-transform"
          >
            {t("common.close")}
          </button>
          <button
            onClick={onBuy}
            disabled={!canAfford}
            className="pixel-btn py-2 text-[10px] disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform"
          >
            {t("store.buy")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreScreen;
