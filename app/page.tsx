import CardContainer from "./components/Cards/CardContainer";
import MainView from "./components/HomeHero/MainView";

export default function Home() {
  return (
    <main className="w-full bg-primary-color">
      <MainView />
      <CardContainer options={{ genres: "adventure" }} title="Adventure Games" />
      <CardContainer options={{ genres: "massively-multiplayer" }} title="Multiplayer Games" />
      <CardContainer options={{ genres: "indie" }} title="Indie Games" />
      <CardContainer options={{ genres: "sports" }} title="Sport Games" />
    </main>
  );
}
