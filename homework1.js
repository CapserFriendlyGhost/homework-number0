const nameJan = "Jan";
console.log(nameJan);
const age = 22;
console.log(age);
const isOpen = true;
console.log(isOpen);
const stringBoolean = "true";
console.log(stringBoolean);
const stringNumber = "100";
console.log(stringNumber);

const rest = 10 % 4;
const personName = "Tomasz";
const personAge = 33;
const sentence = `${personName} ma ${personAge} lata`;
console.log(sentence);

const firstName = "Jan";
const lastName = "Kowalski";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const bigSum = 777 + 777;
console.log(bigSum);
const bigSumResult = `Wynik, ${bigSum}`;
console.log(bigSumResult);

const arrayNumbers = [1, 2, 3];
console.log(arrayNumbers);
const arrayCars = ["Mercedes", "Audi", "Volvo"];
console.log(arrayCars);
const arrayTrueFalse = [true, false, true];
console.log(arrayTrueFalse);
const arrayEmpty = [];
console.log(arrayEmpty);
const arrayDifferent = [7, 8, "Lucky", "Jinx", true];
console.log(arrayDifferent);
console.log(arrayDifferent[1]);
const myArray = ["Poland", "Brasil", "Thailand"];
console.log(myArray.length);

//homework 4h.

const arrayOfPeople = {
  personOne: {
    nameName: "Marek",
    surname: "Kondrat",
    ageOf: 66,
  },
  personTwo: {
    nameName: "Baltazar",
    surname: "Wąski",
    ageOf: 54,
  },
  personThree: {
    nameName: "Robert",
    surname: "Kozłowski",
    ageOf: 28,
  },
};
console.log(arrayOfPeople.personTwo.nameName);

const x = 2;
const arrayNumberX = [x];
console.log(arrayNumberX);

const emptyObject = {};
console.log(emptyObject);
const person = {
  herName: "Iza",
};
console.log(person);

const personDetails = {
  firstName: "Adam",
  lastName: "Kornacki",
  age: 20,
  drivingLicence: true,
};
console.log(personDetails.age);
console.log(personDetails);

const carObject = {
  mark: "BMW",
  color: "black",
  production: 2010,
  sold: [2011, 2014, 2019],
};
console.log(carObject);
console.log(carObject.sold[2]);

//typy proste wykazują bezpośrednio na adres ,a typy złożone wskazuja na adres który kieruje na wartość

const somePerson = {
  firstName: "Yayami",
  lastName: "Omate",
  age: 20,
  drivingLicence: true,
  notDrunk: true,
};
if (somePerson.age > 18 && somePerson.drivingLicence && somePerson.notDrunk) {
  console.log(
    somePerson.firstName,
    somePerson.lastName,
    "Jesteś pełnoletni, trzeźwy i masz prawo jazdy, możesz jechać."
  );
} else {
  console.log(
    somePerson.firstName,
    somePerson.lastName,
    "Nie możesz prowadzić auta!"
  );
}
const car = {
  name: "mustang",
  productionYear: 2020,
  color: "red",
};
const result = `Moje auto to ${car.name} i zostało wyprodukowane w roku ${car.productionYear}`;
console.log(result);

const isAdult = false;
if (isAdult === true) {
  console.log("Możesz kupić alhokol");
} else if (isAdult !== true) {
  console.log("Nie możesz kupić alkoholu, jesteś nieletni");
}

const resultIsAdulat =
  isAdult === true
    ? "Możesz kupić alhokol"
    : "Nie możesz kupić alkoholu, jesteś nieletni";
console.log(resultIsAdulat);
