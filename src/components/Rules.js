import React from "react";

export default function Rules({ closeModal }) {
  return (
    <div className="rules">
      <h2 className="rules-title">Rules</h2>
      <p className="rules-p">
        Choose one of rock,paper or scissors, then computer will choose one and
        winner will be decided by next rules:{" "}
        <span>Rock beats Scissors, Scissors beats Paper, Paper beats Rock</span>
      </p>
      <div className="rules-close">
        <button className="rules-close-btn" onClick={() => closeModal()}>
          Close
        </button>
      </div>
    </div>
  );
}
