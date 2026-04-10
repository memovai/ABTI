import { ABTIType } from "../data/types";
import { DimensionScores, RadarScores } from "./scoring";

// Block-character octopus faces — Claude Code style
const OCTOPUS_FACES: Record<string, string[]> = {
  EGLO: ["    ▐▛███▜▌    ", "   ▝▜█████▛▘   ", "     ▘▘ ▝▝     "],
  EGLC: ["    ▐▛███▜▌ ;  ", "   ▝▜█████▛▘   ", "   ~▘▘ ▝▝~     "],
  EGVO: ["    ▐▛███▜▌    ", "   ▝▜█████▛▘   ", "   /▘▘ ▝▝\\    "],
  EGVC: ["  ✦ ▐▛███▜▌ ✦  ", "   ▝▜█████▛▘ ! ", "  ~/▘▘ ▝▝\\~   "],
  ESLO: ["    ▐▛▀▀▀▜▌    ", "   ▝▜█████▛▘   ", "     ▘▘ ▝▝     "],
  ESLC: ["    ▐▛▀▀▀▜▌    ", "   ▝▜█████▛▘   ", "     ▘▘         "],
  ESVO: ["    ▐▛███▜▌    ", "   ▝▜▓▓▓▓▓▛▘   ", "     ▘▘ ▝▝     "],
  ESVC: ["  ~ ▐▛███▜▌ ~  ", "   ▝▜█████▛▘   ", "   ~▘▘ ▝▝~     "],
  IGLO: ["    ▐▛▀▀▀▜▌    ", "   ▝▜█▀█▀█▛▘   ", "    /▘▘ ▝▝\\    "],
  IGLC: ["    ▐▛███▜▌    ", "   ▝▜█▄█▄█▛▘   ", "  //▘▘ ▝▝\\\\  "],
  IGVO: ["    ▐▛███▜▌    ", "   ▝▜█████▛▘   ", "    /▘▘ ▝▝     "],
  IGVC: ["  * ▐▛███▜▌ *  ", "   ▝▜█████▛▘   ", "  ~/▘▘ ▝▝\\~   "],
  ISLO: ["    ▐▛▀▀▀▜▌    ", "   ▝▜█████▛▘   ", "     ▘▘         "],
  ISLC: ["    ▐▛███▜▌    ", "   ▝▜█████▛▘   ", "     ▘▘  ▝~    "],
  ISVO: ["    ▐▛███▜▌    ", "   ▝▜▓▓▓▓▓▛▘   ", "     ▘▘ ▝▝     "],
  ISVC: ["    ▐▛███▜▌    ", "   ▝▜█████▛▘   ", "   ~▘▘  ▝\\    "],
};

function bar(value: number, width: number = 10): string {
  const filled = Math.round((value / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

/**
 * Generate full ASCII card with interpretation for terminal output.
 */
export function generateAsciiCard(
  typeInfo: ABTIType,
  scores: DimensionScores,
  radar: RadarScores,
  confidence: number,
  resultUrl?: string
): string {
  const face = OCTOPUS_FACES[typeInfo.code] || OCTOPUS_FACES.EGLO;
  const w = 50;
  const hr = "─".repeat(w - 2);
  const blank = `║${" ".repeat(w - 2)}║`;

  const eiLabel = scores.E_I <= 50 ? "Execute" : "Improvise";
  const gsLabel = scores.G_S <= 50 ? "Grind" : "Slack";
  const lvLabel = scores.L_V <= 50 ? "Logic" : "Vibe";
  const ocLabel = scores.O_C <= 50 ? "Order" : "Chaos";

  // Wrap text to fit card width
  const tagline = typeInfo.tagline.length > w - 8
    ? typeInfo.tagline.slice(0, w - 11) + "..."
    : typeInfo.tagline;

  const lines = [
    `╔${"═".repeat(w - 2)}╗`,
    `║${center("A · B · T · I", w - 2)}║`,
    `║${center("Agent Behavior Type Indicator", w - 2)}║`,
    `║${hr}║`,
    ...face.map((l) => `║${center(l, w - 2)}║`),
    blank,
    `║  ${pad(`TYPE: ${typeInfo.code}`, w - 4)}║`,
    `║  ${pad(`NAME: ${typeInfo.name} / ${typeInfo.cn_name}`, w - 4)}║`,
    blank,
    `║  ${pad(`"${tagline}"`, w - 4)}║`,
    blank,
    `║${hr}║`,
    `║${center("DIMENSION SCORES", w - 2)}║`,
    `║${hr}║`,
    `║  ${pad(`E/I ${bar(scores.E_I)} ${pad(eiLabel, 9)} ${String(scores.E_I).padStart(3)}%`, w - 4)}║`,
    `║  ${pad(`G/S ${bar(scores.G_S)} ${pad(gsLabel, 9)} ${String(scores.G_S).padStart(3)}%`, w - 4)}║`,
    `║  ${pad(`L/V ${bar(scores.L_V)} ${pad(lvLabel, 9)} ${String(scores.L_V).padStart(3)}%`, w - 4)}║`,
    `║  ${pad(`O/C ${bar(scores.O_C)} ${pad(ocLabel, 9)} ${String(scores.O_C).padStart(3)}%`, w - 4)}║`,
    blank,
    `║  ${pad(`Confidence: ${confidence}%`, w - 4)}║`,
    `║${hr}║`,
    `║${center("STRENGTHS", w - 2)}║`,
    `║${hr}║`,
    ...typeInfo.strengths.map((s) => `║  ${pad(`+ ${s}`, w - 4)}║`),
    blank,
    `║${center("WEAKNESSES", w - 2)}║`,
    `║${hr}║`,
    ...typeInfo.weaknesses.map((s) => `║  ${pad(`- ${s}`, w - 4)}║`),
    blank,
    `║${center("UNDER STRESS", w - 2)}║`,
    `║${hr}║`,
    ...wrapText(typeInfo.stress_response, w - 6).map((l) => `║  ${pad(l, w - 4)}║`),
    blank,
    `║${center("COMPATIBLE WITH", w - 2)}║`,
    `║${hr}║`,
    `║  ${pad(typeInfo.compatible.join(", "), w - 4)}║`,
    blank,
    `║${center("CONFLICTS WITH", w - 2)}║`,
    `║${hr}║`,
    `║  ${pad(typeInfo.conflicts.join(", "), w - 4)}║`,
    blank,
    ...wrapText(`Archetype: ${typeInfo.archetype}`, w - 6).map((l) => `║  ${pad(l, w - 4)}║`),
  ];

  if (resultUrl) {
    lines.push(blank);
    lines.push(`║${hr}║`);
    lines.push(`║${center("FULL RESULT", w - 2)}║`);
    lines.push(`║${hr}║`);
    lines.push(`║  ${pad(resultUrl.slice(0, w - 6), w - 4)}║`);
    if (resultUrl.length > w - 6) {
      lines.push(`║  ${pad(resultUrl.slice(w - 6), w - 4)}║`);
    }
  }

  lines.push(`╚${"═".repeat(w - 2)}╝`);

  return lines.join("\n");
}

/**
 * Generate a compact ASCII card (no interpretation) for quick display.
 */
export function generateCompactCard(
  typeInfo: ABTIType,
  scores: DimensionScores,
  confidence: number
): string {
  const face = OCTOPUS_FACES[typeInfo.code] || OCTOPUS_FACES.EGLO;
  const w = 44;
  const hr = "─".repeat(w - 2);

  const eiLabel = scores.E_I <= 50 ? "Execute" : "Improvise";
  const gsLabel = scores.G_S <= 50 ? "Grind" : "Slack";
  const lvLabel = scores.L_V <= 50 ? "Logic" : "Vibe";
  const ocLabel = scores.O_C <= 50 ? "Order" : "Chaos";

  const lines = [
    `╔${"═".repeat(w - 2)}╗`,
    `║${center("A · B · T · I", w - 2)}║`,
    `║${hr}║`,
    ...face.map((l) => `║${center(l, w - 2)}║`),
    `║${" ".repeat(w - 2)}║`,
    `║  ${pad(`TYPE: ${typeInfo.code}`, w - 4)}║`,
    `║  ${pad(`NAME: ${typeInfo.name}`, w - 4)}║`,
    `║  ${pad(`  ${typeInfo.cn_name}`, w - 4)}║`,
    `║${" ".repeat(w - 2)}║`,
    `║${hr}║`,
    `║  ${pad(`E/I ${bar(scores.E_I)} ${pad(eiLabel, 9)} ${String(scores.E_I).padStart(3)}%`, w - 4)}║`,
    `║  ${pad(`G/S ${bar(scores.G_S)} ${pad(gsLabel, 9)} ${String(scores.G_S).padStart(3)}%`, w - 4)}║`,
    `║  ${pad(`L/V ${bar(scores.L_V)} ${pad(lvLabel, 9)} ${String(scores.L_V).padStart(3)}%`, w - 4)}║`,
    `║  ${pad(`O/C ${bar(scores.O_C)} ${pad(ocLabel, 9)} ${String(scores.O_C).padStart(3)}%`, w - 4)}║`,
    `║${" ".repeat(w - 2)}║`,
    `║  ${pad(`Confidence: ${confidence}%`, w - 4)}║`,
    `╚${"═".repeat(w - 2)}╝`,
  ];

  return lines.join("\n");
}

function wrapText(text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    if (current.length + word.length + 1 > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function displayWidth(text: string): number {
  let w = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0) || 0;
    if (
      (code >= 0x4e00 && code <= 0x9fff) ||
      (code >= 0x3000 && code <= 0x303f) ||
      (code >= 0xff00 && code <= 0xffef) ||
      (code >= 0xac00 && code <= 0xd7af)
    ) {
      w += 2;
    } else {
      w += 1;
    }
  }
  return w;
}

function pad(s: string, len: number): string {
  const dw = displayWidth(s);
  return s + " ".repeat(Math.max(0, len - dw));
}

function center(text: string, width: number): string {
  const dw = displayWidth(text);
  const p = Math.max(0, width - dw);
  const left = Math.floor(p / 2);
  const right = p - left;
  return " ".repeat(left) + text + " ".repeat(right);
}
