import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ItemInfo from "../Components/Item/ItemInfo";
import ItemDrop from "../Components/Item/ItemDrop";

const ItemDetail = () => {
  let { itemId } = useParams();
  let item = useSelector((state) => {
    return state.item;
  });

  let found = item.find(function (x) {
    return x.id === parseInt(itemId);
  });

  return (
    <div className="bg-container">
      <ItemInfo found={found} />
      <ItemDrop found={found} />
    </div>
  );
};

export default ItemDetail;
