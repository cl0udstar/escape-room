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
function addToDisplay(letter) {
    var display = document.getElementById('display');
    display.style.color = '#7ECD07';
    display.style.textAlign = 'center';
    display.value += letter;
}
  
function checkInput() {
    var display = document.getElementById('display');
    var inputValue = display.value;
  
    // Example validation: Check if input contains all the required letters
    var requiredLetters = ['FOX'];
    var isValid = requiredLetters.every(letter => inputValue.includes(letter));
  
    if (isValid) {
        alert('Input is valid!');
    } else {
        alert('Input is invalid. Please enter all required letters.');
    }
}

function clearInput() {
    document.getElementById('display').value = '';
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
            }
            result.style.display = "block";
        } else {
            // If the placed letter was initially correct but changed to wrong, subtract from placedCorrectlyNo
            if (circle.classList.contains('correct')) {
                placedCorrectlyNo -= 1;
            }
            circle.classList.remove('correct'); // Remove the 'correct' class
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
    } else {
        result.textContent = "Agent, this is a challenging one. Keep at it!";
        result.style.color = "red";
        keyInputQ1.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////////////////
