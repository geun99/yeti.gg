import React from "react";
import { useDispatch } from "react-redux";
import {
  archerFilter,
  communalFilter,
  magicianFilter,
  rogueFilter,
  warriorFilter,
} from "../../store/itemSlice";

const ItemClassButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="btn-itemjobs">
      <p>직업별 장비 분류</p>
      <button className="btn" onClick={() => dispatch(warriorFilter())}>
        전사
      </button>
      <button className="btn" onClick={() => dispatch(archerFilter())}>
        궁수
      </button>
      <button className="btn" onClick={() => dispatch(rogueFilter())}>
        도적
      </button>
      <button className="btn" onClick={() => dispatch(magicianFilter())}>
        마법사
      </button>
      <button className="btn" onClick={() => dispatch(communalFilter())}>
        공용
      </button>
    </div>
  );
};

export default ItemClassButtons;
