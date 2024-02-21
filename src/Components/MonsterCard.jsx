import { useNavigate } from "react-router";

const MonsterCard = ({ mob, idx }) => {
  const navigate = useNavigate();

  console.log(mob);
  return (
    <div
      className="card"
      key={idx}
      onClick={() => {
        navigate(`/monster/${mob.id}`);
        console.log(mob);
      }}
    >
      <img src={mob.img} alt={mob.name} />
      <h2>{mob.name}</h2>
      <div className="inform">
        <p>
          <span className="level">LEVEL</span> {mob.level}
        </p>
        <p>
          <span className="hp">HP</span> {mob.hp}
        </p>
        <p>
          <span className="exp">EXP</span> {mob.exp}
        </p>
      </div>
    </div>
  );
};

export default MonsterCard;
