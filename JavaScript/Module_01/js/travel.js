// TRAVEL AGENCY

const placesSharm = 15;
const placesHurgada = 25;
const placesTaba = 6;
const errorNotice = "Ошибка ввода!";
const locSharm = "ШАРМ";
const locHurgada = "ХУРГАДА";
const locTaba = "ТАБА";
const msgSorry = "Нам очень жаль, приходите еще!";
const msgNoPlaces = "Извините, столько мест нет ни в одной группе!";
const msgHappyTrip = "Приятного путешествия в ";
const msgConfirm = "вы действительно хотите в ";
let userPlaces;
let userChoice;

userPlaces = prompt("Сколько мест хотели бы забронировать?");
console.log(userPlaces);

userPlaces = +userPlaces;

console.log(userPlaces);

if (userPlaces <= 0 || Number.parseInt(userPlaces) !== userPlaces) {
  alert(errorNotice);
} else if (userPlaces <= placesTaba) {
  toUpperCase(userChoice) = prompt(
    "Мы можем предложить вам поездку в Табу, Хургаду или Шарм. Куда бы вы хотели поехать? (Таба/Хургада/Шарм)"
  );
  switch (userChoice) {
    case locTaba:
      if (confirm(msgConfirm + locTaba + "?") === true) {
        alert(msgHappyTrip + locTaba + "!");
      } else alert(msgSorry);
      break;
    case locSharm:
      if (confirm(msgConfirm + locSharm + "?") === true) {
        alert(msgHappyTrip + locSharm + "!");
      }
      //    console.log(confirm(msgConfirm+locSharm +'?'))
      else alert(msgSorry);
      break;
    case locHurgada:
      if (confirm(msgConfirm + locHurgada + "?") === true) {
        alert(msgHappyTrip + locHurgada + "!");
      } else alert(msgSorry);
      break;
  }
} else if (userPlaces <= placesSharm && userPlaces > placesTaba) {
  userChoice = prompt(
    "Мы можем предложить вам поездку в Хургаду или Шарм. Куда бы вы хотели поехать? (Хургада/Шарм)"
  );
  switch (userChoice) {
    case locSharm:
      if (confirm(msgConfirm + locSharm + "?") === true) {
        alert(msgHappyTrip + locSharm + "!");
      } else alert(msgSorry);
      break;
    case locHurgada:
      if (confirm(msgConfirm + locHurgada + "?") === true) {
        alert(msgHappyTrip + locHurgada + "!");
      } else alert(msgSorry);
      break;
  }
} else if (userPlaces <= placesHurgada && userPlaces > placesSharm) {
  if (confirm(msgConfirm + locHurgada + "?") === true) {
    alert(msgHappyTrip + locHurgada + "!");
  } else alert(msgSorry);
} else alert(msgNoPlaces);
