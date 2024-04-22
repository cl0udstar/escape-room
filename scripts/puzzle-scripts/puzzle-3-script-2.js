const canvas = document.getElementById('arcCanvas');
const ctx = canvas.getContext('2d');

let startX = 0; // Starting point x-coordinate
let startY = canvas.height / 2; // Starting point y-coordinate
let controlX = canvas.width / 2; // Control point x-coordinate
let controlY = 0; // Control point y-coordinate
let endX = canvas.width; // Ending point x-coordinate
let endY = canvas.height / 2; // Ending point y-coordinate
let middleX = (startX + endX) / 2; // Middle point x-coordinate
let middleY = (startY + endY) / 2; // Middle point y-coordinate
let deltaY = 6; // Speed of movement
let direction = 1; // Initial direction of movement (1 for downwards, -1 for upwards)
let movementInterval; // Interval ID for continuous movement
let withinGreenStrip = true; // Flag to track whether the point is within the green strip
let dashedLinesDrawn = false;
const options = ['option1', 'option2', 'option3', 'option4', 'option5'];

// Set up canvas
function init() {
    drawGreenStrip();
    startContinuousMovement();
    setupStopButton();
    drawAxisNumbers();
}

// Draw the arc
function drawArc() {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(controlX, controlY, endX, endY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Draw dashed lines from the middle point to both the x-axis and y-axis
function drawDashedLines() {
    console.log("TEST")
    if (middleX !== undefined && middleY !== undefined && !dashedLinesDrawn) {
        // Draw dashed line from middle point to x-axis
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.setLineDash([5, 5]); // Set dash pattern
        ctx.moveTo(middleX, middleY);
        ctx.lineTo(middleX, canvas.height); // Draw line to x-axis
        ctx.stroke();

        // Draw dashed line from middle point to y-axis
        ctx.beginPath();
        ctx.moveTo(middleX, middleY);
        ctx.lineTo(0, middleY); // Draw line to y-axis
        ctx.stroke();

        dashedLinesDrawn = true; // Set dashed lines drawn flag
    }
}

// Draw points on the arc
function drawPointsOnArc() {
    ctx.fillStyle = 'blue';

    ctx.beginPath();
    ctx.arc(endX, endY, 8, 0, Math.PI * 2);
    ctx.fill();
}

// Draw numbers on the axis
function drawAxisNumbers() {
    const axisCanvas = document.getElementById('axisCanvas');
    const ctx = axisCanvas.getContext('2d');

    ctx.clearRect(0, 0, axisCanvas.width, axisCanvas.height); // Clear canvas before drawing

    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';

    // X-axis numbers
    for (let i = 0; i <= 11; i++) {
        const xPos = (i * (axisCanvas.width / 11)) +27.5;
        const number = i * 20; // Number to display
        ctx.fillText(number, xPos, axisCanvas.height);
    }


    // Y-axis numbers
    for (let i = 0; i <= 11; i++) {
        const xPos = 5; // X-coordinate for Y-axis numbers
        const yPos = axisCanvas.height - (i * (axisCanvas.height / 11)) - 15;
        const number = i * 20; // Number to display
        ctx.fillText(number, xPos, yPos);
    }
}

// Draw the middle dot
function drawMiddleDot() {
    const t = 0.5; // Parameter for calculating middle point along the curve
    middleX = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
    middleY = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(middleX, middleY, 8, 0, Math.PI * 2);
    ctx.fill();
}

// Draw green strip
function drawGreenStrip() {
    const stripHeight = canvas.height * 0.2; // Height of the green strip (20% of canvas height)
    const stripY = (canvas.height - stripHeight) / 2; // Y-coordinate of the top of the strip

    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(0, stripY, canvas.width, stripHeight);
}

// Start continuous movement
function startContinuousMovement() {
    clearInterval(movementInterval); // Clear previous interval
    movementInterval = setInterval(movePointBackAndForth, 50); // Start new interval
}

// Function to move the last point back and forth
function movePointBackAndForth() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Update endY based on direction
    endY += deltaY * direction;

    // Reverse direction if reaching top or bottom
    if (endY <= 0 || endY >= canvas.height) {
        direction *= -1;
    }

    drawGreenStrip();
    drawArc();
    drawPointsOnArc();

    // Check if the point is within the green strip
    const stripHeight = canvas.height * 0.2;
    const stripY = (canvas.height - stripHeight) / 2;
    withinGreenStrip = endY >= stripY && endY <= stripY + stripHeight;
}

// Set up stop button
function setupStopButton() {
    const stopButton = document.getElementById('stopButton');
    stopButton.addEventListener('click', stopMovement);
}

// Function to stop the continuous movement
function stopMovement() {
    clearInterval(movementInterval);

    // Restart movement if the point is not within the green strip
    if (!withinGreenStrip) {
        setTimeout(startContinuousMovement, 2000); // Restart movement after 2 seconds
    } else {
        drawMiddleDot();
        drawDashedLines();
        drawAxisNumbers();
        storeCenterPointCoordinates()
        document.getElementById('stopButton').style.display = "none";
        document.getElementById('exampleAnswers').style.display = "inline-block";
        document.getElementById('submitCoordinatesButton').style.display = "block";
    }
}

// Function to draw the blue center point and display coordinates
function storeCenterPointCoordinates() {
    const centerPointX = Math.round((middleX / 2) - 50);
    const invertedY = Math.round((canvas.height - middleY) / 2); // Inverted y-coordinate
    const WrongY1 = Math.round(invertedY + 20);
    const WrongY2 = Math.round(invertedY - 20);
    const WrongY3 = Math.round(invertedY + 28.5);
    const WrongY4 = Math.round(invertedY - 28.5);
    const WrongX1 = Math.round(50);
    const WrongX2 = Math.round(20);
    const WrongX3 = Math.round(100);
    const WrongX4 = Math.round(150);

    shuffleArray(options);

    document.getElementById(options[0]).innerText = `(${centerPointX}, ${invertedY})`;
    document.getElementById(options[1]).innerText = `(${WrongX1}, ${WrongY1})`;
    document.getElementById(options[2]).innerText = `(${WrongX2}, ${WrongY2})`;
    document.getElementById(options[3]).innerText = `(${WrongX3}, ${WrongY3})`;
    document.getElementById(options[4]).innerText = `(${WrongX4}, ${WrongY4})`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Add event listeners to option elements
document.getElementById('exampleAnswer1').addEventListener('click', () => handleOptionClick('exampleAnswer1'));
document.getElementById('exampleAnswer2').addEventListener('click', () => handleOptionClick('exampleAnswer2'));
document.getElementById('exampleAnswer3').addEventListener('click', () => handleOptionClick('exampleAnswer3'));
document.getElementById('exampleAnswer4').addEventListener('click', () => handleOptionClick('exampleAnswer4'));
document.getElementById('exampleAnswer5').addEventListener('click', () => handleOptionClick('exampleAnswer5'));

function handleOptionClick(optionId) {
    // Remove highlight from all options
    const options = document.querySelectorAll('.exampleAnswer');
    options.forEach(option => option.classList.remove('highlighted'));
    let flag = false;
    for (let i = 1; i <= 5; i++) {
        const elementId = `exampleAnswer${i}`;
        const element = document.getElementById(elementId);
        // Highlight the clicked option
        if (element.classList.contains('correct')){
           flag = true;
        }
    }
    if (flag === false){
        document.getElementById(optionId).classList.add('highlighted');
    }
}

function submitCoordinates(){
    const optionsClass = document.querySelectorAll('.exampleAnswer');
    optionsClass.forEach(option => option.classList.remove('correct'));
    optionsClass.forEach(option => option.classList.remove('incorrect'));
    const className = 'highlighted';
    for (let i = 1; i <= 5; i++) {
        const elementId = `exampleAnswer${i}`;
        const spanId = `option${i}`;
        const element = document.getElementById(elementId);
        if (element.classList.contains(className) && options[0] === spanId){
            document.getElementById(elementId).classList.add('correct');
            document.getElementById('submitCoordinatesButton').style.display = "none";
            document.getElementById('nextPart3').style.display = "block";
        }
        if (element.classList.contains(className) && options[0] !== spanId){
        document.getElementById(elementId).classList.add('incorrect');
        }
    }
}

function nextPart3(){
    document.getElementById('arcGraph').style.display = "none";
    document.getElementById('forceBar').style.display = "flex";
}

init(); // Initialize the canvas
