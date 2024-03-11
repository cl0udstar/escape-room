// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
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

document.addEventListener("DOMContentLoaded", function() {
    const textSizeSlider = document.getElementById("text-size-slider");
    const contrastSlider = document.getElementById("contrast-slider");
    const saturationSlider = document.getElementById("saturation-slider");
    const fontSelect = document.getElementById("change-font-btn");

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
    } else {
        const defaultTextSize = 20;
        setCookie("text-size-slider", defaultTextSize, 365);
        applyTextSize(defaultTextSize);
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

    // Load saved settings from cookie for saturation
    const savedSaturation = getCookie("saturation-slider");
    console.log("Saturation value:", savedSaturation)
    if (savedSaturation) {
        if (saturationSlider) {
            // Save settings when the contrast is changed
            saturationSlider.addEventListener("input", function() {
                const selectedSaturation = saturationSlider.value;
                setCookie("saturation-slider", selectedSaturation, 365); // Set cookie to expire in 365 days
                applySaturation(selectedSaturation); // Apply contrast to content on other pages
            });

            saturationSlider.value = savedSaturation;
        }
        
        applySaturation(savedSaturation);
    }

    // Load saved settings from cookie for font style
    const savedFont = getCookie("change-font-btn");
    console.log("Font value:", savedFont)
    if (savedFont) {
        if (fontSelect) {
            // Save settings when the contrast is changed
            fontSelect.addEventListener("input", function() {
                const selectedFont = fontSelect.value;
                setCookie("change-font-btn", selectedFont, 365); // Set cookie to expire in 365 days
                applyFont(selectedFont); // Apply contrast to content on other pages
            });

            fontSelect.value = savedFont;
        }
        applyFont(savedFont);
    } else {
        const defaultFont = "EyeSpyItalic";
        setCookie("change-font-btn", defaultFont, 365);
        applyFont(defaultFont);
    }
    

    // Function to apply text size to content on other pages
    function applyTextSize(size) {
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

    // Function to apply saturation to content on other pages
    function applySaturation(value) {
        const contentContainer = document.getElementById("text");
        if (contentContainer) {
            contentContainer.style.filter = `contrast(${savedContrast}%) saturate(${value})`;
        }
    }

    // Function to apply font style to content on other pages
    function applyFont(style) {
        const contentContainer = document.getElementById("text");
        if (contentContainer) {
            contentContainer.style.fontFamily = style;
        }
    }
});

////////
// Size Setting
////////
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

////////
// Contrast Setting
////////
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

////////
// Saturation Setting
////////
function adjustSaturation() {
    const textElement = document.getElementById('text');
    const sliderValueContrast = document.getElementById('contrast-slider').value;
    const sliderValueSaturation = document.getElementById('saturation-slider').value;
    
    // Apply saturation and set cookie if saturation value is not 10
    if (sliderValueSaturation !== '10') {
        textElement.style.filter = `contrast(${sliderValueContrast}%) saturate(${sliderValueSaturation})`;
        setCookie("saturation-slider", sliderValueSaturation, 365); // Update cookie with new saturation
    } else {
        // Apply only contrast if saturation is reset to 10
        textElement.style.filter = `contrast(${sliderValueContrast}%)`;
        deleteCookie("saturation-slider"); // Delete the saturation cookie
    }
}


function increaseSaturation() {
    const slider = document.getElementById('saturation-slider');
    slider.stepUp();
    adjustSaturation();
}

function decreaseSaturation() {
    const slider = document.getElementById('saturation-slider');
    slider.stepDown();
    adjustSaturation();
}

function resetSaturation() {
    const defaultSaturation = 10;
    const slider = document.getElementById('saturation-slider'); 
    slider.value = defaultSaturation;
    adjustSaturation();
}


////////
// Font Setting
////////
function changeFont(fontValue) {
    const textElement = document.getElementById('text');
    textElement.style.fontFamily = fontValue;
    setCookie("change-font-btn", fontValue, 365); // Update cookie with new font
}

function resetFont() {
    const defaultFont = "EyeSpyItalic";
    const textElement = document.getElementById('text');
    textElement.style.fontFamily = defaultFont;
    setCookie("change-font-btn", defaultFont, 365); // Update cookie with new font
}
