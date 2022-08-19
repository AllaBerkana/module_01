'use strict'

{
    const cart = {

        items: [],
        totalPrice: 0,
        count: 0,

        getTotalPrice() {
            return this.totalPrice;
        },

        add(nameItem, priceItem, countItem = 1) {

            this.items.push({
                name: nameItem,
                price: priceItem,
                count: countItem,
            });

            this.inceaseCount(7);
            this.calculateItemPrice();
        },

        // increaseCount - увеличить количество товаров
        // Принимает один параметр(число)
        // Увеличивает свойство count на это число
        inceaseCount(number) {
            console.log('number: ', number);
            return this.count += number;
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
