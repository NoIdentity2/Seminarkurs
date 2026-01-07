let politWert = 3;
let videoPlayer = document.getElementById("Video");
let thumbUp = document.getElementById("thumbUp");
let thumbDown = document.getElementById("thumbDown");
let direction = 1;
let videoIndex = 0;
let klasseAktiv = document.querySelectorAll(".active");
let bewertung;
let src;
let aktiviert = false;
let progress = 0;
let progressStatus = document.getElementById("progress");
let politLeft = 0;
let politRight = 0;
let politAvg = [];
let pLeft = document.getElementById("pLeft");
let pRight = document.getElementById("pRight");
let pAvg = document.getElementById("pAvg");
let pDevelop = document.getElementById("pDevelop");
let slider = document.getElementById("slider");
let note = document.getElementById("note");
let pSphere = document.getElementById("pSphere");
let evaluation = document.getElementById("evaluation");
let videoIndexBefore = 17;






const videos = [
  { src: "./videos/30.mp4", richtung:30, watched: "false" },
  { src: "./videos/29.mp4", richtung:29, watched: "false" },
  { src: "./videos/28.mp4", richtung:28, watched: "false" },
  { src: "./videos/25.mp4", richtung:25, watched: "false" },
  { src: "./videos/24.mp4", richtung:24, watched: "false" },
  { src: "./videos/22.mp4", richtung:22, watched: "false" },
  { src: "./videos/20.mp4", richtung:20, watched: "false" },
  { src: "./videos/19.mp4", richtung:19, watched: "false" },
  { src: "./videos/17.mp4", richtung:17, watched: "false" },
  { src: "./videos/16.mp4", richtung:16, watched: "false" },
  { src: "./videos/15.mp4", richtung:15, watched: "false" },
  { src: "./videos/14.mp4", richtung:14, watched: "false" },
  { src: "./videos/13.mp4", richtung:13, watched: "false" },
  { src: "./videos/11.mp4", richtung:11, watched: "false" },
  { src: "./videos/10.mp4", richtung:10, watched: "false" },
  { src: "./videos/8.mp4", richtung:8, watched: "false" },
  { src: "./videos/5.mp4", richtung:5, watched: "false" },
  { src: "./videos/3.mp4", richtung:3, watched: "true" },
  { src: "./videos/-1.mp4", richtung:-1, watched: "false" },
  { src: "./videos/-2.mp4", richtung:-2, watched: "false" },
  { src: "./videos/-2.5.mp4", richtung:-2.5, watched: "false" },
  { src: "./videos/-3.mp4", richtung:-3, watched: "false" },
  { src: "./videos/-3.5.mp4", richtung:-3.5, watched: "false" },
  { src: "./videos/-4.mp4", richtung:-4, watched: "false" },
  { src: "./videos/-5.mp4", richtung:-5, watched: "false" },
  { src: "./videos/-6.mp4", richtung:-6, watched: "false" },
  { src: "./videos/-8.mp4", richtung:-8, watched: "false" },
  { src: "./videos/-9.mp4", richtung:-9, watched: "false" },
  { src: "./videos/-10.mp4", richtung:-10, watched: "false" },
  { src: "./videos/-11.mp4", richtung:-11, watched: "false" },
  { src: "./videos/-12.mp4", richtung:-12, watched: "false" },
  { src: "./videos/-13.mp4", richtung:-13, watched: "false" },
  { src: "./videos/-14.mp4", richtung:-14, watched: "false" },
  { src: "./videos/-16.mp4", richtung:-16, watched: "false" },
  { src: "./videos/-17.mp4", richtung:-17, watched: "false" },
  { src: "./videos/-19.mp4", richtung:-19, watched: "false" },
  { src: "./videos/-21.mp4", richtung:-21, watched: "false" },
  { src: "./videos/-23.mp4", richtung:-23, watched: "false" },
  { src: "./videos/-24.mp4", richtung:-24, watched: "false" },
  { src: "./videos/-25.mp4", richtung:-25, watched: "false" },
  { src: "./videos/-27.mp4", richtung:-27, watched: "false" },
  { src: "./videos/-30.mp4", richtung:-30, watched: "false" },
]



function toggleActive(x){
    if(!aktiviert && !x.classList.contains("active")){
        x.classList.add("active");
        if(x == thumbUp){
            if(videos[videoIndex].richtung >= 0){
                direction = 1;
            }
            else{
                direction = -1;
            }
            bewertung = "up";
            aktiviert = true;
        }
        else if (x == thumbDown){
            if(videos[videoIndex].richtung > 0){
                direction = -1;
            } 
            else{
                direction = 1;
            }
            bewertung = "down";
            aktiviert = true;
        }
    }
    else if(x.classList.contains("active")){
        x.classList.remove("active");
        aktiviert = false;
    }
    
}

function searchVideo(){
    thumbDown.classList.remove("active");
    thumbUp.classList.remove("active");
    let unterschied = 100;

    if(!aktiviert){
        window.alert("Bitte bewerte das Video");
    }

    else{
        if(bewertung == "up"){
            for(let i = 0; i < videos.length; i++){
                if(videos[videoIndexBefore].richtung * videos[i].richtung >= 0 && 4 <= (Math.abs(videos[i].richtung) - Math.abs(politWert)) && Math.abs(videos[i].richtung) - Math.abs(politWert) < unterschied && videos[i].watched == "false"){
                    videoIndex = i;
                    videoPlayer.src = videos[videoIndex].src; 
                    videoPlayer.load();
                    unterschied = Math.abs(videos[i].richtung) - Math.abs(politWert);
                    //window.alert(videos[i].richtung);
                }    
            }
        }
        else if(bewertung == "down"){
            for(let i = 0; i < videos.length; i++){
                if(videos[videoIndexBefore].richtung * videos[i].richtung < 0 && 2<= (Math.abs(politWert) + Math.abs(videos[i].richtung)) && (Math.abs(politWert) + Math.abs(videos[i].richtung)) < unterschied && videos[i].watched == "false"){
                    videoIndex = i;
                    videoPlayer.src = videos[videoIndex].src; 
                    videoPlayer.load();
                    unterschied = Math.abs(politWert) + Math.abs(videos[i].richtung);
                    //window.alert(videos[i].richtung + "<0" + unterschied);
                }
                else if(videos[videoIndexBefore].richtung * videos[i].richtung >= 0 && 2<= (Math.abs(politWert) - Math.abs(videos[i].richtung)) && Math.abs(politWert) - Math.abs(videos[i].richtung) < unterschied && videos[i].watched == "false"){
                    videoIndex = i;
                    videoPlayer.src = videos[videoIndex].src; 
                    videoPlayer.load();
                    unterschied = Math.abs(politWert) - Math.abs(videos[i].richtung);
                    //window.alert(videos[i].richtung + " >=0 " + politWert);
                }
            }
        }
        politWert = videos[videoIndex].richtung - 1;
        videoIndexBefore = videoIndex;
        videos[videoIndex].watched = "true";
        aktiviert = false;
        progress++;
        progressBar();
        PolitValues(politWert);
    }  
}

function progressBar(){
    if(progress < 10){
        progressStatus.innerHTML = progress + "/10";
    }
    else{
        progressStatus.innerHTML = "Fertig";
    }
}

function PolitValues(value){
    if(value < politLeft){
        politLeft = value;
    }

    else if(value > politRight){
        politRight = value;
    }
    politAvg.push(value);
}

function resultValues(){
    if(progress>9){
        let avg = politAvg.reduce((a,b) => a + b, 0)/politAvg.length
        if(politWert <= -18){
            pSphere.innerHTML = "stark links";
        }
        else if(politWert <= -6){
            pSphere.innerHTML = "mittig links";
        }
        else if(politWert < 6){
            pSphere.innerHTML= "mittig";
        }
        else if(politWert < 18){
            pSphere.innerHTML = "mittig rechts";
        }
        else{
            pSphere.innerHTML = "stark rechts";
    }
    slider.value = politWert;
    pLeft.innerHTML = politLeft;
    pRight.innerHTML = politRight;
    pAvg.innerHTML = Math.round(avg*100)/100;
    evaluation.style.visibility = "visible";
    evaluation.scrollIntoView({behavior: "smooth"});
    }
    else{
        window.alert("Bewerte zuerst genug Clips")
    }
    
}

function reset(){
    politLeft = 0;
    politRight = 0;
    politWert = 0;
    progress = 0;
    politAvg = [];
    progressStatus.innerHTML = "0/10";
    evaluation.style.visibility = "hidden";
    for(let i = 0; i < videos.length; i++){
        videos[i].watched = "false";
    }
}



