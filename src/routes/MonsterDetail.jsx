import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MonsterDetail = () => {
  let { monsterId } = useParams();
  let monster = useSelector((state) => {
    return state.monster;
  });

  let found = monster.find(function (x) {
    return x.id === parseInt(monsterId);
  });
  return (
    <>
      <h4>{found.name}</h4>
      <img src={found.move} alt={found.name} />
    </>
  );
};

export default MonsterDetail;
