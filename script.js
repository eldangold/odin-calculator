let firstNumber = "";
let secondNumber = "";
let operator = "";
let result;
let displayValue = "";

function sum(firstNumber, secondNumber) {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
    document.getElementById("display").textContent = result;
    
}

function subtract(firstNumber, secondNumber) {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
    document.getElementById("display").textContent = result;
}

function multiply(firstNumber, secondNumber) {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
    document.getElementById("display").textContent = result;
}

function divide(firstNumber, secondNumber) {
    result = parseFloat(firstNumber) / parseFloat(secondNumber)
    document.getElementById("display").textContent = result;
}

function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        sum(firstNumber, secondNumber)
    }

    else if (operator === "-") {
        subtract(firstNumber, secondNumber)
    }

    else if (operator === "X") {
        multiply(firstNumber, secondNumber)
    }

    else if (operator === "/") {
        divide(firstNumber, secondNumber)
    }
}

for (number of document.querySelectorAll(".numbers")) {
    number.addEventListener("click", (number) =>  {
        if (!operator) 
            { firstNumber += number.target.textContent;
            displayValue = firstNumber + operator + secondNumber;
            document.getElementById("display").textContent = displayValue;
        }
        else {
            secondNumber += number.target.textContent;
            displayValue = firstNumber + operator + secondNumber;
            document.getElementById("display").textContent = displayValue;
        }
    });
}

for (number of document.querySelectorAll(".controls")) {
    number.addEventListener("click", (number) =>  { 
        
        if (firstNumber !== "" && secondNumber !== "") {
        operate(firstNumber, secondNumber, operator);
        firstNumber = result;
        secondNumber = "";
        displayValue = result += operator;
        document.getElementById("display").textContent = displayValue;
        
    }
    else {
        operator = number.target.textContent
        displayValue += operator;
        document.getElementById("display").textContent = displayValue;
    }
    });
}

document.getElementById("finishCalculation").addEventListener("click", () => operate(firstNumber,secondNumber,operator));

document.getElementById("clearAll").addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = "";
    document.getElementById("display").textContent = displayValue;
})