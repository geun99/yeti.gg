import React from "react";
import MonsterCard from "../Monster/MonsterCard";

const SearchMonster = ({ searchMonster }) => {
  if (searchMonster.length === 0) {
    return (
      <>
        <h1>검색한 몬스터가 존재하지 않습니다.</h1>
      </>
    );
  }
  return (
    <>
      <h1>검색 몬스터 목록({searchMonster.length}종)</h1>
      <div className="searchMonster">
        {searchMonster.map((a, idx) => {
          return <MonsterCard key={idx} idx={idx} mob={a} className="card" />;
        })}
      </div>
    </>
  );
};

export default SearchMonster;
