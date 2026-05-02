import React, { useState } from "react";
import {
  Google,
  GitHub,
  FacebookRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link } from "react-router";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center bg-[#17171a] min-h-screen p-5">
      <div className="w-full max-w-md flex flex-col gap-6 bg-[#202024] rounded-2xl p-8">
        {/* Header */}
        <div className="text-center">
          <Link
            to="/"
            className="text-[#677ce0] font-bold text-sm tracking-widest uppercase"
          >
            <h1 className="text-[#677CE0] font-bold text-md">
              Code<span className="text-white">Learner</span>
            </h1>
          </Link>
          <h1 className="text-white font-bold text-2xl mt-3">Crie sua conta</h1>
          <p className="text-[#afabb6] text-sm mt-1">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="text-[#677ce0] font-semibold cursor-pointer hover:underline"
            >
              Entrar
            </Link>
          </p>
        </div>

        {/* Social buttons */}
        <div className="flex gap-3">
          <button className="flex-1 h-10 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-2 text-white text-sm font-medium hover:bg-[#2e2e33] transition">
            <Google fontSize="small" />
            Google
          </button>
          <button className="flex-1 h-10 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-2 text-white text-sm font-medium hover:bg-[#2e2e33] transition">
            <GitHub fontSize="small" />
            GitHub
          </button>
          <button className="flex-1 h-10 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-2 text-white text-sm font-medium hover:bg-[#2e2e33] transition">
            <FacebookRounded fontSize="small" />
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
            <label className="text-white text-sm font-semibold">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full h-11 rounded-lg px-4 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-white text-sm font-semibold">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full h-11 rounded-lg px-4 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-white text-sm font-semibold">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mínimo 8 caracteres"
                className="w-full h-11 rounded-lg px-4 pr-11 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6870] hover:text-white transition"
              >
                {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-white text-sm font-semibold">
              Confirmar senha
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Repita a senha"
                className="w-full h-11 rounded-lg px-4 pr-11 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6870] hover:text-white transition"
              >
                {showConfirm ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button className="w-full h-11 rounded-lg bg-[#677ce8] hover:bg-[#5a6dd4] text-white font-bold text-sm transition">
          Criar conta
        </button>

        <p className="text-[#6b6870] text-xs text-center">
          Ao criar uma conta você concorda com os{" "}
          <a className="text-[#677ce0] cursor-pointer hover:underline">
            Termos de uso
          </a>{" "}
          e a{" "}
          <a className="text-[#677ce0] cursor-pointer hover:underline">
            Política de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
