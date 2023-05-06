function myfunc(){
    let g = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML = "Welcome to the Site " + g;
}

window.onload = displayClock();
function displayClock(){
  var display = new Date();
  document.getElementById("date").innerHTML = display;
  setTimeout(displayClock, 1000); 
}