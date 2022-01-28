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

// Solve this and use "-"
function subtractValue() {
  // We just copy the method from above
  const firstValueInString = document.getElementById("firstValue").value;
  const secondValueInString = document.getElementById("secondValue").value;

  // We just copy the method from above
  const firstValueAsNumber = parseInt(firstValueInString);
  const secondValueAsNumber = parseInt(secondValueInString);

  // replace "+" with "-"
  const total = firstValueAsNumber + secondValueAsNumber;

  // show output as an alert
  alert("Total value: " + total);
}

// Solve this and use "*"
function multiplyValue() {}

// Solve this and use "/"
function divideValue() {}
