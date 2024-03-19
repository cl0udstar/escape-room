const svg = document.getElementById('graph-svg');
const graphContainer = document.getElementById('graph-container');
const gridSize = 50; // Size of the grid squares

// Array to store points
let points = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
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

    // // Draw custom text above the graph
    // const customHeading = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    // customHeading.setAttribute('class', 'heading');
    // customHeading.setAttribute('x', 300);
    // customHeading.setAttribute('y', 40); // Adjust the y-coordinate as needed
    // customHeading.setAttribute('text-anchor', 'middle');
    // customHeading.textContent = 'What number was Major X Thinking of?';
    // svg.appendChild(customHeading);

    // Draw custom text for x-axis
    const customXText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    customXText.setAttribute('class', 'text');
    customXText.setAttribute('x', 300);
    customXText.setAttribute('y', 450);
    customXText.setAttribute('text-anchor', 'middle');
    customXText.textContent = 'Time';
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
        const period = 'PM'; // Set period to PM
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', i);
        text.setAttribute('y', 415);
        text.textContent = hour + ':00 ' + period; // Display hour and period
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

// Define the correct coordinates
const correctCoordinates = [
    { x: 100, y: 100 },
    { x: 150, y: 150 },
    { x: 200, y: 200 }
];