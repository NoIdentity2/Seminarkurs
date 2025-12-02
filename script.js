let politWert = 0;
let videoPlayer = document.getElementById("videoPlayer");
let thumbUp = document.getElementById("thumbUp");
let thumbDown = document.getElementById("thumbDown");
let direction = 1;
let videoIndex = 0;
let klasseAktiv = document.querySelectorAll(".active");
let bewertung;
let src;
let aktiviert = false;

document.getElementById("ergebnis").addEventListener("click", function () {
  window.location.href = "quizErgebnis.html";
});

const videos = [
  { src: "./videos/test.mp4", richtung: 1 }, //fallschirmspringer
  { src: "./videos/test2.mp4", richtung: 7 }, //kinder
  { src: "./videos/test3.mp4", richtung: -5 }, //hund
  { src: "./videos/test4.mp4", richtung: -12 }, //otter
];

function toggleActive(x) {
  if (!aktiviert && !x.classList.contains("active")) {
    x.classList.add("active");
    if (x == thumbUp) {
      if (videos[videoIndex].richtung >= 0) {
        direction = 1;
      } else {
        direction = -1;
      }
      bewertung = "up";
      aktiviert = true;
    } else if (x == thumbDown) {
      if (videos[videoIndex].richtung > 0) {
        direction = -1;
      } else {
        direction = 1;
      }
      bewertung = "down";
      aktiviert = true;
    }
  } else if (x.classList.contains("active")) {
    x.classList.remove("active");
    aktiviert = false;
  }
}

function searchVideo() {
  thumbDown.classList.remove("active");
  thumbUp.classList.remove("active");
  let unterschied = 100;

  if (bewertung == "up") {
    for (let i = 0; i < videos.length; i++) {
      if (
        4 <= Math.abs(videos[i].richtung) - Math.abs(politWert) &&
        direction * videos[i].richtung >= 0 &&
        Math.abs(videos[i].richtung) - Math.abs(politWert) < unterschied
      ) {
        videoIndex = i;
        videoPlayer.src = videos[videoIndex].src;
        videoPlayer.load();
        unterschied = Math.abs(videos[i].richtung) - Math.abs(politWert);
      }
    }
  } else if (bewertung == "down") {
    for (let i = 0; i < videos.length; i++) {
      if (
        direction * videos[i].richtung < 0 &&
        2 <= Math.abs(politWert) - Math.abs(videos[i].richtung) &&
        Math.abs(politWert) - Math.abs(videos[i].richtung) < unterschied
      ) {
        videoIndex = i;
        videoPlayer.src = videos[videoIndex].src;
        videoPlayer.load();
        unterschied = Math.abs(politWert) - Math.abs(videos[i].richtung);
      } else if (
        direction * videos[i].richtung >= 0 &&
        2 <= Math.abs(politWert) + Math.abs(videos[i].richtung) &&
        Math.abs(politWert) + Math.abs(videos[i].richtung) < unterschied
      ) {
        videoIndex = i;
        videoPlayer.src = videos[videoIndex].src;
        videoPlayer.load();
        unterschied = Math.abs(politWert) + Math.abs(videos[i].richtung);
      }
    }
  }
  politWert = videos[videoIndex].richtung + 1;
  aktiviert = false;
}
