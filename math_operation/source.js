function addValue() {
  // Get Value from html input
  const firstValueInString = document.getElementById("firstValue").value;
  const secondValueInString = document.getElementById("secondValue").value;

  // parseInt method converts string to a number
  const firstValueAsNumber = parseInt(firstValueInString);
  const secondValueAsNumber = parseInt(secondValueInString);

  // add two numbers
  const total = firstValueAsNumber + secondValueAsNumber;

  // show output as an alert
  alert("Total value: " + total);
}

// Solve this
function subtractValue() {}

// Solve this
function multiplyValue() {}

// Solve this
function divideValue() {}
