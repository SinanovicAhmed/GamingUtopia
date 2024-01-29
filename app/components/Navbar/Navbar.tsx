import React from "react";
import Image from "next/image";
import logo from "../../../public/gaming_utopia_logo.png";
import logonotext from "../../../public/logo.png";
import Search from "./Search";
import NavbarActions from "./NavbarActions";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-50 flex justify-between items-center sticky top-0 w-full py-2 bg-primary-color px-2 sm:px-10">
      <Link href={"/"}>
        <Image
          className="hidden md:block"
          src={logo}
          width={200}
          style={{ objectFit: "cover" }}
          alt="gaming utopia logo"
        />
      </Link>
      <Link href={"/"}>
        <Image
          className="block md:hidden"
          src={logonotext}
          width={50}
          style={{ objectFit: "cover" }}
          alt="gaming utopia logo"
        />
      </Link>

      <Search />
      <NavbarActions />
    </nav>
  );
};

export default Navbar;
