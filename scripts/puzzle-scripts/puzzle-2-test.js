    const heart = document.getElementById('heart');
    const postImg = document.querySelector('.post-img');
    const captions = document.querySelectorAll('.post-cap');

    postImg.addEventListener('dblclick', () => {
        heart.classList.replace('far', 'fas');
        heart.style.color = 'red';
        document.querySelector('.react-detail').innerHTML = '2,407 likes';
        postImg.classList.add('active');

        setTimeout(() => {
            postImg.classList.remove('active');
        }, 1000);
    });

    heart.addEventListener('click', handleHeart);

    function handleHeart() {
        var attr = heart.getAttributeNode("class").value;

        if (attr == 'far fa-heart') {
            heart.classList.replace('far', 'fas');
            heart.style.color = 'red';
            document.querySelector('.react-detail').innerHTML = '2,407 likes';
        } else if (attr == 'fas fa-heart') {
            heart.classList.replace('fas', 'far');
            heart.style.color = 'white';
            document.querySelector('.react-detail').innerHTML = '2,406 likes';
        }
    }

    // JavaScript for image carousel/slideshow
    let currentIndex = 0;
    const images = document.getElementById('image-carousel').children;

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
        for (let i = 0; i < captions.length; i++) {
            captions[i].style.display = 'none';
        }
        captions[index].style.display = 'block';
    }


    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Event listeners for next and previous buttons
    document.getElementById('next-btn').addEventListener('click', nextImage);
    document.getElementById('prev-btn').addEventListener('click', prevImage);

    // Show the initial image
    showImage(currentIndex);
    
    