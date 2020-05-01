"use strict";

let total = 0;

while (true) {
  let input = prompt(`Введи число`);

  if (input === null) {
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log(`Было введено не число, пропускаем итерацию!`);
    continue;
  }

  total += input;
}

console.log(`Общая сумма ${total}`);
