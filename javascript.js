function myFunction() {
  var elmnt = document.getElementById("scroll");
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  console.log(y);
  // scrollNumber.innerHTML = y;

  // Jeep Car
  if(y>=1500){
    document.querySelector("#jeep").style.left = "105vw";
  }
  else{
    document.querySelector("#jeep").style.left = "50vw";
  }
  
}