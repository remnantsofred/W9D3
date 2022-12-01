const View = require("./ttt-view") // require appropriate file
const Game = require("../ttt_node/game") // require appropriate file

document.addEventListener("DOMContentLoaded", (event) => {
  const figure = document.getElementById("ttt");
  const playGame = new Game();
  const gameView = new View(playGame, figure);
  let grid = document.getElementById("parent")
  console.log(grid)
  grid.addEventListener("mouseover", (event)=>{
    event.stopPropagation();
    event.target.id = "hover"
  })
  grid.addEventListener("mouseout", (event)=>{
    event.stopPropagation();
    event.target.id = "unhover"
  })
});
