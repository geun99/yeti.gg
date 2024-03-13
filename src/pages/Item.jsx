import "../App.css";
import { useSelector } from "react-redux";
import ItemCard from "../Components/Item/ItemCard";
import ItemTypeButtons from "../Components/Item/ItemTypeButtons";
import ItemClassButtons from "../Components/Item/ItemClassButtons";

const Item = () => {
  let item = useSelector((state) => {
    return state.item;
  });

  return (
    <div className="item">
      <div className="container">
        <h1>아이템 목록({item.length}종)</h1>
        <></>
        <div className="btn-container">
          <ItemTypeButtons />
          <ItemClassButtons />
        </div>
        <div className="main">
          {item.map((tem, idx) => {
            return <ItemCard tem={tem} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Item;
