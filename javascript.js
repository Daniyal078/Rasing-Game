let blueCar = document.getElementById("bluecar");
let racecar = document.getElementById("racecar");
let result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game");
let counter = 0;
let jumpsound = document.getElementById("jumpsound")

//////bluecar move
blueCar.addEventListener("animationiteration", function () {
    let random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px"
    counter++
})

//////racecar move
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        let raceCarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
        if (raceCarleft < 260) { racecar.style.left = (raceCarleft + 130) + "px" }
        jumpsound.play()
    };

    if (e.keyCode == "37") {
        let raceCarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
        if (raceCarleft > 0) {
            racecar.style.left = (raceCarleft - 130) + "px"
            jumpsound.play()
        }
    }
})
//////// game over
setInterval(function Gameover() {
    let bluecartop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    let bluecarleft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    let raceCarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
    if ((bluecarleft === raceCarleft) && (bluecartop > 450) && (bluecartop < 550)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score : ${counter} `;
        counter = 0;
    }
}, 10)