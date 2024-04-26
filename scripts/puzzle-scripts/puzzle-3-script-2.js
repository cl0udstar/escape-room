const canvas = document.getElementById('arcCanvas');
const ctx = canvas.getContext('2d');

let direction = 1; // Initial direction of movement (1 for downwards, -1 for upwards)

const options = ['option1', 'option2', 'option3', 'option4', 'option5'];

// Moving dot variables
let dotX = 10; // Initial x-coordinate of the dot
const dotY = canvas.height-10; // Y-coordinate of the dot
const dotRadius = 10; // Radius of the dot
const deltaX = 2; // Amount to move the dot in each frame

let dotX2 = 10; // Initial x-coordinate of the second dot
let dotY2 = canvas.height / 2; // Y-coordinate of the second dot (you can adjust this as needed)
const dotRadius2 = 10; // Radius of the second dot
const deltaY2 = 2; // Amount to move the second dot in each frame

let dotX3 = 0;
let dotY3 = 0;

// Set up canvas
function init() {
    drawAxisNumbers();
    animateDot(); // Add animation for the moving dot
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

// Function to draw the blue center point and display coordinates
function storePointCoordinates() {
    const PointX = Math.round(coordinates[0]);
    const PointY = Math.round(coordinates[1]);
    const WrongY1 = Math.round(PointY + 20);
    const WrongY2 = Math.round(PointY - 20);
    const WrongY3 = Math.round(PointY + 28.5);
    const invertedDot3Y = 600 - dotY3;
    const PointY2 = Math.round(invertedDot3Y/3);
    const WrongX1 = Math.round(PointX + 20);
    const WrongX2 = Math.round(PointX - 20);
    const WrongX3 = Math.round(PointX + 28.5);
    const PointX2 = Math.round(dotX3/3);

    console.log(PointX2, PointY2);
    shuffleArray(options);

    document.getElementById(options[0]).innerText = `(${PointX}, ${PointY})`;
    document.getElementById(options[1]).innerText = `(${WrongX1}, ${WrongY1})`;
    document.getElementById(options[2]).innerText = `(${WrongX2}, ${WrongY2})`;
    document.getElementById(options[3]).innerText = `(${WrongX3}, ${WrongY3})`;
    document.getElementById(options[4]).innerText = `(${PointX2}, ${PointY2})`;
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
    let counter = 0;
    for (let i = 1; i <= 5; i++) {
        const elementId = `exampleAnswer${i}`;
        const element = document.getElementById(elementId);
        // Highlight the clicked option
        if (element.classList.contains('correct')){
           counter++;
        }
        if (counter == 2){
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
            document.getElementById('submitCoordinatesButton2').style.display = "block";
            document.getElementById("para1").style.display = "none";
            document.getElementById("para2").style.display = "block";
        }
        if (element.classList.contains(className) && options[0] !== spanId){
        document.getElementById(elementId).classList.add('incorrect');
        }
    }
}

function submitCoordinates2(){
    const optionsClass = document.querySelectorAll('.exampleAnswer');
    optionsClass.forEach(option => option.classList.remove('incorrect'));
    const className = 'highlighted';
    for (let i = 1; i <= 5; i++) {
        const elementId = `exampleAnswer${i}`;
        const spanId = `option${i}`;
        const element = document.getElementById(elementId);
        if (element.classList.contains(className) && options[4] === spanId){
            document.getElementById(elementId).classList.add('correct');
            document.getElementById('submitCoordinatesButton2').style.display = "none";
            document.getElementById("para2").style.display = "none";
            document.getElementById("para3").style.display = "block";
            document.getElementById("next-puzzle").style.display = "block";
            setPuzzleCompletionStatus(3, 'complete');
        }
        if (element.classList.contains(className) && options[4] !== spanId){
        document.getElementById(elementId).classList.add('incorrect');
        }
    }
}

// Draw the moving dot on the canvas
function drawDot() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

    // Draw the dot
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();

    // Draw the border
    ctx.strokeStyle = 'black'; // Border color
    ctx.lineWidth = 2; // Border width
    ctx.stroke();
}

// Function to stop the movement of the dot
function stopDotMovement() {
    // Cancel the animation frame to stop the dot movement
    cancelAnimationFrame(animationId);
}

let animationIdDot1; // Variable to store the animation ID for the first dot
let animationIdDot2; // Variable to store the animation ID for the second dot


// Animate the movement of the dot
function animateDot() {
    // Move the dot
    dotX += deltaX * direction;

    // Reverse direction if the dot reaches the edges of the canvas
    if (dotX + dotRadius >= canvas.width || dotX - dotRadius <= 0) {
        direction *= -1;
    }

    drawDot(); // Redraw the dot
    animationIdDot1 = requestAnimationFrame(animateDot); // Repeat the animation
}

// Draw the moving dot on the canvas
function drawDot2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

    // Draw the second dot
    ctx.beginPath();
    ctx.arc(dotX2, dotY2, dotRadius2, 0, Math.PI * 2);
    ctx.fillStyle = 'green'; // Choose a different color for the second dot (e.g., red)
    ctx.fill();

    // Draw the border
    ctx.strokeStyle = 'black'; // Border color
    ctx.lineWidth = 2; // Border width
    ctx.stroke();
}

function drawDot3() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

    // Draw the second dot
    ctx.beginPath();
    ctx.arc(dotX3, dotY3, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'blue'; // Choose a different color for the second dot (e.g., red)
    ctx.fill();

    // Draw the border
    ctx.strokeStyle = 'black'; // Border color
    ctx.lineWidth = 2; // Border width
    ctx.stroke();

    // Draw dotted line from second dot to x-axis
    ctx.setLineDash([5, 5]); // Set line dash pattern
    ctx.beginPath();
    ctx.moveTo(dotX3, dotY3);
    ctx.lineTo(dotX3, canvas.height); // Endpoint at the x-axis
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash pattern

    // Draw dotted line from second dot to y-axis
    ctx.setLineDash([5, 5]); // Set line dash pattern
    ctx.beginPath();
    ctx.moveTo(dotX3, dotY3);
    ctx.lineTo(0, dotY3); // Endpoint at the y-axis
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash pattern

    // Draw the second dot
    ctx.beginPath();
    ctx.arc(dotX2, dotY2, dotRadius2, 0, Math.PI * 2);
    ctx.fillStyle = 'green'; // Choose a different color for the second dot (e.g., red)
    ctx.fill();

    // Draw the border
    ctx.strokeStyle = 'black'; // Border color
    ctx.lineWidth = 2; // Border width
    ctx.stroke();

    // Draw dotted line from second dot to x-axis
    ctx.setLineDash([5, 5]); // Set line dash pattern
    ctx.beginPath();
    ctx.moveTo(dotX2, dotY2);
    ctx.lineTo(dotX2, canvas.height); // Endpoint at the x-axis
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash pattern

    // Draw dotted line from second dot to y-axis
    ctx.setLineDash([5, 5]); // Set line dash pattern
    ctx.beginPath();
    ctx.moveTo(dotX2, dotY2);
    ctx.lineTo(0, dotY2); // Endpoint at the y-axis
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash pattern
}

let directionY2 = -1;

// Animate the movement of the second dot
function animateDot2() {
    // Move the second dot
    dotY2 += deltaY2 * directionY2;

    // Reverse direction if the dot reaches the edges of the canvas along the y-axis
    if (dotY2 + dotRadius2 >= canvas.height || dotY2 - dotRadius2 <= 0) {
        directionY2 *= -1;
    }

    drawDot2(); // Redraw the second dot
    animationIdDot2 = requestAnimationFrame(animateDot2); // Repeat the animation for the second dot
}

// Function to toggle between the animations of the two dots
function toggleAnimation() {
    cancelAnimationFrame(animationIdDot1); // Stop animation of dot 1
    dotY2 = dotY; // Set dotY2 position to match dotY position
    dotX2 = dotX;
    animateDot2(); // Start animation of dot 2
    document.getElementById("toggleButton").style.display = "none";
    document.getElementById("stopAnimation").style.display = "block";
}

let coordinates = [0,0];

function stopAnimation(){
    cancelAnimationFrame(animationIdDot2); // Stop animation of dot 1
    document.getElementById("para1").style.display = "block";
    document.getElementById("stopAnimation").style.display = "none";
    coordinates[0] = dotX2/3;
    invertedDotY2 = 600 - dotY2;
    coordinates[1] = invertedDotY2/3;
    if (coordinates[0] < 100){
        dotX3 = dotX2 - 57;
    }
    if (coordinates[0] > 100){
        dotX3 = dotX2 + 62;
    }
    if (coordinates[1] < 100){
        dotY3 = dotY2 + 43;
    }
    if (coordinates[1] > 100){
        dotY3 = dotY2 - 29;
    }

    if (dotX3 < 0){
        dotX3 = dotY3 + 600;
    }

    if (dotY3 < 0){
        dotY3 = dotY3 + 600;
    }

    if (dotX3 > 600){
        dotX3 = dotX3 - 600;
    }

    if (dotY3 > 600){
        dotY3 = dotY3 - 600;
    }

    console.log(coordinates[0], coordinates[1]);
    console.log(dotX3, dotY3)
    document.getElementById("exampleAnswers").style.display = "block";
    document.getElementById("submitCoordinatesButton").style.display = "block";
    drawDot3();
    storePointCoordinates();
}

init(); // Initialize the canvas
