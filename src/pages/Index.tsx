import { useState } from "react";
import { Screen } from "@/game/types";
import HomeScreen from "@/game/HomeScreen";
import QuestScreen from "@/game/QuestScreen";
import SettingsScreen from "@/game/SettingsScreen";
import StoreScreen from "@/game/StoreScreen";
import TriumphScreen from "@/game/TriumphScreen";
import CaseScreen from "@/game/CaseScreen";
import { SettingsProvider } from "@/game/SettingsContext";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);

  const handleSelectCase = (caseId: string) => {
    setActiveCaseId(caseId);
    setScreen("case");
  };

  return (
    <SettingsProvider>
      <main className="min-h-screen bg-navy-deep">
        <h1 className="sr-only">Law Guardian — Pixel Justice Game</h1>
        {screen === "home" && <HomeScreen onNavigate={setScreen} />}
        {screen === "quest" && (
          <QuestScreen onNavigate={setScreen} onSelectCase={handleSelectCase} />
        )}
        {screen === "settings" && <SettingsScreen onNavigate={setScreen} />}
        {screen === "store" && <StoreScreen onNavigate={setScreen} />}
        {screen === "triumph" && <TriumphScreen onNavigate={setScreen} />}
        {screen === "case" && activeCaseId && (
          <CaseScreen caseId={activeCaseId} onNavigate={setScreen} />
        )}
        {/* Global brightness overlay (light/dark) — applied across all pages */}
        <div className="brightness-overlay" aria-hidden />
      </main>
    </SettingsProvider>
  );
};

export default Index;
