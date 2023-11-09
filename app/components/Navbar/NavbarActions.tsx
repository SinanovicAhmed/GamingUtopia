"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";

const NavbarActions = () => {
  const { data: session, status } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  if (session && session.user) {
    return (
      <div className="w-[70px] flex justify-end">
        <button
          onClick={() => setToggleDropdown((prevState) => !prevState)}
          className="relative w-8 h-8 rounded-full bg-white overflow-hidden"
        >
          <Image
            src={session.user.image!}
            fill
            sizes="(max-width: 768px) 20vw, 5vw"
            quality={20}
            style={{ objectFit: "contain" }}
            alt="user google image"
          />
        </button>
        {toggleDropdown && (
          <div className="absolute top-16 right-0 py-2 px-5 bg-primary-color ">
            <p className="border-b-2 border-slate-700 text-white">{session.user.name}</p>
            <button
              onClick={() => signOut()}
              className="w-full font-bold text-secondary-color py-2 hover:brightness-75"
            >
              Signout
            </button>
          </div>
        )}
      </div>
    );
  }
  if (status === "loading" && !session)
    return <p className="w-[70px] animate-pulse text-white">Loading...</p>;

  return (
    <button
      onClick={() => signIn()}
      className="w-[70px] py-1 px-3 text-secondary-color bg-transparent border-2 border-secondary-color rounded-md
                     hover:bg-secondary-color hover:text-white transition-all text-sm md:text-md"
    >
      Signin
    </button>
  );
};

export default NavbarActions;
