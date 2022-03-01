'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let initial = 0;
    const result = arr.reduce((previos, current) => {
        return previos + current;
    },initial);

    const avarage = Math.floor( result / arr.length ); 
    console.log(avarage);

};

getAverageValue(allСashbox);

/*
Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа

С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день
 */
