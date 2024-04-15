const svg = document.getElementById('graph-svg');
const graphContainer = document.getElementById('graph-container');
const gridSize = 50; // Size of the grid squares

// Array to store points
let points = [
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
    { x: 0, y: 0},
];

// Function to generate random coordinates
function generateRandomCoordinates() {
    const randomCoordinates = [];
    for (let i = 0; i < points.length; i++) {
        const randomY = getRandomInt(1, 7) * gridSize; // Random Y coordinate snapped to grid
        randomCoordinates.push({ x: i * gridSize, y: randomY });
    }
    // console.log(randomCoordinates);

    return randomCoordinates;
}

// Function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random coordinates for initial points
points = generateRandomCoordinates();

// Coordinates for x and y lines
const xLine = [{ x: 0, y: 400 }, { x: 600, y: 400 }];
const yLine = [{ x: 0, y: 0 }, { x: 0, y: 400 }];

// Function to draw points, lines, and axes
function drawGraph() {
    svg.innerHTML = ''; // Clear previous drawings

    // Draw custom text for x-axis
    const customXText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    customXText.setAttribute('class', 'text');
    customXText.setAttribute('x', 300);
    customXText.setAttribute('y', 450);
    customXText.setAttribute('text-anchor', 'middle');
    customXText.textContent = 'Time (PM)';
    svg.appendChild(customXText);
    
    // Draw custom text for y-axis
    const customYText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    customYText.setAttribute('class', 'text');
    customYText.setAttribute('x', -200);
    customYText.setAttribute('y', -60); // Adjust the y-coordinate as needed
    customYText.setAttribute('text-anchor', 'middle');
    customYText.setAttribute('transform', 'rotate(-90)');
    customYText.textContent = 'Numbers';
    svg.appendChild(customYText);
    
    // Draw x line
    const xLineElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    xLineElement.setAttribute('class', 'line');
    xLineElement.setAttribute('x1', xLine[0].x);
    xLineElement.setAttribute('y1', xLine[0].y);
    xLineElement.setAttribute('x2', xLine[1].x);
    xLineElement.setAttribute('y2', xLine[1].y);
    svg.appendChild(xLineElement);

    // Draw y line
    const yLineElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    yLineElement.setAttribute('class', 'line');
    yLineElement.setAttribute('x1', yLine[0].x);
    yLineElement.setAttribute('y1', yLine[0].y);
    yLineElement.setAttribute('x2', yLine[1].x);
    yLineElement.setAttribute('y2', yLine[1].y);
    svg.appendChild(yLineElement);

    // Draw grid lines and add coordinates along axes
    for (let i = gridSize; i < 600; i += gridSize) {
        const gridLineX = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        gridLineX.setAttribute('class', 'grid-line');
        gridLineX.setAttribute('x1', i);
        gridLineX.setAttribute('y1', 0);
        gridLineX.setAttribute('x2', i);
        gridLineX.setAttribute('y2', 400);
        svg.appendChild(gridLineX);

        // Add coordinates along x axis
        const hour = i / gridSize % 12 || 12; // Convert grid position to 12-hour format
        // const period = 'PM'; // Set period to PM
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', i);
        text.setAttribute('y', 415);
        text.textContent = hour + ':00 '; // Display hour and period
        svg.appendChild(text);
    }

    for (let i = gridSize; i < 400; i += gridSize) {
        const gridLineY = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        gridLineY.setAttribute('class', 'grid-line');
        gridLineY.setAttribute('x1', 0);
        gridLineY.setAttribute('y1', i);
        gridLineY.setAttribute('x2', 600);
        gridLineY.setAttribute('y2', i);
        svg.appendChild(gridLineY);
    
        // Add coordinates along y axis
        const labelValue = 400 - i; // Adjust label calculation
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', -25);
        text.setAttribute('y', i + 5);
        text.textContent = labelValue.toString();
        svg.appendChild(text);
    }
    

    // Draw points and lines
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute('class', 'point');
        circle.setAttribute('cx', point.x);
        circle.setAttribute('cy', point.y);
        circle.setAttribute('r', '5');
        svg.appendChild(circle);

        // Set different color for the first point
        if (i === 0) {
            circle.setAttribute('fill', 'red'); // Change the color of the first point here
        }

        // Draw lines between points
        if (i > 0) {
            const prevPoint = points[i - 1];
            const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            line.setAttribute('class', 'line');
            line.setAttribute('x1', prevPoint.x);
            line.setAttribute('y1', prevPoint.y);
            line.setAttribute('x2', point.x);
            line.setAttribute('y2', point.y);
            svg.appendChild(line);
        }
    }
}

drawGraph(); // Initial draw


// Define function to get y coordinate for a given x coordinate index
function getYCoordinateForXIndex(xIndex) {
    if (xIndex >= 0 && xIndex < points.length) {
        return points[xIndex].y;
    } else {
        console.error("Invalid x index provided.");
        return null;
    }
}

// Define the maximum y-coordinate of your graph
const maxYCoordinate = 400;

// Get y coordinates for specific x coordinates and adjust them as per your requirement
const xCoordinates = [2, 6, 10]; // Assuming these are the x coordinates you want
const yCoordinates = xCoordinates.map(x => maxYCoordinate - getYCoordinateForXIndex(x));

// console.log("Y coordinates for x coordinates:", yCoordinates);

var Q1Check = false;
var Q2Check = false;
var Q3Check = false;

// First Question
var keyInputQ1 = document.getElementById("userAnswerQ1");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var keyInputQ2 = document.getElementById("userAnswerQ2");
keyInputQ2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var keyInputQ3 = document.getElementById("userAnswerQ3");
keyInputQ3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var nextPuzzle = document.getElementById("next-puzzle");

function checkAnswerQ1() {
    var userAnswer1 = document.getElementById("userAnswerQ1").value.trim().toLowerCase();
    var userAnswer2 = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
    var userAnswer3 = document.getElementById("userAnswerQ3").value.trim().toLowerCase();
    var result = document.getElementById("result1");

    if (userAnswer1 === yCoordinates[0].toString() && userAnswer2 === yCoordinates[1].toString() && userAnswer3 === yCoordinates[2].toString()) {
        Q1Check = true;
        Q2Check = true;
        Q3Check = true;

        checkCompletion();

        result.textContent = "Agent, your skills are so sharp, even the Vikings would admire your craftiness.";
        result.style.color = "green";
        nextPuzzle.style.display = "block";

        var keyInputs = [keyInputQ1, keyInputQ2, keyInputQ3];

        for (var i = 0; i < keyInputs.length; i++) {
            // Disable the input
            keyInputs[i].disabled = true;
            // Change the background color
            keyInputs[i].style.background = "#C8E4B2";
        }
    } else {
        if (userAnswer1 === yCoordinates[0].toString()) {
            Q1Check = true;

            keyInputQ1.disabled = true;
            keyInputQ1.style.background = "#C8E4B2";
        } else {
            keyInputQ1.style.background = "#FF7676";
        }

        if (userAnswer2 === yCoordinates[1].toString()) {
            Q2Check = true;

            keyInputQ2.disabled = true;
            keyInputQ2.style.background = "#C8E4B2";
        } else {
            keyInputQ2.style.background = "#FF7676";
        }

        if (userAnswer3 === yCoordinates[2].toString()) {
            Q3Check = true;

            keyInputQ3.disabled = true;
            keyInputQ3.style.background = "#C8E4B2";
        } else {
            keyInputQ3.style.background = "#FF7676";
        }

        result.textContent = "Agent, it seems your mission has hit a Norse iceberg. Time for damage control!";
        result.style.color = "red";
    }
    result.style.display = "block";
}

function checkCompletion() {
    if (Q1Check && Q2Check && Q3Check) {
        setPuzzleCompletionStatus(1, 'complete');
    }
}
