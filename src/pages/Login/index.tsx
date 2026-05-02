import React, { useState } from "react";
import {
  Google,
  GitHub,
  FacebookRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link } from "react-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#17171a]">
      {/* Painel esquerdo — decorativo */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-[#202024] p-12 border-r border-[#2e2e33]">
        <Link to="/">
          <h1 className="text-[#677CE0] font-bold text-lg">
            Code<span className="text-white">Learner</span>
          </h1>
        </Link>

        <div>
          <blockquote className="text-white text-2xl font-bold leading-snug mb-4">
            "O aprendizado contínuo é o mínimo exigido para o sucesso em qualquer campo."
          </blockquote>
          <p className="text-[#afabb6] text-sm">— Brian Tracy</p>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { label: "Artigos publicados", value: "128+" },
            { label: "Categorias", value: "7" },
            { label: "Leitores ativos", value: "4.2k" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-between border-t border-[#2e2e33] pt-3">
              <span className="text-[#afabb6] text-sm">{stat.label}</span>
              <span className="text-white font-bold text-sm">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Painel direito — formulário */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm flex flex-col gap-6">
          {/* Logo mobile */}
          <div className="lg:hidden text-center">
            <Link to="/">
              <h1 className="text-[#677CE0] font-bold text-lg inline-block">
                Code<span className="text-white">Learner</span>
              </h1>
            </Link>
          </div>

          {/* Header */}
          <div>
            <h2 className="text-white font-bold text-2xl">Acesse sua conta</h2>
            <p className="text-[#afabb6] text-sm mt-1">
              Não tem uma conta?{" "}
              <Link to="/signup" className="text-[#677ce0] font-semibold hover:underline">
                Criar conta grátis
              </Link>
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-2">
            <button className="flex-1 h-10 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-1.5 text-white text-xs font-medium hover:bg-[#2e2e33] transition">
              <Google sx={{ fontSize: 16 }} />
              Google
            </button>
            <button className="flex-1 h-10 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-1.5 text-white text-xs font-medium hover:bg-[#2e2e33] transition">
              <GitHub sx={{ fontSize: 16 }} />
              GitHub
            </button>
            <button className="flex-1 h-10 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-1.5 text-white text-xs font-medium hover:bg-[#2e2e33] transition">
              <FacebookRounded sx={{ fontSize: 16 }} />
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#4b4950]" />
            <span className="text-[#afabb6] text-xs">ou continue com email</span>
            <div className="flex-1 h-px bg-[#4b4950]" />
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-sm font-semibold">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full h-11 rounded-lg px-4 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-semibold">Senha</label>
                <a className="text-[#677ce0] text-xs font-medium cursor-pointer hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  className="w-full h-11 rounded-lg px-4 pr-11 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6870] hover:text-white transition"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: 18 }} />
                  ) : (
                    <Visibility sx={{ fontSize: 18 }} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-[#677ce0] cursor-pointer"
              />
              <label htmlFor="remember" className="text-[#afabb6] text-sm cursor-pointer">
                Lembrar de mim por 30 dias
              </label>
            </div>
          </div>

          <button className="w-full h-11 rounded-lg bg-[#677ce8] hover:bg-[#5a6dd4] text-white font-bold text-sm transition">
            Entrar
          </button>

          <p className="text-[#6b6870] text-xs text-center">
            Ao continuar você concorda com os{" "}
            <a className="text-[#677ce0] cursor-pointer hover:underline">Termos de uso</a>
            {" "}e a{" "}
            <a className="text-[#677ce0] cursor-pointer hover:underline">Política de privacidade</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
