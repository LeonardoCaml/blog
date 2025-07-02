import React from "react";
import { Google, GitHub, FacebookRounded } from "@mui/icons-material";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center bg-[#17171a] min-h-screen h-full p-5">
      <div className="w-[60%] p-6 gap-10 bg-[#202024] rounded-2xl">
        <h1 className="text-white font-bold text-xl text-center">Sing Up</h1>
        <div className="flex items-center gap-6">
          <div>
            <label className="w-full text-white font-bold my-2">Nome</label>
            <input
              type="text"
              placeholder="insira seu nome"
              className="w-xs h-11 rounded-lg px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
            />
            <label className="w-full text-white font-bold my-2">Email</label>
            <input
              type="text"
              placeholder="insira seu email"
              className="w-xs h-11 rounded-lg px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
            />
          </div>
          <div className="h-36 my-5 w-px bg-[#4b4950]" />
          <div>
            <label className="w-full text-white font-bold my-2">Senha</label>
            <input
              type="text"
              placeholder="insira sua senha"
              className="w-xs h-11 rounded-lg px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
            />
            <label className="w-full text-white font-bold my-2">Confirmar senha</label>
            <input
              type="text"
              placeholder="insira sua senha"
              className="w-xs h-11 rounded-lg px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-full flex justify-between my-2">
            <p className="text-white font-bold text-sm">
              Já possui uma conta?{" "}
              <a className="text-[#677ce0] font-bold cursor-pointer">Clique aqui</a>
            </p>
          </div>
          <div className="flex w-[650px] items-center justify-between">
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-[#4A484A] flex items-center justify-center">
                <Google className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#4A484A] flex items-center justify-center">
                <FacebookRounded className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#4A484A] flex items-center justify-center">
                <GitHub className="text-white" />
              </button>
            </div>
            <div>
              <button className="w-30 h-11 rounded-lg bg-[#677ce8] text-white font-bold text-base">Criar conta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
