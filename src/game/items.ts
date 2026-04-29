// Item catalog. Names/functions are translation keys resolved by useSettings().
// `effect` drives the in-quest behaviour and pixel-character branch.
export type ItemEffect =
  | "truth_lens"     // reveals reliability of all evidence
  | "shield"         // protects fairness score from one wrong choice
  | "scroll"         // auto-highlights the correct legal reasoning
  | "verdict_key"    // unlocks a "Special Choice" verdict path
  | "crown"          // boosts public trust regardless of verdict
  | "gem";           // doubles overall score

export interface ShopItem {
  id: string;
  icon: string;
  nameKey: string;
  funcKey: string;     // short function description
  price: number;
  effect: ItemEffect;
}

export const ITEMS: ShopItem[] = [
  { id: "scales",  icon: "⚖", nameKey: "item.scales.name",  funcKey: "item.scales.func",  price: 250, effect: "truth_lens" },
  { id: "shield",  icon: "🛡", nameKey: "item.shield.name",  funcKey: "item.shield.func",  price: 400, effect: "shield" },
  { id: "scroll",  icon: "📜", nameKey: "item.scroll.name",  funcKey: "item.scroll.func",  price: 150, effect: "scroll" },
  { id: "key",     icon: "🗝", nameKey: "item.key.name",     funcKey: "item.key.func",     price: 600, effect: "verdict_key" },
  { id: "crown",   icon: "👑", nameKey: "item.crown.name",   funcKey: "item.crown.func",   price: 999, effect: "crown" },
  { id: "gem",     icon: "💎", nameKey: "item.gem.name",     funcKey: "item.gem.func",     price: 320, effect: "gem" },
];

export const getItem = (id: string) => ITEMS.find((i) => i.id === id);
