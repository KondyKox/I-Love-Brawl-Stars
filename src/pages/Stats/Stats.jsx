import "./Stats.css";
import statsData from "../../data/stats.json";

const Stats = () => {
  return (
    <div className="stats">
      {statsData.map((stat) => {
        return <Stat key={stat.id} stat={stat} />;
      })}
    </div>
  );
};

const Stat = ({ stat }) => {
  return (
    <div className="stat">
      <h3 className="stat__title">{stat.title}</h3>
      <div className="stat__wrapper">
        <img src={stat.img} alt={stat.title} />
        <span className="stat__value">{stat.value}</span>
      </div>
    </div>
  );
};

export default Stats;
