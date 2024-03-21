const div = document.querySelector(".home-text");
const text = "Agent, you've been captured by the nefarious organization known as V.I.K.I.N.G.S. Your objective is to escape their highly secured lair by utilizing your expertise as an Agent of Data. This is not just any escape; it's a test of your skills in observation, analysis, and problem-solving. Your training as an Agent of Data has prepared you for this moment. Trust in your abilities, use every skill at your disposal, and make your escape from the evil V.I.K.I.N.G.S' lair a success. Good luck, Agent. The fate of the world rests in your hands."

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    // If the end of the string is reached
    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 45);
}

textTypingEffect(div, text);
