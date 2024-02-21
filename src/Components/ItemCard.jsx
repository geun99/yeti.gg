const ItemCard = ({ tem, idx }) => {
  return (
    <div className="card" key={idx}>
      <img src={tem.img} alt={tem.name} className="item-card-img" />
      <h2>{tem.name}</h2>
      <p>{tem.detail[tem.detail.length - 1]}</p>
    </div>
  );
};

export default ItemCard;
