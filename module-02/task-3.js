"use strict";
const findLongestWord = function (str) {
  let arrStr = str.split(" ");
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'

console.log(findLongestWord("Google do a roll")); // вернет 'Google'

console.log(findLongestWord("May the force be with you")); // вернет 'force'
