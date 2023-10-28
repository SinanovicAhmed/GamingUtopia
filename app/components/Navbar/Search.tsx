import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex w-full max-w-[400px] h-[30px] mx-5">
      <input
        className="w-full p-1 bg-transparent border-[1px] text-sm md:text-md border-slate-500 text-white rounded-tl-lg rounded-bl-lg"
        type="text"
        placeholder="Search games here"
      />
      <button className="px-2 py-1 h-full bg-secondary-color text-white rounded-tr-lg rounded-br-lg hover:brightness-75">
        <AiOutlineSearch size={26} style={{ color: "white" }} className="block md:hidden" />
        <span className="hidden md:block text-sm md:text-md">Search</span>
      </button>
    </div>
  );
};

export default Search;
