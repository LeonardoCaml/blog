import * as React from "react";
import { Link } from "react-router";
import { Visibility } from "@mui/icons-material";

type PostCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  reading_time: string;
  published_at: string;
  author: string;
};

export const Post = ({
  slug,
  title,
  excerpt,
  category,
  reading_time,
  published_at,
  author,
}: PostCardProps) => {
  const formattedDate = new Date(published_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      className="bg-[#17171a] rounded-xl p-6 border border-[#252529] hover:border-[#677ce030] transition flex flex-col gap-3 hover:scale-102 ease-in-out"
      to={`/blog/${slug}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#677ce01a] text-[#677ce0]">
          {category}
        </span>
        <span className="text-[#4b4950] text-xs">•</span>
        <span className="text-[#afabb6] text-xs">
          {reading_time} de leitura
        </span>
      </div>

      <Link to={`/blog/${slug}`}>
        <h2 className="text-white font-bold text-base leading-snug hover:text-[#677ce0] transition">
          {title}
        </h2>
      </Link>

      <p className="text-[#afabb6] text-sm leading-relaxed line-clamp-2">
        {excerpt}
      </p>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#677ce01a] flex items-center justify-center">
            <span className="text-[#677ce0] text-[10px] font-bold">
              {author.charAt(0)}
            </span>
          </div>
          <span className="text-[#afabb6] text-xs">{author}</span>
          <span className="text-[#4b4950] text-xs">•</span>
          <span className="text-[#afabb6] text-xs">{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};
