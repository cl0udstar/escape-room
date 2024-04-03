const div = document.querySelector(".home-text");
const text1 = "Agent, you've been captured by the nefarious organization known as V.I.K.I.N.G.S.";
const text2 = "Your objective is to escape their highly secured lair by utilizing your expertise as an Agent of Data.";
const text3 = "This is not just any escape; it's a test of your skills in observation, analysis and problem-solving.";
const text4 = "Your training as an Agent of Data has prepared you for this moment. Trust in your abilities, use every skill at your disposal, and make your escape from the evil V.I.K.I.N.G.S' lair a success.";
const text5 = "Good luck, Agent. The fate of the world rests in your hands.";

let text1Finished = false;
let text2Finished = false;
let text3Finished = false;
let text4Finished = false;
let text5Finished = false;

function textTypingEffect(element, text, i = 0, callback = null) {
    element.innerHTML += text[i];

    // If the end of the string is reached
    if (i === text.length - 1) {
        element.innerHTML += "<br><br>";
        if (callback) {
            callback();
        }
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1, callback), 45);
}

textTypingEffect(div, text1, 0, function() {
    text1Finished = true;
    console.log(text1Finished);

    if (text1Finished) {
        // div.innerHTML += "<br>";
        textTypingEffect(div, text2, 0, function() {
            text2Finished = true;
            console.log(text2Finished);

            if (text2Finished) {
                textTypingEffect(div, text3, 0, function() {
                    text3Finished = true;
                    console.log(text3Finished);

                    if (text3Finished) {
                        textTypingEffect(div, text4, 0, function() {
                            text4Finished = true;
                            console.log(text4Finished);

                            if (text4Finished) {
                                textTypingEffect(div, text5, 0, function() {
                                    text5Finished = true;
                                    console.log(text5Finished);
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
