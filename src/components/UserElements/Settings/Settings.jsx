import SettingsButton from "../../SettingsButton/SettingsButton";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="user-settings">
      <SettingsButton />
      <h2>
        NAME
        <br />
        COLOR
      </h2>
    </div>
  );
};

export default Settings;
