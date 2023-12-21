let firstOperand = "";
let secondOperand = "";
let operator = null;
let displayValue = "";

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");

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
  let result = "";

  // I need to figure out how to retrieve and store the first operand, second operand and the operator values in the display
  // Might be able to use the split method to retrieve the first operand, second operand and the operator

  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      if (b === 0) {
        result = null;
      } else {
        result = divide(a, b);
      }
      break;
    default:
      result = null;
  }

  display.value = result;
  return result;
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
