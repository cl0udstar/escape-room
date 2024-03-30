// JavaScript for image carousel/slideshow
let currentIndex = 0;
const images = document.getElementById('image-carousel').children;
const dots = document.querySelectorAll('.dot');
const heart = document.getElementById('heart');
const postImg = document.querySelector('.post-img');

function showImage(index) {
    // Calculate the direction of the transition
    const direction = index > currentIndex ? -1 : 1;

    // Hide all images and move them accordingly
    for (let i = 0; i < images.length; i++) {
        const offset = (i - currentIndex) * 100 * direction;
        images[i].style.transition = 'transform 0.5s ease';
        images[i].style.transform = `translateX(${offset}%)`;
    }

    // Show the selected image
    images[index].style.transition = 'transform 0.5s ease';
    images[index].style.transform = 'translateX(0)';
    currentIndex = index;

    // Update the caption
    const captions = document.querySelectorAll('.post-cap');
    for (let i = 0; i < captions.length; i++) {
        captions[i].style.display = 'none';
    }
    captions[index].style.display = 'block';

    // Update active dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}

// Event listeners for dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});

postImg.addEventListener('dblclick', () =>{

    heart.classList.replace('far','fas');
    heart.style.color ='red';
    document.querySelector('.react-detail').innerHTML ='2,407 likes';
    postImg.classList.add('active');

    setInterval(() => {
        postImg.classList.remove('active');
    }, 1000);
});

heart.addEventListener('click',handleHeart)

function handleHeart() {
    var attr = heart.getAttributeNode("class").value;

    if(attr == 'far fa-heart'){
        heart.classList.replace('far','fas');
        heart.style.color = 'red';
        document.querySelector('.react-detail').innerHTML = '2,407 likes';
    }
    else if(attr == 'fas fa-heart'){
        heart.classList.replace('fas','far');
        heart.style.color = 'white';
        document.querySelector('.react-detail').innerHTML = '2,406 likes';
    }
}
// Show the initial image
showImage(currentIndex);

// New JavaScript for quiz
document.addEventListener("DOMContentLoaded", function() {
    // Predefined questions and answers
    const questions = [
        { question: "1. What town did Lilias voyage to the most?", answer: "Fjordhelm", hint: "Starts with a 'F' and ends with 'helm'", hintShown: false },
        { question: "2. What town did Lilias voyage from the most?", answer: "fjordhelm", hint: "A place with Fjords", hintShown: false },
        { question: "3. How many hours did Lilias spend travelling in March?", answer: "20 hours", hint: "Greater than 15 'Hours'", hintShown: false },
        { question: "4. What is the least common type of weather that Lilias travelled in?", answer: "Sunny", hint: "heat", hintShown: false },
        { question: "5. How many places has Lilias visited in total?", answer: "8", hint: "Greater than 5 but less than 10", hintShown: false },
        { question: "6. How many miles did Lilias travel in total?", answer: "565 Miles", hint: "Add up the distance traveled in 'Miles'", hintShown: false }
    ];

    // Function to create answer box
    function createAnswerBox(index, question) {
        const answerBox = document.createElement('div');
        answerBox.classList.add('answer-box');

        const label = document.createElement('label');
        label.textContent = question.question;
        answerBox.appendChild(label);

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.dataset.index = index;
        answerBox.appendChild(answerInput);

        const hint = document.createElement('p');
        hint.classList.add('hint');
        hint.style.display = 'none';
        hint.textContent = `Hint: ${question.hint}`;
        answerBox.appendChild(hint);

        const result = document.createElement('p');
        result.classList.add('result');
        answerBox.appendChild(result);

        const checkButton = document.createElement('button');
        checkButton.textContent = 'Check Answer';
        checkButton.addEventListener('click', function() {
            checkAnswer(answerInput, hint, result, question.answer);
        });
        answerBox.appendChild(checkButton);

        answerInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                checkAnswer(answerInput, hint, result, question.answer);
            }
        });

        return answerBox;
    }

    // Function to check answer
    function checkAnswer(input, hint, result, answer) {
        const userAnswer = input.value.trim().toLowerCase();
        if (userAnswer === answer.toLowerCase()) {
            input.disabled = true;
            hint.style.display = 'none';
            result.textContent = 'Correct!';
            result.style.color = 'green';
        } else {
            if (!hint.style.display || hint.style.display === 'none') {
                hint.style.display = 'block';
            } else {
                hint.style.display = 'none';
            }
            result.textContent = 'Incorrect!';
            result.style.color = 'red';
        }
    }

    // Add answer boxes to the document
    const answerBoxesContainer = document.querySelector('.answer-boxes');
    questions.forEach((question, index) => {
        const answerBox = createAnswerBox(index, question);
        answerBoxesContainer.appendChild(answerBox);
    });
});
