import { useState } from "react";

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

function Square({ value, onSquareClick }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = square.slice();
    square[i] = "X";
    debugger;
    console.log(setSquare(nextSquares));
  }
  return (
    <>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={handleClick} />
        <Square value={square[1]} onSquareClick={handleClick} />
        <Square value={square[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={handleClick} />
        <Square value={square[4]} onSquareClick={handleClick} />
        <Square value={square[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={handleClick} />
        <Square value={square[7]} onSquareClick={handleClick} />
        <Square value={square[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}
