const words = ["apple", "banana", "orange", "grape", "melon", "kiwi", "cherry", "mango", "strawberry"];
let currentWord = "";

document.addEventListener("DOMContentLoaded", generateRandomWord);

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    const scrambledWord = scrambleWord(currentWord);
    document.getElementById("scrambled-word").textContent = scrambledWord;
    document.getElementById("user-input").value = "";
    document.getElementById("result").textContent = "";
}

function scrambleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

function checkGuess() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    if (userInput === currentWord) {
        document.getElementById("result").textContent = "Correct! Well done!";
    } else {
        document.getElementById("result").textContent = "Try again. Incorrect.";
    }
}
