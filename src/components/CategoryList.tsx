import React from "react";
import { Link } from "react-router";
import { categories } from "../data/categories";

export const CategoryList = () => {
  return (
    <section className="px-10 py-10 border-b border-[#252529]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <p className="text-white font-bold text-lg">Explorar por categoria</p>
          <Link
            to="/blog"
            className="text-[#677ce0] text-base font-bold hover:underline"
          >
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="bg-[#17171a] border border-[#252529] rounded-xl p-4 flex flex-col gap-1 hover:border-[#677ce050] transition group hover:scale-102 ease-in-out"
            >
              <span
                className="text-sm font-bold group-hover:opacity-90 transition"
                style={{ color: cat.color }}
              >
                {cat.name}
              </span>
              <span className="text-[#afabb6] text-xs leading-snug">
                {cat.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
