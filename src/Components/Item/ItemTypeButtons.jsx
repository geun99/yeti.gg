import React from "react";
import { useDispatch } from "react-redux";
import {
  accFilter,
  armorFilter,
  craftFilter,
  elixirFilter,
  othersFilter,
  scrollFilter,
  throwsFilter,
  weaponFilter,
} from "../../store";

const ItemTypeButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="btn-itemtype">
      <p>종류별 분류</p>
      <button className="btn" onClick={() => dispatch(weaponFilter())}>
        무기
      </button>
      <button className="btn" onClick={() => dispatch(armorFilter())}>
        방어구
      </button>
      <button className="btn" onClick={() => dispatch(othersFilter())}>
        기타
      </button>
      <button className="btn" onClick={() => dispatch(scrollFilter())}>
        주문서
      </button>
      <button className="btn" onClick={() => dispatch(throwsFilter())}>
        표창/화살
      </button>
      <button className="btn" onClick={() => dispatch(elixirFilter())}>
        포션
      </button>
      <button className="btn" onClick={() => dispatch(accFilter())}>
        장신구
      </button>
      <button className="btn" onClick={() => dispatch(craftFilter())}>
        제작
      </button>
    </div>
  );
};

export default ItemTypeButtons;
