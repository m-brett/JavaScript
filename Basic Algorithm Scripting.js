## Convert Celsius to Fahrenheit

/* The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheitalready defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit. */

	function convertToF(celsius) {
	  return fahrenheit = (celsius * 9/5)+32;
	}

	convertToF(30);


## Reverse a String

/* Reverse the provided string.
You may need to turn the string into an array before you can reverse it. */

	function reverseString(str) {
	  return str.split("").reverse().join("");
	}

	reverseString("hello");


## Basic Algorithm Scripting: Factorialize a Number

/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 */


	function factorialize(num) {
	var arr = [1];
	  for (var i = 2; i<=num; i++){
		  arr.push(i); 
	  }
	  return arr.reduce(function(a,b){return a*b;});
	}

	factorialize(5);

























