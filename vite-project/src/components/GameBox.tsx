import { useState } from "react";
import "../styles/TicTacToe.css";

interface GameBoxProps {
  marker: string;
  makeMove: Function;
  i: number;
  j: number;
  msg: string;
}

function GameBox({ marker, makeMove, i, j, msg }: GameBoxProps) {

  return (
    <div onClick={() => makeMove(i, j)} className="gameBox" style={{cursor: msg != "tie" && msg != "win" ? "pointer" : "default"}}>

      {marker}
    </div>
  );
}

export default GameBox;