"use strict";
let message = "'Proin sociis natoque et magnis parturient montes mus'";
const arry = message.split(" ");

const pricePerWord = 10;

const calculateEngravingPrice = function (message, pricePerWord) {
  const c = message * pricePerWord;
  return c;
};
console.log(message);
console.log(calculateEngravingPrice(arry.length, pricePerWord));

//При замене message и pricePerWord,
//изменяется и цена за слово.
