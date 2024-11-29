import { useState } from "react";
import Header from "@/components/Header"
import Player from "@/components/Player"
import GameBoard from "@/components/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleActivePlayer = () => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  return (
    <>
      <Header />
      <main >
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
              <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
            </ol>
            <GameBoard
              currentPlayer={handleActivePlayer} 
              activePlayerSymbol={activePlayer} 
            />
          </div>
          {/* Logs */}
      </main>
    </>
  )
}

export default App
