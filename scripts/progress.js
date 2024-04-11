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
