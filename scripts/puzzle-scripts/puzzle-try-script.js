var clue1Clicked = false;

function revealClue1() {
    document.getElementById("clue1").style.display = "block";
    clue1Clicked = true;
    document.getElementById("clue2Button").innerHTML = "Clue 2";
    document.getElementById("clue2Button").disabled = false;
}

function revealClue2() {
    if (clue1Clicked) {
        document.getElementById("clue2").style.display = "block";
        document.getElementById("clue2Button").innerHTML = "Clue 2";
    }
}

function checkAnswer() {
    var userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
    var correctAnswer = "star axe";
    var result = document.getElementById("result");

    if (userAnswer === correctAnswer || userAnswer === "staraxe" || userAnswer === "axe" || userAnswer === "star") {
        result.textContent = "Congratulations! You've proven yourself a true cosmic warrior!";
        result.style.color = "green";
    } else {
        result.textContent = "Oops! That's not correct. Keep exploring the clues!";
        result.style.color = "red";
    }
    result.style.display = "block";
}
