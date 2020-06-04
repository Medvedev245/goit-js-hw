"use strict";
// const hotel = {
//   name: "Hills",
//   stars: 5,
//   capasity: 200,
// };
// console.log(hotel.name);
// hotel.stars = 3;
// console.log(hotel);

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
