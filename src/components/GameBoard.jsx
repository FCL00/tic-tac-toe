    import React, { useState } from 'react'

    const initialGameBoard = [
        [null, null, null], 
        [null, null, null],
        [null, null, null],
    ];

    const GameBoard = ({currentPlayer, activePlayerSymbol}) => {

        const [gameBoard, setGameBoard] = useState(initialGameBoard);

        // this code made the app sub-optimal and needs to avoid intersecting states

        const handleUserMoves = (rowIndex, colIndex) => {
            setGameBoard((prevGameboard) => {
                const updatedBoard = [...prevGameboard.map(innerArray => [...innerArray])];
                updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
                return updatedBoard;
            })
            currentPlayer();
        }

      
        return (
            <>  
                <ol id="game-board">
                    {gameBoard.map((row, rowIndex) => (
                        <li key={rowIndex}>
                            <ol>
                                {row.map((playerSymbol, colIndex) => (
                                    <li key={colIndex}>
                                        <button onClick={() => handleUserMoves(rowIndex, colIndex) }>{playerSymbol}</button>
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
            </>
        )
    }

    export default GameBoard