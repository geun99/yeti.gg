import React from "react";

const ItemInfo = ({ found }) => {
  return (
    <div className="inform">
      <img src={found.img} alt={found.name} className="detail-item-img" />
      <h1>{found.name}</h1>
      <div className="feature">
        <div className="left">
          <h2>기본 정보</h2>
          <div className="item-info">
            {found.inform.map((a, i) => {
              return <p key={i}>{a}</p>;
            })}
          </div>
        </div>
        <div className="right">
          <h2>세부 정보</h2>
          {found.detail.map((a, i) => {
            return <p key={i}>{a}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
