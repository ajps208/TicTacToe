import React, { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [state, setState] = useState(Array(9).fill(""));
  const [xTurn, setXturn] = useState(true);
  console.log(state);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== "" && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return null; // Return null if there is no winner.
  };
  const handleReset = () => {
    setState(Array(9).fill(""));
  };

  const isWinner = checkWinner();
  const handleClick = (index) => {
    if (state[index] === "") {
      // Check if the box is empty
      const copyState = [...state];
      copyState[index] = xTurn ? "X" : "O";
      setState(copyState);
      setXturn(!xTurn);
    }
  };
  const isBoardFull = state.every((cell) => cell !== "");

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="mt-3">
          <h1 className="text-light ">
            Tic <span className="text-info">Tac</span> Toe
          </h1>
        </div>
        {isWinner ? (
          <h3 className="mt-5" style={{ color: "white" }}>
            <span  className={
                   isWinner === "X"
                      ? "x-marker":"o-marker"
                      
                  }>
              {isWinner}
            </span>{" "}
            Won the game
          </h3>
        ) :isBoardFull ? (
          <h3 className="mt-5" style={{ color: "white" }}>
            It's a draw! No winner.
          </h3>
        ):
        (
          <div className="board mt-4">
            <div className="row">
              <div
                className="box d-flex  justify-content-center align-items-center"
                onClick={() => {
                  handleClick(0);
                }}
              >
                {" "}
                <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[0] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[0]}
                </h1>
              </div>
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(1);
                }}
              >
                 <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[1] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[1]}
                </h1>
              </div>
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(2);
                }}
              >
                 <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[2] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[2]}
                </h1>
              </div>
            </div>
            <div className="row">
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(3);
                }}
              >
                <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[3] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[3]}
                </h1>
              </div>
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(4);
                }}
              >
                <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[4] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[4]}
                </h1>
              </div>
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(5);
                }}
              >
                <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[5] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[5]}
                </h1>
              </div>
            </div>
            <div className="row">
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(6);
                }}
              >
                 <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[6] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[6]}
                </h1>
              </div>
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(7);
                }}
              >
                <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[7] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[7]}
                </h1>
              </div>
              <div
                className="box d-flex  justify-content-center align-items-center "
                onClick={() => {
                  handleClick(8);
                }}
              >
                <h1
                  style={{ fontSize: "100px" }}
                  className={
                    state[8] === "X"
                      ? "x-marker":"o-marker"
                      
                  }
                >
                  {state[8]}
                </h1>
              </div>
            </div>
          </div>
        )}
        <button className="btn btn-info mt-5 " onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default TicTacToe;
