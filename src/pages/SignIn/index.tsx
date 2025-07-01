import React from "react";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center bg-[#17171a] min-h-screen h-full p-5">
      <div className="flex items-center justify-center w-[60%] p-6 gap-10 bg-[#202024] rounded-2xl">
        <div>
          <label className="w-full text-white font-bold my-2">Nome</label>
          <input
            type="text"
            placeholder="insira seu nome"
            className="w-full h-11 rounded-[10px] px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
          />

          <label className="w-full text-white font-bold my-2">Email</label>
          <input
            type="text"
            placeholder="insira seu email"
            className="w-full h-11 rounded-[10px] px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
          />
          {/* <div className="w-full flex justify-between my-2">
            <p className="text-white font-bold text-sm">
              Já possui uma conta?{" "}
              <a className="text-[#677ce0] font-bold cursor-pointer">Clique aqui</a>
            </p>
          </div> */}
        </div>

        <div className="h-50 w-px bg-[#4b4950]" />
        <div>
          <label className="w-full text-white font-bold my-2">Senha</label>
          <input
            type="text"
            placeholder="insira sua senha"
            className="w-full h-11 rounded-[10px] px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
          />

          <label className="w-full text-white font-bold my-2">Confirmar senha</label>
          <input
            type="text"
            placeholder="insira sua senha"
            className="w-full h-11 rounded-[10px] px-5 text-white text-base bg-[#252529] border-1 border-[#4b4950] mb-2"
          />
        </div>
      </div>
    </div>
  );
}
