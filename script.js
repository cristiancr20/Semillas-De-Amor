const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
/* audio */



playPause.addEventListener("click", () => {
    if(audio.paused || audio.ended){
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
        audio.play();
    }else{
        audio.pause();
        playPause.querySelector(".pause-btn").classList.toogle("hide");
        playPause.querySelector(".play-btn").classList.toogle("hide");
    }
})