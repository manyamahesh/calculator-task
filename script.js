let display = document.getElementById("display");
let expression = document.getElementById("expression");
let justCalculated = false;

function appendValue(value) {
  if (justCalculated && !isOperator(value)) {
    display.value = "";
    expression.innerText = "";
    justCalculated = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  expression.innerText = "";
  justCalculated = false;
}

function calculateResult() {
  try {
    expression.innerText = display.value;
    display.value = eval(display.value);
    justCalculated = true;
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  if (display.value) {
    if (display.value.startsWith('-')) {
      display.value = display.value.substring(1);
    } else {
      display.value = '-' + display.value;
    }
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/', '%'].includes(char);
}
