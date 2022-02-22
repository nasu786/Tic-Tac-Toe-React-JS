import React, { useState } from 'react';
import Square from './Square';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = winner + ' Wins!';
  } else if (square.every(index => index !== null)) {
    status = 'Draw!';
  } else {
    status = (X ? 'X' : 'O') + "'s Turn" ;
  }


  const renderSquare = (i) => {
    return (
      <Square value={square[i]} onClick={() => handleClick(i)} currentstate = {status} currentwin = {winner} />
    )
  }

  const handleClick = (i) => {
    const squares = square.slice();
    if (status !== winner + ' Wins!'){
      if (squares[i] === null) {
        squares[i] = X ? 'X' : 'O';
        setSquare(squares);
        setX(!X);
      } 
    }
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
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  const restart = () => {
    setSquare(Array(9).fill(null));
    setX(true)
  }
  
  return (
    <div className='body'>
      <div className="main">
        <h2>Tic Tac Toe</h2>
        <div className={status === 'Draw!' || status === (winner + ' Wins!' ) ? 'turn-active' : 'turn'}>{status}</div>
        <div className="gamebox">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div className="button">
          <button className={status === 'Draw!' ? 'restart-draw' : status === (winner + ' Wins!' ) ? 'restart-win' : 'restart'} onClick={restart}>Restart Game!</button>
        </div>
      </div>
      <div className={status === 'Draw!' || status === (winner + ' Wins!') ? 'text-win-active' : 'text-win'} id="text-win">{status === 'Draw!' || status === (winner + ' Wins!') ? status : ''}</div>

    </div>
  )

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);