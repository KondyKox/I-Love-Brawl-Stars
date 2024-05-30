import SettingsButton from "../../SettingsButton/SettingsButton";
import "./Username.css";

// Username field
const Username = ({ username }) => {
  return (
    <div className="user__username">
      <SettingsButton />
      <h2 className="username">{username}</h2>
    </div>
  );
};

export default Username;
