let firstNumber = 5;
let secondNumber = 7;
let operator = "sum";
let displayValue;

function sum(firstNumber, secondNumber) {
    document.getElementById("display").textContent = firstNumber + secondNumber;
    
}

function subtract(firstNumber, secondNumber) {
    document.getElementById("display").textContent = firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    document.getElementById("display").textContent = firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    document.getElementById("display").textContent = firstNumber % secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
    if (operator = "sum") {
        sum(firstNumber, secondNumber)
    }

    else if (operator = "subtract") {
        subtract(firstNumber, secondNumber)
    }

    else if (operator = "multiply") {
        multiply(firstNumber, secondNumber)
    }

    else if (operator = "divide") {
        divide(firstNumber, secondNumber)
    }
}