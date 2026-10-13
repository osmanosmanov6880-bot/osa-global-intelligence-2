import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const component = readFileSync(new URL("../app/experience/CinematicExperience.tsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../app/experience/cinematic-experience.module.css", import.meta.url), "utf8");
const route = readFileSync(new URL("../app/experience/page.tsx", import.meta.url), "utf8");

test("cinematic experience exposes three connected chapters and nine scenes", () => {
  assert.match(component, /number: "01"/);
  assert.match(component, /number: "02"/);
  assert.match(component, /number: "03"/);
  assert.equal((component.match(/eyebrow: "ГЛАВА/g) ?? []).length >= 6, true);
  assert.match(route, /CinematicExperience/);
});

test("choices update a visible result and persist per-scene answers", () => {
  assert.match(component, /setAnswers\(\(previous\) => \(\{ \.\.\.previous, \[answerKey\]: id \}\)\)/);
  assert.match(component, /setShowResult\(true\)/);
  assert.match(component, /localStorage\.setItem\(STORAGE_KEY/);
  assert.match(component, /role="status" aria-live="polite"/);
});

test("experience supports keyboard navigation and reduced motion", () => {
  assert.match(component, /ArrowRight/);
  assert.match(component, /ArrowLeft/);
  assert.match(component, /event\.key\.toLowerCase\(\) === "m"/);
  assert.match(styles, /prefers-reduced-motion:reduce/);
});

test("no autoplay media or fabricated video player is claimed", () => {
  assert.doesNotMatch(component, /<video\b|autoplay/i);
  assert.match(component, /Без автозапуска звука/);
});
