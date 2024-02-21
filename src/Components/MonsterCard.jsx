const MonsterCard = ({ mob, idx }) => {
  return (
    <div className="card" key={idx}>
      <img src={mob[idx].img} alt={mob[idx].name} />
      <h2>{mob[idx].name}</h2>
      <div className="inform">
        <p>
          <span className="level">LEVEL</span> {mob[idx].level}
        </p>
        <p>
          <span className="hp">HP</span> {mob[idx].hp}
        </p>
        <p>
          <span className="exp">EXP</span> {mob[idx].exp}
        </p>
      </div>
    </div>
  );
};

export default MonsterCard;
