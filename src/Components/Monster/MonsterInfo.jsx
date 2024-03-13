import React from "react";
import { formatNumber } from "../../util/format";

const MonsterInfro = ({ found }) => {
  return (
    <div className="inform">
      <img src={found?.move} alt={found?.name} className="detail-item-img" />
      <h1>{found.name}</h1>
      <div className="feature">
        <div className="left">
          <h2>능력치</h2>
          <p className="detail-info level">Level {formatNumber(found.level)}</p>
          <p className="detail-info exp">Exp {formatNumber(found.exp)}</p>
          <p className="detail-info hp">HP {formatNumber(found.hp)}</p>
          <p className="detail-info mp">MP {formatNumber(found.mp)}</p>
        </div>

        <div className="right">
          <h2>상세 정보</h2>
          {found.feature.map((a) => {
            return <p>{a}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MonsterInfro;
