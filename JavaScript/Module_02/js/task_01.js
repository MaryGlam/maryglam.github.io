"use strict";
const msgNumberEnter = "Введите, пожалуйста, число:";
const msgError = "Было введено не число, попробуйте еще раз!";

let userInput;
const number = [];
let total = 0;

do {
  userInput = prompt(msgNumberEnter);
  if (isNaN(userInput) === true) {
    alert(msgError);
    continue;
  }

  number.push(userInput);
  console.log(number);
} while (userInput !== null);

for (let item of number) {
  total += Number(item);
}
alert(total);
