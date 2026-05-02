import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {
  Google,
  GitHub,
  FacebookRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router";

const LoginModal = ({
  onClose,
  onSwitchToSignup,
}: {
  onClose: () => void;
  onSwitchToSignup: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm flex flex-col gap-5 bg-[#202024] rounded-2xl p-7 border border-[#2e2e33] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-white font-bold text-xl">Bem-vindo de volta</h2>
            <p className="text-[#afabb6] text-sm mt-0.5">
              Não tem conta?{" "}
              <button
                onClick={onSwitchToSignup}
                className="text-[#677ce0] font-semibold hover:underline"
              >
                Criar conta
              </button>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#6b6870] hover:text-white transition mt-0.5"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Social */}
        <div className="flex gap-2">
          <button className="flex-1 h-9 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-1.5 text-white text-xs font-medium hover:bg-[#2e2e33] transition">
            <Google sx={{ fontSize: 16 }} /> Google
          </button>
          <button className="flex-1 h-9 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-1.5 text-white text-xs font-medium hover:bg-[#2e2e33] transition">
            <GitHub sx={{ fontSize: 16 }} /> GitHub
          </button>
          <button className="flex-1 h-9 rounded-lg bg-[#252529] border border-[#4b4950] flex items-center justify-center gap-1.5 text-white text-xs font-medium hover:bg-[#2e2e33] transition">
            <FacebookRounded sx={{ fontSize: 16 }} /> Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#4b4950]" />
          <span className="text-[#afabb6] text-xs">ou com email</span>
          <div className="flex-1 h-px bg-[#4b4950]" />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-white text-sm font-semibold">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full h-11 rounded-lg px-4 text-white text-sm bg-[#252529] border border-[#4b4950] focus:border-[#677ce0] focus:outline-none transition placeholder-[#6b6870]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
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
            <label
              htmlFor="remember"
              className="text-[#afabb6] text-sm cursor-pointer"
            >
              Lembrar de mim
            </label>
          </div>
        </div>

        <button className="w-full h-11 rounded-lg bg-[#677ce8] hover:bg-[#5a6dd4] text-white font-bold text-sm transition">
          Entrar
        </button>
      </div>
    </div>
  );
};

const AccountEntry = () => {
  const [modal, setModal] = useState<"login" | "none">("none");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-2">
        <Link to="/signup">
          <button className="h-9 px-4 text-white text-sm font-medium border border-[#4b4950] rounded-lg hover:bg-[#252529] transition">
            Criar conta
          </button>
        </Link>
        <button
          onClick={() => setModal("login")}
          className="h-9 px-4 text-white text-sm font-medium bg-[#677ce8] hover:bg-[#5a6dd4] rounded-lg transition"
        >
          Entrar
        </button>
      </div>

      {modal === "login" && (
        <LoginModal
          onClose={() => setModal("none")}
          onSwitchToSignup={() => {
            setModal("none");
            navigate("/signup");
          }}
        />
      )}
    </>
  );
};

const AccountLogged = () => {
  return (
    <div className="flex items-center gap-2.5">
      <AccountCircleIcon
        sx={{ color: "rgb(255, 255, 255)", fontSize: "2rem" }}
      />
    </div>
  );
};

export const Header = () => {
  const [isLogged] = useState(true);

  return (
    <header className="flex justify-between items-center bg-[#202024] px-8 md:px-24 py-4 border-b border-[#252529]">
      <Link to="/">
        <h1 className="text-[#677CE0] font-bold text-lg">
          Code<span className="text-white">Learner</span>
        </h1>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          to="/blog"
          className="text-[#afabb6] text-sm font-medium hover:text-white transition hidden md:block"
        >
          Blog
        </Link>

        <div className="h-5 w-px bg-[#4b4950] hidden md:block" />

        {isLogged ? <AccountLogged /> : <AccountEntry />}
      </div>
    </header>
  );
};
