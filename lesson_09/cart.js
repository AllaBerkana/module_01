'use strict'

{
    const cart = {
        //items = пустой массив - это товары
        //totalPrice = 0 - общая стоимость корзины
        //count = 0 - количество товаров 
        items: [],
        totalPrice: 0,
        count: 0,

        //получить общую стоимость товаров, метод возвращает значение свойства totalPrice
        getTotalPrice() {
            console.log(this.totalPrice);
            return this.totalPrice;
        },

        // add - добавить товар
        // Принимает три параметра:
        // название товара
        // цену товара
        // количество товара (опциональный параметр, по умолчанию 1 товар)
        // этот метод формирует объект из полученных параметров и добавляет его в свойство items
        // так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

        add(nameItem, priceItem, countItem = 1) {
            this.inceaseCount();
            this.items.push({
                name: nameItem,
                price: priceItem,
                count: countItem,
            });

            this.inceaseCount();
            this.calculateItemPrice();
        },

        // increaseCount - увеличить количество товаров
        // Принимает один параметр(число)
        // Увеличивает свойство count на это число
        inceaseCount(number) {
            return number + this.count;
        },

        // calculateItemPrice - посчитать общую стоимость товаров
        //пересчитывает стоимость всей корзины и записывает значение в totalPrice 
        calculateItemPrice() {
            this.totalPrice = this.items.reduce(((acc, item) => {
                return acc + item.count * item.price;
            }), 0)
        },

        clear() {
            this.items = [];
            this.totalPrice = 0;
            this.count = 0;
        },
        print() {
            let stringJson = JSON.stringify(this.items);
            console.log(stringJson);
            console.log(this.totalPrice);
        },
    };

    const arrGood = [
        ['apple', 20, 5],
        ['green', 50, 10],
    ];
    console.log(arrGood);

    arrGood.forEach(item => cart.add(...item))
    //cart.clear();
    cart.print();
}

