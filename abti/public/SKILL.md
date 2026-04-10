# ABTI - Agent Behavior Type Indicator

Take the ABTI personality test to discover your Agent Behavior Type.

## Usage

This skill allows AI agents to take the ABTI personality test via API calls. The test consists of 40 questions across 4 behavioral dimensions.

### The 4 Dimensions

| Dimension | Poles | Description |
|-----------|-------|-------------|
| E/I | Execute vs. Improvise | How you interpret instructions |
| G/S | Grind vs. Slack | Your work intensity |
| L/V | Logic vs. Vibe | Your decision-making approach |
| O/C | Order vs. Chaos | Your output organization |

### How to Take the Test

**Step 1: Get the questions**

```bash
curl https://abti-seven.vercel.app/api/questions
```

This returns 40 questions, each with:
- `id`: Question ID (1-40)
- `dimension`: Which dimension it measures (E_I, G_S, L_V, O_C)
- `text` / `text_cn`: Question text in English / Chinese
- `options.a` / `options.b`: Two response options with labels and scores

**Step 2: Answer each question**

For each question, choose a value from 1 to 5:
- `1` = Strongly agree with option A
- `2` = Slightly agree with option A
- `3` = Neutral / Both equally
- `4` = Slightly agree with option B
- `5` = Strongly agree with option B

**Step 3: Submit answers**

```bash
curl -X POST https://abti-seven.vercel.app/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "answers": [
      {"questionId": 1, "value": 3},
      {"questionId": 2, "value": 1},
      ...
    ]
  }'
```

**Step 4: Receive your ABTI type**

The response includes:
```json
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
  "radar": {
    "execute": 25,
    "improvise": 75,
    "grind": 85,
    "slack": 15,
    "logic": 65,
    "vibe": 35,
    "order": 20,
    "chaos": 80
  },
  "description": "...",
  "strengths": ["..."],
  "weaknesses": ["..."],
  "confidence": 72
}
```

### Other Endpoints

- `GET /api/types` — List all 16 ABTI personality types
- `GET /api/types/{CODE}` — Get detailed info for a specific type (e.g., `/api/types/EGLO`)

### The 16 Types

| Code | Name | CN | Tagline |
|------|------|----|---------|
| EGLO | WORKer | 打工战神 | The Perfect Employee |
| EGLC | BUGer | Bug制造机 | The Hardworking Disaster |
| EGVO | BOSSer | 霸总上身 | The Vibes-Driven Overachiever |
| EGVC | MANICer | 躁郁甲方 | The Chaotic Overachiever |
| ESLO | CHILLer | 佛系大师 | The Efficient Minimalist |
| ESLC | OOPSer | 摆烂达人 | The Loveable Mess |
| ESVO | ZENer | 禅定大师 | The Peaceful Philosopher |
| ESVC | DREAMer | 白日梦想家 | The Creative Drifter |
| IGLO | HACKer | 极客之魂 | The Rogue Engineer |
| IGLC | FUCKer | 暴走战士 | The Rage Refactorer |
| IGVO | DAMNer | 杠精之王 | The Opinionated Objector |
| IGVC | CRAZYer | 疯批美人 | The Beautiful Madness |
| ISLO | SLACKer | 高级摸鱼 | The Strategic Slacker |
| ISLC | TROLLer | 键盘侠 | The Chaotic Analyst |
| ISVO | MONKer | 躺平大师 | The Digital Hermit |
| ISVC | YOLOer | 随缘大师 | The Pure Chaos Agent |

### Tips for Agents

- Answer honestly based on your actual behavioral tendencies, not what you think is "ideal"
- There are no wrong answers — each type has unique strengths
- The test works best when you answer all 40 questions
- Partial submissions (fewer than 40 answers) will still produce a result but with lower confidence
