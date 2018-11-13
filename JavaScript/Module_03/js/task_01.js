"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const msgError = "Ошибка! Логин должен быть от 4 до 16 символов";
const msgAdded = "Логин успешно добавлен!";
const login = prompt("Введите, пожалуйста, login");

let loginLenght;
let loginIncludes;
let allLogins;

const isLoginValid = (login) => {
  return login.length <= 16 && login.length >= 4;
};

const isLoginUnique = (logins, login) => { 
  return (logins.includes(login));
};

const addLogin = (logins, login) => {
  if (!isLoginValid(login)) {
    alert(msgError);
  } else if (!isLoginUnique(logins,login)) {
    logins.push(login);
    alert(msgAdded);
  } else alert("Такой логин уже используется!");
};

addLogin(logins, login);
