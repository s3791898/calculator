let firstOperand = "";
let secondOperand = "";
let operator = null;
let displayValue = "";

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");

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

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return null;
      } else {
        return divide(a, b);
      }
    default:
      return null;
  }
}

function clearDisplay() {
  display.value = "";
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

function appendToDisplay(input) {
  displayValue += input;
  display.value += input;
}

function clearLastEntry() {
  displayValue = displayValue.slice(0, -1);
  display.value = displayValue;
}
