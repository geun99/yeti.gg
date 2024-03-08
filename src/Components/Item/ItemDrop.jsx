import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ItemDrop = ({ found }) => {
  let monster = useSelector((state) => {
    return state.monster;
  });

  if (found.drop.length < 5) {
    return (
      <div className="drop">
        <h2>드랍</h2>
        <div className="detail-drop">
          {found.drop.map((itemName, index) => {
            let monsterFound = monster.find((item) => item.name === itemName);

            if (monsterFound) {
              return (
                <Link
                  to={`/monster/${monsterFound.id}`}
                  className="link"
                  key={index}
                >
                  <div className="item-box">
                    <img src={monsterFound.img} alt={itemName} />
                    <p>{itemName}</p>
                  </div>
                </Link>
              );
            } else {
              return (
                <div key={index}>
                  <p>{itemName}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="drop">
      <h2>드랍</h2>
      <div className="detail-drop grid">
        {found.drop.map((itemName, index) => {
          let monsterFound = monster.find((item) => item.name === itemName);

          if (monsterFound) {
            return (
              <Link
                to={`/monster/${monsterFound.id}`}
                className="link"
                key={index}
              >
                <div className="item-box">
                  <img src={monsterFound.img} alt={itemName} />
                  <p>{itemName}</p>
                </div>
              </Link>
            );
          } else {
            return (
              <div key={index}>
                <p>{itemName}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ItemDrop;
