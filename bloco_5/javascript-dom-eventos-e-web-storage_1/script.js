let messege =
  "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.";
function modifyText(msg) {
  let elementP = document.getElementsByTagName("p");
  elementP[0].innerHTML = msg;
}

modifyText(messege);

function alterColor() {
  let mainContente = document.getElementsByClassName("main-content");
  mainContente[0].style["background-color"] = "rgb(76,164,109)";
}

alterColor();

function colorWhite() {
  let contenteCenter = document.getElementsByClassName("center-content");
  contenteCenter[0].style.backgroundColor = "rgb(255,255,255)";
  console.log(contenteCenter);
}

colorWhite();
