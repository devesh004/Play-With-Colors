var numofsquares = 6;
var h1 = document.querySelector("h1");
var colors = generateRandomColor(numofsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = document.getElementById("colordisplay");
var displaymessage = document.querySelector("#message")
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
easybtn.addEventListener("click", function () {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numofsquares = 3;
    colors = generateRandomColor(numofsquares);
    picked = pickColor();
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});
hardbtn.addEventListener("click", function () {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numofsquares = 6;
    colors = generateRandomColor(numofsquares);
    picked = pickColor();
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});
var picked = pickColor();
pickedcolor.textContent = picked;
var resetbutton = document.querySelector("#reset");
resetbutton.addEventListener("click", function () {
    colors = generateRandomColor(numofsquares);
    picked = pickColor();
    pickedcolor.textContent = picked;
    displaymessage.textContent = "";
    this.textContent = "New Colors";
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedcolor = this.style.background;
        if (clickedcolor === picked) {

            displaymessage.textContent = "Correct!";
            changecolor(clickedcolor);
            h1.style.background = clickedcolor;
            resetbutton.textContent = "play again ?";
        }
        else {
            displaymessage.textContent = "Try Again";
            this.style.background = "#232323";
        }
    });
}
function changecolor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}
function pickColor() {
    var i = Math.floor(Math.random() * colors.length);
    return colors[i];

}
function generateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}