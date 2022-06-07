const express = require('express')
  
// Creating app from express
const app = express()
  
// Requiring in-built file system
const fs = require('fs')
// GET request to the root of the app
app.use("/static", express.static('./static/'));
app.get('/',function(req,res){
  
    // Sending index.html file for GET request
    // to the root of the app
 res.sendFile(__dirname+'/userdata.html')
  
})
  
// Creating server at port 3000
app.listen(3001,function(req,res){
    console.log('Server started at 3001')
})