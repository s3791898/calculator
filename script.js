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

// I need to figure out how to retrieve and store the first operand, second operand and the operator values in the display
// Might be able to use the split method to retrieve the first operand, second operand and the operator
function operate() {
  // Get the current display value
  const currentDisplayValue = display.value;
  // Split the displayValue into an array of operands and operator
  const operandsAndOperator = currentDisplayValue.split(/([+-/*])/);

  // Extract the operands and operator
  firstOperand = operandsAndOperator[0];
  operator = operandsAndOperator[1];
  secondOperand = operandsAndOperator[2];

  // Check if all necessary values are present
  if (firstOperand && operator && secondOperand) {
    if (operator === "/" && parseFloat(secondOperand) === 0) {
      // Division by zero error
      display.value = "Undefined";
    } else {
      // Perform the calculation
      result = calculate(
        parseFloat(firstOperand),
        operator,
        parseFloat(secondOperand)
      );

      // Display the result
      display.value = result;
      // Update the displayValue for further calculations
      displayValue = result.toString();
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
    case "*":
      return multiply(a, b);
    case "/":
      return b === 0 ? null : divide(a, b);
    default:
      return null;
  }
}

function clearDisplay() {
  display.value = "";
  firstOperand = "";
  1231;
  secondOperand = "";
  operator = null;
  displayValue = "";
}

function appendToDisplay(input) {
  // Check if the input is an opeator and if there is already an operator
  displayValue += input;
  display.value += input;
}

function deleteLastEntry() {
  displayValue = displayValue.slice(0, -1);
  display.value = displayValue;
}

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendToDisplay(key);
  } else if (key === "." && displayValue.indexOf(".") === -1) {
    appendToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  } else if (key === "Enter") {
    operate();
  } else if (key === "Delete") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLastEntry();
  }
}
