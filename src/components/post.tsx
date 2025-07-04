import * as React from "react";
import { images } from "../constant/icon";
import { Person } from "@mui/icons-material"
import { useState } from "react";

type props = {
  data: string;
  title: string;
  description: string;
};

export const Post = ({ data, title, description }: props) => {
  const [isEnable, setIsEnable] = useState(false);

  const favorite = () => {
    setIsEnable((prev) => !prev);
  };

  return (
    <div className="w-[95%]">
      <div
        className={`transition bg-[#17171a] rounded-[10px] p-6 ${isEnable ? "border border-blue-500" : "border border-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-800 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <Person />
              </div>
              <div>
                <p className="text-white text-sm">Nome do usuário • {data}</p>
                <p className="text-gray-500 text-xs">@nickname</p>
              </div>
            </div>
          </div>

          {/* Ícones de favorito (somente um visível por vez) */}
          <img
            onClick={favorite}
            src={images.favorite}
            alt="favorite"
            className={`w-5 cursor-pointer ${isEnable ? "hidden" : "block"}`}
          />
          <img
            onClick={favorite}
            src={images.favoriteFill}
            alt="favorite fill"
            className={`w-5 cursor-pointer ${isEnable ? "block" : "hidden"}`}
          />
        </div>

        <h2 className="text-white text-lg mt-4">{title}</h2>
        <p className="text-[#afabb6] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
