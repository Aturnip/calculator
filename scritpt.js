// calculator's functions
function subtract(a,b) {
    return a-b;
};

function add(a,b) {
    return a+b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(sign, a,b) {
    if (sign === "+") {
        return add(a,b);
    } else if (sign === "-") {
        return subtract(a,b);
    } else if (sign === "*") {
        return multiply(a,b);
    } else {
        return divide(a,b);
    }
}

// targetting html elements
const clearPanel = document.querySelector(".clear");
const numbersPanel = document.querySelector(".numbersContainer")
const signsPanel = document.querySelector(".signsContainer")
const display = document.querySelector(".screen");

// setting default display value to ""
let displayMemory = "";

// display update function
function displayUpdate() {
    display.textContent = `${displayMemory}`;
}

// variables
let currentNr = "";
let nextNr = "";
let answer = "";
let operatorSign = "";

// clear display function
function clearDisplay() {
    displayMemory = "";
    currentNr = "";
    operatorSign = "";
    calcMemory = "";
    displayUpdate();
}
const clearBtn = document.querySelector(".clearBtn")
clearBtn.addEventListener("click", () => {
    clearDisplay();
})

// adding events to buttons
const buttonsOfNumbers = document.querySelectorAll(".numbers");
buttonsOfNumbers.forEach((btn) => btn.addEventListener("click", (e) => {
    if (displayMemory.includes("=")) clearDisplay();
    currentNr += e.target.id;
    displayMemory += e.target.id;
    displayUpdate();
}));

// variable that stores current value of equation
let calcMemory = 0;

// calculator main
const buttonsOfSigns = document.querySelectorAll(".signs");
buttonsOfSigns.forEach((btn) => btn.addEventListener("click", (e) => {
    if (!(e.target.id === "=")) {
        if (displayMemory.includes("/") || displayMemory.includes("*") || displayMemory.includes("+") || displayMemory.includes("-")) {
            calcMemory = operate(operatorSign, calcMemory, Number(currentNr));
            operatorSign = e.target.id;
            currentNr = "";
            displayMemory += operatorSign;
            displayUpdate();
            return;
        }
        operatorSign = e.target.id;
        calcMemory = Number(currentNr);
        currentNr = "";
        displayMemory += operatorSign;
        displayUpdate();
        return;
    }
    calcMemory = operate(operatorSign, calcMemory, Number(currentNr));
    displayMemory += "=" + `${calcMemory}`;
    displayUpdate();
    return;
}));



