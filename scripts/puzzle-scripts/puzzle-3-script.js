const svg = document.getElementById('graph-svg');
const graphContainer = document.getElementById('graph-container');
const gridSize = 50; // Size of the grid squares

// Array to store points
let points = [
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

    
    // Define the pattern
    const pattern = document.createElementNS("http://www.w3.org/2000/svg", 'pattern');
    pattern.setAttribute('id', 'backgroundPattern');
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('width', '100%');
    pattern.setAttribute('height', '100%');

    // Add the image to the pattern
    const image = document.createElementNS("http://www.w3.org/2000/svg", 'image');
    image.setAttribute('href', '../assets/backgrounds/puzzle3-assets/puzzle-3-part1.png'); // Replace 'path_to_your_image.png' with the path to your image
    image.setAttribute('x', '0');
    image.setAttribute('y', '0');
    image.setAttribute('width', '100%');
    image.setAttribute('height', '100%');
    pattern.appendChild(image);

    // Append the pattern to the SVG
    svg.appendChild(pattern);

    // Draw rectangle with the pattern as fill
    const graphRect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    graphRect.setAttribute('class', 'graph-rect');
    graphRect.setAttribute('x', 0);
    graphRect.setAttribute('y', 0);
    graphRect.setAttribute('width', 600);
    graphRect.setAttribute('height', 400);
    graphRect.setAttribute('fill', 'url(#backgroundPattern)'); // Use the pattern as fill
    svg.appendChild(graphRect);

    // Draw custom text for x-axis
    const customXText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    customXText.setAttribute('class', 'text');
    customXText.setAttribute('x', 300);
    customXText.setAttribute('y', 450);
    customXText.setAttribute('text-anchor', 'middle');
    customXText.textContent = 'Letters';
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

    // Draw the other two lines
    const rightLineElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    rightLineElement.setAttribute('class', 'line');
    rightLineElement.setAttribute('x1', 600);
    rightLineElement.setAttribute('y1', 0);
    rightLineElement.setAttribute('x2', 600);
    rightLineElement.setAttribute('y2', 400);
    rightLineElement.setAttribute('stroke-width', '2'); // Increase the stroke width for thicker lines
    svg.appendChild(rightLineElement);

    const topLineElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    topLineElement.setAttribute('class', 'line');
    topLineElement.setAttribute('x1', 0);
    topLineElement.setAttribute('y1', 0);
    topLineElement.setAttribute('x2', 600);
    topLineElement.setAttribute('y2', 0);
    topLineElement.setAttribute('stroke-width', '2'); // Increase the stroke width for thicker lines
    svg.appendChild(topLineElement);

    // Draw grid lines and add coordinates along x axis
    const alphabet = 'ABCDEFGHIJK'; // Define alphabet
    for (let i = 0; i < alphabet.length; i++) {
        const gridLineX = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        gridLineX.setAttribute('class', 'grid-line');
        gridLineX.setAttribute('x1', (i + 1) * gridSize); // Adjust grid position for alphabet
        gridLineX.setAttribute('y1', 0);
        gridLineX.setAttribute('x2', (i + 1) * gridSize);
        gridLineX.setAttribute('y2', 400);
        gridLineX.setAttribute('stroke-width', '2');
        svg.appendChild(gridLineX);

        // Add letters along x axis
        const letter = alphabet[i];
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', (i + 1) * gridSize);
        text.setAttribute('y', 415);
        text.textContent = letter;
        svg.appendChild(text);
    }

    // Draw grid lines and add coordinates along y axis
    for (let i = gridSize; i < 400; i += gridSize) {
        const gridLineY = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        gridLineY.setAttribute('class', 'grid-line');
        gridLineY.setAttribute('x1', 0);
        gridLineY.setAttribute('y1', i);
        gridLineY.setAttribute('x2', 600);
        gridLineY.setAttribute('y2', i);
        gridLineY.setAttribute('stroke-width', '2');
        svg.appendChild(gridLineY);

        // Add coordinates along y axis
        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('class', 'text');
        text.setAttribute('x', -25);
        text.setAttribute('y', i + 5);
        text.textContent = (400 - i) / gridSize; // Show numbers on y-axis
        svg.appendChild(text);
    }

    // Define arrays for mapping coordinates to letters and numbers
    const xLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
    const yNumbers = ['', '7', '6', '5', '4', '3', '2', '1'];

    // Function to convert X coordinate to letter
    function getXLetter(x) {
        return xLetters[Math.floor(x / gridSize)];
    }

    // Function to convert Y coordinate to number
    function getYNumber(y) {
        return yNumbers[Math.floor(y / gridSize)];
    }


    // Draw bullseye and points
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        console.log('Point coordinates:', getXLetter(point.x), getYNumber(point.y));

        // Draw bullseye
        for (let r = 6; r >= 2; r--) {
            const bullseye = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            bullseye.setAttribute('class', 'bullseye');
            bullseye.setAttribute('cx', point.x);
            bullseye.setAttribute('cy', point.y);
            bullseye.setAttribute('r', r * 5);
            if (r % 2 === 0) {
                bullseye.setAttribute('fill', 'black');
            } else {
                bullseye.setAttribute('fill', 'lightblue');
            }
            svg.appendChild(bullseye);
        }
        
        // Draw point
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
    }

    // Generate and return coordinates
    const generatedCoordinates = [];
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const xLetter = getXLetter(point.x);
        const yNumber = getYNumber(point.y);
        generatedCoordinates.push({ x: xLetter, y: yNumber });
    }
    return generatedCoordinates;
}

const generatedCoordinates = drawGraph(); // Initial draw


function userInput(generatedCoordinates) {
    const userInputX = document.getElementById('coordinateX').value.toUpperCase().toString(); // Get user's input for X coordinate
    const userInputY = parseInt(document.getElementById('coordinateY').value).toString(); // Get user's input for Y coordinate

    const alertMessage = document.getElementById('alertMessage');

    if (userInputX === generatedCoordinates[0].x && userInputY === generatedCoordinates[0].y) {
        alertMessage.textContent = ('Congratulations! You found the correct point!');
        document.getElementById("next").style.display = "block";
    } else {
        alertMessage.textContent = ('Sorry, the point you entered is not correct. Try again!');
    }
}

function next(){
    // Hide Part 1
    document.getElementById("graph-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("input-container").style.display = "none";
    document.getElementById("checkCoordinates").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("alertMessage").style.display = "none";

    // Show Part 2
    document.getElementById("canvasContainer").style.display = "block";
    document.getElementById("stopButton").style.display = "block";

}
