const display = document.getElementById("display");

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
}

function clearDisplay() {
  display.value = "";
}

function appendToDisplay(input) {
  display.value += input;
}
