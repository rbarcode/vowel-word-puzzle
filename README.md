


## Describe swapVowelsWithDashes()

Test 1: "If string is empty, should return empty string."
Code: swapVowelsWithDashes("");
Expected Result: ""
/*Passed*/

Test 2: "If string has text, return the text."
Code: swapVowelsWithDashes("text goes here");
Expected Result: "text goes here"
/*Passed*/

Test 3: "Check to see if text has a vowel."
Code: 
const vowelsArray = ["a", "e", "i", "o", "u"]
swapVowelsWithDashes("text goes here")
Expected Result: true
/*Passed*/

Test 4: "Swap out vowel with a dash."
const vowelsArray = ["a", "e", "i", "o", "u"]
swapVowelsWithDashes("text goes here")
Expected Result: t-xt g--s h-r-

**Scope**
1. User inputs text.
2. Program processes text.
  a. Get user input
  b. Run function that swaps out vowels with dashes.
3. Show user the processed text.
