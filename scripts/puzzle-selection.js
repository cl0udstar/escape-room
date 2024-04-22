
const arrayData = [
    {
        id: "card-1",
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 1",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You begin your journey by walking through the deep dark forest. Suddenly everything goes silent. A tall man with grey hair stops you in your path! It is Major X, the leader of the Data Agents, “I am here to test your powers of code breaking”.",
        link: "../puzzles/puzzle-1.html"
    },
    {
        id: "card-2",
        imgUrl: "Puzzle_2.png",
        Heading: "Mission 2",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "While walking along a steep, winding path, a gust of wind knocks you down near Lilias Bridge. Oblivious to your presence, she chats excitedly on her phone about meeting other Vikings. As she pockets her phone, it falls out unnoticed. You pick it up and discover she's logged into her Vikingstagram account.",
        link: "../puzzles/puzzle-2.html"
    },
    {
        id: "card-3",
        imgUrl: "Puzzle_3.png",
        Heading: "Mission 3",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You make it to the giant mountains that have been in the distance for what feels like forever. Jakub Grey – The data viking stops and begins to talk to you. “If you are a true warrior then prove that you can throw an axe like me, then I will let you pass”",
        link: "../puzzles/puzzle-3.html"
    },
    {
        id: "card-4",
        imgUrl: "Puzzle_4.png",
        Heading: "Mission 4",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You have reached the ancient Viking village of Fjordhelm! However, to get to the Viking base which is where the laptop is, you need to take a boat. Between you and the base sits Evelyn Scott – the data V.I.K.I.N.G in her longboat.",
        link: "../puzzles/puzzle-4.html"
    },
    {
        id: "card-5",
        imgUrl: "Puzzle_5.png",
        Heading: "Mission 5",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You have finally reached the secret base at Fjordhelm. You try to enter through the giant main door, but it is locked. You notice a keypad to the right of the door. You are about to turn away but notice a piece of paper hidden behind the keypad.",
        link: "../puzzles/puzzle-5.html"
    },
    {
        id: "card-6",
        imgUrl: "Puzzle_6.png",
        Heading: "Mission 6",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You have made it into the lair! Congratulations! You notice Data V.I.K.I.N.G Vi Banks’ laptop sitting on the countertop, and you know that this has the secret evil plan location on it, so you need to access the file and send it back to Major X, then destroy it.",
        
        link: "../puzzles/puzzle-6.html"
    },
    {
        id: "card-7",
        imgUrl: "Puzzle_7.png",
        Heading: "Mission 7",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You have made it into the laptop! You see the file on the desktop and click on it. All you have to do now is decode the file to uncover the evil meeting location.",
        link: "../puzzles/puzzle-7.html"
    },
    {
        id: "card-8",
        imgUrl: "lock.png",
        Heading: "",
        color: "",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "",
        link: ""
    }
]


const cardContainer = document.querySelector('.container')


const functionCards = () => {
    arrayData.map((data) => {
        
        cardContainer.innerHTML += '<div class="card" id="'+data.id+'">\
                                        <div class="front" style="background-image: url(\'../assets/backgrounds/'+data.imgUrl+'\');">\
                                            <h1>'+data.Heading+'</h1>\
                                            <button class="more-btn" onclick="handleClick'+data.id+'()">Read More</button>\
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
    document.getElementById("card-1").style.transform = "rotateY(180deg)";
}
function handle2ndClick1() {
    document.getElementById("card-1").style.transform = "rotateY(0deg)";
}

function handleClick2() {
    document.getElementById("card-2").style.transform = "rotateY(180deg)";
}
function handle2ndClick2() {
    document.getElementById("card-2").style.transform = "rotateY(0deg)";
}

function handleClick3() {
    document.getElementById("card-3").style.transform = "rotateY(180deg)";
}
function handle2ndClick3() {
    document.getElementById("card-3").style.transform = "rotateY(0deg)";
}

function handleClick4() {
    document.getElementById("4").style.transform = "rotateY(180deg)";
}
function handle2ndClick4() {
    document.getElementById("4").style.transform = "rotateY(0deg)";
}

function handleClick5() {
    document.getElementById("card-5").style.transform = "rotateY(180deg)";
}
function handle2ndClick5() {
    document.getElementById("card-5").style.transform = "rotateY(0deg)";
}

function handleClick6() {
    document.getElementById("card-6").style.transform = "rotateY(180deg)";
}
function handle2ndClick6() {
    document.getElementById("card-6").style.transform = "rotateY(0deg)";
}

function handleClick7() {
    document.getElementById("card-7").style.transform = "rotateY(180deg)";
}
function handle2ndClick7() {
    document.getElementById("card-7").style.transform = "rotateY(0deg)";
}

functionCards()
