sceneList = ['first_page_solve', 'scene1', 'scene2', 'scene3', 'scene4', 'scene5', 'last_page_solve'];
count = 0;

function NextPrevScene(){
    if(count < 0){
        count = 0;
    }
    else if(count >= sceneList.length){
        count = sceneList.length-1;
    }
    page.dataset.scene = sceneList[count%(sceneList.length)];

    console.log("Count : " + count);
    console.log("Scene Number : " + count%(sceneList.length));
    console.log("Scene : " + sceneList[count%(sceneList.length)]);
}

var musicPlayPause = 0;
function playMusic() {
  var music = document.getElementById("myMusic");
  var musicBtn = document.getElementsByClassName("musicButton");
  if(musicPlayPause%2 == 0){
    music.play();
    musicBtn[0].style.textDecoration = "none";
    console.log(musicPlayPause%2);
  }
  else if(musicPlayPause%2 == 1){
    music.pause();
    musicBtn[0].style.textDecoration = "line-through";
    console.log(musicPlayPause%2);
  }
  musicPlayPause++;
}
