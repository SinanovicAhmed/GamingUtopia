import React from "react";
import { BsBookmark } from "react-icons/bs";

const NavbarActions = () => {
  return (
    <div className="flex gap-6 items-center">
      <button
        className="py-1 px-3 text-secondary-color bg-transparent border-2 border-secondary-color rounded-md
                   hover:bg-secondary-color hover:text-white transition-all text-sm md:text-md"
      >
        Login
      </button>
    </div>
  );
};

export default NavbarActions;
