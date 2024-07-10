const resultDiv = document.querySelector("#result");
const p = document.createElement("p");

const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

const input1 = document.querySelector("#number1");
const input2 = document.querySelector("#number2");
const operatorValue = document.querySelector("#operation");

operatorValue.value = "";

function getValues() {
  let num1 = parseInt(input1.value);
  let operator = operatorValue.value;
  let num2 = parseInt(input2.value);
  let resultObject = new Object();
  resultObject.num1 = num1;
  resultObject.num2 = num2;
  resultObject.operator = operator;
  return resultObject;
}

function operate(num1, operator, num2) {
  let result;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  }
  p.innerText = result;
  resultDiv.appendChild(p);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

equalsButton.addEventListener("click", () => {
  object = getValues();
  let num1 = object.num1;
  let num2 = object.num2;
  let operator = object.operator;
  operate(num1, operator, num2);
});

clearButton.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  p.innerText = "";
  operatorValue.value = "";
});
