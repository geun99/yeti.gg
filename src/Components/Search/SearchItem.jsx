import React from "react";
import ItemCard from "../Item/ItemCard";

const SearchItem = ({ searchItem }) => {
  if (searchItem.length === 0) {
    return <div>검색한 아이템이 존재하지 않습니다.</div>;
  }
  return (
    <>
      <h1>검색 아이템 목록({searchItem.length}종)</h1>
      <div className="main">
        {searchItem.map((tem, idx) => {
          return <ItemCard tem={tem} idx={idx} key={idx} />;
        })}
      </div>
    </>
  );
};

export default SearchItem;
