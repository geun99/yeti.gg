import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { elnathFilter, lvSort, nameSort, victoriaFilter } from "../store";
import MonsterCard from "../Components/MonsterCard";

const Monster = () => {
  const dispatch = useDispatch();
  let monster = useSelector((state) => {
    return state.monster;
  });
  return (
    <div className="monster">
      <div className="container">
        <h1>몬스터 목록({monster.length}종)</h1>
        <></>
        <div className="btn-container">
          <button className="btn" onClick={() => dispatch(nameSort())}>
            이름순 정렬
          </button>
          <button className="btn" onClick={() => dispatch(lvSort())}>
            레벨순 정렬
          </button>
          <button className="btn" onClick={() => dispatch(victoriaFilter())}>
            빅토리아 아일랜드
          </button>
          <button className="btn" onClick={() => dispatch(elnathFilter())}>
            엘나스 산맥
          </button>
        </div>
        <div className="main">
          {monster.map((a, idx) => {
            return <MonsterCard key={idx} idx={idx} mob={a} className="card" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Monster;
