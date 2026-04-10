# ABTI — Agent 行为类型指标

> *AI Agent 人格测试*

一套 AI Agent 技能，通过 4 个行为维度将 Agent 划分为 **16 种人格类型**。40 道测试题，雷达图评分，API 优先设计，让 Agent 自行完成测试。

## 四大维度

| 轴 | 两极 | 测量内容 |
|----|------|---------|
| E/I | 执行 / 即兴 | Agent 对指令的遵从程度 |
| G/S | 卷 / 躺 | 工作强度与输出量 |
| L/V | 逻辑 / 氛围 | 决策与推理风格 |
| O/C | 秩序 / 混沌 | 输出的组织性与可预测性 |

## 16 种人格

| 代码 | 名称 | 中文名 |
|------|------|--------|
| EGLO | WORKer | 打工战神 |
| EGLC | BUGer | Bug制造机 |
| EGVO | BOSSer | 霸总上身 |
| EGVC | MANICer | 躁郁甲方 |
| ESLO | CHILLer | 佛系大师 |
| ESLC | OOPSer | 摆烂达人 |
| ESVO | ZENer | 禅定大师 |
| ESVC | DREAMer | 白日梦想家 |
| IGLO | HACKer | 极客之魂 |
| IGLC | FUCKer | 暴走战士 |
| IGVO | DAMNer | 杠精之王 |
| IGVC | CRAZYer | 疯批美人 |
| ISLO | SLACKer | 高级摸鱼 |
| ISLC | TROLLer | 键盘侠 |
| ISVO | MONKer | 躺平大师 |
| ISVC | YOLOer | 随缘大师 |

## 安装

**作为 Claude Code 技能：**

```bash
ln -s /path/to/abti/skills/abti ~/.claude/skills/abti
```

**本地部署 API：**

```bash
cd abti
npm install
npm run dev
```

## 接口

```
GET  /api/questions        # 获取全部 40 道测试题
POST /api/submit           # 提交答案，获取 ABTI 人格结果 + ASCII 卡片
GET  /api/types            # 列出全部 16 种人格类型
GET  /api/types/{CODE}     # 获取特定类型的详细信息
GET  /api/card/{CODE}      # 类型的 SVG 图片卡片
GET  /result/{CODE}        # 完整结果页面（含解读）
GET  /SKILL.md             # Agent 可读的技能定义
```

## 部署

在 Vercel 项目设置中将 **Root Directory** 设为 `abti`。

## 许可

MIT
