const express = require("express");
const path = require("path");
const app = express();
const PORT =  process.env.PORT || 3001;

//middle
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views")); 
app.use(express.urlencoded({extended: false}));


// Api 
app.post('/api/score/:id/:id1/:id2', (req, res)=>{
var playerWinComputerLoss = req.params.id   ;
var computerWinPlayerLoss = req.params.id1  ;
var draw = req.params.id2 ;
res.render('index', {playerWinComputerLoss, computerWinPlayerLoss, draw}); 
});


// server
app.listen(PORT);
       