// import { useState } from "react";

// function Square() {
//   const [value, setValue] = useState(null);
//   function handleClick() {
//     setValue("X");
//   }
//   return (
//     <button className="square" onClick={handleClick}>
//       {value}
//     </button>
//   );
// }

// export default function Borard() {
//   return (
//     <>
//       <div>
//         <Square className="board-row" />
//         <Square className="board-row" />
//         <Square className="board-row" />
//       </div>
//       <div>
//         <Square className="board-row" />
//         <Square className="board-row" />
//         <Square className="board-row" />
//       </div>
//       <div>
//         <Square className="board-row" />
//         <Square className="board-row" />
//         <Square className="board-row" />
//       </div>
//     </>
//   );
// }

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board() {
//   const [square, setSquare] = useState(Array(9).fill(null));

//   function handleClick(i) {
//     const nextSquares = square.slice();
//     nextSquares[i] = "X";
//     console.log(setSquare(nextSquares));
//   }
//   return (
//     <>
//       <div className="container">
//         <div className="board-row">
//           <Square value={square[0]} onSquareClick={() => handleClick(0)} />
//           <Square value={square[1]} onSquareClick={() => handleClick(1)} />
//           <Square value={square[2]} onSquareClick={() => handleClick(2)} />
//         </div>
//         <div className="board-row">
//           <Square value={square[3]} onSquareClick={() => handleClick(3)} />
//           <Square value={square[4]} onSquareClick={() => handleClick(4)} />
//           <Square value={square[5]} onSquareClick={() => handleClick(5)} />
//         </div>
//         <div className="board-row">
//           <Square value={square[6]} onSquareClick={() => handleClick(6)} />
//           <Square value={square[7]} onSquareClick={() => handleClick(7)} />
//           <Square value={square[8]} onSquareClick={() => handleClick(8)} />
//         </div>
//       </div>
//     </>
//   );
// }

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

import React, { useState } from "react";

function Board() {
  const [xIsNext, setXIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="container">
        <div className="border-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="border-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="border-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;
