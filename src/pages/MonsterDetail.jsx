import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MonsterDrop from "../Components/Monster/MonsterDrop";
import MonsterInfo from "../Components/Monster/MonsterInfo";
import MonsterSpawn from "../Components/Monster/MonsterSpawn";

const MonsterDetail = () => {
  let { monsterId } = useParams();
  let monster = useSelector((state) => {
    return state.monster;
  });

  let found = monster.find(function (x) {
    return x.id === parseInt(monsterId);
  });
  return (
    <div className="bg-container">
      <MonsterInfo found={found} />
      <MonsterSpawn found={found} />
      <MonsterDrop found={found} />
    </div>
  );
};

export default MonsterDetail;
