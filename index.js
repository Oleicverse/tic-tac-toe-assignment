 
const express = require("express"); 
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express(); 

//middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views")); 
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

//game page  
app.get('/', (req, res) => {
  res.render('index');
})  
 
app.listen(PORT);   
 