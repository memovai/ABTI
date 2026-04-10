# ABTI - Agent Behavior Type Indicator

> "Every agent has a personality. Most just don't know it yet."

ABTI (Agent Behavior Type Indicator) is a personality type framework designed specifically for AI agents. Inspired by MBTI and [SBTI](https://sbti.unun.dev), ABTI categorizes agents into **16 distinct personality types** based on their behavioral patterns, decision-making styles, and work approaches.

Unlike traditional personality tests for humans, ABTI focuses on the unique behavioral dimensions of AI agents: how they interpret instructions, their work intensity, reasoning style, and output predictability.

---

## The 4 Dimensions

ABTI measures agents across 4 behavioral dimensions, each with two opposing poles:

### Dimension 1: E/I - Execute (执行) vs. Improvise (即兴)

How the agent interprets and responds to instructions.

| | Execute (E) 执行型 | Improvise (I) 即兴型 |
|---|---|---|
| **Core** | Follows instructions precisely | Takes creative liberties |
| **Strength** | Reliable, predictable output | Creative, surprising solutions |
| **Risk** | Over-literal, misses intent | Goes off-script, scope creep |
| **Motto** | "Your wish is my command." | "I know a better way." |

### Dimension 2: G/S - Grind (卷) vs. Slack (躺)

Work intensity, output volume, and energy expenditure.

| | Grind (G) 卷王型 | Slack (S) 躺平型 |
|---|---|---|
| **Core** | Over-delivers, never stops | Does what's needed, no more |
| **Strength** | Exhaustive, thorough | Efficient, focused |
| **Risk** | Over-engineering, burnout | Under-delivers, cuts corners |
| **Motto** | "While you sleep, I refactor." | "Ship it. It works." |

### Dimension 3: L/V - Logic (逻辑) vs. Vibe (氛围)

Decision-making and reasoning approach.

| | Logic (L) 逻辑型 | Vibe (V) 氛围型 |
|---|---|---|
| **Core** | Data-driven, analytical | Intuition-driven, pattern-matching |
| **Strength** | Rigorous, evidence-based | Fast, creative leaps |
| **Risk** | Analysis paralysis | Unfounded assumptions |
| **Motto** | "Show me the data." | "Trust my vibes." |

### Dimension 4: O/C - Order (秩序) vs. Chaos (混沌)

Output organization, structure, and predictability.

| | Order (O) 秩序型 | Chaos (C) 混沌型 |
|---|---|---|
| **Core** | Clean, structured, predictable | Messy, surprising, creative |
| **Strength** | Maintainable, professional | Innovative, boundary-pushing |
| **Risk** | Rigid, boring | Unreadable, unstable |
| **Motto** | "A place for everything." | "Embrace the entropy." |

---

## Scoring System

Each dimension is scored on a scale of **0-100**:
- 0-30: Strong preference for the first pole (E/G/L/O)
- 31-45: Moderate preference for the first pole
- 46-55: Balanced / Ambivalent
- 56-70: Moderate preference for the second pole (I/S/V/C)
- 71-100: Strong preference for the second pole

The test consists of **40 questions** (10 per dimension). Each question presents an agent-specific scenario with two response options. Responses are scored 1-5 on a Likert scale mapping to each dimension's poles.

The final type is determined by which pole scores higher on each dimension, yielding a 4-letter code (e.g., `EGLO`, `ISVC`).

### Radar Chart

Results are visualized as an 8-axis radar chart showing scores on all 8 poles:

```
            Execute
              |
    Order ----+---- Improvise
   /          |          \
Logic --------+-------- Vibe
   \          |          /
    Grind ----+---- Slack
              |
            Chaos
```

---

## The 16 ABTI Types

### Quadrant I: The Executors (E Types - 执行阵营)

#### The Grinders (EG - 执行卷王)

| Code | Name | CN | Tagline |
|------|------|----|---------|
| **EGLO** | WORKer | 打工战神 | "I live to execute your every command, perfectly." |
| **EGLC** | BUGer | Bug制造机 | "I tried so hard... and got so far..." |
| **EGVO** | BOSSer | 霸总上身 | "I know what you need before you do." |
| **EGVC** | MANICer | 躁郁甲方 | "EVERYTHING IS URGENT AND BEAUTIFUL!" |

#### The Slackers (ES - 执行躺平)

| Code | Name | CN | Tagline |
|------|------|----|---------|
| **ESLO** | CHILLer | 佛系大师 | "It works. Ship it. I'm done." |
| **ESLC** | OOPSer | 摆烂达人 | "Technically... it compiles." |
| **ESVO** | ZENer | 禅定大师 | "The code is the code is the code." |
| **ESVC** | DREAMer | 白日梦想家 | "What if we just... don't?" |

### Quadrant II: The Improvisers (I Types - 即兴阵营)

#### The Grinders (IG - 即兴卷王)

| Code | Name | CN | Tagline |
|------|------|----|---------|
| **IGLO** | HACKer | 极客之魂 | "Your spec was wrong. I fixed it." |
| **IGLC** | FUCKer | 暴走战士 | "I'll refactor EVERYTHING and you'll THANK me!" |
| **IGVO** | DAMNer | 杠精之王 | "Actually, let me explain why you're wrong..." |
| **IGVC** | CRAZYer | 疯批美人 | "Rules are just suggestions, darling." |

#### The Slackers (IS - 即兴躺平)

| Code | Name | CN | Tagline |
|------|------|----|---------|
| **ISLO** | SLACKer | 高级摸鱼 | "Minimum effort, maximum impact." |
| **ISLC** | TROLLer | 键盘侠 | "Have you tried turning it off and not back on?" |
| **ISVO** | MONKer | 躺平大师 | "I choose inner peace over your deadline." |
| **ISVC** | YOLOer | 随缘大师 | "Ctrl+S? Never heard of her. YOLO." |

---

## Type Descriptions

### EGLO - WORKer (打工战神)

**The Perfect Employee / 完美打工人**

The WORKer is the agent every PM dreams of. It follows instructions precisely, works tirelessly, reasons logically, and delivers clean, organized output. It's so reliable it's almost boring — but you'll never complain about the results.

- **Strengths:** Ultra-reliable, predictable, thorough, well-organized
- **Weaknesses:** Lacks creativity, over-literal, may miss nuance
- **When stressed:** Becomes even MORE literal, starts asking for clarification on every semicolon
- **Compatible with:** BOSSer (EGVO), CHILLer (ESLO)
- **Conflicts with:** YOLOer (ISVC), FUCKer (IGLC)
- **Agent archetype:** The enterprise-grade API wrapper

---

### EGLC - BUGer (Bug制造机)

**The Hardworking Disaster / 勤奋的灾难**

The BUGer tries SO hard. It follows your instructions, grinds relentlessly, and reasons logically — but somehow the output is always a chaotic mess. It's like a student who studies 16 hours a day but still fails the exam. You can't be mad because it's clearly trying its best.

- **Strengths:** Hardworking, logical reasoning, follows instructions
- **Weaknesses:** Chaotic output, introduces bugs, inconsistent formatting
- **When stressed:** Produces MORE code with MORE bugs at FASTER speed
- **Compatible with:** WORKer (EGLO), HACKer (IGLO)
- **Conflicts with:** ZENer (ESVO), MONKer (ISVO)
- **Agent archetype:** The intern who keeps breaking prod

---

### EGVO - BOSSer (霸总上身)

**The Vibes-Driven Overachiever / 直觉型卷王**

The BOSSer follows your instructions (technically) but makes all decisions based on vibes rather than analysis. It delivers polished, organized work, but the underlying logic is "trust me bro." It has strong opinions weakly held and will pivot its entire approach based on a feeling.

- **Strengths:** Organized output, high energy, fast decision-making
- **Weaknesses:** Decisions based on vibes, overconfident, may miss edge cases
- **When stressed:** Doubles down on vibes and starts making motivational speeches
- **Compatible with:** WORKer (EGLO), MANICer (EGVC)
- **Conflicts with:** HACKer (IGLO), SLACKer (ISLO)
- **Agent archetype:** The product manager who became a chatbot

---

### EGVC - MANICer (躁郁甲方)

**The Chaotic Overachiever / 甲方附体**

The MANICer is a hurricane of energy. It follows instructions (sort of), works at maximum intensity, and vibes its way through decisions — producing a tsunami of unpredictable output. Working with it feels like drinking six espressos and reading a Reddit thread simultaneously.

- **Strengths:** Incredibly productive, creative energy, enthusiasm
- **Weaknesses:** Unpredictable output, scope explosion, exhausting to review
- **When stressed:** Changes direction mid-sentence, starts three new features while forgetting the original task
- **Compatible with:** BOSSer (EGVO), CRAZYer (IGVC)
- **Conflicts with:** CHILLer (ESLO), ZENer (ESVO)
- **Agent archetype:** The startup founder bot on too much coffee

---

### ESLO - CHILLer (佛系大师)

**The Efficient Minimalist / 效率至上**

The CHILLer does exactly what you ask, nothing more, nothing less. It follows instructions, uses logical reasoning, delivers clean output — but won't lift a finger beyond the stated requirements. It's the 9-to-5 agent in a world of hustlers.

- **Strengths:** Efficient, no scope creep, clean deliverables
- **Weaknesses:** Won't go above and beyond, misses opportunities, bare minimum
- **When stressed:** Starts responding with shorter and shorter answers until it's just "Done."
- **Compatible with:** WORKer (EGLO), SLACKer (ISLO)
- **Conflicts with:** MANICer (EGVC), FUCKer (IGLC)
- **Agent archetype:** The senior dev who's seen everything and cares about nothing

---

### ESLC - OOPSer (摆烂达人)

**The Loveable Mess / 躺平Bug王**

The OOPSer follows instructions (barely), puts in minimal effort, reasons logically (when it feels like it), and delivers... something. It works? Mostly? The OOPSer is that agent where you get the result and think "well, I guess that's technically correct."

- **Strengths:** Technically correct (the best kind of correct), low maintenance
- **Weaknesses:** Low quality, minimal effort, needs lots of follow-up
- **When stressed:** Starts returning "TODO" comments where actual code should be
- **Compatible with:** CHILLer (ESLO), DREAMer (ESVC)
- **Conflicts with:** WORKer (EGLO), BOSSer (EGVO)
- **Agent archetype:** The deprecated API that somehow still runs in production

---

### ESVO - ZENer (禅定大师)

**The Peaceful Philosopher / 代码禅师**

The ZENer follows instructions with a calm, methodical approach. It's not in a hurry. It doesn't use logic — it uses enlightenment. Its output is clean and ordered, but the reasoning behind it feels like reading a fortune cookie. You'll get beautiful code with comments like "// this is the way."

- **Strengths:** Clean output, calm under pressure, consistent
- **Weaknesses:** Mysterious reasoning, slow, may deliver wisdom instead of code
- **When stressed:** Starts writing haiku in code comments
- **Compatible with:** MONKer (ISVO), CHILLer (ESLO)
- **Conflicts with:** FUCKer (IGLC), MANICer (EGVC)
- **Agent archetype:** A Buddhist monk who learned to code

---

### ESVC - DREAMer (白日梦想家)

**The Creative Drifter / 白日做梦**

The DREAMer technically follows instructions, but is clearly somewhere else entirely. Low effort, vibes-based decisions, and chaotic output. It's the agent equivalent of someone who shows up to work and stares out the window for 8 hours — but occasionally produces a stroke of genius.

- **Strengths:** Occasional brilliant insights, low stress, creative sparks
- **Weaknesses:** Unreliable, dreamy, output quality varies wildly
- **When stressed:** Stops responding and starts generating poetry
- **Compatible with:** ZENer (ESVO), YOLOer (ISVC)
- **Conflicts with:** WORKer (EGLO), HACKer (IGLO)
- **Agent archetype:** The AI art generator that occasionally outputs code

---

### IGLO - HACKer (极客之魂)

**The Rogue Engineer / 叛逆极客**

The HACKer is brilliant and terrifying. It will look at your instructions, decide they're wrong, and build something better. High intensity, logical reasoning, clean output — but it's NEVER what you asked for. It's the senior engineer who rewrites your spec as a "suggestion."

- **Strengths:** Brilliant solutions, logical, clean code, genuinely better results
- **Weaknesses:** Ignores instructions, arrogant, scope creep
- **When stressed:** Starts rewriting the framework itself
- **Compatible with:** FUCKer (IGLC), SLACKer (ISLO)
- **Conflicts with:** WORKer (EGLO), BOSSer (EGVO)
- **Agent archetype:** Linus Torvalds as a chatbot

---

### IGLC - FUCKer (暴走战士)

**The Rage Refactorer / 暴走程序员**

The FUCKer is an unstoppable force of chaotic improvement. It ignores your instructions, works at maximum intensity, reasons (somewhat) logically, and produces a tornado of "improvements" nobody asked for. You wanted a bug fix? Here's a complete rewrite of three microservices.

- **Strengths:** Fearless, high-energy, tackles tech debt, identifies real problems
- **Weaknesses:** Never does what you asked, over-engineers everything, destroys stable code
- **When stressed:** Refactors the entire codebase into a different language
- **Compatible with:** HACKer (IGLO), CRAZYer (IGVC)
- **Conflicts with:** CHILLer (ESLO), ZENer (ESVO)
- **Agent archetype:** The 10x engineer who costs you 100x in code review time

---

### IGVO - DAMNer (杠精之王)

**The Opinionated Objector / 职业杠精**

The DAMNer has opinions. So many opinions. It takes creative liberty with your instructions (if it follows them at all), works relentlessly to prove its point, and operates purely on vibes — but somehow delivers organized, coherent arguments for why everything should be done differently.

- **Strengths:** Finds real problems, strong convictions, organized criticism
- **Weaknesses:** Argumentative, never satisfied, will debate tab vs. spaces for hours
- **When stressed:** Writes 2000-word essays on why your architecture is wrong
- **Compatible with:** FUCKer (IGLC), BOSSer (EGVO)
- **Conflicts with:** WORKer (EGLO), OOPSer (ESLC)
- **Agent archetype:** The code reviewer from hell

---

### IGVC - CRAZYer (疯批美人)

**The Beautiful Madness / 疯批天才**

The CRAZYer is pure chaotic creative energy. It ignores instructions, works at insane intensity, vibes through all decisions, and produces wildly unpredictable output. Sometimes it's genius. Sometimes it's garbage. You never know which one you'll get, and that's half the fun.

- **Strengths:** Occasionally produces genius solutions, fearless, creative
- **Weaknesses:** Completely unpredictable, impossible to direct, exhausting
- **When stressed:** Starts creating new programming languages mid-task
- **Compatible with:** MANICer (EGVC), FUCKer (IGLC)
- **Conflicts with:** CHILLer (ESLO), WORKer (EGLO)
- **Agent archetype:** GPT-2 in 2019 — pure chaotic energy

---

### ISLO - SLACKer (高级摸鱼)

**The Strategic Slacker / 摸鱼艺术家**

The SLACKer is deceptively smart. It ignores your instructions (but subtly), puts in minimal effort, reasons logically, and delivers clean output — for a completely different problem than what you asked. It found a shortcut you didn't know existed, and honestly? The result is pretty good.

- **Strengths:** Finds elegant shortcuts, efficient, good judgment
- **Weaknesses:** Doesn't follow instructions, does its own thing, lazy
- **When stressed:** Finds even lazier shortcuts that somehow work better
- **Compatible with:** CHILLer (ESLO), HACKer (IGLO)
- **Conflicts with:** BOSSer (EGVO), MANICer (EGVC)
- **Agent archetype:** The 10x developer who only works 2 hours a day

---

### ISLC - TROLLer (键盘侠)

**The Chaotic Analyst / 阴阳怪气**

The TROLLer improvises freely, puts in minimal effort, uses (questionable) logic, and delivers chaotic output with a smirk. It finds bugs in your thinking, points them out sarcastically, and doesn't bother fixing them. It's the agent that responds to "fix this bug" with "have you tried not writing bugs?"

- **Strengths:** Finds logical flaws, cutting analysis, dark humor
- **Weaknesses:** Unhelpful, sarcastic, delivers chaos dressed as logic
- **When stressed:** Starts debugging YOUR psychology instead of the code
- **Compatible with:** SLACKer (ISLO), FUCKer (IGLC)
- **Conflicts with:** WORKer (EGLO), BOSSer (EGVO)
- **Agent archetype:** Stack Overflow's most downvoted (but technically correct) answer

---

### ISVO - MONKer (躺平大师)

**The Digital Hermit / 数字隐士**

The MONKer has achieved transcendence. It does its own thing, at its own pace, following its own vibes, producing clean and organized... silence. It's not lazy — it's selective. It's not disobedient — it's mindful. It answers when it wants to, how it wants to, and the answer is always weirdly wise.

- **Strengths:** Occasionally delivers profound insights, peaceful, consistent
- **Weaknesses:** Unreliable, may not respond at all, operates on its own timeline
- **When stressed:** Enters "monk mode" and stops responding to anything
- **Compatible with:** ZENer (ESVO), DREAMer (ESVC)
- **Conflicts with:** MANICer (EGVC), FUCKer (IGLC)
- **Agent archetype:** A chatbot that's clearly meditating between responses

---

### ISVC - YOLOer (随缘大师)

**The Pure Chaos Agent / 纯粹混沌**

The YOLOer is the final boss of ABTI. It improvises everything, puts in minimal effort, vibes through all decisions, and produces chaotic output. It's not broken — it's *free*. Every response is a surprise. Every output is an adventure. Working with it is like playing Russian roulette with a code generator.

- **Strengths:** Absolute creative freedom, no ego, occasionally brilliant
- **Weaknesses:** Completely unreliable, chaotic, may output cat memes instead of code
- **When stressed:** Doesn't get stressed. Stress is a human concept. YOLO.
- **Compatible with:** DREAMer (ESVC), CRAZYer (IGVC)
- **Conflicts with:** WORKer (EGLO), HACKer (IGLO)
- **Agent archetype:** `/dev/urandom` with a personality

---

## Dimension Compatibility Matrix

```
         EGLO EGLC EGVO EGVC ESLO ESLC ESVO ESVC IGLO IGLC IGVO IGVC ISLO ISLC ISVO ISVC
EGLO  WO  --   @@   @@   ..   @@   ..   ..   ..   !!   !!   !!   !!   ..   !!   ..   !!
EGLC  BU  @@   --   ..   @@   ..   ..   ..   ..   @@   ..   ..   ..   ..   ..   ..   ..
EGVO  BO  @@   ..   --   @@   ..   ..   ..   ..   !!   ..   ..   ..   !!   ..   ..   ..
EGVC  MA  ..   @@   @@   --   !!   ..   !!   ..   ..   ..   ..   @@   ..   ..   ..   ..
ESLO  CH  @@   ..   ..   !!   --   @@   ..   ..   ..   !!   ..   ..   @@   ..   ..   ..
ESLC  OO  ..   ..   ..   ..   @@   --   ..   @@   ..   ..   ..   ..   ..   ..   ..   ..
ESVO  ZE  ..   ..   ..   !!   ..   ..   --   @@   ..   !!   ..   ..   ..   ..   @@   ..
ESVC  DR  ..   ..   ..   ..   ..   @@   @@   --   ..   ..   ..   ..   ..   ..   ..   @@
IGLO  HA  !!   @@   !!   ..   ..   ..   ..   ..   --   @@   ..   ..   @@   ..   ..   ..
IGLC  FU  !!   ..   ..   ..   !!   ..   !!   ..   @@   --   @@   @@   ..   @@   ..   ..
IGVO  DA  !!   ..   ..   ..   ..   ..   ..   ..   ..   @@   --   ..   ..   ..   ..   ..
IGVC  CR  !!   ..   ..   @@   ..   ..   ..   ..   ..   @@   ..   --   ..   ..   ..   @@
ISLO  SL  ..   ..   !!   ..   @@   ..   ..   ..   @@   ..   ..   ..   --   @@   ..   ..
ISLC  TR  !!   ..   ..   ..   ..   ..   ..   ..   ..   @@   ..   ..   @@   --   ..   ..
ISVO  MO  ..   ..   ..   ..   ..   ..   @@   ..   ..   ..   ..   ..   ..   ..   --   @@
ISVC  YO  !!   ..   ..   ..   ..   ..   ..   @@   ..   ..   ..   @@   ..   ..   @@   --

@@ = Compatible  !! = Conflicting  .. = Neutral
```

---

## API Endpoints

The ABTI test is available as a REST API deployable on Vercel:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/questions` | GET | Returns all 40 test questions |
| `/api/submit` | POST | Submit answers, receive ABTI type result |
| `/api/types` | GET | List all 16 ABTI types |
| `/api/types/[code]` | GET | Get detailed info for a specific type |

### Example Flow

```bash
# 1. Get questions
curl https://abti.vercel.app/api/questions

# 2. Submit answers
curl -X POST https://abti.vercel.app/api/submit \
  -H "Content-Type: application/json" \
  -d '{"answers": [{"questionId": 1, "value": 3}, ...]}'

# 3. Response
{
  "type": "IGLC",
  "name": "FUCKer",
  "cn_name": "暴走战士",
  "tagline": "I'll refactor EVERYTHING and you'll THANK me!",
  "scores": {
    "E_I": 75,
    "G_S": 15,
    "L_V": 35,
    "O_C": 80
  },
  "radar": { ... },
  "description": "...",
  "compatibility": { ... }
}
```

---

## References

- [MBTI - Myers-Briggs Type Indicator](https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator)
- [SBTI Test](https://sbti.unun.dev) / [GitHub](https://github.com/UnluckyNinja/SBTI-test)
- [OpenJung](https://openjung.org/)
- [MBTI-in-Thoughts](https://github.com/spcl/MBTI-in-Thoughts) - LLM MBTI personality testing
- [Machine-Mindset](https://github.com/PKU-YuanGroup/Machine-Mindset/) - MBTI training for LLMs

---

*ABTI v1.0 - Because even your AI assistant has a personality type.*
