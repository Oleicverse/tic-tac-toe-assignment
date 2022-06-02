var getValue = document.querySelector('.getValue');  
var form;

getValue.addEventListener('click', function(){  

// getting values of localstorage
var playerWinComputerLoss= parseInt(localStorage.getItem("first")); 
var computerWinPlayerLoss = parseInt(localStorage.getItem("second"));
var draw = parseInt(localStorage.getItem("third")); 

// sending post form 
function sendData() { 
  form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", `http://localhost:3001/api/score/${playerWinComputerLoss}/${computerWinPlayerLoss}/${draw}`);
  var pl = document.createElement("input");
  pl.setAttribute("type", "number");
  pl.setAttribute("name", "player");
  pl.setAttribute("value", `${playerWinComputerLoss}`);
  var co = document.createElement("input");
  co.setAttribute("type", "number");
  co.setAttribute("name", "computer");
  co.setAttribute("value", `${computerWinPlayerLoss}`);
  var dr = document.createElement("input");
  dr.setAttribute("type", "number");
  dr.setAttribute("name", "draw");
  dr.setAttribute("value", `${draw}`);
  pl.classList.add("not");
  co.classList.add("not");
  dr.classList.add("not");
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  s.classList.add("showSubmitBtn");
  form.appendChild(pl);
  form.appendChild(co);
  form.appendChild(dr);
  form.appendChild(s); 
  document.querySelector(".scoreBtn").appendChild(form);
}
sendData();
}); 

document.querySelector("#reset").addEventListener('click', function(){
  document.querySelector(".scoreBtn").removeChild(form);

})