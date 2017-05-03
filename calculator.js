console.log("Hello calculator!");

var firstNum = document.getElementById("input1");
var secondNum = document.getElementById("input2");
var output = document.getElementById("output");
var addition = document.getElementById("add");
var subtraction = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

var addAnswer = function sum(firstNum, secondNum){
	return (firstNum + secondNum);
}

function addClick(){
	answer = addAnswer(parseInt(firstNum.value), parseInt(secondNum.value))
	output.innerHTML = answer;
}

addition.addEventListener("click", addClick);

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

var subtractAnswer = function subtract(firstNum, secondNum){
	return (firstNum - secondNum);
}

function subtractClick(){
	answer = subtractAnswer(parseInt(firstNum.value), parseInt(secondNum.value))
	output.innerHTML = answer;
}

subtract.addEventListener("click", subtractClick);
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

var multiplyAnswer = function multiply(firstNum, secondNum){
	return (firstNum * secondNum);
}

function multiplyClick(){
	answer = multiplyAnswer(parseInt(firstNum.value), parseInt(secondNum.value))
	output.innerHTML = answer;
}

multiply.addEventListener("click", multiplyClick);

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

 var divideAnswer = function divide(firstNum, secondNum){
	return (firstNum / secondNum);
}

function divideClick(){
	answer = divideAnswer(parseInt(firstNum.value), parseInt(secondNum.value))
	output.innerHTML = answer;
}

divide.addEventListener("click", divideClick);
