import React from "react";

const MonsterSpawn = ({ found }) => {
  if (found.location.length < 4) {
    return (
      <div className="monster-spawn">
        <h2>스폰장소</h2>
        <div className="flex-location-container">
          {found.location.map((a, i) => {
            return (
              <div key={i}>
                <p className="location" key={i}>
                  {a}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="monster-spawn">
      <h2>스폰장소</h2>
      <div className="location-container grid">
        {found.location.map((a, i) => {
          return (
            <p className="location" key={i}>
              {a}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MonsterSpawn;
