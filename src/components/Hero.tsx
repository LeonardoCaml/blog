import React from "react";
import { Link } from "react-router";

export const Hero = () => {
  return (
    <section className="px-10 py-16 flex flex-col items-center text-center gap-6 border-b border-[#252529]">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#677ce0] bg-[#677ce01a] px-3 py-1 rounded-full">
        Aprendizado prático para devs
      </span>

      <h1 className="text-white font-bold text-4xl max-w-2xl leading-tight">
        Aprenda programação com{" "}
        <span className="text-[#677ce0]">conteúdo direto ao ponto</span>
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
