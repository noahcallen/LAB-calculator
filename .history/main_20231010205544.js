let num1
let num2
//document.getElementById("num1-input").value = num1
//document.getElementById("num2-input").value = num2
//num1 = parseFloat(document.getElementById("num1-input").value)
//num2 = parseFloat(document.getElementById("num2-input").value)
// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    num1 = parseFloat(document.getElementById("num1-input").value);
    num2 = parseFloat(document.getElementById("num2-input").value);
    let addButton = document.getElementById("add-button");
    addButton = num1 + num2;
    document.getElementById("sum-el").textContent = "Sum:" + addButton;
    }

function subtract() {
    num1 = parseFloat(document.getElementById("num1-input").value);
    num2 = parseFloat(document.getElementById("num2-input").value);
    let subButton = document.getElementById("subtract-button");
    subButton = num1 - num2;
    document.getElementById("sum-el").textContent = "Sum:" + subButton;
}

function divide() {
    num1 = parseFloat(document.getElementById("num1-input").value);
    num2 = parseFloat(document.getElementById("num2-input").value);
    let divButton = document.getElementById("divide-button");
    divButton = num1 / num2;
    document.getElementById("sum-el").textContent = "Sum:" + divButton;
}

function multiply() {
    num1 = parseFloat(document.getElementById("num1-input").value);
    num2 = parseFloat(document.getElementById("num2-input").value);  
    let multButton = document.getElementById("multiply-button");
    multButton = num1 * num2;
    document.getElementById("sum-el").textContent = "Sum:" + multButton;
}


// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
