// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

document.addEventListener("DOMContentLoaded", function() {
    const textSizeSlider = document.getElementById("text-size-slider");
    const contrastSlider = document.getElementById("contrast-slider");

    // Load saved settings from cookie for text size
    const savedTextSize = getCookie("text-size-slider");
    console.log("Text Size:", savedTextSize)
    if (savedTextSize) {
        if (textSizeSlider) {
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

    // Load saved settings from cookie for contrast
    const savedContrast = getCookie("contrast-slider");
    console.log("Contrast value:", savedContrast)
    if (savedContrast) {
        if (contrastSlider) {
            // Save settings when the contrast is changed
            contrastSlider.addEventListener("input", function() {
                const selectedContrast = contrastSlider.value;
                setCookie("contrast-slider", selectedContrast, 365); // Set cookie to expire in 365 days
                applyContrast(selectedContrast); // Apply contrast to content on other pages
            });

            contrastSlider.value = savedContrast;
        }
        applyContrast(savedContrast);
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
        // Assuming your content container has the ID "text"
        const contentContainer = document.getElementById("text");
        if (contentContainer) {
            contentContainer.style.fontSize = size + "px";
        }
    }

    // Function to apply contrast to content on other pages
    function applyContrast(value) {
        const contentContainer = document.getElementById("text");
        if (contentContainer) {
            contentContainer.style.filter = `contrast(${value}%)`;
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


function adjustContrast() {
    const textElement = document.getElementById('text');
    const sliderValue = document.getElementById('contrast-slider').value;
    textElement.style.filter = `contrast(${sliderValue}%)`;
    setCookie("contrast-slider", sliderValue, 365); // Update cookie with new text size
}

function increaseContrast() {
    const slider = document.getElementById('contrast-slider');
    slider.stepUp();
    adjustContrast();
}

function decreaseContrast() {
    const slider = document.getElementById('contrast-slider');
    slider.stepDown();
    adjustContrast();
}

function resetContrast() {
    const defaultContrast = 100;
    const slider = document.getElementById('contrast-slider');
    slider.value = defaultContrast;
    adjustContrast();
}
