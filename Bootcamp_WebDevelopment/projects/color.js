window.onload = function() {
  console.log("Hello");
}

var form = document.getElementById('cash_form');
var cash_available = document.getElementById('cash_available');
var cash = 0;

//form.onclick = myfunction;

form.addEventListener("submit", myfunction);

function myfunction(e) {
  e.preventDefault();
  var input_cash = document.getElementById('cash');
  cash = input_cash.value;
  input_cash.value = "";
  console.log("Cash: " + cash);
  cash_available.innerHTML = "$" + cash;
}

document.getElementsByTagName('td').onclick = click;

function click() {
  console.log("click");
}
