function changeColor(radio, color) {
    var container = radio.parentNode.querySelector('.water_wave');
    var route = radio.closest('.route');

    // Reset color for all containers within the same set
    var containersInSet = route.querySelectorAll('.water_wave');
    containersInSet.forEach(function(containerInSet) {
        containerInSet.style.backgroundColor = '';
    });

    // Set color for the selected container
    if (radio.checked) {
        container.style.backgroundColor = color;
    }
}


// Predefined sequence of checked radio buttons
const correctSequence = [
    ['route1-2'], 
    ['route2-1'], 
    ['route3-1'], 
    ['route4-1'], 
    ['route5-1', 'route5-2'], 
    ['route6-2'], 
    ['route7-1', 'route7-2'], 
    ['route8-2'], 
    ['route9-1'], 
    ['route10-1']
];

var Q1Check = false;
var Q2Check = false;
var Q3Check = false;
var Q4Check = false;

// Function to check the sequence of checked radio buttons
function checkSequence() {
    var checkedButtons = document.querySelectorAll('.results input[type="radio"]:checked');
    var checkedIds = Array.from(checkedButtons).map(button => button.id);

    var correct = true;
    var correctCheckedButtons = []; // Array to store IDs of correct checked buttons
    var wrongCheckedButtons = []; // Array to store IDs of wrong checked buttons
    for (var i = 0; i < correctSequence.length; i++) {
        
        var correctSet = correctSequence[i];

        var isChecked = false;
        for (var j = 0; j < correctSet.length; j++) {
            if (checkedIds.includes(correctSet[j])) {
                isChecked = true;
                correctCheckedButtons.push(correctSet[j]); // Store ID of correct checked button
                var container = document.getElementById('ww_' + correctSet[j]);
                container.style.backgroundColor = 'green'; // Set background color to green for correct checked buttons
            }
        }
        if (!isChecked) {
            correct = false;
        }
    }

    var result = document.getElementById("result");
    if (correct) {
        Q4Check = true;
        checkCompletion();
        
        result.textContent = "Congratulations, Agent! You've found the best route through the checkpoints! The sail towards the village will be smooth now!";
        result.style.color = "green";
    } else {
        result.textContent = "The route to the village will be full of winds, keep exploring, there is a better route!";
        result.style.color = "red";
    }
    result.style.display = "block";

    // Display IDs of correct checked buttons (for testing)
    wrongCheckedButtons = checkedIds.filter(value => !correctCheckedButtons.includes(value));

    for (var i = 0; i < wrongCheckedButtons.length; i++) {
        var container = document.getElementById('ww_' + wrongCheckedButtons[i]);
        container.style.backgroundColor = 'red'; // Set background color to green for correct checked buttons
    }
}




// First Question
var keyInputQ1 = document.getElementById("userAnswerQ1");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

function checkAnswerQ1() {
    var userAnswer = document.getElementById("userAnswerQ1").value.trim().toLowerCase();
    var result = document.getElementById("result1");

    if (userAnswer === "190" || userAnswer === "190 miles" || userAnswer === "190miles" || userAnswer === "190 miles per hour" || userAnswer === "190 mph" || userAnswer === "190mph") {
        Q1Check = true;
        checkCompletion();
        
        result.textContent = "Congratulations Agent, your stealth and cunning would make even Viking raiders bow in awe.";
        result.style.color = "green";
        keyInputQ1.disabled = true;
        keyInputQ1.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, I expect more from you. Keep exploring the data!";
        result.style.color = "red";
        keyInputQ1.style.background = "#FF7676";
    }
    result.style.display = "block";
}


// Second Question
var keyInputQ2 = document.getElementById("userAnswerQ2");
keyInputQ2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q2").click();
    }
});

function checkAnswerQ2() {
    var userAnswer = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
    var result = document.getElementById("result2");

    if (userAnswer === "460" || userAnswer === "460 miles" || userAnswer === "460 miles per hour" || userAnswer === "460 mph" || userAnswer === "460mph" || userAnswer === "four hundred and sixty miles per hour" || userAnswer === "four hundred sixty") {
        Q2Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent. Your finesse rivals that of the stealthiest Viking scouts.";
        result.style.color = "green";
        keyInputQ2.disabled = true;
        keyInputQ2.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, it seems you've hit a snag in your Viking escapade. Time to regroup and reassess.";
        result.style.color = "red";
        keyInputQ2.style.background = "#FF7676";
    }
    result.style.display = "block";
}


// Third Question
var keyInputQ3 = document.getElementById("userAnswerQ3");
keyInputQ3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q3").click();
    }
});

function checkAnswerQ3() {
    var userAnswer = document.getElementById("userAnswerQ3").value.trim().toLowerCase();
    var result = document.getElementById("result3");

    if (userAnswer === "blue" || userAnswer === "wind speed 1" || userAnswer === "1") {
        Q3Check = true;
        checkCompletion();
        
        result.textContent = "Nicely done Agent! Your spy game could outsmart even the fiercest Viking warriors.";
        result.style.color = "green";
        keyInputQ3.disabled = true;
        keyInputQ3.style.background = "#C8E4B2";
    } else {
        result.textContent = "Looks like you've stumbled into a Viking hornet's nest, Agent. Try again!";
        result.style.color = "red";
        keyInputQ3.style.background = "#FF7676";
    }
    result.style.display = "block";
}

function checkCompletion() {
    if (Q1Check && Q2Check && Q3Check && Q4Check) {
        setPuzzleCompletionStatus(4, 'complete');
        var nextPuzzle = document.getElementById("next-puzzle");
        nextPuzzle.style.display = "block";
    }
} 
