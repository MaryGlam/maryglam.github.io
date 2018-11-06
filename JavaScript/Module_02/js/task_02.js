"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
const msgWelcome = "Добро пожаловать!";
const msgBlocked = "У вас закончились попытки, аккаунт заблокирован!";
let attempts = 3;
let userPass;
let i;

do {
  userPass = prompt("Введите свой пароль, пожалуйста:");
  if (passwords.includes(userPass)) {
    alert(msgWelcome);
    break;
  } else {
    attempts = attempts - 1;
    if (attempts !== 0) {
      alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
      console.log(attempts);
    } else {
      alert(msgBlocked);
    }
  }
} while (attempts > 0);

