let display = document.getElementById("display");
let justCalculated = false;

function appendValue(value) {
  if (justCalculated) {
    display.value = "";
    justCalculated = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  justCalculated = false;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
    justCalculated = true;
  } catch {
    display.value = "Error";
  }
}
