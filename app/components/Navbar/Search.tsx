"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [param, setParam] = useState("");

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`http://localhost:3000/search?page=1&search=${param}`);
  };

  return (
    <form onSubmit={submitSearch} className="margin-auto flex w-full max-w-[400px] h-[30px] mx-5">
      <input
        onChange={(e) => setParam(e.target.value)}
        className="w-full p-1 bg-transparent border-[1px] text-sm md:text-md border-slate-500 text-white rounded-tl-lg rounded-bl-lg"
        type="text"
        placeholder="Search games here"
      />
      <button
        type="submit"
        className="px-2 py-1 h-full bg-secondary-color text-white rounded-tr-lg rounded-br-lg hover:brightness-75"
      >
        <AiOutlineSearch size={26} style={{ color: "white" }} className="block md:hidden" />
        <span className="hidden md:block text-sm md:text-md">Search</span>
      </button>
    </form>
  );
};

export default Search;
