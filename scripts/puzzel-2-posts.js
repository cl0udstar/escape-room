const heart = document.getElementById('heart');
const postImg = document.querySelector('.post-img');

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
}// Add your custom code to handle image and caption inputs here.