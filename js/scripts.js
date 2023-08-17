

// This is the version of the function that solves Test 2.

// function swapVowelsWithDashes (text) {
//   if (text.trim().length === 0) {
//     return text;
//   } else if (text) {
//     return text;
//   }
// }


// This is the version of the function that solves Test 3.
// Utility Functions
// function hasVowel(text) {
//   const vowelsArray = ["a", "e", "i", "o", "u"];

//   let bool = false;

//   vowelsArray.forEach(function(vowel) {
//     if (text.includes(vowel)) {
//       bool = true;
//     } 

//   });
//   return bool;
// }


// Business Logic Functions


function swapVowelsWithDashes(text) {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let newText = [];
  let textArray = text.split("");

  for (let index = 0; index < textArray.length; index++) {

    if (vowelsArray.indexOf(textArray[index]) === -1) {
      newText.push(textArray[index]);
    } else {
      newText.push("-");
    }
  }
  newText = newText.join("");
  return newText;
}

//Other method:
function textWithNoVowels(text) {
  return text.replace(/[aeiou]/gi, "-");
}