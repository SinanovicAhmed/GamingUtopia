"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PaginationNav = ({
  next,
  prev,
  page,
  param,
}: {
  next: boolean;
  prev: boolean;
  page: number;
  param: string;
}) => {
  const router = useRouter();
  const goPrev = () => {
    if (prev) {
      router.push(`http://localhost:3000/search?page=${page - 1}&search=${param}`);
    }
  };
  const goNext = () => {
    if (next) router.push(`http://localhost:3000/search?page=${page + 1}&search=${param}`);
  };
  return (
    <div className="w-full flex justify-center gap-4 text-white">
      <button className="disabled:text-gray-600 font-extrabold" onClick={goPrev} disabled={!prev}>
        {"<<"}
      </button>
      <p>Page: {page}</p>
      <button className="disabled:text-gray-600 font-extrabold" onClick={goNext} disabled={!next}>
        {">>"}
      </button>
    </div>
  );
};

export default PaginationNav;
