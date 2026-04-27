import { useState } from "react";
import { Screen } from "@/game/types";
import HomeScreen from "@/game/HomeScreen";
import QuestScreen from "@/game/QuestScreen";
import SettingsScreen from "@/game/SettingsScreen";
import StoreScreen from "@/game/StoreScreen";
import TriumphScreen from "@/game/TriumphScreen";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <main className="min-h-screen bg-navy-deep">
      <h1 className="sr-only">Law Guardian — Pixel Justice Game</h1>
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "quest" && <QuestScreen onNavigate={setScreen} />}
      {screen === "settings" && <SettingsScreen onNavigate={setScreen} />}
      {screen === "store" && <StoreScreen onNavigate={setScreen} />}
      {screen === "triumph" && <TriumphScreen onNavigate={setScreen} />}
    </main>
  );
};

export default Index;
