import { useState } from "react";
import Player from "../components/Player";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <main className="main-bg">
      <Player
        index={index}
        setIndex={setIndex}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
    </main>
  );
};

export default Home;
