// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

document.addEventListener("DOMContentLoaded", function() {
    const textSizeSlider = document.getElementById("text-size-slider");

    // Load saved settings from cookie
    const savedTextSize = getCookie("text-size-slider");
    if (savedTextSize) {
        console.log(savedTextSize);
        if(textSizeSlider) {
            // Save settings when the text size is changed
            textSizeSlider.addEventListener("input", function() {
                const selectedTextSize = textSizeSlider.value;
                setCookie("text-size-slider", selectedTextSize, 365); // Set cookie to expire in 365 days
                applyTextSize(selectedTextSize); // Apply text size to content on other pages
            });
            
            textSizeSlider.value = savedTextSize;
        }
        applyTextSize(savedTextSize);
        
    }

    

    // Function to get a cookie
    function getCookie(name) {
        const cookieName = `${name}=`;
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return null;
    }

    // Function to apply text size to content on other pages
    function applyTextSize(size) {
        // Assuming your content container has the ID "content-container"
        const contentContainer = document.getElementById("text");
        if (contentContainer) {
            console.log("text size:", size)
            contentContainer.style.fontSize = size + "px";
        }
    }
});

function resizeText() {
    const textElement = document.getElementById('text');
    const sliderValue = document.getElementById('text-size-slider').value;
    textElement.style.fontSize = sliderValue + 'px';
    setCookie("text-size-slider", sliderValue, 365); // Update cookie with new text size
}

function increaseTextSize() {
    const slider = document.getElementById('text-size-slider');
    slider.stepUp();
    resizeText();
}

function decreaseTextSize() {
    const slider = document.getElementById('text-size-slider');
    slider.stepDown();
    resizeText();
}

function resetTextSize() {
    const defaultSize = 20;
    const slider = document.getElementById('text-size-slider');
    slider.value = defaultSize;
    resizeText();
}
