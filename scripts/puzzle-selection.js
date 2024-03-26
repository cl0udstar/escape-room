
const arrayData = [
    {
        id: 1,
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 1",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You begin your journey by walking through the deep dark forest. Suddenly everything goes silent. A tall man with grey hair stops you in your path! It is Major X, the leader of the Data Vikings, “I am here to test your powers of mind reading”.",
        link: "../puzzles/puzzle-1.html"
    },
    {
        id: 2,
        imgUrl: "Puzzle_2.png",
        Heading: "Mission 2",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-2.html"
    },
    {
        id: 3,
        imgUrl: "Puzzle_3.png",
        Heading: "Mission 3",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-3.html"
    },
    {
        id: 4,
        imgUrl: "Puzzle_4.png",
        Heading: "Mission 4",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-4.html"
    },
    {
        id: 5,
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 5",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-5.html"
    },
    {
        id: 6,
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 6",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-6.html"
    },
    {
        id: 7,
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 7",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-7.html"
    },
    {
        id: 8,
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 8",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-8.html"
    },
    {
        id: 9,
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 9",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-9.html"
    },
    {
        id: 10,
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 10",
        color: "linear-gradient(-135deg, #040d12, #61677a)",
        imageWidth: "300px",
        imageHeight: "350px",
        link: "../puzzles/puzzle-10.html"
    }
]


const cardContainer = document.querySelector('.container')


const functionCards = () => {
    arrayData.map((data) => {
        
        cardContainer.innerHTML += '<div class="card" id="'+data.id+'">\
                                        <div class="front" style="background-image: url(\'../assets/backgrounds/'+data.imgUrl+'\');">\
                                            <h1>'+data.Heading+'</h1>\
                                            <button onclick="handleClick'+data.id+'()">Read More</button>\
                                        </div>\
                                        <div class="back">\
                                            <img src="../assets/backgrounds/Top-secret.png"></img>\
                                            <h1>MISSION BRIEF</h1>\
                                            <p>'+data.para+'</p>\
                                            <div class="background_back"></div>\
                                            <button class="return" onclick="handle2ndClick'+data.id+'()"><i class="fa-solid fa-arrow-rotate-left"></i></button>\
                                            <a href="'+data.link+'"><button class="start">Start</button></a>\
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
