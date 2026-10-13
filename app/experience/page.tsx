import type { Metadata } from "next";
import CinematicExperience from "./CinematicExperience";

export const metadata: Metadata = {
  title: "Beyond the Model — интерактивный опыт | OSA",
  description: "Три главы о разуме машин, власти знаний и человеческом выборе. Интерактивное кинематографическое путешествие OSA.",
};

export default function ExperiencePage() {
  return <CinematicExperience />;
}
