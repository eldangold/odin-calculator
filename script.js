let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
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
    if (secondNumber != 0) {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        document.getElementById("display").textContent = result;
    }

    else {
        resetValues();
        document.getElementById("display").textContent = "You can't divide by 0";
    }

}

function operate(firstNumber, secondNumber, operator) {
    if (operator === "+" && firstNumber !== "" && secondNumber !== "") {
        sum(firstNumber, secondNumber);
    } else if (operator === "-" && firstNumber !== "" && secondNumber !== "") {
        subtract(firstNumber, secondNumber);
    } else if (operator === "X" && firstNumber !== "" && secondNumber !== "") {
        multiply(firstNumber, secondNumber);
    } else if (operator === "/" && firstNumber !== "" && secondNumber !== "") {
        divide(firstNumber, secondNumber)
    }
    operator = "";
}

for (let number of document.querySelectorAll(".numbers")) {
    number.addEventListener("click", (number) => {
        if (result !== "") {
            resetValues();
        }

        if (!operator) {
            firstNumber += number.target.textContent;
            displayValue = firstNumber;
            document.getElementById("display").textContent = displayValue;
        } else {
            secondNumber += number.target.textContent;
            displayValue = firstNumber + operator + secondNumber;
            document.getElementById("display").textContent = displayValue;
        }
    });
}

for (let control of document.querySelectorAll(".controls")) {
    control.addEventListener("click", (control) => {
        if (firstNumber !== "" && secondNumber !== "") {
            operate(firstNumber, secondNumber, operator);
            operator = control.target.textContent;
            firstNumber = result;
            secondNumber = "";
            displayValue = firstNumber + operator;
            document.getElementById("display").textContent = displayValue;
            result = "";
        } else if (firstNumber == "" && control.target.textContent == "-") {
            firstNumber = "-" + firstNumber;
            displayValue = firstNumber;
            document.getElementById("display").textContent = displayValue;
        }

        else if (firstNumber == "" && control.target.textContent !== "-") {}

        else {
            operator = control.target.textContent;
            displayValue = firstNumber + operator;
            document.getElementById("display").textContent = displayValue;
        }
    });
}

function resetValues() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "";
    result = "";
    document.getElementById("display").textContent = displayValue;
}

document.getElementById("finishCalculation").addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "") {
        operate(firstNumber, secondNumber, operator);
    }
});

document.getElementById("clearAll").addEventListener("click", resetValues);