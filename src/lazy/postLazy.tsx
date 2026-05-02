import React from "react";

export default function PostSkeleton() {
  return (
    <div className="bg-[#17171a] rounded-xl p-6 border border-[#252529] flex flex-col gap-3 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="h-5 w-16 rounded-md bg-[#252529]" />
        <div className="h-3 w-24 rounded bg-[#252529]" />
      </div>
      <div className="h-5 w-full rounded bg-[#252529]" />
      <div className="h-5 w-3/4 rounded bg-[#252529]" />
      <div className="h-4 w-full rounded bg-[#252529] mt-1" />
      <div className="h-4 w-5/6 rounded bg-[#252529]" />
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#252529]" />
          <div className="h-3 w-20 rounded bg-[#252529]" />
        </div>
        <div className="h-3 w-10 rounded bg-[#252529]" />
      </div>
    </div>
  );
}
