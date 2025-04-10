import Player from "../components/Player";
import cambodia from "../assets/img/cambodia.png";
import france from "../assets/img/france.png";
import { useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <main className="main-bg">
      {/* <div className="music-fake">
        <div className={"music-info play"}>
          <div className="cover">
            <img src={cambodia} alt="album-cover" />
          </div>
        </div>
      </div> */}

      <Player
        index={index}
        setIndex={setIndex}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />

      {/* <div className="music-fake">
        <div className="music-info play">
          <div className="cover">
            <img src={france} alt="album-cover" />
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Home;
