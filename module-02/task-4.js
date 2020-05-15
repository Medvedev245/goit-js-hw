"use strict";

const formatString = function (str) {
  let arrStr = str;

  if (arrStr.lenght <= 40) {
    arrStr = str.substr(0, 40);
    arrStr = arrStr`...`;
  } else {
  }
  return arrStr;
};

console.log(
  formatString("qwertyuiop qwertyuiop qwertyuiop qwertyuiop asdfghjklg"),
);

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
//
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(
  formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',),
