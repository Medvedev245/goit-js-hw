"use strict";
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
console.log(user);
//1//
user.mood = "happy";
console.log(user);
//2//
user.hobby = "skydiving";
console.log(user);
//3//
user.premium = false;
console.log(user);
//4//
for (const key in user) {
  console.log(key);
  console.log(user[key]);
}
