import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link } from "react-router";

const AccountEntry = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex gap-2">
      <Link to="signup">
        <button className="w-[90px] h-[45px] text-white text-base border border-[#4b4950] rounded-[10px]">
          sign up
        </button>
      </Link>
      <button
        onClick={handleClickOpen}
        className="w-[90px] h-[45px] text-white text-base border border-[#4b4950] rounded-[10px]"
      >
        sign in
      </button>

      <Dialog
        PaperProps={{
          sx: {
            background: "transparent",
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <div className="w-[350px] h-[550px] p-8 bg-[#121214] flex flex-col justify-center gap-4 rounded-[20px]">
          <p className="text-white text-lg font-bold">Bem-vindo de volta</p>
          <h1 className="text-white text-xl font-bold">Faça login na sua conta</h1>
          <p className="text-white font-bold">Email</p>
          <input
            type="text"
            placeholder="insira seu email"
            className="w-full h-[45px] mb-1 rounded-[10px] px-5 text-white bg-[#252529] border border-[#4b4950]"
          />
          <p className="text-white font-bold">Senha</p>
          <input
            type="password"
            placeholder="insira sua senha"
            className="w-full h-[45px] mb-1 rounded-[10px] px-5 text-white bg-[#252529] border border-[#4b4950]"
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <input type="checkbox" />
              <p className="text-white font-bold text-sm">Lembre de mim</p>
            </div>
            <a href="#" className="text-[#677ce0] font-bold text-sm cursor-pointer">Esqueceu sua senha?</a>
          </div>

          <button className="p-2 text-white font-bold text-base bg-[#677ce8] rounded-[10px]">
            Entrar na conta
          </button>
          <button className="p-2 text-[#677ce8] bg-white font-bold text-base flex items-center justify-center gap-2 rounded-[10px]">
            <Google />
            Faça login com Google
          </button>

          <p className="text-white text-sm">
            Não tem uma conta?{" "}
            <a href="#" className="text-[#677ce0] font-bold">Cadastre-se</a>
          </p>
        </div>
      </Dialog>
    </div>
  );
};

const AccountLogged = () => {
  return (
    <div className="flex items-center gap-2.5">
      <AccountCircleIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />
      <div className="text-white w-[150px]">
        <p className="text-base font-bold">nome do usuário</p>
      </div>
    </div>
  );
};

export const Header = () => {
  const [IsLogged, setIsLogged] = useState(false);

  return (
    <div className="flex justify-between items-center bg-[#202024] px-10 py-5">
      <div className="flex">
        <h1 className="text-[#677CE0] font-bold text-xl">Code</h1>
        <h1 className="text-white font-bold text-xl ml-1">Learner</h1>
      </div>

      <div className="flex items-center gap-2 w-[600px]">
        <input
          id="input"
          placeholder="pesquisar no blog"
          className="flex-grow p-2 rounded-md bg-[#252529] border border-[#4b4950] text-white"
        />
        <div className="h-[30px] w-px bg-[#4b4950]" />
        <div>{IsLogged ? <AccountLogged /> : <AccountEntry />}</div>
      </div>
    </div>
  );
};