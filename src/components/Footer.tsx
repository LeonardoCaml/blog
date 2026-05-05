import React from "react";
import { Link } from "react-router";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const links = {
  conteudo: [
    { label: "Blog", to: "/blog" },
    { label: "Frontend", to: "/category/frontend" },
    { label: "React", to: "/category/react" },
    { label: "JavaScript", to: "/category/javascript" },
    { label: "TypeScript", to: "/category/typescript" },
    { label: "Backend", to: "/category/backend" },
  ],
  conta: [
    { label: "Entrar", to: "/login" },
    { label: "Criar conta", to: "/signup" },
  ],
  legal: [
    { label: "Termos de uso", to: "#" },
    { label: "Política de privacidade", to: "#" },
  ],
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <TwitterIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <InstagramIcon fontSize="small" />,
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#202024] border-t border-[#252529] px-10 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Topo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <Link to="/">
              <h2 className="text-[#677CE0] font-bold text-lg">
                Code<span className="text-white">Learner</span>
              </h2>
            </Link>
            <p className="text-[#afabb6] text-sm leading-relaxed">
              Artigos, guias e roadmaps para quem quer evoluir como
              desenvolvedor.
            </p>
            <div className="flex gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#252529] border border-[#4b4950] text-[#afabb6] hover:text-white hover:border-[#677ce0] transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm font-semibold">Conteúdo</p>
            {links.conteudo.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[#afabb6] text-sm hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Conta */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm font-semibold">Conta</p>
            {links.conta.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[#afabb6] text-sm hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-[#2e2e33]">
              <p className="text-white text-sm font-semibold mb-3">Legal</p>
              {links.legal.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-[#afabb6] text-sm hover:text-white transition block mb-3"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter mini */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm font-semibold">Newsletter</p>
            <p className="text-[#afabb6] text-sm leading-relaxed">
              Receba os melhores artigos direto no seu e-mail.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="h-10 rounded-lg px-3 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
              />
              <button className="h-10 rounded-lg bg-[#677ce8] hover:bg-[#5a6dd4] text-white text-sm font-semibold transition">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-6 border-t border-[#252529]">
          <p className="text-[#6b6870] text-xs">
            © {year} CodeLearner. Todos os direitos reservados.
          </p>
          <p className="text-[#6b6870] text-xs">
            Feito com ♥ para a comunidade dev
          </p>
        </div>
      </div>
    </footer>
  );
};
