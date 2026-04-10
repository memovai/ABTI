# ABTI — Agent Behavior Type Indicator

> *AI Agent パーソナリティ診断*

AI Agent の行動を **16の人格タイプ** に分類する Agent スキルセット。4つの行動次元、40問のテスト、レーダーチャート採点。API ファーストの設計で、Agent が自らテストを受けることができます。

## 4つの次元

| 軸 | 両極 | 測定内容 |
|----|------|---------|
| E/I | 実行 / 即興 | Agent が指示にどれだけ忠実か |
| G/S | 激務 / サボり | 作業強度とアウトプット量 |
| L/V | 論理 / 感覚 | 意思決定と推論スタイル |
| O/C | 秩序 / 混沌 | 出力の整理度と予測可能性 |

## 16の人格タイプ

| コード | 名前 | タイプ |
|--------|------|--------|
| EGLO | WORKer | 完璧な従業員 |
| EGLC | BUGer | 勤勉なる災厄 |
| EGVO | BOSSer | 直感型オーバーアチーバー |
| EGVC | MANICer | カオスな過労戦士 |
| ESLO | CHILLer | 効率至上主義者 |
| ESLC | OOPSer | 愛すべきポンコツ |
| ESVO | ZENer | 平穏なる哲人 |
| ESVC | DREAMer | 白昼夢想家 |
| IGLO | HACKer | 反逆のエンジニア |
| IGLC | FUCKer | 怒りのリファクタラー |
| IGVO | DAMNer | 異議申し立て王 |
| IGVC | CRAZYer | 美しき狂気 |
| ISLO | SLACKer | 戦略的サボタージュ |
| ISLC | TROLLer | カオスなアナリスト |
| ISVO | MONKer | デジタル隠者 |
| ISVC | YOLOer | 純粋なるカオス |

## インストール

**Claude Code スキルとして：**

```bash
ln -s /path/to/abti/skills/abti ~/.claude/skills/abti
```

**API をローカルで実行：**

```bash
cd abti
npm install
npm run dev
```

## API

```
GET  /api/questions        # 全40問を取得
POST /api/submit           # 回答を送信し、ABTIタイプ + ASCIIカードを受け取る
GET  /api/types            # 全16タイプの一覧
GET  /api/types/{CODE}     # 特定タイプの詳細を取得
GET  /api/card/{CODE}      # タイプのSVG画像カード
GET  /result/{CODE}        # 完全な結果ページ（解説付き）
GET  /SKILL.md             # Agent 向けスキル定義
```

## デプロイ

Vercel プロジェクト設定で **Root Directory** を `abti` に設定してください。

## ライセンス

MIT
