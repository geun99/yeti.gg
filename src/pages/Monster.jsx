import "../App.css";
import { useSelector } from "react-redux";
import MonsterCard from "../Components/Monster/MonsterCard";
import MonsterLocationButtons from "../Components/Monster/MonsterLocationButtons";
import MonsterSortButtons from "../Components/Monster/MonsterSortButtons";

const Monster = () => {
  let monster = useSelector((state) => {
    return state.monster;
  });
  return (
    <div className="monster">
      <div className="container">
        <h1>몬스터 목록({monster.length}종)</h1>
        <></>
        <div className="btn-container">
          <MonsterSortButtons />
          <MonsterLocationButtons />
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
