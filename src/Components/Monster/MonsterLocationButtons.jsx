import React from "react";

import { useDispatch } from "react-redux";
import { elnathFilter, victoriaFilter } from "../../store";

const MonsterLocationButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="btn-container">
      <p>지역별 필터</p>
      <button className="btn" onClick={() => dispatch(victoriaFilter())}>
        빅토리아 아일랜드
      </button>
      <button className="btn" onClick={() => dispatch(elnathFilter())}>
        엘나스 산맥
      </button>
    </div>
  );
};

export default MonsterLocationButtons;
