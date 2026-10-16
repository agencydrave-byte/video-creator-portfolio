// Собирает резюме: подставляет портрет в base64 в шаблон и пишет готовый resume.html
import { readFileSync, writeFileSync } from "node:fs";
const tpl = readFileSync(new URL("template.html", import.meta.url), "utf8");
const b64 = readFileSync(new URL("../public/media/portrait-gray.webp", import.meta.url)).toString("base64");
writeFileSync(
  new URL("resume.html", import.meta.url),
  tpl.replace("{{PORTRAIT}}", "data:image/webp;base64," + b64)
);
console.log("resume.html готов");
