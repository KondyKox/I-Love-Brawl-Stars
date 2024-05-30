import Avatar from "../../components/UserElements/Avatar/Avatar";
import Level from "../../components/UserElements/Level/Level";
import Username from "../../components/UserElements/Username/Username";
import Settings from "../../components/UserElements/Settings/Settings";
import "./User.css";

const User = ({ id, usename, level, xp, maxXP }) => {
  return (
    <div className="user">
      <Avatar id={id} />

      {/* <!-- User info --> */}
      <div className="user-info">
        <Username username={usename} />
        <Level level={level} xp={xp} maxXP={maxXP} />
      </div>

      <Settings />
    </div>
  );
};

export default User;
