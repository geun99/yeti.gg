import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  accFilter,
  archerFilter,
  armorFilter,
  communalFilter,
  craftFilter,
  elixirFilter,
  magicianFilter,
  othersFilter,
  rogueFilter,
  scrollFilter,
  throwsFilter,
  warriorFilter,
  weaponFilter,
} from "../store";
import ItemCard from "../Components/ItemCard";

const Item = () => {
  const dispatch = useDispatch();
  let item = useSelector((state) => {
    return state;
  });
  return (
    <div className="item">
      <div className="container">
        <h1>아이템 목록({item.item.length}종)</h1>
        <></>
        <div className="btn-container">
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
        </div>
        <div className="main">
          {item.item.map((tem, idx) => {
            return <ItemCard tem={tem} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Item;
