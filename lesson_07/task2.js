'use strict';
{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    const getAverageValue = (arr) => {
        let initial = 0;
        const result = arr.reduce((previos, current) => {
            return previos + current;
        }, initial);

        const avarage = Math.floor(result / arr.length);
        console.log(avarage);

    };

    getAverageValue(allСashbox);

}

{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
    const getAverageValue = (arr) => {
        const sum = arr.reduce((acc, n) => acc + n, 0);
        console.log(sum);
        const result = Math.floor(sum / arr.length);
        return result;
    };
    const AverageValue = getAverageValue(allСashbox);
    console.log('AverageValue: ', AverageValue);
}

{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
    const getAverageValue = (arr) => {
        let sum = 0;
        for (let n of arr) {
            sum += n;
        }
        console.log(sum);
        const result = Math.floor(sum / arr.length);
        return result;
    };
    const AverageValue = getAverageValue(allСashbox);
    console.log('AverageValue: ', AverageValue);
}
/*
Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа

С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день
 */
