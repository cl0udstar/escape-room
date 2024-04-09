const svg = document.getElementById('graph-svg');
const graphContainer = document.getElementById('graph-container');
const gridSize = 25; // Adjust grid size for fitting 16 on both axes
const centerX = 60; // Adjust center X coordinate of the SVG canvas
const centerY = 450; // Adjust center Y coordinate of the SVG canvas

// Array to store points
let points = [];

// Define the correct coordinates for the star shape
const correctCoordinates = [
    { x: 3, y: 2 },
    { x: 4, y: 7 },
    { x: 0, y: 10 },
    { x: 5, y: 10 },
    { x: 7, y: 15 },
    { x: 9, y: 10 },
    { x: 14, y: 10 },
    { x: 10, y: 7 },
    { x: 11, y: 2 },
    { x: 7, y: 5 },
    { x: 3, y: 2 },
];

// Function to draw points, lines, and axes
function drawGraph() {
    svg.innerHTML = ''; // Clear previous drawings

    // Draw x line
    const xLineElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    xLineElement.setAttribute('class', 'line');
    xLineElement.setAttribute('x1', 50);
    xLineElement.setAttribute('y1', centerY);
    xLineElement.setAttribute('x2', 480);
    xLineElement.setAttribute('y2', centerY);
    svg.appendChild(xLineElement);

    // Draw y line
    const yLineElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    yLineElement.setAttribute('class', 'line');
    yLineElement.setAttribute('x1', centerX);
    yLineElement.setAttribute('y1', 30);
    yLineElement.setAttribute('x2', centerX);
    yLineElement.setAttribute('y2', 450);
    svg.appendChild(yLineElement);

    // Draw grid lines and add coordinates along axes
    for (let i = 0; i <= 16; i++) { // Change the loop range to 16
        const gridLineX = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        gridLineX.setAttribute('class', 'grid-line');
        gridLineX.setAttribute('x1', centerX + i * gridSize);
        gridLineX.setAttribute('y1', 30);
        gridLineX.setAttribute('x2', centerX + i * gridSize);
        gridLineX.setAttribute('y2', 450);
        svg.appendChild(gridLineX);

        // Add coordinates along x axis
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', centerX + i * gridSize);
        text.setAttribute('y', centerY + 20);
        text.textContent = i.toString();
        svg.appendChild(text);
    }

    for (let i = 0; i <= 16; i++) {
        const gridLineY = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        gridLineY.setAttribute('class', 'grid-line');
        gridLineY.setAttribute('x1', 60);
        gridLineY.setAttribute('y1', centerY - i * gridSize);
        gridLineY.setAttribute('x2', 480);
        gridLineY.setAttribute('y2', centerY - i * gridSize);
        svg.appendChild(gridLineY);

        // Add coordinates along y axis
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', centerX - 25);
        text.setAttribute('y', centerY - i * gridSize + 5);
        text.textContent = i.toString();
        svg.appendChild(text);
    }

    // Draw points and lines
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute('class', 'point');
        circle.setAttribute('cx', centerX + point.x * gridSize);
        circle.setAttribute('cy', centerY - point.y * gridSize);
        circle.setAttribute('r', '5');
        svg.appendChild(circle);
    }

    // Draw lines connecting correct points
    if (points.length === 11) {
        const lines = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        for (let i = 0; i < points.length - 1; i++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            line.setAttribute('class', 'line');
            line.setAttribute('x1', centerX + points[i].x * gridSize);
            line.setAttribute('y1', centerY - points[i].y * gridSize);
            line.setAttribute('x2', centerX + points[i + 1].x * gridSize);
            line.setAttribute('y2', centerY - points[i + 1].y * gridSize);
            lines.appendChild(line);
        }
        svg.appendChild(lines);
    }
}

drawGraph(); // Initial draw for the first puzzle container

// Function to handle adding a point for the first puzzle container
function addPoint() {
    const x = parseInt(document.getElementById('x-coordinate').value);
    const y = parseInt(document.getElementById('y-coordinate').value);

    if (!isNaN(x) && !isNaN(y)) {
        const newPoint = { x: x, y: y };
        let isValid = true;
        // Check if the entered coordinates match any correct coordinates
        for (const coord of correctCoordinates) {
            if (coord.x === newPoint.x && coord.y === newPoint.y) {
                isValid = true;
                break;
            } else {
                isValid = false;
            }
        }
        // If valid, add the point
        if (isValid) {
            points.push(newPoint);
            drawGraph(); // Redraw graph with updated points and lines
        } else {
            alert('The entered coordinates are incorrect. Please enter valid coordinates.');
        }
    } else {
        alert('Please enter valid coordinates.');
    }
}

// Event listener for adding a point for the first puzzle container
document.getElementById('add-point-btn').addEventListener('click', addPoint);

// Event listener for Enter key press for adding a point for the first puzzle container
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.activeElement.id !== 'answer') {
        addPoint(); // Add point if focus is not on the answer input field
    }
});

// Function to check answer for the second puzzle container
function checkAnswerSecondPuzzle() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = "star";
    const feedback = document.getElementById('feedback');

    if (answer === correctAnswer) {
        feedback.textContent = "Correct!";
        document.getElementById('hint').textContent = ""; // Clear hint
        // Disable the answer input field after correct answer
        document.getElementById('answer').disabled = true;
        // Remove the event listener for the "Check Answer" button
        document.getElementById('check-answer-btn').removeEventListener('click', checkAnswerSecondPuzzle);
    } else {
        feedback.textContent = "Incorrect! Try again.";
        // You can provide a hint here, e.g., display a hint message
        document.getElementById('hint').textContent = "Hint: A quote from Vi: 'Nothing beats kicking back after dusk, eyes glued to those twinkling specks painting the night.'";
    }
}

// Event listener for the "Check Answer" button for the second puzzle container
document.getElementById('check-answer-btn').addEventListener('click', checkAnswerSecondPuzzle);

// Event listener for Enter key press for the second puzzle container
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.activeElement.id === 'answer') {
        checkAnswerSecondPuzzle(); // Check the answer if focus is on the answer input field
    }
});
