"use client";

import { useEffect, useState } from "react";
import { ABTI_TYPES } from "@/data/types";
import { type Locale, i18n } from "@/data/i18n";

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("ja")) return "ja";
  return "en";
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocale(detectLocale());
    setMounted(true);
  }, []);

  const t = i18n[locale];
  const types = Object.values(ABTI_TYPES);

  const sampleResult = {
    type: "IGLC",
    name: "FUCKer",
    cn: "暴走战士",
    scores: { E_I: 82, G_S: 8, L_V: 28, O_C: 88 },
  };

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: "#f4f3ef" }} />;
  }

  return (
    <div className="min-h-screen" style={{ background: "#f4f3ef", color: "#1a1a1a" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 text-sm">
        <span style={{ color: "#6b6b6b" }}>{t.nav_tagline}</span>
        <div className="flex items-center gap-4" style={{ color: "#6b6b6b" }}>
          <a
            href="https://github.com/memovai/ABTI"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline hover:underline"
          >
            GitHub &rarr;
          </a>
          {/* Locale switcher */}
          <div className="flex gap-1 text-xs">
            {(["en", "zh", "ja"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className="px-1.5 py-0.5 rounded transition-colors"
                style={{
                  background: locale === l ? "#1a1a1a" : "transparent",
                  color: locale === l ? "#f4f3ef" : "#6b6b6b",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-12 pb-24">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 mb-24">
          <div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl italic leading-[1.1] mb-10 tracking-tight"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              {t.hero_title_1}
              <br />
              {t.hero_title_2}
            </h1>

            <div className="mb-12">
              <Label>{t.what_is_label}</Label>
              <p className="max-w-lg" style={{ color: "#4a4a4a" }}>
                {t.what_is_desc}
              </p>
            </div>

            <div className="mb-12">
              <Label>{t.install_label}</Label>
              <CodeBlock>
                {`follow https://abti-seven.vercel.app/SKILL.md to take the ABTI test`}
              </CodeBlock>
            </div>

            <a
              href="https://github.com/memovai/ABTI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border rounded-full px-5 py-2.5 text-sm transition-colors hover:bg-white"
              style={{ borderColor: "#1a1a1a" }}
            >
              GitHub &rarr;
            </a>
          </div>

          {/* Preview Card */}
          <div
            className="rounded-lg p-6 shadow-sm self-start"
            style={{
              background: "#ffffff",
              border: "1px solid #e0dfdb",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "13px",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-base tracking-wider">ABTI</span>
              <span style={{ color: "#999", fontSize: "11px" }}>{t.card_label}</span>
            </div>
            <div className="mb-4 pb-4" style={{ borderBottom: "1px solid #eee" }}>
              <div style={{ color: "#999", fontSize: "11px", marginBottom: 4 }}>
                {t.card_task_label}
              </div>
              <div>{t.card_task}</div>
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-5">
              <div>
                <div style={{ color: "#999", fontSize: "11px" }}>Type</div>
                <div className="font-bold">{sampleResult.type}</div>
              </div>
              <div>
                <div style={{ color: "#999", fontSize: "11px" }}>Name</div>
                <div className="font-bold">{sampleResult.name}</div>
              </div>
              <div>
                <div style={{ color: "#999", fontSize: "11px" }}>
                  {locale === "en" ? "Execute/Improvise" : locale === "zh" ? "执行/即兴" : "実行/即興"}
                </div>
                <div>{sampleResult.scores.E_I}% I</div>
              </div>
              <div>
                <div style={{ color: "#999", fontSize: "11px" }}>
                  {locale === "en" ? "Grind/Slack" : locale === "zh" ? "卷/躺" : "激務/サボり"}
                </div>
                <div>{sampleResult.scores.G_S}% G</div>
              </div>
              <div>
                <div style={{ color: "#999", fontSize: "11px" }}>
                  {locale === "en" ? "Logic/Vibe" : locale === "zh" ? "逻辑/氛围" : "論理/感覚"}
                </div>
                <div>{sampleResult.scores.L_V}% L</div>
              </div>
              <div>
                <div style={{ color: "#999", fontSize: "11px" }}>
                  {locale === "en" ? "Order/Chaos" : locale === "zh" ? "秩序/混沌" : "秩序/混沌"}
                </div>
                <div>{sampleResult.scores.O_C}% C</div>
              </div>
            </div>
            <div
              className="text-center py-2 rounded"
              style={{ background: "#f4f3ef", fontSize: "11px", color: "#999" }}
            >
              &quot;{t.card_tagline}&quot;
            </div>
          </div>
        </section>

        {/* Dimensions */}
        <section className="mb-24">
          <Label>{t.dimensions_label}</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { code: "E / I", name: t.dim_ei_name, desc: t.dim_ei_desc },
              { code: "G / S", name: t.dim_gs_name, desc: t.dim_gs_desc },
              { code: "L / V", name: t.dim_lv_name, desc: t.dim_lv_desc },
              { code: "O / C", name: t.dim_oc_name, desc: t.dim_oc_desc },
            ].map((d) => (
              <div
                key={d.code}
                className="rounded-lg p-5"
                style={{ background: "#ffffff", border: "1px solid #e0dfdb" }}
              >
                <div
                  className="text-lg font-bold tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                >
                  {d.code}
                </div>
                <div className="text-sm font-medium mb-1">{d.name}</div>
                <div className="text-xs" style={{ color: "#6b6b6b" }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 16 Types */}
        <section className="mb-24">
          <Label>{t.types_label}</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {types.map((tp) => (
              <div
                key={tp.code}
                className="rounded-lg p-4 transition-all hover:shadow-md cursor-default"
                style={{ background: "#ffffff", border: "1px solid #e0dfdb" }}
              >
                <div
                  className="text-xs tracking-widest mb-1"
                  style={{ color: "#999", fontFamily: "var(--font-geist-mono), monospace" }}
                >
                  {tp.code}
                </div>
                <div className="font-bold text-sm">{tp.name}</div>
                <div className="text-xs" style={{ color: "#6b6b6b" }}>
                  {locale === "zh" || locale === "ja" ? tp.cn_name : tp.archetype}
                </div>
                <div
                  className="text-xs mt-2 italic leading-snug"
                  style={{ color: "#999" }}
                >
                  &quot;{locale === "en" ? tp.tagline : tp.cn_name}&quot;
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-xs pt-8" style={{ color: "#999", borderTop: "1px solid #e0dfdb" }}>
          {t.footer}
        </footer>
      </main>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-xs tracking-[0.2em] uppercase mb-4"
      style={{ color: "#999" }}
    >
      {children}
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre
      className="rounded-lg px-5 py-4 text-sm overflow-x-auto"
      style={{
        background: "#eae9e5",
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: "13px",
        lineHeight: 1.7,
      }}
    >
      {children}
    </pre>
  );
}
