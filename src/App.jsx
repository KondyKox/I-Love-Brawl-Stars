import { useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import User from "./pages/User/User";
import Stats from "./pages/Stats/Stats";

function App() {
  const [id, setID] = useState("#PJJL99CRV");
  const [username, setUsername] = useState("interfaceingame");
  const [level, setLevel] = useState(5);
  const [xp, setXP] = useState(2);
  const [maxXP, setMaxXP] = useState(80);

  return (
    <>
      <Background />
      <Navbar username={username} />
      <User id={id} usename={username} level={level} xp={xp} maxXP={maxXP} />
      <Stats />
    </>
  );
}

export default App;
