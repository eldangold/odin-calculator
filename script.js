let firstNumber;
let secondNumber;
let operator;
let displayValue = "";

function sum(firstNumber, secondNumber) {
    displayValue = Number(firstNumber) + Number(secondNumber);
    document.getElementById("display").textContent = displayValue;
    
}

function subtract(firstNumber, secondNumber) {
    document.getElementById("display").textContent = firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    document.getElementById("display").textContent = firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    document.getElementById("display").textContent = firstNumber / secondNumber;
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
        if (!operator) { firstNumber =  number.target.textContent;
            displayValue = firstNumber;
            document.getElementById("display").textContent = displayValue;}
        else { secondNumber = (number.target.textContent);
        displayValue += secondNumber;
        document.getElementById("display").textContent = displayValue;
        }
    });
}

for (number of document.querySelectorAll(".controls")) {
    number.addEventListener("click", (number) =>  { operator = number.target.textContent
        displayValue += operator;
        document.getElementById("display").textContent = displayValue;
    });
}

document.getElementById("finishCalculation").addEventListener("click", () => operate(firstNumber,secondNumber,operator));