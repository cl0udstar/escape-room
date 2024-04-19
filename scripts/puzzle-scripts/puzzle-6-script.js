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
// Update the viewBox attribute to zoom in on the graph
svg.setAttribute('viewBox', '0 0 450 400'); // Adjust the values as needed for zoom level

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
    // Remove existing error message if it exists
    const existingErrorMessage = graphContainer.parentNode.querySelector('.error-message');
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    // Draw lines connecting points if the correct number of points have been entered
    if (points.length === 11) {
        const lines = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        let correctOrder = true;
        for (let i = 0; i < points.length - 1; i++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            line.setAttribute('class', 'line');
            line.setAttribute('x1', centerX + points[i].x * gridSize);
            line.setAttribute('y1', centerY - points[i].y * gridSize);
            line.setAttribute('x2', centerX + points[i + 1].x * gridSize);
            line.setAttribute('y2', centerY - points[i + 1].y * gridSize);
            lines.appendChild(line);

            // Check if the entered coordinates are in the correct order
            if (points[i].x !== correctCoordinates[i].x || points[i].y !== correctCoordinates[i].y) {
                correctOrder = false;
            }
        }
        // Add the final line connecting the last and first points
        const finalLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        finalLine.setAttribute('class', 'line');
        finalLine.setAttribute('x1', centerX + points[points.length - 1].x * gridSize);
        finalLine.setAttribute('y1', centerY - points[points.length - 1].y * gridSize);
        finalLine.setAttribute('x2', centerX + points[0].x * gridSize);
        finalLine.setAttribute('y2', centerY - points[0].y * gridSize);
        lines.appendChild(finalLine);

        if (correctOrder) {
            let correctMessage = graphContainer.parentNode.querySelector('.correct-message');
            if (!correctMessage) {
                correctMessage = document.createElement("div");
                correctMessage.setAttribute('class', 'correct-message');
                graphContainer.parentNode.insertBefore(correctMessage, graphContainer.nextSibling);
            }
            correctMessage.textContent = "Correct! The 'star' shape has been drawn successfully, well done agent!";
        } else {
            let errorLabel = graphContainer.parentNode.querySelector('.error-message');
            if (!errorLabel) {
                errorLabel = document.createElement("div");
                errorLabel.setAttribute('class', 'error-message');
                graphContainer.parentNode.insertBefore(errorLabel, graphContainer.nextSibling);
            }
            errorLabel.textContent = "Incorrect, Press the reset button below and try again! Hint: The coordinates should be entered in order.";
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
        points.push(newPoint);
        drawGraph(); // Redraw graph with updated points and lines
    } else {
        alert('Please enter valid coordinates.');
    }
}

// Event listener for adding a point for the first puzzle container
document.getElementById('add-point-btn').addEventListener('click', addPoint);

// Function to handle adding a point on Enter key press
function addPointOnEnter(event) {
    if (event.key === 'Enter' && document.activeElement.id !== 'answer') {
        addPoint(); // Add point if focus is not on the answer input field
    }
}

// Event listener for Enter key press for adding a point for the first puzzle container
document.addEventListener('keypress', addPointOnEnter);

function resetGraph() {
    points = [];
    const errorLabel = graphContainer.parentNode.querySelector('.error-message');
    if (errorLabel) {
        errorLabel.remove(); // Remove error message if it exists
    }
    const correctMessage = graphContainer.parentNode.querySelector('.correct-message');
    if (correctMessage) {
        correctMessage.remove(); // Remove correct message if it exists
    }
    drawGraph();
}

// Event listener for reset button
document.getElementById('reset-btn').addEventListener('click', resetGraph);

// Function to check answer for the second puzzle container
function checkAnswerSecondPuzzle() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    if (answer === "star") {
        feedback.textContent = "Correct, well done agent!";
        feedback.classList.remove('error-message'); // Remove error message class
        feedback.classList.add('success-message'); // Add success message class
        document.getElementById('hint').textContent = ""; // Clear hint
        // Disable the answer input field after correct answer
        document.getElementById('answer').disabled = true;
        document.getElementById('answer').style.background = "#C8E4B2";
        // Remove the event listener for the "Check Answer" button
        document.getElementById('check-answer-btn').removeEventListener('click', checkAnswerSecondPuzzle);
        setPuzzleCompletionStatus(6, 'complete'); // Set completion status of puzzle 6 to 'complete'

        var nextPuzzle = document.getElementById("next-puzzle");
        nextPuzzle.style.display = "block";
    } else {
        feedback.textContent = "Incorrect! Try again agent!";
        feedback.classList.add('error-message'); // Add error message class
        feedback.classList.remove('success-message'); // Remove success message class
        // You can provide a hint here, e.g., display a hint message
        document.getElementById('hint').textContent = "Hint: A quote from Vi: 'Nothing beats kicking back after dusk, eyes glued to those twinkling specks painting the night.'";
        document.getElementById('answer').style.background = "#FF7676";
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



// Add event listener to SVG for adding points on click
svg.addEventListener('click', function(event) {
    const svgPoint = svg.createSVGPoint();
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;
    
    const cursorPoint = svgPoint.matrixTransform(svg.getScreenCTM().inverse());
    const x = Math.round((cursorPoint.x - centerX) / gridSize);
    const y = Math.round((centerY - cursorPoint.y) / gridSize);
    
    if (x >= 0 && x <= 16 && y >= 0 && y <= 16) {
        const newPoint = { x: x, y: y };
        points.push(newPoint);
        drawGraph(); // Redraw graph with updated points and lines
    }
});