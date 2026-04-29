import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { ItemEffect, getItem } from "./items";

interface InventoryState {
  coins: number;
  bag: Record<string, number>;     // itemId -> qty
  activeEffects: ItemEffect[];      // effects active in the current quest
  buy: (itemId: string) => { ok: boolean; reason?: "no_coins" };
  consume: (itemId: string) => { ok: boolean; effect?: ItemEffect };
  resetActiveEffects: () => void;
  hasEffect: (e: ItemEffect) => boolean;
}

const STORAGE_KEY = "law-guardian-inventory";
const Ctx = createContext<InventoryState | null>(null);

interface Persisted {
  coins: number;
  bag: Record<string, number>;
}

const load = (): Persisted => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<Persisted>;
      return {
        coins: typeof p.coins === "number" ? p.coins : 1250,
        bag: p.bag && typeof p.bag === "object" ? p.bag : {},
      };
    }
  } catch {
    /* ignore */
  }
  return { coins: 1250, bag: {} };
};

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const init = load();
  const [coins, setCoins] = useState<number>(init.coins);
  const [bag, setBag] = useState<Record<string, number>>(init.bag);
  const [activeEffects, setActiveEffects] = useState<ItemEffect[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ coins, bag }));
    } catch {
      /* ignore */
    }
  }, [coins, bag]);

  const buy: InventoryState["buy"] = useCallback((itemId) => {
    const item = getItem(itemId);
    if (!item) return { ok: false };
    if (coins < item.price) return { ok: false, reason: "no_coins" };
    setCoins((c) => c - item.price);
    setBag((b) => ({ ...b, [itemId]: (b[itemId] ?? 0) + 1 }));
    return { ok: true };
  }, [coins]);

  const consume: InventoryState["consume"] = useCallback((itemId) => {
    const item = getItem(itemId);
    const qty = bag[itemId] ?? 0;
    if (!item || qty <= 0) return { ok: false };
    setBag((b) => {
      const next = { ...b };
      const left = (next[itemId] ?? 0) - 1;
      if (left <= 0) delete next[itemId];
      else next[itemId] = left;
      return next;
    });
    setActiveEffects((arr) => (arr.includes(item.effect) ? arr : [...arr, item.effect]));
    return { ok: true, effect: item.effect };
  }, [bag]);

  const resetActiveEffects = useCallback(() => setActiveEffects([]), []);
  const hasEffect = useCallback((e: ItemEffect) => activeEffects.includes(e), [activeEffects]);

  return (
    <Ctx.Provider value={{ coins, bag, activeEffects, buy, consume, resetActiveEffects, hasEffect }}>
      {children}
    </Ctx.Provider>
  );
};

export const useInventory = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useInventory must be used inside InventoryProvider");
  return v;
};
