import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      <div className="top-bar"></div>
      <video autoPlay muted loop className="bg-video">
        <source src="/brawl_lobby_animated.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
