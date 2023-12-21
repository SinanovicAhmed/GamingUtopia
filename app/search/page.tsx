import React from "react";
import SearchedGamesContainer from "../components/Cards/SearchedGamesContainer";

const SearchPage = ({ searchParams }: { searchParams?: { [key: string]: string } }) => {
  return <SearchedGamesContainer page={Number(searchParams?.page!)} param={searchParams?.search!} />;
};

export default SearchPage;
