## TIC-TAC-TOE Assignment


## Tech -- html, css, js, ejs, express

## To get started

# open the terminal and run npm run dev

# navigate to backend folder and run npm run dev

#### Documentation

# --> Server started with in the index.js which is the entry point using templating engine ejs we are rendering index.ejs

# --> index.ejs is the only single page we are redering which contains simple option to choose to start the game
# --> public folder contains all the styles and javascript for the client side. style.css will get applied as the page is rendered


## --> script.js
# --> All the game logic is written in script.js

# --> After selecting the option the setplayer function will set the selection option by player and build function will build the board.
# --> First Player move function will run and then checkrow will check for any winning case and then switch mark will change option and computer move will make his move. It will all the empty cells and randomly select any  box.

 ### --> playerWinComputerLoss, computerWinPlayerLoss, draw are three variables we are setting on localstorage and changing them accordingly.
 # --> In the function setplayer we are taking the value of player choice and setting  the value playerchoice and whenever the function winner will run display score function will run and check for winner and update the value of localstorage.

 ## --> Draw case is not easy to handle and for this we are using two flag booleans  drawHandlerFlag and drawStoringFlag and also using countSteps

 ## --> So, using these variables we can handle draw case 
 # -->  If drawHandlerFlag = false and countSteps are 9 we are sending draw msg and as well as converting drawStoringFlag to false and atlast winner function if drawStoringFlag = false then it will update the value of flag.

 # --> Now, all the points are handled 
 ### --> Post.js will run when someone clicks on score 
 # --> It will create a form and inside it the three values in the input will get attached and submit button will gets generate and when someone clicks on it the form will go to 3001 server and show the score and clicking reset button form gets erased 

 ### --> backend folder also uses ejs and it will take values from url and show to index.ejs.   
     