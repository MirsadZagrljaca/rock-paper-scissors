import React from "react";
import rock from "../assets/rock.jpg";
import paper from "../assets/paper.jpg";
import scissors from "../assets/scissors.jpg";

const imgStyle = {
  width: "250px",
  height: "250px",
};

export default function Final({
  playersChoice,
  playAgain,
  computerChoice,
  msg,
}) {
  return (
    <div className="final">
      <div className="final-msg">
        {msg === "Draw" ? (
          <div className="draw">
            <p className="final-msg">{msg}</p>
          </div>
        ) : (
          <div></div>
        )}

        {msg === "You Won" ? (
          <div className="won">
            <p className="final-msg">{msg}</p>
          </div>
        ) : (
          <div></div>
        )}

        {msg === "You Lost" ? (
          <div className="lost">
            <p className="final-msg">{msg}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="final-main">
        <div className="final-player">
          <p className="final-player-p">You Chose:</p>
          {playersChoice === "rock" ? (
            <img src={rock} alt="rock" style={imgStyle} />
          ) : (
            <div></div>
          )}
          {playersChoice === "paper" ? (
            <img src={paper} alt="paper" style={imgStyle} />
          ) : (
            <div></div>
          )}
          {playersChoice === "scissors" ? (
            <img src={scissors} alt="scissors" style={imgStyle} />
          ) : (
            <div></div>
          )}
          <p className="final-p">{playersChoice}</p>
        </div>

        <div className="final-computer">
          <p className="final-computer-p">Computer Chose:</p>
          {computerChoice === "rock" ? (
            <img src={rock} alt="rock" style={imgStyle} />
          ) : (
            <div></div>
          )}
          {computerChoice === "paper" ? (
            <img src={paper} alt="paper" style={imgStyle} />
          ) : (
            <div></div>
          )}
          {computerChoice === "scissors" ? (
            <img src={scissors} alt="scissors" style={imgStyle} />
          ) : (
            <div></div>
          )}
          <p className="final-p">{computerChoice}</p>
        </div>
      </div>
      <div className="play-again">
        <button className="play-again-btn" onClick={() => playAgain()}>
          Play Again
        </button>
      </div>
    </div>
  );
}
