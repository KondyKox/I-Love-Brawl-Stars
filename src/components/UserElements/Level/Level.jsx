import "./Level.css";

const Level = ({ level, xp, maxXP }) => {
  return (
    <div className="user__level">
      <div className="level__wrapper">
        <img src="./icons/icon_star.png" alt="Level" />
        <span className="level">{level}</span>
      </div>
      <div className="level__wrapper">
        {/* <!-- <input type="range" max="80" value="2" /> --> */}
        <div className="progress">
          <div className="current__progress"></div>
          <span className="progress__text">
            <img src="./icons/icon_star.png" alt="" /> {`${xp}/${maxXP}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Level;
