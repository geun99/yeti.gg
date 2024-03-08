import { useNavigate } from "react-router";

const ItemCard = ({ tem, idx }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      key={idx}
      onClick={() => {
        navigate(`/item/${tem.id}`);
      }}
    >
      <img
        src={tem.img}
        alt={tem.name}
        className="item-card-img"
        loading="lazy"
      />
      <h2>{tem.name}</h2>
      <p>{tem.detail[tem.detail.length - 1]}</p>
    </div>
  );
};

export default ItemCard;
