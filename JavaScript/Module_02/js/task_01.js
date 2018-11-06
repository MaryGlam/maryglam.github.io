"use strict";
const msgNumberEnter = "Введите, пожалуйста, число:";
const msgError = "Было введено не число, попробуйте еще раз!";

let userInput;
const number = [];
let total = 0;

do {
  userInput = prompt(msgNumberEnter);
  if (isNaN(userInput)) {
    alert(msgError);
    continue;
  }

  number.push(+userInput);
} while (userInput !== null);

if (number.length !== 0){
  for (let item of number) {
    total += item;
  }
  alert(total);

}


