import { useState } from "react";
import "./Board.css";
import Tile from "./Tile";

function Board() {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turnCount, setTurnCount] = useState(0);

  function setTurn() {
    if (turnCount % 2 == 0) {
      return "X";
    } else {
      return "O";
    }
  }

  function handleCardClick(tileNumber: number) {
    if (board[tileNumber] === 0) {
      setBoard((prevBoard) => {
        const newBoard = prevBoard;
        newBoard[tileNumber] = tileNumber % 2 ? 1 : 0;
        setTurnCount(turnCount + 1);
        return newBoard;
      });
    }
  }

  return (
    <div className="board">
      <div className="row">
        <Tile
          value={0}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
        <Tile
          value={1}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
        <Tile
          value={2}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
      </div>
      <div className="row">
        <Tile
          value={3}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
        <Tile
          value={4}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
        <Tile
          value={5}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
      </div>

      <div className="row">
        <Tile
          value={6}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
        <Tile
          value={7}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
        <Tile
          value={8}
          //isSelected={selectedTile.has(1)}
          turnSymbol={setTurn()}
          onCardClick={handleCardClick}
        ></Tile>
      </div>
    </div>
  );
}

export default Board;
