import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SearchMonster from "../Components/Search/SearchMonster";
import SearchItem from "../Components/Search/SearchItem";

const SearchResult = () => {
  let { search } = useParams();
  let item = useSelector((state) => {
    return state;
  });
  const searchItem = item.item.filter((item) => item.name.includes(search));
  const searchMonster = item.monster.filter((monster) =>
    monster.name.includes(search)
  );
  if (searchItem.length === 0 && searchMonster.length === 0) {
    return (
      <div className="bg-container">
        <div className="searchResult">
          <h1>검색 결과가 없습니다.</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="searchResult">
      <SearchMonster searchMonster={searchMonster} />
      <SearchItem searchItem={searchItem} />
    </div>
  );
};

export default SearchResult;
