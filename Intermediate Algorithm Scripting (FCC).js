# Solutions for FCC Beta Intermediate Algorithm Scripting Challenges 


## Sum All Numbers in a Range

/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

TEST
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45. */


	function sumAll(arr) {
		var start = Math.min(arr[0], arr[1]);
  		var end = Math.max(arr[0], arr[1]);
  		var newArr = [];
  
  		for (let i = start; i < end+1; i++) {
    		newArr.push(i);
  		}
  		return newArr.reduce((a,b) => a + b, 0 );
	}


	sumAll([4, 1]);



## Diff Two Arrays


/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. You can return the array with its elements in any order.

TESTS
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]should return an array with two items.
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]should return [].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]should return an empty array.
[1, 2, 3, 5], [1, 2, 3, 4, 5]should return [4].
[1, 2, 3, 5], [1, 2, 3, 4, 5]should return an array with one item.
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items. */


	function diffArray(arr1, arr2) {
	  var newArr = arr1.concat(arr2).sort();

	  for (var i = newArr.length; i >= 0; i--){
		if (newArr[i] == newArr[i-1]){
		  newArr.splice(i-1, 2);
		}
	  }

	 return newArr;
	}


	diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




## Check for Palindromes

/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR"among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2". 

TESTS
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla")should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four")should return false. */


	function palindrome(str) {
  
  		var stripped = str.replace(/[\W_]+/g,"").toLowerCase();
  		var reversed = stripped.split("").reverse().join("");
  
  		return stripped == reversed ? true : false;
	}

	palindrome("0_0 (: /-\ :) 0-0");



## Seek and Destroy

/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
You have to use the arguments object.

TESTS
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3)should return [].
destroyer(["tree", "hamburger", 53], "tree", 53)should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")should return [12,92,65].*/


	function destroyer(arr) {
	  // Remove all the values
	  return arr;
	}

	destroyer([1, 2, 3, 1, 2, 3], 2, 3);


## Wherefore art thou

/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

TESTS
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []*/

	function whatIsInAName(collection, source) {
	  // What's in a name?
	  var arr = [];
	  // Only change code below this line


	  // Only change code above this line
	  return arr;
	}

	whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



## Spinal Tap Case

/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

TESTS
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things". */

	function spinalCase(str) {
	  // "It's such a fine line between stupid, and clever."
	  // --David St. Hubbins
	  return str;
	}

	spinalCase('This Is Spinal Tap');



## Roman Numeral Converter

/*Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

TESTS
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"*/

	function convertToRoman(num) {
	 return num;
	}

	convertToRoman(36);


## Caesars Cipher

/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

TESTS
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
rot13("SERR CVMMN!") should decode to FREE PIZZA!
rot13("SERR YBIR?") should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.*/

	function rot13(str) { // LBH QVQ VG!

	  return str;
	}

	// Change the inputs below to test
	rot13("SERR PBQR PNZC");


## Pig Latin

/*Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

TESTS
translatePigLatin("california")should return "aliforniacay".
translatePigLatin("paragraphs")should return "aragraphspay".
translatePigLatin("glove")should return "oveglay".
translatePigLatin("algorithm")should return "algorithmway".
translatePigLatin("eight")should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.*/

	function translatePigLatin(str) {
	  return str;
	}

	translatePigLatin("consonant");



## Search and Replace

/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

TESTS
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".*/

	function myReplace(str, before, after) {
	  return str;
	}

	myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


## DNA Pairing

/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

TESTS
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].*/

	function pairElement(str) {
	  return str;
	}

	pairElement("GCG");


## Missing letters

/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

TESTS
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno")should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz")should return undefined.*/

	function fearNotLetter(str) {
	  return str;
	}

	fearNotLetter("abce");



## Sorted Union

/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

TESTS
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])should return [1, 2, 3, 5, 4, 6, 7, 8].*/


	function uniteUnique(arr) {
	  return arr;
	}

	uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



## Convert HTML Entities

/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

TESTS
convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve")should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return Schindler&apos;s List.
convertHTML("<>") should return &lt;&gt;.
convertHTML("abc") should return abc.*/

	function convertHTML(str) {
	  // &colon;&rpar;
	  return str;
	}

	convertHTML("Dolce & Gabbana");



## Sum All Odd Fibonacci Numbers

/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

TESTS
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.*/


	function sumFibs(num) {
	  return num;
	}

	sumFibs(4);



## Sum All Primes

/* Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.*/


	function sumPrimes(num) {
	  return num;
	}

	sumPrimes(10);



## Smallest Common Multiple

/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10])should return 2520.
smallestCommons([1, 13])should return 360360.
smallestCommons([23, 18])should return 6056820.*/


	function smallestCommons(arr) {
	  return arr;
	}


	smallestCommons([1,5]);



## Drop it

/*Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function funcreturns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;})should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;})should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;})should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;})should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})should return [3, 9, 2].*/


	function dropElements(arr, func) {
	  // Drop them elements.
	  return arr;
	}

	dropElements([1, 2, 3], function(n) {return n < 3; });


## Steamroller

/*Flatten a nested array. You must account for varying levels of nesting.

TESTS
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].*/


	function steamrollArray(arr) {
	  // I'm a steamroller, baby
	  return arr;
	}

	steamrollArray([1, [2], [3, [[4]]]]);



## Binary Agents

/* Return an English translated sentence of the passed binary string.
The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")should return "I love FreeCodeCamp!" */

	function binaryAgent(str) {
	  return str;
	}

	binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


## Everything Be True

/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.

TESTS
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
truthCheck([{"single": "yes"}], "single") should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false*/

	function truthCheck(collection, pre) {
	  // Is everyone being true?
	  return pre;
	}

	truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



## Arguments Optional

/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.

TESTS
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt")should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.*/


	function addTogether() {
	  return false;
	}

	addTogether(2,3);



## Make a Person

/* Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.

TESTS
Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").*/


	var Person = function(firstAndLast) {
	  // Complete the method below and implement the others similarly
	  this.getFullName = function() {
		return "";
	  };
	  return firstAndLast;
	};

	var bob = new Person('Bob Ross');
	bob.getFullName();



## Map the Debris

/*Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on Wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

TESTS
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].*/


	function orbitalPeriod(arr) {
	  var GM = 398600.4418;
	  var earthRadius = 6367.4447;
	  return arr;
	}

	orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

