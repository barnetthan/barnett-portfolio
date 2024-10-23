import NavBar from '../components/NavBar';
import { useEffect, useState } from "react";
import GameBox from '../components/GameBox';

function GamePage() {
  // let arr = [["X", "X", "X"], ["X", "X", "X"], ["X", "X", "X"]];

  const [arr, setArr] = useState<string[][]>([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [curMarker, setCurMarker] = useState<string>("X");
  const [msg, setMsg] = useState<string> ("");
  const [p1Wins, setP1Wins] = useState<number>(0);
  const [p2Wins, setP2Wins] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  function makeMove(i: number, j: number) {
    if (msg != "win" && msg != "tie") {
      if (arr[i][j] != "") {
        setMsg("error");
      } else {
        setMoves(moves + 1);
        setMsg("");
        const tmp = [...arr]; 
        tmp[i][j] = curMarker; 
        setArr(tmp);
        if (checkWin()) {
          setMsg("win");
          curMarker == "X" ? setP1Wins(p1Wins + 1) : setP2Wins(p2Wins + 1);
        } else {
          if (moves == 8) {
            setMsg("tie");
          }
          setCurMarker(curMarker == "X" ? "O" : "X");
        } 
      }
    }
  }

  function displayMessage() {
    switch(msg) {
      case "error":
        return <div style={{color: "red"}}>Square is already taken. Please try again.</div>;
      case "tie":
        return <div style={{color: "orange"}}>No more moves possible. Click reset to play again.</div>;
      case "win":
        return <div style={{color: "green"}}>Player {curMarker == "X" ? "1" : "2"} has won! Click reset to play again.</div>;
      default:
        return <></>;
    }
  }

  function checkWin() {
    // check horizontal & vertical
    for (let i = 0; i < arr.length; i++) {
      let horiz = arr[i][0];
      let vert = arr[0][i];
      let horizValid = horiz == "" ? false : true;
      let vertValid = vert == "" ? false: true;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] != horiz) {
          horizValid = false;
        }
        if (arr[j][i] != vert) {
          vertValid = false;
        }
      }
      if (horizValid || vertValid) {
        return true;
      }
    }
    // check diagonals
    if (arr[0][0] != "" && arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]) {
      return true;
    }
    if (arr[2][0] != "" && arr[2][0] == arr[1][1] && arr[2][0] == arr[0][2]) {
      return true;
    }
    return false;
  }

  function resetGame() {
    setArr([["", "", ""], ["", "", ""], ["", "", ""]]);
    setCurMarker("X");
    setMsg("");
    setMoves(0);
  }

  return (
    <>
      <NavBar curPage = "game"/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textDecoration: "underline" }}>
          Tic-Tac-Toe
        </h1>
        <div>
          Player 1 wins (X): {p1Wins}
          &nbsp;
          Player 2 wins (O): {p2Wins}
        </div>
        <div>It is Player {curMarker == "X" ? 1 : 2}'s turn ({curMarker})</div>
        <br/>
        <button onClick={resetGame}>Reset Game</button>
        <br/>
        {displayMessage()}
        {arr.map((row, r) => 
          (
            <div style={{display: "flex", flexDirection: "row"}}> 
              {row.map((val, c) => (<GameBox marker={val} makeMove={makeMove} i = {r} j = {c} msg = {msg}/>))}
            </div>
          )
        )}
      </div>
    </>
  )
}

export default GamePage;
