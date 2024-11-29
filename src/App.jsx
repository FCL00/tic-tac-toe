import { useState } from "react";
import Header from "@/components/Header"
import Player from "@/components/Player"
import GameBoard from "@/components/GameBoard"
import Log from "@/components/Log";
import GameOver from "@/components/GameOver";
import {deriveActivePlayer, deriveGameBoard, deriveWinner} from "@/utils/controls"

function App() {
  // game source
  const [gameTurns, setGameTurn] = useState([]);

  const [players, setPlayer] = useState({
    "X": "Player 1",
    "O": "Player 2",
  });
  // active player
  const activePlayer = deriveActivePlayer(gameTurns);
  // gameboard
  const gameBoard = deriveGameBoard(gameTurns)
  // game winner
  const winner = deriveWinner(gameBoard, players)
  // In tic-tac-toe the maximum move each player have is 9 so we can use it to check if theres a draw
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    
    setGameTurn((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
        return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurn([]);
  }


  const handlePlayerNameChange = (symbol, newName) =>{
    setPlayer((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol] : newName,
      }
    })
  }

  return (
    <>
      <Header />
      <main >
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
              <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} restart={handleRematch}/>}
            <GameBoard
              onSelectSquare={handleSelectSquare} 
              board={gameBoard}
            />
          </div>
          <Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
