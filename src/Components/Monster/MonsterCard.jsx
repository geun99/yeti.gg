import { useNavigate } from "react-router";
import { formatNumber } from "../../util/format";

const MonsterCard = ({ mob, idx }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      key={idx}
      onClick={() => {
        navigate(`/monster/${mob.id}`);
      }}
    >
      <img src={mob.img} alt={mob.name} />
      <h2>{mob.name}</h2>
      <div className="inform">
        <p>
          <span className="level">LEVEL</span> {formatNumber(mob.level)}
        </p>
        <p>
          <span className="hp">HP</span> {formatNumber(mob.hp)}
        </p>
        <p>
          <span className="exp">EXP</span> {formatNumber(mob.exp)}
        </p>
      </div>
    </div>
  );
};

export default MonsterCard;
