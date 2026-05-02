import React from "react";
import { Link } from "react-router";
import type { Post } from "../data/posts";

interface FeaturedPostProps {
  post: Post;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <section className="px-10 py-10 border-b border-[#252529]">
      <div className="container mx-auto">
        <p className="text-[#677ce0] text-base font-bold uppercase tracking-widest mb-6">
          Em destaque
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="bg-[#17171a] rounded-2xl p-8 flex flex-col gap-4 border border-[#252529] hover:border-[#677ce030] transition hover:scale-101 ease-in-out"
        >
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold px-2 py-1 rounded-md"
              style={{ background: "#677ce01a", color: "#677ce0" }}
            >
              {post.category}
            </span>
            <span className="text-[#4b4950] text-xs">•</span>
            <span className="text-[#afabb6] text-xs">
              {post.reading_time} de leitura
            </span>
            <span className="text-[#4b4950] text-xs">•</span>
            <span className="text-[#afabb6] text-xs">
              {new Date(post.published_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <Link to={`/blog/${post.slug}`}>
            <h2 className="text-white font-bold text-2xl leading-snug hover:text-[#677ce0] transition">
              {post.title}
            </h2>
          </Link>
          <p className="text-[#afabb6] text-base leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#677ce01a] flex items-center justify-center">
                <span className="text-[#677ce0] text-xs font-bold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <span className="text-[#afabb6] text-sm">{post.author}</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
