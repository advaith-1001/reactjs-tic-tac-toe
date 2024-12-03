import './board.css'
import Square from './Square';
import { useState } from 'react';
function Board() {

    const[squares, setSquares] = useState(Array(9).fill(null));
    const[xIsNext, setxIsNext] = useState(true);

    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = "X";
            setSquares(nextSquares);
            setxIsNext(false)
        } else {
            nextSquares[i] = "O";
            setSquares(nextSquares);
            setxIsNext(true);
        }
    }

    function handleRestart() {
        const newSquares = Array(9).fill(null);
        setSquares(newSquares);
        setxIsNext(true);
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = "Game Over. The Winner is " + winner + " !";
    } else {
        status = (xIsNext ? "X" : "O") + "'s turn.";
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];

          for(let i = 0; i < lines.length; i++) {
            const[a, b, c] = lines[i];
            if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
                return squares[a];
            }
          }
          return null;
    }

    return(
        <>
        <h1>Tic-Tac-Toe</h1>
    <div className='status'>{status}</div>
    <div className='container'>
    <div className='board'>
    <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]}/>
        <Square onSquareClick={() => handleClick(1)} value={squares[1]}/>
        <Square onSquareClick={() => handleClick(2)} value={squares[2]}/>
    </div>
    <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]}/>
        <Square onSquareClick={() => handleClick(4)} value={squares[4]}/>
        <Square onSquareClick={() => handleClick(5)} value={squares[5]}/>
    </div>
    <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]}/>
        <Square onSquareClick={() => handleClick(7)} value={squares[7]}/>
        <Square onSquareClick={() => handleClick(8)} value={squares[8]}/>
    </div>
    </div>
    </div>
    <div className='restart-container'><button className="restart-button"onClick={handleRestart}>Restart</button></div>
    </>
  );
}

export default Board