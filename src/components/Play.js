import React from "react";
import rock from "../assets/rock.jpg";
import paper from "../assets/paper.jpg";
import scissors from "../assets/scissors.jpg";

const imgStyle = {
  width: "250px",
  height: "250px",
};

export default function Play({ chooseRock, choosePaper, chooseScissors }) {
  return (
    <div className="main-play">
      <div className="play">
        <div className="play-rock">
          <button className="play-rock-btn" onClick={() => chooseRock()}>
            <img src={rock} alt="rock" style={imgStyle} />
          </button>
          <p className="play-rock-p">Rock</p>
        </div>

        <div className="play-paper">
          <button className="play-paper-btn" onClick={() => choosePaper()}>
            <img src={paper} alt="paper" style={imgStyle} />
          </button>
          <p className="play-paper-p">Paper</p>
        </div>

        <div className="play-scissors">
          <button
            className="play-scissors-btn"
            onClick={() => chooseScissors()}
          >
            <img src={scissors} alt="scissors" style={imgStyle} />
          </button>
          <p className="play-rock-p">Scissors</p>
        </div>
      </div>

      <div className="play-footer">Pick One!</div>
    </div>
  );
}
