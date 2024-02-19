
const arrayData = [
    {
        id: 1,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 1",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)"
    },
    {
        id: 2,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 2",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)"
    },
    {
        id: 3,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 3",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)"
    },
    {
        id: 4,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 4",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)"
    },
    {
        id: 5,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 5",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)"
    },
    {
        id: 6,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 6",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)"
    },
    {
        id: 7,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 7",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)"
    },
    {
        id: 8,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 8",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)"
    },
    {
        id: 9,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 9",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)"
    },
    {
        id: 10,
        imageUrl: "./images/Test1.jpg",
        Heading: "Puzzle 10",
        color: "linear-gradient(-135deg, #040d12, #61677a)"
    }
]


const cardContainer = document.querySelector('.container')


const functionCards = () => {
    arrayData.map((data) => {
        
        cardContainer.innerHTML += '<div class="card" id="'+data.id+'" style="background: '+data.color+'">\
                                        <div class="front">\
                                            <div class="image">\
                                                <img src="'+data.imageUrl+'"></img>\
                                            </div>\
                                            <h1>'+data.Heading+'</h1>\
                                            <button onclick="handleClick'+data.id+'()">Read More</button>\
                                        </div>\
                                        <div class="back">\
                                            <button onclick="handle2ndClick'+data.id+'()">Read Less</button>\
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
