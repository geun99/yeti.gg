import React from "react";
import { useDispatch } from "react-redux";
import { lvSort, nameSort } from "../../store";

const MonsterSortButtons = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>몬스터 정렬</p>
      <button className="btn" onClick={() => dispatch(nameSort())}>
        이름순 정렬
      </button>
      <button className="btn" onClick={() => dispatch(lvSort())}>
        레벨순 정렬
      </button>
    </>
  );
};

export default MonsterSortButtons;
