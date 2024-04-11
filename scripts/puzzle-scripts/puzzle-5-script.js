////////////////////////////////////////////////////////////
// Function to shuffle both lists
////////////////////////////////////////////////////////////
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get the lists
const list1 = document.querySelector('.sortable-list1');
const list2 = document.querySelector('.sortable-list2');

// Get list items
const itemsArray1 = Array.from(list1.children);
const itemsArray2 = Array.from(list2.children);

// Shuffle list items
const shuffledItems1 = shuffleArray(itemsArray1);
const shuffledItems2 = shuffleArray(itemsArray2);

// Clear lists
list1.innerHTML = '';
list2.innerHTML = '';

// Append shuffled items back to lists
shuffledItems1.forEach(item => list1.appendChild(item));
shuffledItems2.forEach(item => list2.appendChild(item));
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Function to get the value of each list item with the class 'item1'
////////////////////////////////////////////////////////////
var list1ValuesArray = [];
var listItems1 = document.querySelectorAll('.item1');

listItems1.forEach(function(item) {
    var value = item.getAttribute('value');

    list1ValuesArray.push(value);
});

// Sort the array in descending order
list1ValuesArray.sort(function(a, b) {
    // Convert values to numbers and compare in descending order
    return parseInt(b) - parseInt(a);
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Function to get the value of each list item with the class 'item2'
////////////////////////////////////////////////////////////
var list2ValuesArray = [];
var listItems2 = document.querySelectorAll('.item2');

listItems2.forEach(function(item) {
    var value = item.getAttribute('value');

    list2ValuesArray.push(value);
});

// Sort the array in descending order
list2ValuesArray.sort(function(a, b) {
    // Convert values to numbers and compare in descending order
    return parseInt(b) - parseInt(a);
});
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Function to move an item up and down
////////////////////////////////////////////////////////////
function moveItemUp(item) {
    const previousItem = item.previousElementSibling;
    if (previousItem) {
        item.parentNode.insertBefore(item, previousItem);
        checkArraysAndSetColor1();
        checkArraysAndSetColor2();
    }
}

function moveItemDown(item) {
    const nextItem = item.nextElementSibling;
    if (nextItem) {
        item.parentNode.insertBefore(nextItem, item);
        checkArraysAndSetColor1();
        checkArraysAndSetColor2();
    }
}
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Add click event listeners to select list items
////////////////////////////////////////////////////////////
listItems1.forEach(item => {
    item.addEventListener("click", () => {
        // Remove selected class from all items
        listItems1.forEach(item => {
            item.classList.remove("selected");
        });
        // Add selected class to the clicked item
        item.classList.add("selected");
    });
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Check the arrays
////////////////////////////////////////////////////////////
function checkArraysAndSetColor1() {
    var secondList1ValuesArray = [];
    var listItemsSortable1 = document.querySelectorAll('.item1');

    // Loop through each <li> element
    listItemsSortable1.forEach(function(item) {
        var value = item.getAttribute('value');

        // Push the value into the array
        secondList1ValuesArray.push(value);
    });

    if (secondList1ValuesArray.toString() === list1ValuesArray.toString()) {
        // console.log("Both arrays are equal");
        var theItems = document.getElementsByClassName("item1");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "#C8E4B2";

            const itemControls = theItems[i].querySelector('.item-controls');
            if (itemControls) {
                itemControls.style.display = 'none'; // Show arrows
            }
        }
    } else {
        var theItems = document.getElementsByClassName("item1");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "";
        }
    }
}
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Add click event listeners to select list items
////////////////////////////////////////////////////////////
listItems2.forEach(item => {
    item.addEventListener("click", () => {
        // Remove selected class from all items
        listItems2.forEach(item => {
            item.classList.remove("selected");
        });
        // Add selected class to the clicked item
        item.classList.add("selected");
    });
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Check the arrays
////////////////////////////////////////////////////////////
function checkArraysAndSetColor2() {
    var secondList2ValuesArray = [];
    var listItemsSortable2 = document.querySelectorAll('.item2');

    // Loop through each <li> element
    listItemsSortable2.forEach(function(item) {
        var value = item.getAttribute('value');

        // Push the value into the array
        secondList2ValuesArray.push(value);
    });

    if (secondList2ValuesArray.toString() === list2ValuesArray.toString()) {
        // console.log("Both arrays are equal");
        var theItems = document.getElementsByClassName("item2");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "#C8E4B2";
            const itemControls = theItems[i].querySelector('.item-controls');
            if (itemControls) {
                itemControls.style.display = 'none'; // Show arrows
            }
        }
    } else {
        var theItems = document.getElementsByClassName("item2");
        for (var i = 0; i < theItems.length; i++) {
            theItems[i].style.background = "";
        }
    }
}
////////////////////////////////////////////////////////////
