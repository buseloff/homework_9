"use strict";
/*   Задание 2. Реализовать классы Художник и Картина. 
Каждому прописать необходимые поля. Используя статические поля (методы), 
подсчитать количество картин и художников. Продумать методы вывода информации
о картине и художнике (по отдельности).
 */
//Описание класса Художник
class Artist {
  //Счетчик экземпляров класса
  static #counter = 0;
  constructor(name, period, style) {
    this.name = name;
    this.period = period;
    this.style = style;
    Artist.#counter++;
  }
  //Статический метод вывода количества созданных экземпляров класса Художник
  static get getQuantityOfArtists() {
    return Artist.#counter;
  }
  //Вывод информации о художнике
  getInfoAbout() {
    console.log(
      `Painter ${this.name} worked in ${this.period}. Style of pictures - ${this.style}`
    );
  }
}
//Описание класса Картина
class Painting {
  //Счетчик экземпляров класса
  static #counter = 0;
  constructor(title, year, price) {
    this.title = title;
    this.year = year;
    this.price = price;
    Painting.#counter++;
  }
  //Статический метод вывода количества созданных экземпляров класса Картина
  static get getQuantityOfPaintings() {
    return Painting.#counter;
  }
  //Вывод информации о картине
  getInfoAbout() {
    console.log(
      `Picture "${this.title}" painted in ${this.year}. Current price - ${this.price} $`
    );
  }
}

//Создание объектов и вызов их методов
const painter1 = new Artist(
  "Leonardo da Vinci",
  "15-16th century",
  "Renaissance"
);
const painter2 = new Artist("Vincent van Gogh", "19th century", "Imressionism");
const painter3 = new Artist("Pablo Picasso", "20th century", "Cubism");
painter1.getInfoAbout();
painter2.getInfoAbout();
painter3.getInfoAbout();
console.log("Количество созданных художников: " + Artist.getQuantityOfArtists);

const pic1 = new Painting("Mona Lisa", "1503-1519", 150_000_000);
const pic2 = new Painting("The Last Supper", "1495-1498", 100_000_000);
const pic3 = new Painting("The Starry Night", "1889", 120_000_000);
const pic4 = new Painting("Guernica", "1937", 100_000_000);
pic1.getInfoAbout();
pic2.getInfoAbout();
pic3.getInfoAbout();
pic4.getInfoAbout();
console.log("Количество созданных картин: " + Painting.getQuantityOfPaintings);
