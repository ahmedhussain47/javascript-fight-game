
var num1 = document.getElementById("image1");
var num2 = document.getElementById("image2");
num2.style.transform="scaleX(-1)";


var counting = 50;
var count = 50;
window.onkeydown = function () {
    console.log(event.keyCode);
    if (event.keyCode === 65) {
        num2.src = "./images/char2.gif";
        count = count - 50;
        num2.style.left = count + "px";
        setTimeout(function () {
            num2.src = "./images/char2.gif";
        }, 200)
    }
    if (event.keyCode === 68) {
        num2.src = "./images/char2.gif";
        count = count + 50;
        num2.style.left = count + "px";
        setTimeout(function () {
            num2.src = "./images/char2.gif";
        }, 300)
    }
    if (event.keyCode === 87) {
        num2.src = "./images/char2up.gif";
        setTimeout(function () {
            num2.src = "./images/char2.gif";
        }, 1300)
    }
    if (event.keyCode === 83) {
        num2.src = "./images/char2downn.gif";
        num2.style.transform="scaleX(-1)"
        setTimeout(function () {
            num2.src = "./images/char2.gif";
        }, 1300)
    }
    if (event.keyCode === 69) {
        num2.src = "./images/upper.gif";

        setTimeout(function () {
            num2.src = "./images/char2.gif";
        }, 1300)
    }
    if (event.keyCode === 81) {
        num2.src = "./images/char2attack.gif";
        setTimeout(function () {
            num2.src = "./images/char2.gif";
        }, 1300)
    }
    if (event.keyCode === 39) {
        num1.src = "./images/char1backk.gif";
        counting = counting + 50;
        num1.style.left = counting + "px";
        setTimeout(function () {
            num1.src = "./images/char1.gif";
        }, 200)
    }
    if (event.keyCode === 37) {
        num1.src = "./images/char1backk.gif";
        counting = counting - 50;
        num1.style.left = counting + "px";
        setTimeout(function () {
            num1.src = "./images/char1.gif";
        }, 200)
    }
    if (event.keyCode === 38) {
        num1.src = "./images/char1up.gif";

        setTimeout(function () {
            num1.src = "./images/char1.gif";
        }, 1300)
    }
    if (event.keyCode === 40) {
        num1.src = "./images/char1down.gif";
        setTimeout(function () {
            num1.src = "./images/char1.gif";
        }, 1300)
    }
    if (event.keyCode === 84) {
        num1.src = "./images/char1punch.gif";
        setTimeout(function () {
            num1.src = "./images/char1.gif";
        }, 1300)
    }
    if (event.keyCode === 82) {
        num1.src = "./images/char1attack.gif";
        setTimeout(function () {
            num1.src = "./images/char1.gif";
        }, 1300)
    }
}