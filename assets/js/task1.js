"use strict";
/*   Задание 1. Реализовать класс RangeValidator со следующими свойствами: 
■ from (number); 
■ to (number).
Реализовать getter'ы и setter'ы для обоих свойств. 
Реализовать getter range, который будет возвращать массив с двумя числами диапазона. 
Реализовать метод validate, который будет принимать число и проверять входит ли 
число в указанный диапазон. 
 */
//Описание класса
class RangeValidator {
  //Счетчик экземпляров класса
  static #counter = 0;
  //Приватные переменные
  #from = 0;
  #to = 0;
  constructor(fromNumber, toNumber) {
    if (Number.isSafeInteger(fromNumber) && Number.isSafeInteger(toNumber)) {
      this.#from = fromNumber;
      this.#to = toNumber;
      RangeValidator.#counter++;
    } else {
      alert("Numbers must be integer!!!");
    }
  }
  //Геттеры для свойств
  get from() {
    return this.#from;
  }
  get to() {
    return this.#to;
  }
  //Сеттеры для свойств реализованы как функции
  setFrom(fromNumber) {
    if (Number.isSafeInteger(fromNumber)) {
      this.#from = fromNumber;
      return this.#from;
    } else {
      alert("Numbers must be integer!!!");
    }
  }

  setTo(toNumber) {
    if (Number.isSafeInteger(toNumber)) {
      this.#to = toNumber;
      return this.#to;
    } else {
      alert("Numbers must be integer!!!");
    }
  }
  //Геттер создающий массив из 2 значений
  get range() {
    let rangeArray = [this.#from, this.#to];
    return rangeArray;
  }
  //Метод для проверки входит ли число в диапазон
  validate(userNumber) {
    if (!Number.isSafeInteger(userNumber)) {
      alert("Numbers must be integer!!!");
      return false;
    }
    
    if (
      (userNumber >= this.#from && userNumber <= this.#to) ||
      (userNumber >= this.#to && userNumber <= this.#from)
    ) {
      return true;
    } else {
      return false;
    }
  }

  static getCounter() {
    return this.#counter;
  }
}
//Создание экземпляра класса и вызов его методов
const rangeValidator1 = new RangeValidator(10, 15);
console.log(rangeValidator1.from);
console.log(rangeValidator1.to);
console.log(rangeValidator1.setFrom(20));
console.log(rangeValidator1.setTo(60));
console.log(rangeValidator1.range);
let userVal = parseInt(prompt("Input number", 25));
console.log(
  `Входит ли число ${userVal} в диапазон с ${rangeValidator1.from} по ${
    rangeValidator1.to
  }?  ${rangeValidator1.validate(userVal)}`
);
console.log(
  "Количество созданных экземпляров класса: " + RangeValidator.getCounter()
);
