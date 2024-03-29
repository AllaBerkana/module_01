'use strict'

{
    const calculate = (cart, goods, promo) => {
        let newCart = cart;

        if (goods >= 10) {
            newCart -= newCart * 0.03;
        }

        //? В условии использовать cart или newCart ?
        if (newCart >= 30000) {
            let discountToCart = (newCart - 30000) * 0.15;
            newCart -= discountToCart;
        }

        if (promo === 'METHED') {
            newCart = (newCart - newCart * 0.1);
        } else if ((promo === 'G3H2Z1') && ((newCart) >= 2000)) {
            newCart -= 500;
        }

        return console.log('Ваша сумма к оплате: ', newCart);
    };

    calculate(100000, 10, 'G3H2Z1');
}

{
    const calculate = (sumCart, sumItems, promo) => {
        if (sumItems > 10) {
            sumCart -= (sumCart * 0.03);
            console.log('sumCart: ', sumCart);
        }

        if (sumCart > 30000) {
            sumCart -= (sumCart - 30000) * 0.15;
            console.log('sumCart: ', sumCart);
        }

        if (promo === "METHED") {
            sumCart -= (sumCart * 0.1);
            console.log('sumCart: ', sumCart);
        }

        if (promo === "G3H2Z1" && sumCart > 2000) {
            sumCart -= 500;
        }
        return sumCart;
    };
    let withDisconte = calculate(40000, 100, "G3H2Z1");
    console.log('withDisconte: ', withDisconte);
}

/*Задача:
Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод

Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

Порядок применения скидок должен соблюдаться */