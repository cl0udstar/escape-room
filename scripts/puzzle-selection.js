
const arrayData = [
    {
        id: 1,
        imageUrl: "./images/Major_X.png",
        Heading: "Mission 1",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
        link: "../puzzles/"
    },
    {
        id: 2,
        imageUrl: "./images/Jakub_Gray.png",
        Heading: "Mission 2",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "Lilias Bridges is meeting with her fellow vikings, you have gained access to her social media bio. Use the information to answer the questions to find clues to solve the anagram and reveale her location.",
        link: "../puzzles/puzzle-2-anagram.html"
    },
    {
        id: 3,
        imageUrl: "./images/Lilias_Bridge.png",
        Heading: "Mission 3",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px"
    },
    {
        id: 4,
        imageUrl: "./images/Test1.jpg",
        Heading: "Mission 4",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px"
    },
    {
        id: 5,
        imageUrl: "./images/Test1.jpg",
        Heading: "Mission 5",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px"
    },
    {
        id: 6,
        imageUrl: "./images/Test1.jpg",
        Heading: "Mission 6",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px"
    },
    {
        id: 7,
        imageUrl: "./images/Test1.jpg",
        Heading: "Mission 7",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px"
    },
    {
        id: 8,
        imageUrl: "./images/Test1.jpg",
        Heading: "Mission 8",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px"
    },
    {
        id: 9,
        imageUrl: "./images/Test1.jpg",
        Heading: "Mission 9",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px"
    },
    {
        id: 10,
        imageUrl: "./images/Test1.jpg",
        Heading: "Mission 10",
        color: "linear-gradient(-135deg, #040d12, #61677a)",
        imageWidth: "300px",
        imageHeight: "350px"
    }
]


const cardContainer = document.querySelector('.container')


const functionCards = () => {
    arrayData.map((data) => {
        
        cardContainer.innerHTML += '<div class="card" id="'+data.id+'">\
                                        <div class="front">\
                                            <h1>'+data.Heading+'</h1>\
                                            <button onclick="handleClick'+data.id+'()">Read More</button>\
                                        </div>\
                                        <div class="back">\
                                            <img src="../assets/backgrounds/Top-secret.png"></img>\
                                            <h1>MISSION BRIEF</h1>\
                                            <p>'+data.para+'</p>\
                                            <div class="background_back"></div>\
                                            <button class="return" onclick="handle2ndClick'+data.id+'()"><i class="fa-solid fa-arrow-rotate-left"></i></button>\
                                            <button class="start"><a href="'+data.link+'">Start</a></button>\
                                        </div>\
                                    </div>';
    })
}

function handleClick1() {
    document.getElementById("1").style.transform = "rotateY(180deg)";
}
function handle2ndClick1() {
    document.getElementById("1").style.transform = "rotateY(0deg)";
}

function handleClick2() {
    document.getElementById("2").style.transform = "rotateY(180deg)";
}
function handle2ndClick2() {
    document.getElementById("2").style.transform = "rotateY(0deg)";
}

function handleClick3() {
    document.getElementById("3").style.transform = "rotateY(180deg)";
}
function handle2ndClick3() {
    document.getElementById("3").style.transform = "rotateY(0deg)";
}

function handleClick4() {
    document.getElementById("4").style.transform = "rotateY(180deg)";
}
function handle2ndClick4() {
    document.getElementById("4").style.transform = "rotateY(0deg)";
}

function handleClick5() {
    document.getElementById("5").style.transform = "rotateY(180deg)";
}
function handle2ndClick5() {
    document.getElementById("5").style.transform = "rotateY(0deg)";
}

function handleClick6() {
    document.getElementById("6").style.transform = "rotateY(180deg)";
}
function handle2ndClick6() {
    document.getElementById("6").style.transform = "rotateY(0deg)";
}

function handleClick7() {
    document.getElementById("7").style.transform = "rotateY(180deg)";
}
function handle2ndClick7() {
    document.getElementById("7").style.transform = "rotateY(0deg)";
}

function handleClick8() {
    document.getElementById("8").style.transform = "rotateY(180deg)";
}
function handle2ndClick8() {
    document.getElementById("8").style.transform = "rotateY(0deg)";
}

function handleClick9() {
    document.getElementById("9").style.transform = "rotateY(180deg)";
}
function handle2ndClick9() {
    document.getElementById("9").style.transform = "rotateY(0deg)";
}

function handleClick10() {
    document.getElementById("10").style.transform = "rotateY(180deg)";
}
function handle2ndClick10() {
    document.getElementById("10").style.transform = "rotateY(0deg)";
}

functionCards()
