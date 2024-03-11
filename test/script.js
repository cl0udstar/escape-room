// JavaScript for creating the interactive graph
const svg = document.getElementById('graph-svg');
const graphContainer = document.getElementById('graph-container');
const gridSize = 50; // Size of the grid squares

// Array to store points
let points = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
];

// Function to generate random coordinates
function generateRandomCoordinates() {
    const randomCoordinates = [];
    for (let i = 0; i < points.length; i++) {
        const randomX = getRandomInt(1, 11) * gridSize; // Random X coordinate snapped to grid
        const randomY = getRandomInt(1, 7) * gridSize; // Random Y coordinate snapped to grid
        randomCoordinates.push({ x: randomX, y: randomY });
    }
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
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', i);
        text.setAttribute('y', 415);
        text.textContent = i.toString();
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
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', -25);
        text.setAttribute('y', i + 5);
        text.textContent = (400 - i).toString();
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
        circle.setAttribute('data-index', i);
        circle.addEventListener('mousedown', startDragging);
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



// Function to handle dragging of points
function startDragging(event) {
    const index = event.target.getAttribute('data-index');
    const point = points[index];
    let offsetX = event.clientX - point.x;
    let offsetY = event.clientY - point.y;

    function movePoint(e) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;
        
        // Ensure the point stays within the boundaries of the graph container
        newX = Math.max(0, Math.min(Math.round(newX / gridSize) * gridSize, 600));
        newY = Math.max(0, Math.min(Math.round(newY / gridSize) * gridSize, 400));

        point.x = newX;
        point.y = newY;
        drawGraph();
    }

    function stopDragging() {
        window.removeEventListener('mousemove', movePoint);
        window.removeEventListener('mouseup', stopDragging);
    }

    window.addEventListener('mousemove', movePoint);
    window.addEventListener('mouseup', stopDragging);
}

drawGraph(); // Initial draw


// Define the correct coordinates
const correctCoordinates = [
    { x: 100, y: 100 },
    { x: 150, y: 150 },
    { x: 200, y: 200 }
];

// Function to display feedback
function displayFeedback(isCorrect) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = isCorrect ? 'Correct!' : 'Wrong. Please try again.';
}

// Function to check if the current positions match the correct coordinates
function checkAnswer() {
    // Check if the current coordinates match the correct coordinates
    const isCorrect = points.every((point, index) => {
        const correctPoint = correctCoordinates[index];
        return point.x === correctPoint.x && point.y === correctPoint.y;
    });

    // Display feedback to the user
    displayFeedback(isCorrect);
}

// Add event listener to the check button
const checkButton = document.getElementById('check-button');
checkButton.addEventListener('click', checkAnswer);
