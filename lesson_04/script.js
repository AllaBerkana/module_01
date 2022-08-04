'use strict'

//Первая задача:

{
    const fruit = prompt('Ведите название фрукта');
    const count = prompt('Введите количество кг');
    const newCount = +count;
    console.log(typeof newCount);
    console.log(Number.isNaN(newCount));

    const price = 50;
    const sum = count * price;

    switch (Number.isNaN(newCount)) {
        case true:
            console.log('Вы ввели некорректные данные');
            break;
        default:
            console.log(`Вы купили товар ${fruit} на ${newCount} кг. Сумма составляет ${sum} рублей`);
            break;
    };
}

{
    {
        let count = +'77';

        if (Number.isNaN(count)) {
            console.log("Вы ввели некорректные данные");
        } else {
            console.log(count);
        }
    }
}

