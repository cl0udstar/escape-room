const simonSequence = [];
let playerSequence = [];
let currentStep = 0;
let currentLevel = 1;
const MAX_STEPS = 7; // Define the maximum number of steps
let flashData = []; // Array to store flash data
const orignalWords = ["The", "Secret", "Meeting", "Location", "Is", "Wolfskog", "Castle"];
const words = ["The", "Secret", "Meeting", "Location", "Is", "Wolfskog", "Castle"];
const random_words = ["A", "Fjordhelm", "Medium", "Dragonfjell", "Agent", "Viking", "Briefing", "Ship", "Helmet", "Data", "Axe", "Evil", "When", "11:00", "Plan", "Major X", "Area", "Travel", "Storm", "Road", "Tower"];
let errorCount = 0;

shuffleArray(words);

// Function to randomize the order of an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateRandomColor() {
    const colors = ['red', 'green', 'rgb(8, 197, 255)', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function addToSimonSequence() {
    const color = generateRandomColor();
    simonSequence.push(color);
    flashData.push({ color, step: currentStep }); // Store flash data
}

function displaySequence() {
    let i = 0;
    const interval = setInterval(() => {
        highlightButton(simonSequence[i]);
        i++;
        if (i >= currentStep) { // Check if reached current step
            clearInterval(interval);
            playerSequence = [];
        }
    }, 1000);
}

function highlightButton(color) {
    const button = document.getElementById(color);
    button.style.opacity = 0.5;
    setTimeout(() => {
        button.style.opacity = 1;
    }, 500);
}

function handleButtonClick(color) {
    highlightButton(color);
    playerSequence.push(color);
    if (playerSequence.length === currentStep) {
        checkSequence();
    }
}

function checkSequence() {
    if (JSON.stringify(playerSequence) === JSON.stringify(simonSequence.slice(0, currentStep))) {
        updateCircleColors(); // Call function to update circle colors
        if (currentStep === MAX_STEPS) { // Check if reached maximum steps
            endGame(); // End the game if reached maximum steps
        } else {
            addToSimonSequence();
            currentStep++; // Increment the current step
            setTimeout(() => {
                displaySequence();
            }, 1000);
        }
    } else {
        document.getElementById('simonErrorMessage').style.display = 'block';
        simonSequence.length = 0; // Clear the sequence
        addToSimonSequence();
        setTimeout(() => {
            displaySequence();
        }, 1000);
        playerSequence = [];
        resetCircleStyles(); // Reset the styles of the small circles
        resetGame()
    }
}

function resetGame() {
    simonSequence.length = 0;
    playerSequence = [];
    currentStep = 0;
    flashData = [];
}

function endGame() {
    document.getElementById('simonSuccessMessage').style.display = 'block';
    updateTable(); // Update the table with flash data
    updateRectangles(); // Update the small rectangles with jumbled words
}

// Function to update the table with flash data
function updateTable() {
    const colors = ['red', 'green', 'rgb(8, 197, 255)', 'yellow'];
    for (let i = 0; i < simonSequence.length; i++) {
        const color = simonSequence[i];
        const columnIndex = i + 2; // Start from column 2
        const rowID = `row${colors.indexOf(color) + 2}col${columnIndex}`; // Adjust row index to match color
        const cell = document.getElementById(rowID);
        cell.textContent = words[i]; // Update cell content
    }    
    // Call the fillEmptyCells function to fill the empty cells with words
    fillEmptyCells();
}

// Function to set the color of a specific small circle
function setCircleColor(index, color) {
    const circle = document.getElementById(`circle${index}`); // Get the circle element by its unique identifier
    circle.style.backgroundColor = color; // Set the background color of the circle
}

// Call the function within the game progression logic to update each circle's color as needed
function updateCircleColors() {
    const circles = document.querySelectorAll('.small-circle');
    for (let i = 0; i < currentStep; i++) {
        circles[i].style.backgroundColor = simonSequence[i];
        circles[i].style.backgroundImage = `url(${getImagePath(simonSequence[i])})`; // Set background image
        circles[i].innerHTML = ''; // Clear innerHTML
    }
}

// Function to get the image path corresponding to the color
function getImagePath(color) {
    switch (color) {
        case 'red':
            return '../assets/VikingHelmetSymbol.png';
        case 'green':
            return '../assets/VikingShipSymbol.png';
        case 'rgb(8, 197, 255)':
            return '../assets/VikingAxeSymbol.png';
        case 'yellow':
            return '../assets/VikingShieldSymbol.png';
    }
}

// Function to reset the styles of the small circles
function resetCircleStyles() {
    const circles = document.querySelectorAll('.small-circle');
    circles.forEach(circle => {
        circle.style.backgroundColor = 'gray'; // Set background color to default
        circle.style.backgroundImage = 'none'; // Remove background image
        circle.innerHTML = ''; // Clear innerHTML
    });
}

function startGame() {
    addToSimonSequence();
    currentStep = 1;
    displaySequence();
}

function next() {
    const circle = document.getElementById('circle');
    const tableContainer = document.getElementById('tableContainer');
    circle.style.transition = 'opacity 0.5s ease';
    circle.style.opacity = '0'; // Fade out the circle

    // Hide the circle immediately after the transition completes
    setTimeout(() => {
        circle.style.display = 'none'; // Hide the circle
    }, 500);

    // Fade in the table after the circle fades out
    setTimeout(() => {
        tableContainer.style.transition = 'opacity 0.5s ease';
        tableContainer.style.opacity = '1'; // Fade in the table
        tableContainer.style.display = 'block'; // Show the table
    }, 500);

    if (document.getElementById('circle-container').style.display = 'none'){
        document.getElementById('circle-container').style.display = 'flex'; // Show container
        document.getElementById('showHint').style.display = 'none'; // Hide hint button
    } 

    document.getElementById('simonSuccessMessage').style.display = 'none'; // Hide the success message
    document.getElementById('startButton').style.display = 'none'; // Hide the start button
    document.getElementById('verifyButton').style.display = 'block'; // Show the verification button
    document.getElementById('hideHint').style.display = 'none'; // Hide hint button
    addCellEventListeners();
}

// Array to store flags for each column indicating whether it has been clicked
let columnClicked = [false, false, false, false, false, false, false];

// Array to store trimmed text content of selected cells
const selectedWords = [];

function handleCellClick(cell) {
    const cellIndex = cell.cellIndex; // Get the index of the clicked cell's column
    const rows = document.querySelectorAll('tr'); // Get all table rows
    
    // If the column has been clicked, return early
    if (columnClicked[cellIndex]) {
        return;
    }
    
    // Iterate through each row starting from the second row (index 1)
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td'); // Get all cells in the current row
        
        // Iterate through each cell in the same column
        for (let j = 1; j < cells.length; j++) {
            // If the cell is in the same column as the clicked cell
            if (j === cellIndex) {
                // Change the background color of all cells in the same column except the clicked one
                if (cells[j] !== cell) {
                    cells[j].style.backgroundColor = 'black';
                    cells[j].style.color = 'black';
                }
                else {
                    selectedWords.push(cell.textContent.trim());
                }
            }
        }
    }
    
    // Set the flag for the clicked column to true
    columnClicked[cellIndex] = true;
}

// Add event listeners to table cells
function addCellEventListeners() {
    const cells = document.querySelectorAll('td'); // Get all table cells
    
    // Iterate through each cell starting from the second cell (index 1)
    for (let i = 1; i < cells.length; i++) {
        // Add event listener to each cell
        cells[i].addEventListener('click', function() {
            // Handle cell click event
            handleCellClick(this);
        });
    }
}

// Function to verify user selections
function verifySelections() {
    let correct = true;

    // Iterate through each word in the words array
    words.forEach(word => {
        // If the word is not found in the selectedWords array
        if (!selectedWords.includes(word)) {
            correct = false;
        }
    });

    // Show message based on correctness
    if (correct) {
        endTable();
    } else {
        document.getElementById('tableErrorMessage').style.display = 'block';
    }
}

// Function to fill remaining empty cells with words from the random_words array, excluding the first column
function fillEmptyCells() {
    const rows = document.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td');
        for (let j = 1; j < cells.length; j++) { // Start from the second column
            if (!cells[j].textContent.trim()) { // Check if cell is empty
                let index = Math.floor(Math.random() * random_words.length);
                cells[j].textContent = random_words[index];
                random_words.splice(index, 1); // Remove the word from the array to prevent duplicates
            }
        }
    }
}

// Function to reset the colors and make the cells clickable again
function resetTableColorsAndClickable() {
    // Reset the columnClicked array to contain only false values
    columnClicked = [false, false, false, false, false, false, false];
    const cells = document.querySelectorAll('td');
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const rowIndex = cell.parentNode.rowIndex;
        const columnIndex = cell.cellIndex;

        // Exclude first row and first column
        if (rowIndex > 0 && columnIndex > 0) {
            // Set cell colors based on row index
            switch (rowIndex) {
                case 1:
                    cell.style.backgroundColor = 'red';
                    cell.style.color = 'white';
                    break;
                case 2:
                    cell.style.backgroundColor = 'green';
                    cell.style.color = 'white';
                    break;
                case 3:
                    cell.style.backgroundColor = 'rgb(8, 197, 255)';
                    cell.style.color = 'white';
                    break;
                case 4:
                    cell.style.backgroundColor = 'yellow';
                    break;
            }
        }
    }
}

function endTable() {
    document.getElementById('tableSuccessMessage').style.display = 'block';
}


function tableNext() {
    document.getElementById('tableSuccessMessage').style.display = 'none';
    tableContainer.style.display = 'none'; // Hide the table
    document.getElementById('circle-container').style.display = 'none'; // Hide the progress circles
    document.getElementById('verifyButton').style.display = 'none'; // Hide the verification button
    document.getElementById('rectangle').style.display = 'flex'; // Show rectangle sequence
    document.getElementById('showHint').style.display = 'none'; // Hide hint buttons
    document.getElementById('hideHint').style.display = 'none'; // Hide hint buttons
    document.getElementById('checkButton').style.display = 'block'; // Hide hint buttons
}

function errorNext() {
    errorCount++;
    document.getElementById('simonErrorMessage').style.display = 'none';
    if  (document.getElementById('tableErrorMessage').style.display == 'block'){
        document.getElementById('tableErrorMessage').style.display = 'none';
        resetTableColorsAndClickable();
    } else if(errorCount === 1){
        document.getElementById('showHint').style.display = 'block';
    }
   
}

function showHint(){
    document.getElementById('showHint').style.display = 'none';
    document.getElementById('hideHint').style.display = 'block';
    document.getElementById('circle-container').style.display = 'flex';
}

function hideHint(){
    document.getElementById('showHint').style.display = 'block';
    document.getElementById('hideHint').style.display = 'none';
    document.getElementById('circle-container').style.display = 'none';
}

function updateRectangles() {
    const smallRectangles = document.querySelectorAll('.small-rectangle');
    assignWordsToRectangles(words, smallRectangles);
}

// Function to assign words to small rectangles
function assignWordsToRectangles(words, smallRectangles) {
    smallRectangles.forEach((rectangle, index) => {
        rectangle.textContent = words[index]; // Assign each word to a small rectangle
    });
}

function checkFinalSequence() {
    const rectangleWords = [];
    const originalWords = ["The", "Secret", "Meeting", "Location", "Is", "Wolfskog", "Castle"];
    let correctCount = 0; // Initialize a counter for correct words

    // Get the words from the rectangles
    const rectangleElements = document.querySelectorAll('.small-rectangle');
    rectangleElements.forEach(rectangle => {
        rectangleWords.push(rectangle.textContent.trim());
    });

    // Compare each word with the corresponding word in the originalWords array
    for (let i = 0; i < rectangleWords.length; i++) {
        if (rectangleWords[i] === originalWords[i]) {
            rectangleElements[i].classList.remove('incorrect'); // Remove incorrect class
            rectangleElements[i].classList.add('correct'); // Add correct class
            correctCount++; // Increment the correct count
        } else {
            rectangleElements[i].classList.remove('correct'); // Remove correct class
            rectangleElements[i].classList.add('incorrect'); // Add incorrect class
        }
    }

    if (correctCount === rectangleWords.length) {
        document.getElementById('finalSuccessMessage').style.display = 'block';
    }
}
