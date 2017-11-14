# Solutions for FCC Beta Basic Algorithm Scripting Challenges 

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


## Basic Algorithm Scripting: Repeat a String Repeat a String

/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. The built-in repeat()-method should not be used

TESTS
repeatStringNumTimes("*", 3)should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8)should return "********".
repeatStringNumTimes("abc", -2) should return "". */


	function repeatStringNumTimes(str, num) {
		var word = "";
		for (var i = 0; i<num; i++){
			word += str;
		}
		return word;	
	}

	repeatStringNumTimes("abc", 3);


## Truncate a String

/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

TESTS
truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket"
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".*/

	function truncateString(str, num) {
		var word = "";
		if ((num == str.length) || (num > str.length)){
			word = str;
		} else if (num <= 3){
			word = str.slice(0, num) + "...";
		} else if (num < str.length){
			word = str.slice(0, num-3) + "...";
		}
	  return word;
	}

	truncateString("Peter Piper picked a peck of pickled peppers", 14);


	
	
## Finders Keepers

/* Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

TESTS
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.*/

	function findElement(arr, func) {
	  var num = 0;
	  return num;
	}

	findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });










