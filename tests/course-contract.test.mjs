import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const health = readFileSync(new URL("../app/api/health/route.ts", import.meta.url), "utf8");

test("the three-part interactive course exists", () => {
  assert.match(page, /ИИ меняет правила игры/);
  assert.match(page, /Власть знаний/);
  assert.match(page, /Будущее человека/);
});

test("branching choices produce feedback and persist locally", () => {
  assert.match(page, /ПОСЛЕДСТВИЕ ВЫБОРА/);
  assert.match(page, /localStorage\.setItem/);
  assert.match(page, /localStorage\.getItem/);
  assert.match(page, /selected\.feedback/);
});

test("navigation, subtitle toggle and reduced-motion support exist", () => {
  assert.match(page, /Следующая сцена/);
  assert.match(page, /Субтитры: вкл/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /:focus-visible/);
});

test("health endpoint does not claim unavailable media or accounts", () => {
  assert.match(health, /interactiveCourse: true/);
  assert.match(health, /externalMedia: false/);
  assert.match(health, /persistentUserAccounts: false/);
});

test("deployment metadata and editorial source register exist", () => {
  assert.ok(existsSync(new URL("../app/sitemap.ts", import.meta.url)));
  assert.ok(existsSync(new URL("../app/robots.ts", import.meta.url)));
  assert.ok(existsSync(new URL("../docs/FACT-CHECK-SOURCES.md", import.meta.url)));
});
