let firstNumber;
let secondNumber;
let operator;
let displayValue;

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
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