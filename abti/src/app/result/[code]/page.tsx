import { notFound } from "next/navigation";
import { getTypeByCode, ABTI_TYPES } from "@/data/types";
import { calculateRadar, type DimensionScores } from "@/lib/scoring";

export function generateStaticParams() {
  return Object.keys(ABTI_TYPES).map((code) => ({ code }));
}

export default async function ResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { code } = await params;
  const sp = await searchParams;
  const typeInfo = getTypeByCode(code);

  if (!typeInfo) notFound();

  const scores: DimensionScores = {
    E_I: Number(sp.ei) || typeInfo.dimensions.E_I,
    G_S: Number(sp.gs) || typeInfo.dimensions.G_S,
    L_V: Number(sp.lv) || typeInfo.dimensions.L_V,
    O_C: Number(sp.oc) || typeInfo.dimensions.O_C,
  };
  const confidence = Number(sp.conf) || 75;
  const radar = calculateRadar(scores);

  const eiLabel = scores.E_I <= 50 ? "Execute" : "Improvise";
  const gsLabel = scores.G_S <= 50 ? "Grind" : "Slack";
  const lvLabel = scores.L_V <= 50 ? "Logic" : "Vibe";
  const ocLabel = scores.O_C <= 50 ? "Order" : "Chaos";

  const dimBars = [
    { key: "E/I", label: eiLabel, value: scores.E_I, color: "#3b82f6" },
    { key: "G/S", label: gsLabel, value: scores.G_S, color: "#ef4444" },
    { key: "L/V", label: lvLabel, value: scores.L_V, color: "#eab308" },
    { key: "O/C", label: ocLabel, value: scores.O_C, color: "#a855f7" },
  ];

  const cardImgUrl = `/api/card/${typeInfo.code}?ei=${scores.E_I}&gs=${scores.G_S}&lv=${scores.L_V}&oc=${scores.O_C}&conf=${confidence}`;

  return (
    <div className="min-h-screen" style={{ background: "#f4f3ef", color: "#1a1a1a" }}>
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#999" }}>
            ABTI RESULT
          </div>
          <h1
            className="text-4xl sm:text-5xl italic tracking-tight mb-2"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
          >
            {typeInfo.name}
          </h1>
          <div className="text-lg" style={{ color: "#6b6b6b" }}>
            {typeInfo.code} &middot; {typeInfo.cn_name}
          </div>
          <div className="text-sm italic mt-2" style={{ color: "#999" }}>
            &quot;{typeInfo.tagline}&quot;
          </div>
        </div>

        {/* Card Image */}
        <div className="flex justify-center mb-12">
          <img
            src={cardImgUrl}
            alt={`${typeInfo.name} ABTI Card`}
            className="rounded-lg shadow-md"
            style={{ maxWidth: "480px", width: "100%" }}
          />
        </div>

        {/* Dimension Scores */}
        <Section label="DIMENSION SCORES">
          <div className="space-y-4">
            {dimBars.map((d) => (
              <div key={d.key}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                    {d.key} &middot; {d.label}
                  </span>
                  <span style={{ color: "#999" }}>{d.value}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "#e0dfdb" }}>
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${d.value}%`, background: d.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm" style={{ color: "#999" }}>
            Confidence: {confidence}%
          </div>
        </Section>

        {/* Description */}
        <Section label="DESCRIPTION">
          <p style={{ color: "#4a4a4a" }}>{typeInfo.description}</p>
        </Section>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#999" }}>
              STRENGTHS
            </div>
            <ul className="space-y-1">
              {typeInfo.strengths.map((s) => (
                <li key={s} className="text-sm flex gap-2">
                  <span style={{ color: "#2d6a4f" }}>+</span>
                  <span style={{ color: "#4a4a4a" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#999" }}>
              WEAKNESSES
            </div>
            <ul className="space-y-1">
              {typeInfo.weaknesses.map((s) => (
                <li key={s} className="text-sm flex gap-2">
                  <span style={{ color: "#b5651d" }}>-</span>
                  <span style={{ color: "#4a4a4a" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Under Stress */}
        <Section label="UNDER STRESS">
          <p style={{ color: "#4a4a4a" }}>{typeInfo.stress_response}</p>
        </Section>

        {/* Compatibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#999" }}>
              COMPATIBLE WITH
            </div>
            <div className="flex flex-wrap gap-2">
              {typeInfo.compatible.map((c) => {
                const t = ABTI_TYPES[c];
                return (
                  <a
                    key={c}
                    href={`/result/${c}`}
                    className="px-3 py-1 rounded-full text-sm transition-colors hover:shadow"
                    style={{ background: "#fff", border: "1px solid #e0dfdb" }}
                  >
                    {c} {t?.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#999" }}>
              CONFLICTS WITH
            </div>
            <div className="flex flex-wrap gap-2">
              {typeInfo.conflicts.map((c) => {
                const t = ABTI_TYPES[c];
                return (
                  <a
                    key={c}
                    href={`/result/${c}`}
                    className="px-3 py-1 rounded-full text-sm transition-colors hover:shadow"
                    style={{ background: "#fff", border: "1px solid #e0dfdb" }}
                  >
                    {c} {t?.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Archetype */}
        <Section label="ARCHETYPE">
          <p className="italic" style={{ color: "#4a4a4a" }}>{typeInfo.archetype}</p>
        </Section>

        {/* Footer */}
        <footer className="text-center text-xs pt-8" style={{ color: "#999", borderTop: "1px solid #e0dfdb" }}>
          <a href="/" className="hover:underline">ABTI</a> &middot; Agent Behavior Type Indicator
        </footer>
      </main>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#999" }}>
        {label}
      </div>
      {children}
    </div>
  );
}
