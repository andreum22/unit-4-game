
var Points = 0;
var pointsToGet = "";
var winCounter = 0;
var lossCounter = 0;
var GemChousen = false;

var minNumber = 19;
var maxNumber = 120;

var randomNumber = randomNumberGemm(minNumber, maxNumber);
var Gemm = 0;

var Gemmmin = 1;
var Gemmmax = 12;
var numGemma1 = 0;
var numGemma2 = 0;
var numGemma3 = 0;
var numGemma4 = 0;

function randomNumberGemm(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber);


$(document).ready(() => {
    //start the game
    reset();

    $(".gem").on("click", function () {
        var currentGem = parseInt($(this).attr("data-gem"));

        switch (currentGem) {
            case 1:
                Gemm += numGemma1;
                break;
            case 2:
                Gemm += numGemma2;
                break;
            case 3:
                Gemm += numGemma3;
                break;
            case 4:
                Gemm += numGemma4;
                break;
        }

        $("#result").text(Gemm);
        console.log(Gemm);
        Checkpoint();
    });
});

function reset() {
    numGemma1 = Math.floor(Math.random() * (Gemmmax - Gemmmin + 1) + Gemmmin);
    numGemma2 = Math.floor(Math.random() * (Gemmmax - Gemmmin + 1) + Gemmmin);
    numGemma3 = Math.floor(Math.random() * (Gemmmax - Gemmmin + 1) + Gemmmin);
    numGemma4 = Math.floor(Math.random() * (Gemmmax - Gemmmin + 1) + Gemmmin);
    randomNumber = randomNumberGemm(minNumber, maxNumber);
    $("#PointsToGet").text(randomNumber);
    Gemm = 0;
    $("#result").text(Gemm);
}

function Checkpoint() {
    if (Gemm > randomNumber) {
        alert("perdiste");
        lossCounter++;
        reset();
    } else if (Gemm == randomNumber) {
        alert("ganaste")
        winCounter++;
        reset();
    }
}