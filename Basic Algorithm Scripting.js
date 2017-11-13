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


## Find the Longest Word in a String

/* Return the length of the longest word in the provided sentence.
Your response should be a number. 

TESTS
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6. */

	function findLongestWordLength(str) {
		var arr = str.split(" ");
		arr.sort(function(a, b){return b.length-a.length});
		return arr.shift().length;
	}

	findLongestWordLength("The quick brown fox jumped over the lazy dog");


## Return Largest Numbers in Arrays

/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. 

TESTS
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])should return [27, 5, 39, 1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])should return [9, 35, 97, 1000000].
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])should return [25, 48, 21, -3]. */


	function largestOfFour(arr) {
	 var highest = [];
		for (var i=0; i < arr.length; i++){
			highest.push(Math.max(...arr[i]));
		}
	return highest;
	
	}

	largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


## Confirm the Ending

/*Check if a string (first argument, str) ends with the given target string (second argument, target). Do not use the built-in method .endsWith() to solve the challenge.

TESTS
confirmEnding("Bastian", "n")should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Connor", "n")should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false. */

	function confirmEnding(str, target) {
      str.substr(-target.length) == target ? return true : return false;
	}

	confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");










