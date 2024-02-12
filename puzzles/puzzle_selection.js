
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
        
        cardContainer.innerHTML += '<div class="card" style="background: '+data.color+'">\
                                        <div class="image">\
                                            <img src="'+data.imageUrl+'"></img>\
                                        </div>\
                                        <h1>'+data.Heading+'</h1>\
                                        <button>Read More</button>\
                                    </div>';
    })
}

functionCards()
