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
        container.style.backgroundColor = 'red';
    }
}

// First Question
// var keyInputQ2 = document.getElementById("userAnswerQ2");
// keyInputQ2.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("check-q2").click();
//     }
// });

// function checkAnswerQ2() {
//     var userAnswer = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
//     var result = document.getElementById("result2");

//     if (userAnswer === "blue" || userAnswer === "wind speed 1" || userAnswer === "1") {
//         result.textContent = "Nicely done Agent! Your spy game could outsmart even the fiercest Viking warriors.";
//         result.style.color = "green";
//     } else {
//         result.textContent = "Looks like you've stumbled into a Viking hornet's nest, Agent. Try again!";
//         result.style.color = "red";
//     }
//     result.style.display = "block";
// }


// Second Question
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

    if (userAnswer === "190" || userAnswer === "190 miles" || userAnswer === "190 miles per hour" || userAnswer === "190 mph") {
        result.textContent = "Congratulations Agent, your stealth and cunning would make even Viking raiders bow in awe.";
        result.style.color = "green";
    } else {
        result.textContent = "Agent, I expect more from you. Keep exploring the data!";
        result.style.color = "red";
    }
    result.style.display = "block";
}


// Third Question
var keyInputQ4 = document.getElementById("userAnswerQ4");
keyInputQ4.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q4").click();
    }
});

function checkAnswerQ4() {
    var userAnswer = document.getElementById("userAnswerQ4").value.trim().toLowerCase();
    var result = document.getElementById("result4");

    if (userAnswer === "460" || userAnswer === "460 miles" || userAnswer === "460 miles per hour" || userAnswer === "460 mph" || userAnswer === "460 mph") {
        result.textContent = "Well done, Agent. Your finesse rivals that of the stealthiest Viking scouts.";
        result.style.color = "green";
    } else {
        result.textContent = "Agent, it seems you've hit a snag in your Viking escapade. Time to regroup and reassess.";
        result.style.color = "red";
    }
    result.style.display = "block";
}
