import React, { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="px-10 py-14 border-t border-[#252529]">
      <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
        <span className="text-[#677ce0] text-xs font-semibold uppercase tracking-widest">
          Newsletter
        </span>
        <h2 className="text-white font-bold text-2xl">
          Receba os melhores artigos na sua caixa de entrada
        </h2>
        <p className="text-[#afabb6] text-sm">
          Sem spam. Só conteúdo útil toda semana — artigos, guias e recursos
          selecionados para devs.
        </p>

        {submitted ? (
          <div className="bg-[#677ce01a] border border-[#677ce040] rounded-xl px-6 py-4 text-[#677ce0] font-semibold">
            Obrigado! Você será notificado em breve. 🎉
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-11 rounded-lg px-4 text-white bg-[#252529] border border-[#4b4950] focus:outline-none focus:border-[#677ce0] transition text-sm"
            />
            <button
              type="submit"
              className="px-5 h-11 bg-[#677ce0] text-white font-semibold rounded-lg hover:bg-[#5567c8] transition text-sm whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
