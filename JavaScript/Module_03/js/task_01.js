"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const msgError = "Ошибка! Логин должен быть от 4 до 16 символов";
const msgAdded = "Логин успешно добавлен!";

let login = prompt("Введите, пожалуйста, login");
let loginLenght;
let loginIncludes;
let allLogins;

const isLoginValid = function(login) {
  return (loginLenght = login.length <= 16 && login.length >= 4);
};

const isLoginUnique = function(allLogins, login) {
  allLogins = logins;
  return (loginIncludes = allLogins.includes(login));
};

const addLogin = function(logins, login) {
  isLoginValid(login);
  isLoginUnique(allLogins, login);

  if (!loginLenght) {
    alert(msgError);
  } else if (!loginIncludes) {
    allLogins = logins;
    logins = allLogins.push(login);
    alert("Логин успешно добавлен!");
  } else alert("Такой логин уже используется!");
};

addLogin(logins, login);
