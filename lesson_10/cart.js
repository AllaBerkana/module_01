'use strict';

/* Обнаружена уязвимость в нашем функционале
Если после добавления последнего товара присвоить к totalPrice любое значение,
например
cart.totalPrice = 10;
то при выводе print() общая стоимость корзины будет равна 10
Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером
который будет возвращать результат вызова метода calculateItemPrice
метод getTotalPrice больше не нужен
calculateItemPrice переделать таким образом, чтобы сумму он возвращал,
а не записывал в свойство totalPrice
Вызов метода calculateItemPrice оставить только у геттера totalPrice
*/

{
  const cart = {
    items: [],
    count: 0,

    get totalPrice() {
      return this.calculateItemPrice();
    },

    set totalPrice(val) {
      val = this.calculateItemPrice();
      console.log(val);
    },

    add(nameItem, priceItem, countItem = 1) {
      this.items.push({
        name: nameItem,
        price: priceItem,
        count: countItem,
      });

      this.inceaseCount();
    },

    inceaseCount(number) {
      return number + this.count;
    },

    calculateItemPrice() {
      const totalPrice = this.items
        .reduce(((acc, item) => acc + item.count * item.price), 0);
      return totalPrice;
    },

    clear() {
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
    },

    print() {
      const stringJson = JSON.stringify(this.items);
      console.log(stringJson);
      console.log(this.totalPrice);
    },
  };

  const arrGood = [
    ['apple', 20, 5],
    ['green', 50, 10],
  ];
  console.log(arrGood);

  arrGood.forEach(item => cart.add(...item));
  // cart.clear();
  cart.totalPrice = 10;
  cart.print();
}
