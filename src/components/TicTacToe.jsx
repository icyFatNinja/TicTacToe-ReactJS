import { useState, useEffect } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-1" },
  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-row-1" },
  { combo: [1, 4, 7], strikeClass: "strike-row-1" },
  { combo: [2, 5, 8], strikeClass: "strike-row-1" },
  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-row-1" },
  { combo: [2, 4, 6], strikeClass: "strike-row-1" },
];

function checkWinner(tiles, setStrikeClass) {
  for (const { combo, strikeClass } of winningCombinations) {
  }
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();

  const handleTileClick = (index) => {
    if (tiles[index] != null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [tiles]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
    </div>
  );
}

export default TicTacToe;
