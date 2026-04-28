import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type Theme = "light" | "dark";
export type Lang = "zh" | "ms" | "en";

interface SettingsState {
  theme: Theme;
  volume: number;
  lang: Lang;
  setTheme: (t: Theme) => void;
  setVolume: (v: number | ((prev: number) => number)) => void;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "law-guardian-settings";

const SettingsContext = createContext<SettingsState | null>(null);

const DICT: Record<Lang, Record<string, string>> = {
  en: {
    "app.title": "LAW\nGUARDIAN",
    "home.tagline.1": "Defend justice. Learn the law.",
    "home.tagline.2": "Choose your path and become the",
    "home.tagline.3": "Guardian of the Code.",
    "home.start": "▶ Start",
    "home.pressStart": "press start to begin",
    "home.triumph": "Triumph",
    "home.settings": "Settings",
    "home.store": "Store",
    "common.back": "◀",
    "common.next": "Next ▶",
    "common.close": "Close",
    "settings.title": "Settings",
    "settings.brightness": "Brightness",
    "settings.sound": "Sound",
    "settings.language": "Language",
    "settings.terms": "Terms of Policy",
    "settings.feedback": "Feedback",
    "quest.choose": "Choose Your Chapter",
    "quest.school": "School Chapter",
    "quest.school.sub": "Theft · Cheating · Bullying",
    "quest.school.lvl": "Level 1 · Foundations",
    "quest.society": "Society Chapter",
    "quest.society.sub": "Fraud · Disputes · Negligence",
    "quest.society.lvl": "Level 2 · Real World",
    "quest.progress": "✦ progress from school to society ✦",
    "quest.schoolCases": "School Cases",
    "quest.societyCases": "Society Cases",
    "quest.tap": "✦ tap a case to begin judgement ✦",
    "store.title": "Store",
    "store.coins": "Coins",
    "triumph.title": "Triumph",
    "case.brief": "Case Brief",
    "case.statements": "Statements",
    "case.evidence": "Evidence Analysis",
    "case.evidenceHint": "Tap to mark as reliable. Long-press for details.",
    "case.markedReliable": "marked reliable",
    "case.reasoning": "Legal Reasoning",
    "case.reasoningHint": "Choose the legal category that best fits the evidence.",
    "case.verdict": "Final Judgement",
    "case.guilty": "Guilty",
    "case.notGuilty": "Not Guilty",
    "case.punishment": "Punishment",
    "case.deliver": "Deliver Verdict ⚖",
    "case.summary": "» Summary",
    "case.keyFacts": "» Key Facts",
    "case.notes": "» Reliability Notes",
    "case.reliable": "✓ RELIABLE",
    "case.unreliable": "✗ UNRELIABLE",
  },
  zh: {
    "app.title": "法律\n守护者",
    "home.tagline.1": "捍卫正义。学习法律。",
    "home.tagline.2": "选择你的道路，成为",
    "home.tagline.3": "法典守护者。",
    "home.start": "▶ 开始",
    "home.pressStart": "按开始按钮开始游戏",
    "home.triumph": "成就",
    "home.settings": "设置",
    "home.store": "商店",
    "common.back": "◀",
    "common.next": "下一步 ▶",
    "common.close": "关闭",
    "settings.title": "设置",
    "settings.brightness": "亮度",
    "settings.sound": "声音",
    "settings.language": "语言",
    "settings.terms": "条款政策",
    "settings.feedback": "反馈",
    "quest.choose": "选择章节",
    "quest.school": "校园章节",
    "quest.school.sub": "盗窃 · 作弊 · 欺凌",
    "quest.school.lvl": "第1关 · 基础",
    "quest.society": "社会章节",
    "quest.society.sub": "欺诈 · 纠纷 · 过失",
    "quest.society.lvl": "第2关 · 真实世界",
    "quest.progress": "✦ 从校园进阶到社会 ✦",
    "quest.schoolCases": "校园案件",
    "quest.societyCases": "社会案件",
    "quest.tap": "✦ 点击案件开始审判 ✦",
    "store.title": "商店",
    "store.coins": "金币",
    "triumph.title": "成就",
    "case.brief": "案件简介",
    "case.statements": "陈述",
    "case.evidence": "证据分析",
    "case.evidenceHint": "点击标记为可靠。长按查看详情。",
    "case.markedReliable": "项已标记可靠",
    "case.reasoning": "法律推理",
    "case.reasoningHint": "选择最符合证据的法律类别。",
    "case.verdict": "最终判决",
    "case.guilty": "有罪",
    "case.notGuilty": "无罪",
    "case.punishment": "处罚",
    "case.deliver": "宣布判决 ⚖",
    "case.summary": "» 摘要",
    "case.keyFacts": "» 关键事实",
    "case.notes": "» 可靠性说明",
    "case.reliable": "✓ 可靠",
    "case.unreliable": "✗ 不可靠",
  },
  ms: {
    "app.title": "PENJAGA\nUNDANG-UNDANG",
    "home.tagline.1": "Pertahankan keadilan. Pelajari undang-undang.",
    "home.tagline.2": "Pilih laluan anda dan menjadi",
    "home.tagline.3": "Penjaga Kod.",
    "home.start": "▶ Mula",
    "home.pressStart": "tekan mula untuk bermula",
    "home.triumph": "Pencapaian",
    "home.settings": "Tetapan",
    "home.store": "Kedai",
    "common.back": "◀",
    "common.next": "Seterusnya ▶",
    "common.close": "Tutup",
    "settings.title": "Tetapan",
    "settings.brightness": "Kecerahan",
    "settings.sound": "Bunyi",
    "settings.language": "Bahasa",
    "settings.terms": "Terma Polisi",
    "settings.feedback": "Maklum Balas",
    "quest.choose": "Pilih Bab Anda",
    "quest.school": "Bab Sekolah",
    "quest.school.sub": "Curi · Tipu · Buli",
    "quest.school.lvl": "Tahap 1 · Asas",
    "quest.society": "Bab Masyarakat",
    "quest.society.sub": "Penipuan · Pertikaian · Kecuaian",
    "quest.society.lvl": "Tahap 2 · Dunia Sebenar",
    "quest.progress": "✦ maju dari sekolah ke masyarakat ✦",
    "quest.schoolCases": "Kes Sekolah",
    "quest.societyCases": "Kes Masyarakat",
    "quest.tap": "✦ ketik kes untuk mula penghakiman ✦",
    "store.title": "Kedai",
    "store.coins": "Syiling",
    "triumph.title": "Pencapaian",
    "case.brief": "Ringkasan Kes",
    "case.statements": "Kenyataan",
    "case.evidence": "Analisis Bukti",
    "case.evidenceHint": "Ketik untuk tanda boleh dipercayai. Tekan lama untuk butiran.",
    "case.markedReliable": "ditanda boleh dipercayai",
    "case.reasoning": "Penaakulan Undang-undang",
    "case.reasoningHint": "Pilih kategori undang-undang yang paling sesuai.",
    "case.verdict": "Penghakiman Akhir",
    "case.guilty": "Bersalah",
    "case.notGuilty": "Tidak Bersalah",
    "case.punishment": "Hukuman",
    "case.deliver": "Sampaikan Keputusan ⚖",
    "case.summary": "» Ringkasan",
    "case.keyFacts": "» Fakta Utama",
    "case.notes": "» Nota Kebolehpercayaan",
    "case.reliable": "✓ DIPERCAYAI",
    "case.unreliable": "✗ TIDAK DIPERCAYAI",
  },
};

interface Persisted {
  theme: Theme;
  volume: number;
  lang: Lang;
}

const loadPersisted = (): Persisted => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<Persisted>;
      return {
        theme: p.theme === "light" ? "light" : "dark",
        volume: typeof p.volume === "number" ? Math.max(0, Math.min(100, p.volume)) : 60,
        lang: p.lang === "zh" || p.lang === "ms" || p.lang === "en" ? p.lang : "en",
      };
    }
  } catch {
    /* ignore */
  }
  return { theme: "dark", volume: 60, lang: "en" };
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const initial = loadPersisted();
  const [theme, setTheme] = useState<Theme>(initial.theme);
  const [volume, setVolumeState] = useState<number>(initial.volume);
  const [lang, setLang] = useState<Lang>(initial.lang);

  const setVolume = (v: number | ((prev: number) => number)) => {
    setVolumeState((prev) => {
      const next = typeof v === "function" ? (v as (p: number) => number)(prev) : v;
      return Math.max(0, Math.min(100, next));
    });
  };

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, volume, lang }));
    } catch {
      /* ignore */
    }
  }, [theme, volume, lang]);

  // Theme: toggle a class on root for global brightness overlay
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-light", theme === "light");
    root.classList.toggle("theme-dark", theme === "dark");
  }, [theme]);

  // Volume: play a soft beep cue when volume changes via +/-
  useEffect(() => {
    if (volume === 0) return;
    try {
      const AC =
        (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 660;
      gain.gain.value = (volume / 100) * 0.05;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
      setTimeout(() => ctx.close().catch(() => {}), 200);
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  const t = useMemo(() => {
    return (key: string) => DICT[lang][key] ?? DICT.en[key] ?? key;
  }, [lang]);

  const value: SettingsState = {
    theme,
    volume,
    lang,
    setTheme,
    setVolume,
    setLang,
    t,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
};
