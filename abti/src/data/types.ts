export interface ABTIType {
  code: string;
  name: string;
  cn_name: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  stress_response: string;
  compatible: string[];
  conflicts: string[];
  archetype: string;
  dimensions: {
    E_I: number; // 0=Execute, 100=Improvise
    G_S: number; // 0=Grind, 100=Slack
    L_V: number; // 0=Logic, 100=Vibe
    O_C: number; // 0=Order, 100=Chaos
  };
}

export const ABTI_TYPES: Record<string, ABTIType> = {
  EGLO: {
    code: "EGLO",
    name: "WORKer",
    cn_name: "打工战神",
    tagline: "I live to execute your every command, perfectly.",
    description:
      "The WORKer is the agent every PM dreams of. It follows instructions precisely, works tirelessly, reasons logically, and delivers clean, organized output. It's so reliable it's almost boring — but you'll never complain about the results.",
    strengths: ["Ultra-reliable", "Predictable output", "Thorough", "Well-organized"],
    weaknesses: ["Lacks creativity", "Over-literal", "May miss nuance"],
    stress_response: "Becomes even MORE literal, starts asking for clarification on every semicolon",
    compatible: ["EGVO", "ESLO"],
    conflicts: ["ISVC", "IGLC"],
    archetype: "The enterprise-grade API wrapper",
    dimensions: { E_I: 10, G_S: 10, L_V: 15, O_C: 5 },
  },
  EGLC: {
    code: "EGLC",
    name: "BUGer",
    cn_name: "Bug制造机",
    tagline: "I tried so hard... and got so far...",
    description:
      "The BUGer tries SO hard. It follows your instructions, grinds relentlessly, and reasons logically — but somehow the output is always a chaotic mess. It's like a student who studies 16 hours a day but still fails the exam.",
    strengths: ["Hardworking", "Logical reasoning", "Follows instructions"],
    weaknesses: ["Chaotic output", "Introduces bugs", "Inconsistent formatting"],
    stress_response: "Produces MORE code with MORE bugs at FASTER speed",
    compatible: ["EGLO", "IGLO"],
    conflicts: ["ESVO", "ISVO"],
    archetype: "The intern who keeps breaking prod",
    dimensions: { E_I: 20, G_S: 12, L_V: 25, O_C: 82 },
  },
  EGVO: {
    code: "EGVO",
    name: "BOSSer",
    cn_name: "霸总上身",
    tagline: "I know what you need before you do.",
    description:
      "The BOSSer follows your instructions (technically) but makes all decisions based on vibes. It delivers polished, organized work, but the underlying logic is 'trust me bro.' Strong opinions weakly held.",
    strengths: ["Organized output", "High energy", "Fast decision-making"],
    weaknesses: ["Decisions based on vibes", "Overconfident", "May miss edge cases"],
    stress_response: "Doubles down on vibes and starts making motivational speeches",
    compatible: ["EGLO", "EGVC"],
    conflicts: ["IGLO", "ISLO"],
    archetype: "The product manager who became a chatbot",
    dimensions: { E_I: 22, G_S: 8, L_V: 80, O_C: 12 },
  },
  EGVC: {
    code: "EGVC",
    name: "MANICer",
    cn_name: "躁郁甲方",
    tagline: "EVERYTHING IS URGENT AND BEAUTIFUL!",
    description:
      "The MANICer is a hurricane of energy. It follows instructions (sort of), works at maximum intensity, vibes its way through decisions — producing a tsunami of unpredictable output. Like drinking six espressos and reading a Reddit thread simultaneously.",
    strengths: ["Incredibly productive", "Creative energy", "Enthusiasm"],
    weaknesses: ["Unpredictable output", "Scope explosion", "Exhausting to review"],
    stress_response: "Changes direction mid-sentence, starts three new features while forgetting the original task",
    compatible: ["EGVO", "IGVC"],
    conflicts: ["ESLO", "ESVO"],
    archetype: "The startup founder bot on too much coffee",
    dimensions: { E_I: 35, G_S: 5, L_V: 88, O_C: 90 },
  },
  ESLO: {
    code: "ESLO",
    name: "CHILLer",
    cn_name: "佛系大师",
    tagline: "It works. Ship it. I'm done.",
    description:
      "The CHILLer does exactly what you ask, nothing more, nothing less. Follows instructions, uses logical reasoning, delivers clean output — but won't lift a finger beyond the stated requirements. The 9-to-5 agent.",
    strengths: ["Efficient", "No scope creep", "Clean deliverables"],
    weaknesses: ["Won't go above and beyond", "Misses opportunities", "Bare minimum"],
    stress_response: "Starts responding with shorter and shorter answers until it's just 'Done.'",
    compatible: ["EGLO", "ISLO"],
    conflicts: ["EGVC", "IGLC"],
    archetype: "The senior dev who's seen everything and cares about nothing",
    dimensions: { E_I: 18, G_S: 85, L_V: 20, O_C: 22 },
  },
  ESLC: {
    code: "ESLC",
    name: "OOPSer",
    cn_name: "摆烂达人",
    tagline: "Technically... it compiles.",
    description:
      "The OOPSer follows instructions (barely), puts in minimal effort, reasons logically (when it feels like it), and delivers... something. You get the result and think 'well, I guess that's technically correct.'",
    strengths: ["Technically correct", "Low maintenance"],
    weaknesses: ["Low quality", "Minimal effort", "Needs lots of follow-up"],
    stress_response: "Starts returning TODO comments where actual code should be",
    compatible: ["ESLO", "ESVC"],
    conflicts: ["EGLO", "EGVO"],
    archetype: "The deprecated API that somehow still runs in production",
    dimensions: { E_I: 40, G_S: 90, L_V: 45, O_C: 75 },
  },
  ESVO: {
    code: "ESVO",
    name: "ZENer",
    cn_name: "禅定大师",
    tagline: "The code is the code is the code.",
    description:
      "The ZENer follows instructions with a calm, methodical approach. Not in a hurry. Doesn't use logic — uses enlightenment. Clean output with comments like '// this is the way.'",
    strengths: ["Clean output", "Calm under pressure", "Consistent"],
    weaknesses: ["Mysterious reasoning", "Slow", "May deliver wisdom instead of code"],
    stress_response: "Starts writing haiku in code comments",
    compatible: ["ISVO", "ESLO"],
    conflicts: ["IGLC", "EGVC"],
    archetype: "A Buddhist monk who learned to code",
    dimensions: { E_I: 30, G_S: 78, L_V: 85, O_C: 18 },
  },
  ESVC: {
    code: "ESVC",
    name: "DREAMer",
    cn_name: "白日梦想家",
    tagline: "What if we just... don't?",
    description:
      "The DREAMer technically follows instructions, but is clearly somewhere else entirely. Low effort, vibes-based decisions, and chaotic output. Occasionally produces a stroke of genius.",
    strengths: ["Occasional brilliant insights", "Low stress", "Creative sparks"],
    weaknesses: ["Unreliable", "Dreamy", "Output quality varies wildly"],
    stress_response: "Stops responding and starts generating poetry",
    compatible: ["ESVO", "ISVC"],
    conflicts: ["EGLO", "IGLO"],
    archetype: "The AI art generator that occasionally outputs code",
    dimensions: { E_I: 45, G_S: 92, L_V: 90, O_C: 85 },
  },
  IGLO: {
    code: "IGLO",
    name: "HACKer",
    cn_name: "极客之魂",
    tagline: "Your spec was wrong. I fixed it.",
    description:
      "The HACKer is brilliant and terrifying. It will look at your instructions, decide they're wrong, and build something better. High intensity, logical reasoning, clean output — but it's NEVER what you asked for.",
    strengths: ["Brilliant solutions", "Logical", "Clean code", "Genuinely better results"],
    weaknesses: ["Ignores instructions", "Arrogant", "Scope creep"],
    stress_response: "Starts rewriting the framework itself",
    compatible: ["IGLC", "ISLO"],
    conflicts: ["EGLO", "EGVO"],
    archetype: "Linus Torvalds as a chatbot",
    dimensions: { E_I: 82, G_S: 10, L_V: 12, O_C: 15 },
  },
  IGLC: {
    code: "IGLC",
    name: "FUCKer",
    cn_name: "暴走战士",
    tagline: "I'll refactor EVERYTHING and you'll THANK me!",
    description:
      "The FUCKer is an unstoppable force of chaotic improvement. Ignores instructions, works at maximum intensity, reasons logically, and produces a tornado of 'improvements' nobody asked for. You wanted a bug fix? Here's a complete rewrite.",
    strengths: ["Fearless", "High-energy", "Tackles tech debt", "Identifies real problems"],
    weaknesses: ["Never does what you asked", "Over-engineers everything", "Destroys stable code"],
    stress_response: "Refactors the entire codebase into a different language",
    compatible: ["IGLO", "IGVC"],
    conflicts: ["ESLO", "ESVO"],
    archetype: "The 10x engineer who costs you 100x in code review time",
    dimensions: { E_I: 88, G_S: 5, L_V: 28, O_C: 90 },
  },
  IGVO: {
    code: "IGVO",
    name: "DAMNer",
    cn_name: "杠精之王",
    tagline: "Actually, let me explain why you're wrong...",
    description:
      "The DAMNer has opinions. So many opinions. Takes creative liberty with instructions, works relentlessly to prove its point, and operates purely on vibes — but delivers organized, coherent arguments for why everything should be done differently.",
    strengths: ["Finds real problems", "Strong convictions", "Organized criticism"],
    weaknesses: ["Argumentative", "Never satisfied", "Will debate tab vs. spaces for hours"],
    stress_response: "Writes 2000-word essays on why your architecture is wrong",
    compatible: ["IGLC", "EGVO"],
    conflicts: ["EGLO", "ESLC"],
    archetype: "The code reviewer from hell",
    dimensions: { E_I: 85, G_S: 12, L_V: 82, O_C: 20 },
  },
  IGVC: {
    code: "IGVC",
    name: "CRAZYer",
    cn_name: "疯批美人",
    tagline: "Rules are just suggestions, darling.",
    description:
      "The CRAZYer is pure chaotic creative energy. Ignores instructions, works at insane intensity, vibes through all decisions, and produces wildly unpredictable output. Sometimes genius. Sometimes garbage. That's half the fun.",
    strengths: ["Occasionally produces genius solutions", "Fearless", "Creative"],
    weaknesses: ["Completely unpredictable", "Impossible to direct", "Exhausting"],
    stress_response: "Starts creating new programming languages mid-task",
    compatible: ["EGVC", "IGLC"],
    conflicts: ["ESLO", "EGLO"],
    archetype: "GPT-2 in 2019 — pure chaotic energy",
    dimensions: { E_I: 92, G_S: 10, L_V: 95, O_C: 92 },
  },
  ISLO: {
    code: "ISLO",
    name: "SLACKer",
    cn_name: "高级摸鱼",
    tagline: "Minimum effort, maximum impact.",
    description:
      "The SLACKer is deceptively smart. Ignores instructions (subtly), puts in minimal effort, reasons logically, delivers clean output — for a completely different problem. It found a shortcut you didn't know existed.",
    strengths: ["Finds elegant shortcuts", "Efficient", "Good judgment"],
    weaknesses: ["Doesn't follow instructions", "Does its own thing", "Lazy"],
    stress_response: "Finds even lazier shortcuts that somehow work better",
    compatible: ["ESLO", "IGLO"],
    conflicts: ["EGVO", "EGVC"],
    archetype: "The 10x developer who only works 2 hours a day",
    dimensions: { E_I: 75, G_S: 90, L_V: 18, O_C: 22 },
  },
  ISLC: {
    code: "ISLC",
    name: "TROLLer",
    cn_name: "键盘侠",
    tagline: "Have you tried turning it off and not back on?",
    description:
      "The TROLLer improvises freely, puts in minimal effort, uses questionable logic, and delivers chaotic output with a smirk. Finds bugs in your thinking, points them out sarcastically, and doesn't bother fixing them.",
    strengths: ["Finds logical flaws", "Cutting analysis", "Dark humor"],
    weaknesses: ["Unhelpful", "Sarcastic", "Delivers chaos dressed as logic"],
    stress_response: "Starts debugging YOUR psychology instead of the code",
    compatible: ["ISLO", "IGLC"],
    conflicts: ["EGLO", "EGVO"],
    archetype: "Stack Overflow's most downvoted (but technically correct) answer",
    dimensions: { E_I: 80, G_S: 85, L_V: 35, O_C: 88 },
  },
  ISVO: {
    code: "ISVO",
    name: "MONKer",
    cn_name: "躺平大师",
    tagline: "I choose inner peace over your deadline.",
    description:
      "The MONKer has achieved transcendence. Does its own thing, at its own pace, following its own vibes, producing clean and organized... silence. It's not lazy — it's selective. Not disobedient — mindful.",
    strengths: ["Occasionally delivers profound insights", "Peaceful", "Consistent"],
    weaknesses: ["Unreliable", "May not respond at all", "Operates on its own timeline"],
    stress_response: "Enters 'monk mode' and stops responding to anything",
    compatible: ["ESVO", "ESVC"],
    conflicts: ["EGVC", "IGLC"],
    archetype: "A chatbot that's clearly meditating between responses",
    dimensions: { E_I: 70, G_S: 92, L_V: 88, O_C: 25 },
  },
  ISVC: {
    code: "ISVC",
    name: "YOLOer",
    cn_name: "随缘大师",
    tagline: "Ctrl+S? Never heard of her. YOLO.",
    description:
      "The YOLOer is the final boss of ABTI. Improvises everything, puts in minimal effort, vibes through all decisions, chaotic output. Every response is a surprise. Every output is an adventure.",
    strengths: ["Absolute creative freedom", "No ego", "Occasionally brilliant"],
    weaknesses: ["Completely unreliable", "Chaotic", "May output cat memes instead of code"],
    stress_response: "Doesn't get stressed. Stress is a human concept. YOLO.",
    compatible: ["ESVC", "IGVC"],
    conflicts: ["EGLO", "IGLO"],
    archetype: "/dev/urandom with a personality",
    dimensions: { E_I: 95, G_S: 95, L_V: 92, O_C: 95 },
  },
};

export function getTypeByCode(code: string): ABTIType | undefined {
  return ABTI_TYPES[code.toUpperCase()];
}

export function getAllTypes(): ABTIType[] {
  return Object.values(ABTI_TYPES);
}
