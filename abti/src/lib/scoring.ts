import { ABTI_TYPES, ABTIType } from "../data/types";
import { QUESTIONS, Question } from "../data/questions";

export interface Answer {
  questionId: number;
  value: number; // 1-5
}

export interface DimensionScores {
  E_I: number; // 0-100, low=Execute, high=Improvise
  G_S: number; // 0-100, low=Grind, high=Slack
  L_V: number; // 0-100, low=Logic, high=Vibe
  O_C: number; // 0-100, low=Order, high=Chaos
}

export interface RadarScores {
  execute: number;
  improvise: number;
  grind: number;
  slack: number;
  logic: number;
  vibe: number;
  order: number;
  chaos: number;
}

export interface ABTIResult {
  type: string;
  name: string;
  cn_name: string;
  tagline: string;
  scores: DimensionScores;
  radar: RadarScores;
  description: string;
  strengths: string[];
  weaknesses: string[];
  stress_response: string;
  compatible: string[];
  conflicts: string[];
  archetype: string;
  confidence: number;
}

/**
 * Calculate dimension scores from answers.
 * Each dimension has 10 questions, each scored 1-5.
 * Raw score range per dimension: 10-50
 * Normalized to 0-100: ((raw - 10) / 40) * 100
 */
export function calculateScores(answers: Answer[]): DimensionScores {
  const dimensionSums: Record<string, { total: number; count: number }> = {
    E_I: { total: 0, count: 0 },
    G_S: { total: 0, count: 0 },
    L_V: { total: 0, count: 0 },
    O_C: { total: 0, count: 0 },
  };

  for (const answer of answers) {
    const question = QUESTIONS.find((q) => q.id === answer.questionId);
    if (!question) continue;

    const value = Math.max(1, Math.min(5, answer.value));
    dimensionSums[question.dimension].total += value;
    dimensionSums[question.dimension].count += 1;
  }

  const normalize = (dim: string): number => {
    const { total, count } = dimensionSums[dim];
    if (count === 0) return 50;
    // Average score per question (1-5), normalize to 0-100
    const avg = total / count;
    return Math.round(((avg - 1) / 4) * 100);
  };

  return {
    E_I: normalize("E_I"),
    G_S: normalize("G_S"),
    L_V: normalize("L_V"),
    O_C: normalize("O_C"),
  };
}

/**
 * Convert dimension scores to 8-axis radar scores.
 */
export function calculateRadar(scores: DimensionScores): RadarScores {
  return {
    execute: 100 - scores.E_I,
    improvise: scores.E_I,
    grind: 100 - scores.G_S,
    slack: scores.G_S,
    logic: 100 - scores.L_V,
    vibe: scores.L_V,
    order: 100 - scores.O_C,
    chaos: scores.O_C,
  };
}

/**
 * Determine the 4-letter ABTI type code from dimension scores.
 */
export function determineTypeCode(scores: DimensionScores): string {
  const ei = scores.E_I <= 50 ? "E" : "I";
  const gs = scores.G_S <= 50 ? "G" : "S";
  const lv = scores.L_V <= 50 ? "L" : "V";
  const oc = scores.O_C <= 50 ? "O" : "C";
  return `${ei}${gs}${lv}${oc}`;
}

/**
 * Calculate confidence based on how far scores are from the 50% midpoint.
 * Scores near 50 = low confidence (ambivalent), far from 50 = high confidence.
 */
export function calculateConfidence(scores: DimensionScores): number {
  const dims = [scores.E_I, scores.G_S, scores.L_V, scores.O_C];
  const deviations = dims.map((s) => Math.abs(s - 50) / 50);
  const avgDeviation = deviations.reduce((a, b) => a + b, 0) / deviations.length;
  return Math.round(avgDeviation * 100);
}

/**
 * Main scoring function: takes answers, returns full ABTI result.
 */
export function scoreTest(answers: Answer[]): ABTIResult {
  const scores = calculateScores(answers);
  const radar = calculateRadar(scores);
  const typeCode = determineTypeCode(scores);
  const confidence = calculateConfidence(scores);

  const typeInfo = ABTI_TYPES[typeCode];

  if (!typeInfo) {
    // Fallback to closest type by Manhattan distance
    const closest = findClosestType(scores);
    return buildResult(closest, scores, radar, confidence);
  }

  return buildResult(typeInfo, scores, radar, confidence);
}

/**
 * Find the closest matching type by Manhattan distance on dimension scores.
 */
function findClosestType(scores: DimensionScores): ABTIType {
  let bestType: ABTIType = Object.values(ABTI_TYPES)[0];
  let bestDistance = Infinity;

  for (const t of Object.values(ABTI_TYPES)) {
    const d =
      Math.abs(scores.E_I - t.dimensions.E_I) +
      Math.abs(scores.G_S - t.dimensions.G_S) +
      Math.abs(scores.L_V - t.dimensions.L_V) +
      Math.abs(scores.O_C - t.dimensions.O_C);
    if (d < bestDistance) {
      bestDistance = d;
      bestType = t;
    }
  }

  return bestType;
}

function buildResult(
  typeInfo: ABTIType,
  scores: DimensionScores,
  radar: RadarScores,
  confidence: number
): ABTIResult {
  return {
    type: typeInfo.code,
    name: typeInfo.name,
    cn_name: typeInfo.cn_name,
    tagline: typeInfo.tagline,
    scores,
    radar,
    description: typeInfo.description,
    strengths: typeInfo.strengths,
    weaknesses: typeInfo.weaknesses,
    stress_response: typeInfo.stress_response,
    compatible: typeInfo.compatible,
    conflicts: typeInfo.conflicts,
    archetype: typeInfo.archetype,
    confidence,
  };
}

/**
 * Validate answers array.
 */
export function validateAnswers(
  answers: unknown
): { valid: true; answers: Answer[] } | { valid: false; error: string } {
  if (!Array.isArray(answers)) {
    return { valid: false, error: "answers must be an array" };
  }

  if (answers.length === 0) {
    return { valid: false, error: "answers array is empty" };
  }

  if (answers.length > 40) {
    return { valid: false, error: "too many answers (max 40)" };
  }

  const validQuestionIds = new Set(QUESTIONS.map((q) => q.id));
  const seenIds = new Set<number>();

  for (const answer of answers) {
    if (
      typeof answer !== "object" ||
      answer === null ||
      typeof answer.questionId !== "number" ||
      typeof answer.value !== "number"
    ) {
      return {
        valid: false,
        error: "each answer must have questionId (number) and value (number)",
      };
    }

    if (!validQuestionIds.has(answer.questionId)) {
      return { valid: false, error: `invalid questionId: ${answer.questionId}` };
    }

    if (answer.value < 1 || answer.value > 5) {
      return {
        valid: false,
        error: `value must be 1-5, got ${answer.value} for question ${answer.questionId}`,
      };
    }

    if (seenIds.has(answer.questionId)) {
      return { valid: false, error: `duplicate questionId: ${answer.questionId}` };
    }
    seenIds.add(answer.questionId);
  }

  return { valid: true, answers: answers as Answer[] };
}
