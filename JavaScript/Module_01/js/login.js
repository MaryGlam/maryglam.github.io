//  CONTROL PANEL

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const accessCancelled='Отменено пользователем!'
const accessDenied='Доступ запрещен!'
const accessWelcomed='Добро пожаловать!'
let userLogin;
userLogin = prompt("Введите свой логин, пожалуйста:");

if (userLogin === adminLogin) {
let userPassword;
userPassword = prompt("А теперь пароль:");
if (userPassword === adminPassword) {
alert(accessWelcomed);
} else if (userPassword !== adminPassword) {
alert(accessDenied);
} else {
alert(accessCancelled);
}
} else if (userLogin !== adminLogin) {
alert(accessDenied);
} else {
alert(accessCancelled);
}


