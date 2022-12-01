class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    // this.el.innerHTML = ul
  }
  // when you construct a game, pass in the game and el you grabbed in the index.js file
  setupBoard() {
    let ul = document.createElement('ul');
    this.el.appendChild(ul)
    ul.id = "parent"
    console.log("ul")
    console.log(this.el)
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let li = document.createElement('li');
        li.classList = "square"
        li.dataset.position = [i,j];
        ul.appendChild(li);
      }
    }
  }

  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
