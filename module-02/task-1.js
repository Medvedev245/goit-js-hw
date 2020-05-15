"use strict";
const friends = [" ", "Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const logItems = function () {
  for (let i = 1; i < friends.length; i += 1) {
    console.log(i);
    console.log(friends[i]);
  }
  return;
};

const animals = logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
console.log(animals);

const numbers = logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
console.log(numbers);
