var grid = document.getElementById('grid'); 
var msg = document.querySelector('.message');
var chooser = document.querySelector('form');
var mark;
var cells;
var playerWinComputerLoss = 0;
var computerWinPlayerLoss = 0;
var draw = 0;
var drawHandlerFlag = false;
var countSteps = 0;
var playerChoice;   
var score = document.querySelector('.score');
var drawStoringFlag = true;
 
// setting scores to localstorage     
parseInt(localStorage.setItem("first", playerWinComputerLoss));  
parseInt(localStorage.setItem("second", computerWinPlayerLoss));
parseInt(localStorage.setItem("third", draw));


// add click listener to radio buttons
function setPlayer() {
  mark = this.value;
  msg.textContent = mark + ', click on a square to make your move!';
  chooser.classList.add('game-on');
  this.checked = false;
  playerChoice = this.value;
  buildGrid();
} 
  
// add click listener to each cell
function playerMove() {
  if (this.textContent == '') {
    this.textContent = mark;
    countSteps +=1;
    checkRow();
    switchMark();
    computerMove();
  }
}

// let the computer make the next move
function computerMove() {
  var emptyCells = [];
  var random;

/*  for (var i = 0; i < cells.length; i++) {
    if (cells[i].textContent == '') {
      emptyCells.push(cells[i]);
    }
  }*/
  
  cells.forEach(function(cell){
    if (cell.textContent == '') {
      emptyCells.push(cell);
    }
  });
  
  // computer marks a random EMPTY cell
  random = Math.ceil(Math.random() * emptyCells.length) - 1; 
  if(countSteps===9){
    return;
  }
  emptyCells[random].textContent = mark;
  countSteps += 1;
   checkRow();
  switchMark();
}

// switch player mark
function switchMark() {
  if (mark == 'X') {
    mark = 'O';
  } else {
    mark = 'X';
  }
}

// determine a winner
function winner(a, b, c) { 
  if (a.textContent == mark && b.textContent == mark && c.textContent == mark) {
    msg.textContent = mark + ' is the winner!';
    a.classList.add('winner');
    b.classList.add('winner');
    c.classList.add('winner');
    drawHandlerFlag = true;
    displayScore(mark,playerChoice )
     return true; 
  } 
  // this is the condition for draw case steps are 9 and no one has won till last move
  if(drawHandlerFlag===false && countSteps===9){
    msg.textContent = 'Draw!!!';   
     drawStoringFlag = false;
    return true;
   }else{
     return false;
   } 
  }
 


  // displaying score
function displayScore(mark, playerChoice){
  if(mark===playerChoice){    
    savingInLocalStorage(playerWinComputerLoss, "first");
    playerWinComputerLoss += 1; 
    var showWinner =  `<p>Player Score : Wins = ${playerWinComputerLoss} | Loss = ${computerWinPlayerLoss} | Draw = ${draw}</p>` ;  
    score.innerHTML = showWinner;      
    }else{
      savingInLocalStorage(computerWinPlayerLoss, "second");
    computerWinPlayerLoss += 1;
    var showWinner =  `<p>Computer Score : Wins = ${computerWinPlayerLoss} | Loss = ${playerWinComputerLoss} | Draw = ${draw}</p>` ; 
    score.innerHTML = showWinner; 
 } 
 }

 
// save to local storage if win or loss
  
function savingInLocalStorage(val, id){
  if(localStorage.getItem(id)){ 
    val = parseInt(localStorage.getItem(id )) +1;  
    parseInt(localStorage.setItem(id, val));
   }   
}

// save to localstorage if draw
function drawStore (){
  if(drawStoringFlag===false){
    var set = parseInt(localStorage.getItem("third"))+1;
    parseInt(localStorage.setItem("third",parseInt(set)));
  }
}

 

// check cell combinations 
function checkRow() {
  winner(document.getElementById('c1'), document.getElementById('c2'), document.getElementById('c3'));
  winner(document.getElementById('c4'), document.getElementById('c5'), document.getElementById('c6'));
  winner(document.getElementById('c7'), document.getElementById('c8'), document.getElementById('c9'));
  winner(document.getElementById('c1'), document.getElementById('c4'), document.getElementById('c7'));
  winner(document.getElementById('c2'), document.getElementById('c5'), document.getElementById('c8'));
  winner(document.getElementById('c3'), document.getElementById('c6'), document.getElementById('c9'));
  winner(document.getElementById('c1'), document.getElementById('c5'), document.getElementById('c9'));
  winner(document.getElementById('c3'), document.getElementById('c5'), document.getElementById('c7'));  
  
  // if draw
  if(drawHandlerFlag===false && countSteps===9){
    draw += 1;
  }
  drawStore();  
 }

// clear the grid
function resetGrid() {
  mark = 'X';
 /* for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
    cells[i].classList.remove('winner');
  }*/
  cells.forEach(function(cell){
    cell.textContent = '';
    cell.classList.remove('winner');
  });
  msg.textContent = 'Choose your player:';
  chooser.classList.remove('game-on');
  grid.innerHTML = '';
}

// build the grid
function buildGrid() {
  for (var i = 1; i <= 9; i++) {
    var cell = document.createElement('li');
    cell.id = 'c' + i;
    cell.addEventListener('click', playerMove, false);
    grid.appendChild(cell);
  }
  /* cells = document.querySelectorAll('li'); //Returns a NodeList, not an Array
  See https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches */
  cells = Array.prototype.slice.call(grid.getElementsByTagName('li'));
}

var players = Array.prototype.slice.call(document.querySelectorAll('input[name=player-choice]'));
players.forEach(function(choice){
  choice.addEventListener('click', setPlayer, false);
});

var resetButton = chooser.querySelector('button');
resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  resetGrid();
  countSteps=0;
  drawHandlerFlag = false;
  score.innerHTML = '';
  drawStoringFlag = true;
});
  