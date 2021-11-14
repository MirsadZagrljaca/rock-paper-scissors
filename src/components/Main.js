import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Final from "./Final";
import Play from "./Play";
import Rules from "./Rules";

const modalStyle = {
  overlay: {
    top: "25%",
    left: "25%",
    right: "25%",
    bottom: "25%",
  },
};

export default function Main() {
  const [choices, setChoices] = useState(["rock", "paper", "scissors"]);
  const [rulesOn, setRulesOn] = useState(false);
  const [score, setScore] = useState(0);
  const [playersChoice, setPlayersChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [msg, setMsg] = useState("");

  const chooseRock = (e) => {
    setPlayersChoice("rock");

    const i = Math.floor(Math.random() * 3);
    setComputerChoice(choices[i]);
  };
  const choosePaper = (e) => {
    setPlayersChoice("paper");

    const i = Math.floor(Math.random() * 3);
    setComputerChoice(choices[i]);
  };
  const chooseScissors = (e) => {
    setPlayersChoice("scissors");

    const i = Math.floor(Math.random() * 3);
    setComputerChoice(choices[i]);
  };

  const playAgain = () => {
    setPlayersChoice("");
    setComputerChoice("");
  };

  const winCheck = () => {
    if (playersChoice === "rock") {
      if (computerChoice === "rock") {
        setMsg("Draw");
      } else if (computerChoice === "scissors") {
        setMsg("You Won");
        setScore(score + 1);
      } else if (computerChoice === "paper") {
        setMsg("You Lost");
      }
    } else if (playersChoice === "paper") {
      if (computerChoice === "paper") {
        setMsg("Draw");
      } else if (computerChoice === "rock") {
        setMsg("You Won");
        setScore(score + 1);
      } else if (computerChoice === "scissors") {
        setMsg("You Lost");
      }
    } else if (playersChoice === "scissors") {
      if (computerChoice === "scissors") {
        setMsg("Draw");
      } else if (computerChoice === "paper") {
        setMsg("You Won");
        setScore(score + 1);
      } else if (computerChoice === "rock") {
        setMsg("You Lost");
      }
    }
  };

  useEffect(() => {
    winCheck();
  }, [computerChoice]);

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Rock Paper Scissors</h2>
        <div className="header-second">
          <p className="score">Score: {score}</p>
          <button className="rules-button" onClick={() => setRulesOn(true)}>
            Rules
          </button>
        </div>
      </div>
      <Modal isOpen={rulesOn} style={modalStyle}>
        <Rules closeModal={() => setRulesOn(false)} />
      </Modal>
      <div className="main">
        {playersChoice === "" ? (
          <Play
            chooseRock={chooseRock}
            choosePaper={choosePaper}
            chooseScissors={chooseScissors}
          />
        ) : (
          <Final
            playersChoice={playersChoice}
            playAgain={playAgain}
            computerChoice={computerChoice}
            msg={msg}
          />
        )}
      </div>
    </div>
  );
}
