'use strict'

{
    /*Усовершенствуйте игру, которую написали в game01
    бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
    бот запоминает каждое число которое ввел пользователь и записывает в массив
    бот отграничивает количество попыток до 30% от количества цифр в диапазоне
    если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
    если диапазон от 50 до 100, то попыток бот даёт 15
    если попытки закончились игра прекращается*/
}

{
    let numberFirst = prompt('Введите первое число ');
    let numberSecond = prompt('Введите второе число с разницей к первому более 2х единиц');
    let randomNumber;

    const arrNumber = [];

    const getRandomNum = () => {
        randomNumber = Math.ceil(Math.random() * 100);
        console.log('randomNumber: ', randomNumber);
        return randomNumber;
    };

    const checkNumber = (first, second) => {
        console.log(first, second);

        if ((numberFirst === null) || (numberFirst === null)) {
            alert('Game is over');
            return;
        }

        first = (Number.isNaN(parseFloat(numberFirst))) ? prompt('Введите число - первое!') : first;
        second = (Number.isNaN(parseFloat(numberSecond))) ? prompt('Введите число - второе!') : second;

        if (Number.isNaN(parseFloat(first)) || Number.isNaN(parseFloat(second))) {
            alert('Game is over');
            return;
        }

        first = +first;
        second = +second;

        /*Нам нужно преобразовать каждое значение из интервала 0…1 в значения от min до max.

Это можно сделать в 2 шага:

Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
И, если мы прибавим min, то интервал станет от min до max.
Функция:

function random(min, max) {
  return min + Math.random() * (max - min);
}
        
        */

        const getDiap = (num) => {
            let lower = Math.min(first, second);
            let upper = Math.max(first, second);

            for (let y = lower; y <= upper; y++) {
                num = getRandomNum();
                console.log(y, num);

                if (lower <= num && num <= upper) {
                    console.log(y);
                    return num;
                }
            }

            arrNumber.push(lower);
            arrNumber.push(upper);

            // return num;
        };

        const randomFromDiap = getDiap(randomNumber);
        console.log('randomFromDiap: ', randomFromDiap);
        getDiap(randomFromDiap)


        return arrNumber;
    };


    const userNumber = checkNumber(numberFirst, numberSecond);
    console.log('userNumber: ', userNumber);




    /*
        const guessNumber = (num) => {
    
            while (true) {
                if (num == randomNumber) {
                    alert('Правильно!');
                    return num;
                }
                if (num > randomNumber) {
                    num = prompt("Меньше!");
                }
                if (num < randomNumber) {
                    num = prompt('Больше!')
                }
                if (num === null) {
                    alert('Game is over');
                    return;
                }
            }
        };
        const number = guessNumber(userNumber);
        console.log('number: ', number);
    */
}