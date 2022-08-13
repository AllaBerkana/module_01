'use strict'

{   /*
    Создайте файл cart.js, подключите к html - файлу

    Создайте объект cart — корзина

    Объект будет содержать следующие свойства:

    items = пустой массив - это товары
    totalPrice = 0 - общая стоимость корзины
    count = 0 - количество товаров 
    
    и методы

    getTotalPrice - получить общую стоимость товаров
    add - добавить товар
    increaseCount - увеличить количество товаров
    calculateItemPrice - посчитать общую стоимость товаров
    clear - очистить корзину
    print - распечатать корзину

    Далее описание каждого метода

    getTotalPrice()
    метод возвращает значение свойства totalPrice

    calculateItemPrice()
    пересчитывает стоимость всей корзины и записывает значение в totalPrice 

    increaseCount()
    Принимает один параметр(число)

    Увеличивает свойство count на это число

    add()
    Принимает три параметра:
    название товара
    цену товара
    количество товара (опциональный параметр, по умолчанию 1 товар)
    этот метод формирует объект из полученных параметров и добавляет его в свойство items

    так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

    clear()
    Очищает полностью нашу корзину, возвращает все значения в изначальные

    print()
    Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины

    Для проверки работы функционала добавить 3 или более товаров в корзину
    После вызвать метод print для вывода информации в консоль
    */
}


//---------------
//Работает для одного товара, a с несколькими одновременно у меня не получается

{
    const arrGood = [
        ['apple', 20, 5],
        ['green', 50, 10],
    ];
    console.log(arrGood);

    const cart = {
        items: [],
        totalPrice: 0,
        count: 0,

        getTotalPrice() {
            return this.totalPrice;
        },

        //Не понимаю как работать с несколькими товарами, как их добавить и перебирать?

        add([[nameItem, priceItem, countItem = 1]]) {

            const inceaseCount = (number) => {
                this.count = countItem + number;
                return this.count;
            };

            //добавила цикл гоняется один и тот же массив
            for (let i = 0; i < arrGood.length; i++) {
                arrGood[i] = {
                    nameItem,
                    priceItem,
                    countItem: inceaseCount(10),//Как добавлять это число inceaseCount извне объекта для каждого товара отдельно?
                };

                this.items.push(arrGood[i]);
            }

            const calculateItemPrice = () => {
                let totalPriceItem = priceItem * countItem;

                this.totalPrice = this.totalPrice + totalPriceItem;
                return this.totalPrice;
            };
            calculateItemPrice();
        },

        clear() {
            this.items = [];
            this.totalPrice = 0;
            this.count = 0;
        },
        print() {
            let string = JSON.stringify(this.items);
            console.log(string);
            console.log(this.totalPrice);
        },
    };

    cart.add(arrGood);
    //видит длину только одного товара, не знаю как сделать массив из этих товаров
    console.log(cart.add.length);

    console.log('items', cart.items);
    console.log('count', cart.count);
    //cart.clear();
    cart.print();
}

