let previousValue = "";
let currentValue = "";
let operator = "";

// Store all components on HTML in our JS
let clear = document.querySelector("#clear-btn");
let backspace = document.querySelector("#delete-btn");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

operators.forEach((op) =>
  op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  })
);

// Logic and event listener for clear button
clear.addEventListener("click", clearScreen);

// Logic and event listener for delete button
backspace.addEventListener("click", deleteLastEntry);

// Logic and event listener for equal button
equal.addEventListener("click", operate);

// Logic and event listener for clear decimal button
decimal.addEventListener("click", addDecimal);

function handleNumber(num) {
  if (currentValue.length <= 7) {
    currentValue += num;
    currentScreen.textContent = currentValue;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
  previousScreen.textContent = previousValue + " " + operator;
  currentScreen.textContent = currentValue;
}

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
    currentScreen.textContent = currentValue;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  if (currentValue != "" && previousValue != "") {
    // Call calculate and store the result
    let result = calculate(previousValue, operator, currentValue);

    // Check if the result is not null
    if (result !== null) {
      // Update screens and variables with the result
      previousScreen.textContent = "";
      currentScreen.textContent = isWholeNumber(result)
        ? result.toFixed(0)
        : result.toFixed(1);
      previousValue = isWholeNumber(result)
        ? result.toFixed(0)
        : result.toFixed(1);
      currentValue = previousValue;
      operator = "";
    } else {
      // Handle division by zero error
      currentScreen.textContent = "Undefined";
      previousValue = "";
      currentValue = "";
      operator = "";
    }
  }
}

function calculate(a, operator, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return b === 0 ? null : divide(a, b);
    default:
      return null;
  }
}

function clearScreen() {
  previousValue = "";
  currentValue = "";
  operator = "";
  previousScreen.textContent = "";
  currentScreen.textContent = "";
}

function deleteLastEntry() {
  currentValue = currentScreen.textContent.slice(0, -1);
  currentScreen.textContent = currentValue;
}

// Helper function to check if a number is a whole number
function isWholeNumber(number) {
  return Number.isInteger(number);
}

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    handleNumber(key);
  } else if (key === "." && currentValue.indexOf(".") === -1) {
    addDecimal();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperator(key);
  } else if (key === "Enter") {
    operate();
  } else if (key === "Delete") {
    clearScreen();
  } else if (key === "Backspace") {
    deleteLastEntry();
  }
}
