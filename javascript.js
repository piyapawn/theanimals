function checkOffSetLeft() {
  var secondPage = document.getElementById("second_page");
  console.log("Third Page Offset Left : " + secondPage.offsetLeft);
  var thirdPage = document.getElementById("third_page");
  // document.body.style.setProperty("--posPage3", thirdPage.offsetLeft);
  console.log("Third Page : " + thirdPage.offsetLeft);
  console.log("Window OffsetLeft : " + document.getElementById("scroll").offsetLeft);
}

var modalCount = 0;
// ---------- Open Modal  ---------- //
function animalModal(){
  var animalModalClick = document.getElementById("animalModal");
  animalModalClick.style.zIndex = "100";
  animalModalClick.style.opacity = "1";
  console.log("Open Modal");

  if(modalCount%2 == 0){
  //  Cursor Light 30vmax
    function lightOn(on){
      var x = on.clientX || on.touches[0].clientX
      var y = on.clientY || on.touches[0].clientY
      document.documentElement.style.setProperty('--cursor', 'auto')
      document.documentElement.style.setProperty('--v', '30vmax')
    
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
    
      document.documentElement.style.setProperty('--a1', 0.5)
      document.documentElement.style.setProperty('--a2', 0.98)
    }

    document.addEventListener('mousemove',lightOn)
    document.addEventListener('touchmove',lightOn)
  }
  else if(modalCount%2 == 1){
    // Cursor Light Off
    function lightOff(off){
      var x = off.clientX || off.touches[0].clientX
      var y = off.clientY || off.touches[0].clientY
      document.documentElement.style.setProperty('--cursor', 'auto')
    
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
    
      document.documentElement.style.setProperty('--a1', 0)
      document.documentElement.style.setProperty('--a2', 0)
    }

    document.addEventListener('mousemove',lightOff)
    document.addEventListener('touchmove',lightOff)
  }
  console.log("Modal Count : " + modalCount%2);
  
}

// ---------- Close Modal  ---------- //
function closeModal(){
  var animalModalClick = document.getElementById("animalModal");
  animalModalClick.style.zIndex = "-100";
  animalModalClick.style.opacity = "0";
  console.log("Close Modal");

  if(modalCount%2 == 0){
    //  Cursor Light 10vmax
    function lightOn(on){
      var x = on.clientX || on.touches[0].clientX
      var y = on.clientY || on.touches[0].clientY
      document.documentElement.style.setProperty('--cursor', 'none')
      document.documentElement.style.setProperty('--v', '10vmax')
    
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
    
      document.documentElement.style.setProperty('--a1', 0.5)
      document.documentElement.style.setProperty('--a2', 0.98)
    }

    document.addEventListener('mousemove',lightOn)
    document.addEventListener('touchmove',lightOn)
  }

  else if(modalCount%2 == 1){
    // Cursor Light Off
    function lightOff(off){
      var x = off.clientX || off.touches[0].clientX
      var y = off.clientY || off.touches[0].clientY
      document.documentElement.style.setProperty('--cursor', 'auto')
    
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
    
      document.documentElement.style.setProperty('--a1', 0)
      document.documentElement.style.setProperty('--a2', 0)
    }

    document.addEventListener('mousemove',lightOff)
    document.addEventListener('touchmove',lightOff)
  }

  console.log("Modal Count : " + modalCount%2);

}

// ---------- Scroll  ---------- //
function myFunction() {
  // Page
  var secondPage = document.getElementById("second_page");
  var thirdPage = document.getElementById("third_page");
  var fourthPage = document.getElementById("fourth_page");
  var fifthPage = document.getElementById("fifth_page");
  var sixPage = document.getElementById("six_page");
  var sevenPage = document.getElementById("seven_page");
  var eightPage = document.getElementById("eight_page");

  // Animal
  // Mammal
  var tiger = document.querySelector(".tiger");
  var squirrel = document.querySelector(".squirrel");
  var binturong = document.querySelector(".binturong");
  // Bird
  var peaCock = document.querySelector(".peaCock");
  var rhinoHornbill = document.querySelector(".rhinoHornbill");
  var blackKite = document.querySelector(".blackKite");
  // Reptile
  var crocodile = document.querySelector(".crocodile");
  var blueLizard = document.querySelector(".blueLizard");
  // Amphibians
  var doichangFrog = document.querySelector(".doichangFrog");
  var himalayanNewt = document.querySelector(".himalayanNewt");
  // Insect
  var troidesHelena = document.querySelector(".troidesHelena");
  var giraffeStagBeetle = document.querySelector(".giraffeStagBeetle");

  // Scroll Number
  var elmnt = document.getElementById("scroll");
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  // console.log(y);
  // scrollNumber.innerHTML = y;

  // Jeep Car First Page
  if(y >= secondPage.offsetLeft*0.8){
    document.querySelector("#jeep").style.left = "105vw";
  }
  else{
    document.querySelector("#jeep").style.left = "50vw";
  }

  // Animal Second Page
  // Mammal Fade
  if(y == thirdPage.offsetLeft){
    tiger.style.opacity = "1";
    tiger.style.left = "calc(var(--posPage3) + 29vw)";
    squirrel.style.opacity = "1";
    squirrel.style.left = "calc(var(--posPage3) + 26vw)";
    binturong.style.opacity = "1";
    binturong.style.left = "calc(var(--posPage3) + 67vw)";
  }
  else{
    tiger.style.opacity = "0";
    tiger.style.left = "calc(var(--posPage3) + 26vw)";
    squirrel.style.opacity = "0";
    squirrel.style.left = "calc(var(--posPage3) + 23vw)";
    binturong.style.opacity = "0";
    binturong.style.left = "calc(var(--posPage3) + 70vw)";
  }

  // Bird Fade
  if(y == fourthPage.offsetLeft){
    peaCock.style.opacity = "1";
    peaCock.style.left = "calc(var(--posPage4) + 45vw)";
    rhinoHornbill.style.opacity = "1";
    rhinoHornbill.style.left = "calc(var(--posPage4) + 30vw)";
    blackKite.style.opacity = "1";
    blackKite.style.left = "calc(var(--posPage4) + 67vw)";
  }
  else{
    peaCock.style.opacity = "0";
    peaCock.style.left = "calc(var(--posPage4) + 42vw)";
    rhinoHornbill.style.opacity = "0";
    rhinoHornbill.style.left = "calc(var(--posPage4) + 27vw)";
    blackKite.style.opacity = "0";
    blackKite.style.left = "calc(var(--posPage4) + 70vw)";
  }

  // Reptile Fade
  if(y == fifthPage.offsetLeft){
    crocodile.style.opacity = "1";
    crocodile.style.left = "calc(var(--posPage5) + 20vw)";
    blueLizard.style.opacity = "1";
    blueLizard.style.left = "calc(var(--posPage5) + 75vw)";
  }
  else{
    crocodile.style.opacity = "0";
    crocodile.style.left = "calc(var(--posPage5) + 17vw)";
    blueLizard.style.opacity = "0";
    blueLizard.style.left = "calc(var(--posPage5) + 78vw)";
  }

  // Amphibians Fade
  if(y == sixPage.offsetLeft){
    doichangFrog.style.opacity = "1";
    doichangFrog.style.left = "calc(var(--posPage6) + 45vw)";
    himalayanNewt.style.opacity = "1";
    himalayanNewt.style.left = "calc(var(--posPage6) + 60vw)";
  }
  else{
    doichangFrog.style.opacity = "0";
    doichangFrog.style.left = "calc(var(--posPage6) + 42vw)";
    himalayanNewt.style.opacity = "0";
    himalayanNewt.style.left = "calc(var(--posPage6) + 63vw)";
  }

  // Insect Fade
  if(y == sevenPage.offsetLeft){
    troidesHelena.style.opacity = "1";
    troidesHelena.style.left = "calc(var(--posPage7) + 40vw)";
    giraffeStagBeetle.style.opacity = "1";
    giraffeStagBeetle.style.left = "calc(var(--posPage7) + 58vw)";
  }
  else{
    troidesHelena.style.opacity = "0";
    troidesHelena.style.left = "calc(var(--posPage7) + 37vw)";
    giraffeStagBeetle.style.opacity = "0";
    giraffeStagBeetle.style.left = "calc(var(--posPage7) + 61vw)";
    // Cursor Light Off
    document.addEventListener('mousemove',lightOff)
    document.addEventListener('touchmove',lightOff)
  }

  var lightIcon = document.getElementById("light");

  
  // Light Cursor
  if(y >= thirdPage.offsetLeft && y < eightPage.offsetLeft){
    lightIcon.style.opacity = "1";
    lightIcon.style.zIndex = "200";

    if(modalCount%2 == 0){
      function lightOn(on){
        // Cursor Light On
        var x = on.clientX || on.touches[0].clientX
        var y = on.clientY || on.touches[0].clientY
        document.documentElement.style.setProperty('--cursor', 'none')
      
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
      
        document.documentElement.style.setProperty('--a1', 0.5)
        document.documentElement.style.setProperty('--a2', 0.98)
      }
  
      document.addEventListener('mousemove',lightOn)
      document.addEventListener('touchmove',lightOn)
    }   
  }
  
  else{
    lightIcon.style.opacity = "0";
    lightIcon.style.zIndex = "-20";

      // Cursor Light Off
      function lightOff(off){
        var x = off.clientX || off.touches[0].clientX
        var y = off.clientY || off.touches[0].clientY
        document.documentElement.style.setProperty('--cursor', 'auto')
      
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
      
        document.documentElement.style.setProperty('--a1', 0)
        document.documentElement.style.setProperty('--a2', 0)
      }

      document.addEventListener('mousemove',lightOff)
      document.addEventListener('touchmove',lightOff)
    
  }
  
}

// ---------- Play&Pause Music  ---------- //
var musicPlayPause = 0;
function playMusic() {
  var music = document.getElementById("myMusic");
  var musicBtn = document.getElementsByClassName("musicButton");
  if(musicPlayPause%2 == 0){
    music.play();
    musicBtn[0].innerHTML = "&#xf028;";
    console.log(musicPlayPause%2);
  }
  else if(musicPlayPause%2 == 1){
    music.pause();
    musicBtn[0].innerHTML = "&#xf026;";
    console.log(musicPlayPause%2);
  }
  musicPlayPause++;
}

// ---------- Light Switch  ---------- //
var lightCount = 0;
function lightSwitch() {
  var lightColor = document.getElementById("light");
  if(lightCount%2 == 1){
    // Cursor Light On
    function lightOn(on){
      var x = on.clientX || on.touches[0].clientX
      var y = on.clientY || on.touches[0].clientY
      document.documentElement.style.setProperty('--cursor', 'none')
    
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
    
      document.documentElement.style.setProperty('--a1', 0.5)
      document.documentElement.style.setProperty('--a2', 0.98)
    }

    document.addEventListener('mousemove',lightOn)
    document.addEventListener('touchmove',lightOn)

    lightColor.style.color = "gold";
    lightColor.style.textShadow = "0px 0px 10px gold";

    console.log("Light Count : " + lightCount%2);
  }
  else if(lightCount%2 == 0){
    // Cursor Light Off
    function lightOff(off){
      var x = off.clientX || off.touches[0].clientX
      var y = off.clientY || off.touches[0].clientY
      document.documentElement.style.setProperty('--cursor', 'auto')
    
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
    
      document.documentElement.style.setProperty('--a1', 0)
      document.documentElement.style.setProperty('--a2', 0)
    }

    document.addEventListener('mousemove',lightOff)
    document.addEventListener('touchmove',lightOff)

    lightColor.style.color = "black";
    lightColor.style.textShadow = "0px 0px 10px white";

    console.log("Light Count : " + lightCount%2);
  }
  lightCount++;
}
