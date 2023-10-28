import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#121212] p-5">
      <span className="flex gap-2 text-white text-xs">
        <h2>Powered by RawrAPI: </h2>
        <a className="hover:underline hover:text-blue-700" target="_blank" href="https://rawg.io/apidocs">
          https://rawg.io/apidocs
        </a>
      </span>
    </div>
  );
};

export default Footer;
