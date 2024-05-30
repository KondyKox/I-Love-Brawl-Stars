import SettingsButton from "../../SettingsButton/SettingsButton";
import "./Avatar.css";

const Avatar = ({ id }) => {
  return (
    <div className="user__avatar">
      <SettingsButton />
      <img src="./icons/icon_challenge.png" alt="Avatar" />
      <span className="user_id">{id}</span>
    </div>
  );
};

export default Avatar;
