import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MonsterDrop = ({ found }) => {
  let item = useSelector((state) => {
    return state.item;
  });
  if (found.drop.length < 5) {
    return (
      <>
        <h2>드랍</h2>
        <div className="drop">
          <div className="detail-drop flex">
            {found.drop.map((itemName, index) => {
              let itemFound = item.find((item) => item.name === itemName);

              if (itemFound) {
                return (
                  <Link
                    to={`/item/${itemFound.id}`}
                    className="link"
                    key={index}
                  >
                    <div className="item-box">
                      <img src={itemFound.img} alt={itemName} />
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
      </>
    );
  }
  return (
    <>
      <h2>드랍</h2>
      <div className="drop">
        <div className="detail-drop grid">
          {found.drop.map((itemName, index) => {
            let itemFound = item.find((item) => item.name === itemName);

            if (itemFound) {
              return (
                <Link to={`/item/${itemFound.id}`} className="link" key={index}>
                  <div className="item-box">
                    <img src={itemFound.img} alt={itemName} />
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
    </>
  );
};

export default MonsterDrop;
