"use strict";
const countProps = function (obj) {
  const value = Object.keys(obj).length;
  console.log(value);
};

console.log(
  countProps({
    mail: "poly@mail.com",
    isOnline: true,
    score: 500,
  }),
);

console.log(countProps({ name: "Mango", age: 2 }));

// Напиши функцию countProps(obj), считающую кол-во свойств в
// объекте. Функция возвращает число - количество свойств.

// const countProps = function(obj) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true,
// score: 500 })); // 3
