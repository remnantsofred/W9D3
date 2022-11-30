class View {
  constructor(game, el) {}
  // when you construct a game, pass in the game and el you grabbed in the index.js file
  setupBoard(el) {
    let output = [];
    // let ul = document.createElement('ul');
    for(let i = 0; i < 3; i++){
      let subarr = [];
      let li = document.createElement('li');

      for(let j = i+1; j < 3-i; j++){
        subarr.push(el[j][i])
        length.datasomething = [i,j];
        ul.appendChild(li);
      }
      output.push(subarr)
    }
    
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
