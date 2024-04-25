////////////////////////////////////////////////////////////
// Function to shuffle both lists
////////////////////////////////////////////////////////////
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get the lists
const list1 = document.querySelector('.sortable-list1');
const list2 = document.querySelector('.sortable-list2');
const list3 = document.querySelector('.details-container');

// Get list items
const itemsArray1 = Array.from(list1.children);
const itemsArray2 = Array.from(list2.children);
const itemsArray3 = Array.from(list3.children);

// Shuffle list items
const shuffledItems1 = shuffleArray(itemsArray1);
const shuffledItems2 = shuffleArray(itemsArray2);
const shuffledItems3 = shuffleArray(itemsArray3);


// Clear lists
list1.innerHTML = '';
list2.innerHTML = '';
list3.innerHTML = '';

// Append shuffled items back to lists
shuffledItems1.forEach(item => list1.appendChild(item));
shuffledItems2.forEach(item => list2.appendChild(item));
shuffledItems3.forEach(item => list3.appendChild(item));
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Function to get the value of each list item with the class 'item1'
////////////////////////////////////////////////////////////
var list1ValuesArray = [];
var listItems1 = document.querySelectorAll('.item1');

listItems1.forEach(function(item) {
    var value = item.getAttribute('value');

    list1ValuesArray.push(value);
});

// Sort the array in descending order
list1ValuesArray.sort(function(a, b) {
    // Convert values to numbers and compare in descending order
    return parseInt(b) - parseInt(a);
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Function to get the value of each list item with the class 'item2'
////////////////////////////////////////////////////////////
var list2ValuesArray = [];
var listItems2 = document.querySelectorAll('.item2');

listItems2.forEach(function(item) {
    var value = item.getAttribute('value');

    list2ValuesArray.push(value);
});

// Sort the array in descending order
list2ValuesArray.sort(function(a, b) {
    // Convert values to numbers and compare in descending order
    return parseInt(b) - parseInt(a);
});
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Function to move an item up and down
////////////////////////////////////////////////////////////
function moveItemUp(item) {
    const previousItem = item.previousElementSibling;
    if (previousItem) {
        item.parentNode.insertBefore(item, previousItem);
        checkArraysAndSetColor1();
        checkArraysAndSetColor2();
    }
}

function moveItemDown(item) {
    const nextItem = item.nextElementSibling;
    if (nextItem) {
        item.parentNode.insertBefore(nextItem, item);
        checkArraysAndSetColor1();
        checkArraysAndSetColor2();
    }
}
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Add click event listeners to select list items
////////////////////////////////////////////////////////////
listItems1.forEach(item => {
    item.addEventListener("click", () => {
        // Remove selected class from all items
        listItems1.forEach(item => {
            item.classList.remove("selected");
        });
        // Add selected class to the clicked item
        item.classList.add("selected");
    });
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Check the arrays
////////////////////////////////////////////////////////////
function checkArraysAndSetColor1() {
    var secondList1ValuesArray = [];
    var listItemsSortable1 = document.querySelectorAll('.item1');

    // Loop through each <li> element
    listItemsSortable1.forEach(function(item) {
        var value = item.getAttribute('value');

        // Push the value into the array
        secondList1ValuesArray.push(value);
    });

    if (secondList1ValuesArray.toString() === list1ValuesArray.toString()) {
        // console.log("Both arrays are equal");
        var theItems = document.getElementsByClassName("item1");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "#C8E4B2";

            const itemControls = theItems[i].querySelector('.item-controls');
            if (itemControls) {
                itemControls.style.display = 'none'; // Show arrows
            }
        }
    } else {
        var theItems = document.getElementsByClassName("item1");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "";
        }
    }
}
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Add click event listeners to select list items
////////////////////////////////////////////////////////////
listItems2.forEach(item => {
    item.addEventListener("click", () => {
        // Remove selected class from all items
        listItems2.forEach(item => {
            item.classList.remove("selected");
        });
        // Add selected class to the clicked item
        item.classList.add("selected");
    });
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Check the arrays
////////////////////////////////////////////////////////////
function checkArraysAndSetColor2() {
    var secondList2ValuesArray = [];
    var listItemsSortable2 = document.querySelectorAll('.item2');

    // Loop through each <li> element
    listItemsSortable2.forEach(function(item) {
        var value = item.getAttribute('value');

        // Push the value into the array
        secondList2ValuesArray.push(value);
    });

    if (secondList2ValuesArray.toString() === list2ValuesArray.toString()) {
        // console.log("Both arrays are equal");
        var theItems = document.getElementsByClassName("item2");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "#C8E4B2";
            const itemControls = theItems[i].querySelector('.item-controls');
            if (itemControls) {
                itemControls.style.display = 'none'; // Show arrows
            }
        }
    } else {
        var theItems = document.getElementsByClassName("item2");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "";
        }
    }
}
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Functions for the keypad
////////////////////////////////////////////////////////////
let isInputWrong = false;
function addToDisplay(letter) {
    if (isInputWrong) {
        clearInput();
        isInputWrong = false;
    }
    var display = document.getElementById('display');
    display.style.color = '#7ECD07';
    display.style.textAlign = 'center';
    display.value += letter.textContent; // Use the button's text content
}
  
function checkInput() {
    var display = document.getElementById('display');
    var inputValue = display.value;
    
  
    // Example validation: Check if input contains all the required letters
    var requiredLetters = [matchedSequence];
    var isValid = requiredLetters.every(letter => inputValue.includes(letter));

    if (isValid) {
        display.removeAttribute('readonly');
        display.value = "Success!";
        display.setAttribute('readonly', 'readonly');

        // Hide puzzle containers after a slight delay
        setTimeout(function() {
            var puzzleContainer2 = document.getElementById('p-container2');
            var puzzleContainer3 = document.getElementById('p-container3');
            var puzzleContainer4 = document.getElementById('p-container4');
            var puzzleContainer5 = document.getElementById('p-container5');
            puzzleContainer2.style.display = 'none';
            puzzleContainer3.style.display = 'none';
            puzzleContainer4.style.display = 'none';
            puzzleContainer5.style.display = 'none';
        }, 100);

        setPuzzleCompletionStatus(5, 'complete');
        var nextPuzzle = document.getElementById("next-puzzle");
        nextPuzzle.style.display = "block";
    } else {
        isInputWrong = true;
        display.removeAttribute('readonly');
        display.value = "Wrong passkey! Try Again!";
        display.setAttribute('readonly', 'readonly');
    }
}

function clearInput() {
    document.getElementById('display').value = '';
}


// Function to update keypad button labels based on the matched sequence
function updateKeypadButtons(matchedSequence) {
    const letterButtons = document.querySelectorAll('#letterButton');

    const chars = matchedSequence.split('');

    const uniqueChars = Array.from(new Set(chars));

    // Shuffle the array of characters
    for (let i = uniqueChars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueChars[i], uniqueChars[j]] = [uniqueChars[j], uniqueChars[i]];
    }

    // Create a pool of available letters excluding those already in uniqueChars
    const availableLetters = [];
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        if (!uniqueChars.includes(letter)) {
            availableLetters.push(letter);
        }
    }

    // Fill in the remaining buttons with random letters
    const remainingButtons = letterButtons.length - uniqueChars.length;
    for (let i = 0; i < remainingButtons; i++) {
        const randomIndex = Math.floor(Math.random() * availableLetters.length);
        const randomLetter = availableLetters[randomIndex];
        uniqueChars.push(randomLetter);
        availableLetters.splice(randomIndex, 1); // Remove the selected letter from availableLetters
    }

    // Iterate over each letter button
    letterButtons.forEach((button, index) => {
        // Update button label with the matched sequence letter
        button.textContent = uniqueChars[index];
    });
}
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Functions for showing the image bigger and smaller
////////////////////////////////////////////////////////////
function showBigImage() {
    document.querySelector('.keypad-image-small').style.display = 'none';
    document.querySelector('.keypad-image-big').style.display = 'block';
    document.querySelector('.dark-overlay').style.display = 'block';
}

function hideBigImage() {
    document.querySelector('.keypad-image-big').style.display = 'none';
    document.querySelector('.keypad-image-small').style.display = 'block';
    document.querySelector('.dark-overlay').style.display = 'none';
}
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Function for the Step 2 'Match the letters with each location'
////////////////////////////////////////////////////////////
let currentLetter = '';
let placedCorrectlyNo = 0;

const letterButtons = document.querySelectorAll('.letter-button');

letterButtons.forEach(item => {
    item.addEventListener("click", () => {
        var buttonValue = item.getAttribute('value');

        currentLetter = buttonValue;
        
        // Remove selected class from all items
        letterButtons.forEach(item => {
            item.classList.remove("selected");
        });
        // Add selected class to the clicked item
        item.classList.add("selected");
    });
});

function placeLetter(details) {
    if (currentLetter !== '') {
        const circle = details.querySelector('.letter-circle');
        circle.innerText = currentLetter;
        currentLetter = '';

        // Check if the placed letter is correct
        const correctLetter = circle.getAttribute('data-value');
        var result = document.getElementById("resultStep2");

        // Check if the placed letter is correct or not
        if (circle.innerText === correctLetter) {
            circle.classList.add('correct');
            circle.style.background = "#C8E4B2";

            placedCorrectlyNo += 1;

            if (placedCorrectlyNo === 10) {
                result.textContent = "Nice work, Agent! It seems the combination is close to being cracked!";
                result.style.color = "green";
                result.style.display = "block";
            }
        } else {
            if (circle.classList.contains('correct')) {
                placedCorrectlyNo -= 1;
            }
            circle.classList.remove('correct');
            circle.style.background = "";
            result.style.display = "none";
        }

        // Remove highlight from all letter buttons
        letterButtons.forEach(button => {
            button.classList.remove("selected");
        });
    }
}
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Step 3 Functionality
////////////////////////////////////////////////////////////
var keyInputQ1 = document.getElementById("userAnswerStep3");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

function checkAnswerQ1() {
    var userAnswer = document.getElementById("userAnswerStep3").value.trim().toUpperCase();
    var result = document.getElementById("resultStep3");

    if (userAnswer === "SFHFKDIXFO") {
        result.textContent = "Nice work, Agent! It seems the combination is close to being cracked!";
        result.style.color = "green";
        keyInputQ1.disabled = true;
        keyInputQ1.style.background = "#C8E4B2";

        var puzzleContainer2 = document.getElementById('p-container2');
        var puzzleContainer3 = document.getElementById('p-container3');
        puzzleContainer2.style.display = 'none';
        puzzleContainer3.style.display = 'none';
    } else {
        result.textContent = "Agent, this is a challenging one. Keep at it!";
        result.style.color = "red";
        keyInputQ1.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Preparation for the keypad functionality
////////////////////////////////////////////////////////////
function caesarShiftAlphabet(box) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = Array.from(box.querySelectorAll('.alphabet-letter'));

    // Generate a random shift amount between 1 and 25
    const shiftAmount = Math.floor(Math.random() * 25) + 1;

    // Perform the Caesar shift on each letter
    letters.forEach((letter, index) => {
        const originalIndex = alphabet.indexOf(letter.textContent);
        const shiftedIndex = (originalIndex + shiftAmount) % 26; // Wrap around if index exceeds 25
        const shiftedLetter = alphabet.charAt(shiftedIndex);
        letter.textContent = shiftedLetter;
    });

    return shiftAmount;
}

// Function to match a given letter sequence against the shifted alphabet
function matchSequence(sequence, shiftAmount) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let matchedSequence = '';

    // Iterate over each letter in the sequence
    for (let i = 0; i < sequence.length; i++) {
        const letter = sequence[i];
        const originalIndex = alphabet.indexOf(letter);
        const shiftedIndex = (originalIndex + shiftAmount) % 26; // Apply the same shift amount
        matchedSequence += alphabet.charAt(shiftedIndex);
    }

    return matchedSequence;
}
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Step 4 Functionality
////////////////////////////////////////////////////////////
const box1 = document.querySelector('.alphabet-box');
const box2 = document.querySelector('.alphabet-box2');
const shiftedBox = document.querySelector('.alphabet-box2');

const shiftAmount = caesarShiftAlphabet(shiftedBox);
const sequence = 'SFHFKDIXFO';

// Match the sequence against the shifted alphabet
const matchedSequence = matchSequence(sequence, shiftAmount);

updateKeypadButtons(matchedSequence);
// Output the matched sequence to the console
console.log("Matched Sequence:", matchedSequence);


// Highlight corresponding letters in alphabet-box1 when hovering over letters in alphabet-box2
const letters1 = box1.querySelectorAll('.alphabet-letter');
const letters2 = box2.querySelectorAll('.alphabet-letter');

letters1.forEach((letter1, index) => {
    letter1.addEventListener('mouseenter', () => {
        const letter2 = box2.querySelectorAll('.alphabet-letter')[index];
        letter2.classList.add('highlighted');
    });
    letter1.addEventListener('mouseleave', () => {
        const letter2 = box2.querySelectorAll('.alphabet-letter')[index];
        letter2.classList.remove('highlighted');
    });
});
  
letters2.forEach((letter2, index) => {
    letter2.addEventListener('mouseenter', () => {
        const letter1 = box1.querySelectorAll('.alphabet-letter')[index];
        letter1.classList.add('highlighted');
    });
    letter2.addEventListener('mouseleave', () => {
        const letter1 = box1.querySelectorAll('.alphabet-letter')[index];
        letter1.classList.remove('highlighted');
    });
});
////////////////////////////////////////////////////////////
