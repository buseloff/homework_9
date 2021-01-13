"use strict";
/*    Задание 3. Продумать реализацию классов для вывода картин по конкретному художнику 
и количество работ его (т.е. подпишите, свяжите данные классы друг на друга).
 */
class Artist {
  //Счетчик экземпляров класса
  static #counter = 0;

  constructor(name, period, style) {
    this.name = name;
    this.period = period;
    this.style = style;
    this.arrayOfPaintings = [];
    Artist.#counter++;
  }
  //Метод добавления картин художника
  addPaintingOfArtist(painting) {
    //Проверка передаваемый объект картина или нет
    if (!(painting instanceof Painting)) {
      alert("Input object is not painting!");
      return;
    }
    //Проверка есть ли введенная картина с таким именем массиве
    if (this.arrayOfPaintings.length > 1) {
      if (this.arrayOfPaintings.some((item) => item.name === painting.name)) {
        alert("Input painting already exists in database!");
        return;
      }
    }
    this.arrayOfPaintings.push(painting);
  }

  //Метод вывода картин художника
  showInfoAboutPictures() {
    console.log(`All paintings of ${this.name}:`);
    for (const item of this.arrayOfPaintings) {
      item.getInfoAbout();
    }
  }
  //Метод вывода количества картин художника
  getQuantityOfPicturesOfArtist() {
    console.log(
      `Quantity of paintings of ${this.name}: ${this.arrayOfPaintings.length}`
    );
    return this.arrayOfPaintings.length;
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
const pic1 = new Painting("Mona Lisa", "1503-1519", 150_000_000);
const pic2 = new Painting("The Last Supper", "1495-1498", 100_000_000);
painter1.addPaintingOfArtist(pic1);
painter1.addPaintingOfArtist(pic2);
//Закомментированные вызовы методов не добавляют объект в базу, 
//поскольку объект есть или не является картиной
//painter1.addPaintingOfArtist(pic2);
//painter1.addPaintingOfArtist("sdfssd");
painter1.showInfoAboutPictures();
painter1.getQuantityOfPicturesOfArtist();
