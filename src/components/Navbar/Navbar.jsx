import "./Navbar.css";

const Navbar = ({ username }) => {
  return (
    <div className="navbar">
      <div className="navbar__btn">
        <img src="./icons/icon_back.png" alt="Go Back" />
      </div>

      <h1>{username}</h1>

      <div className="navbar__btn">
        <img src="./icons/icon_home.png" alt="Home" />
      </div>
    </div>
  );
};

export default Navbar;
