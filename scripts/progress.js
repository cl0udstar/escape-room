// Function to set puzzle completion status
function setPuzzleCompletionStatus(puzzleNumber, status) {
    // Construct a unique key for the puzzle
    const key = `puzzle${puzzleNumber}`;
    // Store the completion status in localStorage
    localStorage.setItem(key, status);
}

// Function to get puzzle completion status
function getPuzzleCompletionStatus(puzzleNumber) {
    // Construct the key for the puzzle
    const key = `puzzle${puzzleNumber}`;
    // Retrieve the completion status from localStorage
    return localStorage.getItem(key);
}

// Function to check puzzle completion status and update div colors
function updatePuzzleDivColors() {
    // Loop through each puzzle
    for (let i = 1; i <= 7; i++) {
        // Get the completion status of the puzzle
        const status = getPuzzleCompletionStatus(i);
        // Get the corresponding div element
        const div = document.getElementById(`circle${i}`);
        // Update the div color based on the completion status
        if (status === 'complete') {
            div.style.backgroundColor = '#87A922'; // Set color to green if puzzle is complete
        } 
    }
}
