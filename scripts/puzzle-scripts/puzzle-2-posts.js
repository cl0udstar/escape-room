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



////////////////////////////////////////////////
// Question 1
////////////////////////////////////////////////
var keyInputQ1 = document.getElementById("userAnswerQ1");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

function checkAnswerQ1() {
    var userAnswer = document.getElementById("userAnswerQ1").value.trim().toLowerCase();
    var result = document.getElementById("result1");

    if (userAnswer === "fjordhelm") {
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ1.disabled = true;
        keyInputQ1.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, use this hint: Starts with a 'F' and ends with 'helm'";
        result.style.color = "red";
        keyInputQ1.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 2
////////////////////////////////////////////////
var keyInputQ2 = document.getElementById("userAnswerQ2");
keyInputQ2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q2").click();
    }
});

function checkAnswerQ2() {
    var userAnswer = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
    var result = document.getElementById("result2");

    if (userAnswer === "fjordhelm") {
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ2.disabled = true;
        keyInputQ2.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, use this hint: A place with Fjords";
        result.style.color = "red";
        keyInputQ2.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 3
////////////////////////////////////////////////
var keyInputQ3 = document.getElementById("userAnswerQ3");
keyInputQ3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q3").click();
    }
});

function checkAnswerQ3() {
    var userAnswer = document.getElementById("userAnswerQ3").value.trim().toLowerCase();
    var result = document.getElementById("result3");

    if (userAnswer === "20" || userAnswer === "twenty" || userAnswer === "20 hours" || userAnswer === "twenty hours" || userAnswer === "20h") {
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ3.disabled = true;
        keyInputQ3.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, use this hint: Greater than 15 'Hours'";
        result.style.color = "red";
        keyInputQ3.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 4
////////////////////////////////////////////////
var keyInputQ4 = document.getElementById("userAnswerQ4");
keyInputQ4.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q4").click();
    }
});

function checkAnswerQ4() {
    var userAnswer = document.getElementById("userAnswerQ4").value.trim().toLowerCase();
    var result = document.getElementById("result4");

    if (userAnswer === "sunny") {
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ4.disabled = true;
        keyInputQ4.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, use this hint: 'heat'";
        result.style.color = "red";
        keyInputQ4.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 5
////////////////////////////////////////////////
var keyInputQ5 = document.getElementById("userAnswerQ5");
keyInputQ5.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q5").click();
    }
});

function checkAnswerQ5() {
    var userAnswer = document.getElementById("userAnswerQ5").value.trim().toLowerCase();
    var result = document.getElementById("result5");

    if (userAnswer === "8" || userAnswer === "eight" || userAnswer === "8 villages" || userAnswer === "eight villages") {
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ5.disabled = true;
        keyInputQ5.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, use this hint: Greater than 5 but less than 10";
        result.style.color = "red";
        keyInputQ5.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 6
////////////////////////////////////////////////
var keyInputQ6 = document.getElementById("userAnswerQ6");
keyInputQ6.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q6").click();
    }
});

function checkAnswerQ6() {
    var userAnswer = document.getElementById("userAnswerQ6").value.trim().toLowerCase();
    var result = document.getElementById("result6");

    if (userAnswer === "565" || userAnswer === "565 miles" || userAnswer === "five hundred and sixty five" || userAnswer === "five hundred and sixty five miles" || userAnswer === "five hundred sixty five" || userAnswer === "five hundred sixty five miles" || userAnswer === "five six five" || userAnswer === "five six five miles") {
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ6.disabled = true;
        keyInputQ6.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent, use this hint: Add up the distance traveled in 'Miles'";
        result.style.color = "red";
        keyInputQ6.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////
