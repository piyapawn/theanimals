sceneList = ['first_page_cause', 'scene1', 'scene2', 'scene3', 'scene4', 'scene5'];
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
