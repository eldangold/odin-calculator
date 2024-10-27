let calcData = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  result: "",
  displayValue: "",
};

function sum(calcData) {
  calcData.result = +(
    parseFloat(calcData.firstNumber) + parseFloat(calcData.secondNumber)
  ).toFixed(5);
  calcData.displayValue = calcData.result;
  document.getElementById("display").textContent = calcData.displayValue;
}

function subtract(calcData) {
  calcData.result = +(
    parseFloat(calcData.firstNumber) - parseFloat(calcData.secondNumber)
  ).toFixed(5);
  calcData.displayValue = calcData.result;
  document.getElementById("display").textContent = calcData.displayValue;
}

function multiply(calcData) {
  calcData.result = +(
    parseFloat(calcData.firstNumber) * parseFloat(calcData.secondNumber)
  ).toFixed(5);
  calcData.displayValue = calcData.result;
  document.getElementById("display").textContent = calcData.displayValue;
}

function divide(calcData) {
  if (calcData.secondNumber != 0) {
    calcData.result = +(
      parseFloat(calcData.firstNumber) / parseFloat(calcData.secondNumber)
    ).toFixed(5);
    calcData.displayValue = calcData.result;
    document.getElementById("display").textContent = calcData.displayValue;
  } else {
    resetValues();
    document.getElementById("display").textContent = "You can't divide by 0";
  }
}

function operate(calcData) {
  if (
    calcData.operator === "+" &&
    calcData.firstNumber &&
    calcData.secondNumber
  ) {
    sum(calcData);
  } else if (
    calcData.operator === "-" &&
    calcData.firstNumber &&
    calcData.secondNumber
  ) {
    subtract(calcData);
  } else if (
    calcData.operator === "X" || calcData.operator === "*" && calcData.firstNumber && calcData.secondNumber)
   {
    multiply(calcData);
  } else if (
    calcData.operator === "/" || calcData.operator === ":" &&
    calcData.firstNumber &&
    calcData.secondNumber
  ) {
    divide(calcData);
  }
}

for (let number of document.querySelectorAll(".numbers")) {
  number.addEventListener("click", (number) => {
    if (calcData.result) {
      resetValues();
    }

    if (!calcData.operator) {
      calcData.firstNumber += number.target.getAttribute("data-number");
      calcData.displayValue = calcData.firstNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    } else {
      calcData.secondNumber += number.target.getAttribute("data-number");
      calcData.displayValue =
        calcData.firstNumber + calcData.operator + calcData.secondNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    }
  });
}

for (let control of document.querySelectorAll(".controls")) {
  control.addEventListener("click", (control) => {
    if (calcData.firstNumber && calcData.secondNumber) {
      operate(calcData);
      calcData.operator = control.target.getAttribute("data-control");
      calcData.firstNumber = calcData.result;
      calcData.secondNumber = calcData.result = "";
      calcData.displayValue = calcData.firstNumber + calcData.operator;
      document.getElementById("display").textContent = calcData.displayValue;
    } else if (
      !calcData.firstNumber &&
      control.target.getAttribute("data-control") == "-"
    ) {
      calcData.firstNumber = "-" + calcData.firstNumber;
      calcData.displayValue = calcData.firstNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    } else if (
      !calcData.firstNumber &&
      control.target.getAttribute("data-control") !== "-"
    ) {
    } else {
      calcData.operator = control.target.getAttribute("data-control");
      calcData.displayValue = calcData.firstNumber + calcData.operator;
      document.getElementById("display").textContent = calcData.displayValue;
    }
  });
}

document.getElementById("positiveAndNegative").addEventListener("click", () => {
  if (!calcData.operator) {
    if (calcData.firstNumber.includes("-")) {
      calcData.firstNumber = calcData.firstNumber.slice(1);
      calcData.displayValue = calcData.firstNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    }
    else {
      calcData.firstNumber = "-" + calcData.firstNumber;
      calcData.displayValue = calcData.firstNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    }
  }
  else if (calcData.secondNumber) {
    if (calcData.secondNumber.includes("-")) {
      calcData.secondNumber = calcData.secondNumber.slice(1);
      calcData.displayValue = calcData.firstNumber + calcData.operator + calcData.secondNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    }
    else {
      calcData.secondNumber = "-" + calcData.secondNumber;
      calcData.displayValue = calcData.firstNumber + calcData.operator + calcData.secondNumber;
      document.getElementById("display").textContent = calcData.displayValue;
  }
}
});

document.getElementById("addFloatingPoint").addEventListener("click", addFloatingPoint)

function resetValues() {
  calcData.firstNumber = calcData.secondNumber = calcData.operator = calcData.displayValue = calcData.result = "";
  document.getElementById("display").textContent = calcData.displayValue;
}

function addFloatingPoint() {
  if (!calcData.operator) {
    if (!calcData.firstNumber.includes(".")) {
      calcData.firstNumber += ".";
      calcData.displayValue = calcData.firstNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    }
  } else if (calcData.secondNumber) {
    if (!calcData.secondNumber.includes(".")) {
      calcData.secondNumber += ".";
      calcData.displayValue =
      calcData.firstNumber + calcData.operator + calcData.secondNumber;
      document.getElementById("display").textContent = calcData.displayValue;
    }
  }
}

function backspace() {
  if (!calcData.operator) {
    calcData.firstNumber = calcData.firstNumber.slice(0, -1);
    calcData.displayValue = calcData.firstNumber;
    document.getElementById("display").textContent = calcData.displayValue;
  } else if (
    calcData.firstNumber &&
    calcData.operator &&
    !calcData.secondNumber
  ) {
    calcData.operator = "";
    calcData.displayValue = calcData.firstNumber;
    document.getElementById("display").textContent = calcData.displayValue;
  } else if (
    calcData.firstNumber &&
    calcData.operator &&
    calcData.secondNumber &&
    !calcData.result
  ) {
    calcData.secondNumber = calcData.secondNumber.slice(0, -1);
    calcData.displayValue =
      calcData.firstNumber + calcData.operator + calcData.secondNumber;
    document.getElementById("display").textContent = calcData.displayValue;
  } else if (calcData.result) {
    calcData.firstNumber = Math.floor(calcData.result / 10);
    calcData.secondNumber = calcData.operator = calcData.result = "";
    calcData.displayValue = calcData.firstNumber;
    document.getElementById("display").textContent = calcData.displayValue;
  }
}

document.getElementById("finishCalculation").addEventListener("click", () => {
  if (calcData.firstNumber && calcData.secondNumber) {
    operate(calcData);
    calcData.firstNumber = calcData.result.toString();
    calcData.secondNumber = calcData.operator = calcData.result = "";
  }
});

document.getElementById("clearAll").addEventListener("click", resetValues);

document.getElementById("backspace").addEventListener("click", backspace);

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return;
    }
    const allowedNumbers = "1234567890";
    const allowedOperators = ".-+=*xX/:Enter";

    if (allowedNumbers.includes(event.key)) {
      if (!calcData.operator) {
        calcData.firstNumber += event.key;
        calcData.displayValue = calcData.firstNumber;
        document.getElementById("display").textContent = calcData.displayValue;
      } else if (calcData.firstNumber && calcData.operator) {
        calcData.secondNumber += event.key;
        calcData.displayValue =
          calcData.firstNumber + calcData.operator + calcData.secondNumber;
        document.getElementById("display").textContent = calcData.displayValue;
      } else {
        resetValues();
        calcData.firstNumber += event.key;
        calcData.displayValue = calcData.firstNumber;
        document.getElementById("display").textContent = calcData.displayValue;
      }
    }

    if (allowedOperators.includes(event.key)) {
      if (calcData.result && event.key !== "=" && event.key !== "Enter") {
        operate(calcData);
        calcData.operator = event.key;
        calcData.firstNumber = calcData.result;
        calcData.secondNumber = calcData.result = "";
        calcData.displayValue = calcData.firstNumber + calcData.operator;
        document.getElementById("display").textContent = calcData.displayValue;
      }

      if (!calcData.firstNumber && event.key == "-") {
        calcData.firstNumber = "-" + calcData.firstNumber;
        calcData.displayValue = calcData.firstNumber;
        document.getElementById("display").textContent = calcData.displayValue;
      } else if (!calcData.firstNumber && event.key !== "-") {
      } else if (
        calcData.firstNumber &&
        calcData.secondNumber &&
        calcData.operator &&
        (event.key == "=" || event.key == "Enter")
      ) {
        operate(calcData);
        calcData.firstNumber = calcData.result.toString();
        calcData.secondNumber = calcData.operator = calcData.result = "";
      }
      else if (event.key == ".") addFloatingPoint()
      else if (event.key !== "=" && event.key !== "Enter") {
        calcData.operator = event.key;
        calcData.displayValue = calcData.firstNumber + calcData.operator;
        document.getElementById("display").textContent = calcData.displayValue;
      }
    }

    event.preventDefault();
  },
  true
);
