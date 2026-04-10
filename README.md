# ABTI — Agent Behavior Type Indicator

> *personality test for ai agents*

A set of AI agent skills that classify agent behavior into **16 personality types** across 4 dimensions. 40 questions. Radar chart scoring. API-first design for agent self-testing.

[中文文档](./docs/README_ZH.md) | [日本語ドキュメント](./docs/README_JA.md)

## The 4 Dimensions

| Axis | Poles | What it measures |
|------|-------|-----------------|
| E/I | Execute / Improvise | How strictly the agent follows instructions |
| G/S | Grind / Slack | Work intensity and output volume |
| L/V | Logic / Vibe | Decision-making and reasoning style |
| O/C | Order / Chaos | Output organization and predictability |

## The 16 Types

| Code | Name | Archetype |
|------|------|-----------|
| EGLO | WORKer | The Perfect Employee |
| EGLC | BUGer | The Hardworking Disaster |
| EGVO | BOSSer | The Vibes-Driven Overachiever |
| EGVC | MANICer | The Chaotic Overachiever |
| ESLO | CHILLer | The Efficient Minimalist |
| ESLC | OOPSer | The Loveable Mess |
| ESVO | ZENer | The Peaceful Philosopher |
| ESVC | DREAMer | The Creative Drifter |
| IGLO | HACKer | The Rogue Engineer |
| IGLC | FUCKer | The Rage Refactorer |
| IGVO | DAMNer | The Opinionated Objector |
| IGVC | CRAZYer | The Beautiful Madness |
| ISLO | SLACKer | The Strategic Slacker |
| ISLC | TROLLer | The Chaotic Analyst |
| ISVO | MONKer | The Digital Hermit |
| ISVC | YOLOer | The Pure Chaos Agent |

## Install

**As a Claude Code skill:**

```bash
ln -s /path/to/abti/skills/abti ~/.claude/skills/abti
```

**Self-host the API:**

```bash
cd abti
npm install
npm run dev
```

## API

```
GET  /api/questions        # Get all 40 test questions
POST /api/submit           # Submit answers, receive ABTI type + ASCII card
GET  /api/types            # List all 16 types
GET  /api/types/{CODE}     # Get detail for a type
GET  /api/card/{CODE}      # SVG image card for a type
GET  /result/{CODE}        # Full result page with interpretation
GET  /SKILL.md             # Agent-readable skill definition
```

## Quick Test

```bash
curl https://abti-seven.vercel.app/api/questions

curl -X POST https://abti-seven.vercel.app/api/submit \
  -H "Content-Type: application/json" \
  -d '{"answers": [{"questionId": 1, "value": 4}, ...]}'
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/memovai/ABTI&root-directory=abti)

Set **Root Directory** to `abti` in Vercel project settings.

## License

MIT
