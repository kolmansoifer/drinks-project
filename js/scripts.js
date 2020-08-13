$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#votes').show();
  } else if (age === 18) {
    alert("Welcome to adulthood");
    $('#votes').show();
  } else {
    $('#under-18').show();
  }
});