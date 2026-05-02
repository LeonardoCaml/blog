import React from "react";
import { Link } from "react-router";

const shimmerStyle: React.CSSProperties = {
  background:
    "linear-gradient(90deg, #677ce0 0%, #a5b4fc 40%, #ffffff 50%, #a5b4fc 60%, #677ce0 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "shimmer 3s linear infinite",
};

export const Hero = () => {
  return (
    <section className="relative px-10 py-16 flex flex-col items-center text-center gap-6 border-b border-[#252529] overflow-hidden">
      {/* Glow atrás do título */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[200px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #2c355e40 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      <span className="text-xs font-semibold uppercase tracking-widest text-[#677ce0] bg-[#677ce01a] px-3 py-1 rounded-full">
        Aprendizado prático para devs
      </span>

      <h1 className="relative text-white font-bold text-4xl max-w-2xl leading-tight">
        Aprenda programação com{" "}
        <span style={shimmerStyle}>conteúdo direto ao ponto</span>
      </h1>

      <p className="text-[#afabb6] text-base max-w-xl">
        Artigos, guias e roadmaps para quem quer evoluir como desenvolvedor —
        sem enrolação, sem conteúdo genérico.
      </p>

      <div className="flex gap-3">
        <Link
          to="/blog"
          className="px-6 py-3 bg-[#677ce0] text-white font-semibold rounded-lg hover:bg-[#5567c8] transition"
        >
          Ver todos os artigos
        </Link>
        <a
          href="#newsletter"
          className="px-6 py-3 border border-[#4b4950] text-white font-semibold rounded-lg hover:border-[#677ce0] transition"
        >
          Receber novidades
        </a>
      </div>
    </section>
  );
};
