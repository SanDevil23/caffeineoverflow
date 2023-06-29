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



function  main(){
  // let and const are part of ES6
  // var was part of all the initial-versions 
  var x ;
  {
    var y = 5;
    x=1;
    console.log(y);
  }
  console.log(y);
}


main();