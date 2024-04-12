////////////////////////////////////////////////////////////
// Script for the first list '.sortable-list1'
////////////////////////////////////////////////////////////
const sortableLists1 = document.querySelectorAll(".sortable-list1");

sortableLists1.forEach(sortableList => {
    sortableList.addEventListener("dragover", (e) => {
        e.preventDefault();

        sortableList.addEventListener("drop", (e) => {
            // Prevent the default behavior
            e.preventDefault();

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
                }
            } else {
                var theItems = document.getElementsByClassName("item1");
                for (var i = 0; i < theItems.length; i++) {
                    theItems[i].style.background = "";
                }
            }
        });

        const draggingItem = sortableList.querySelector(".dragging");
        const siblings = [...sortableList.querySelectorAll(".item1:not(.dragging)")];

        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });

        sortableList.insertBefore(draggingItem, nextSibling);
    });
});

const items1 = document.querySelectorAll(".item1");

items1.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Script for the second list '.sortable-list2'
////////////////////////////////////////////////////////////
const sortableLists2 = document.querySelectorAll(".sortable-list2");

sortableLists2.forEach(sortableList => {
    sortableList.addEventListener("dragover", (e) => {
        e.preventDefault();

        sortableList.addEventListener("drop", (e) => {
            // Prevent the default behavior
            e.preventDefault();

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
                }
            } else {
                var theItems = document.getElementsByClassName("item2");
                for (var i = 0; i < theItems.length; i++) {
                    theItems[i].style.background = "";
                }
            }
        });

        const draggingItem = sortableList.querySelector(".dragging");
        const siblings = [...sortableList.querySelectorAll(".item2:not(.dragging)")];

        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });

        sortableList.insertBefore(draggingItem, nextSibling);
    });
});

const items2 = document.querySelectorAll(".item2");

items2.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});
////////////////////////////////////////////////////////////


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