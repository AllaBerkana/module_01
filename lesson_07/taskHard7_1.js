'use strict'

/*В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.*/

//1  - for (let i in arr)
{
    const allСashbox = [
        [12, 4500],
        [7, 3210],
        [4, 650],
        [3, 1250],
        [9, 7830],
        [1, 990],
        [6, 13900],
        [1, 370]
    ];

    const getAverageValue = ([...arr]) => {
        console.log(arr);
        //[...rest] = arr; //если нет ...spread в аргументах

        let sumNumberGoods = 0;
        let sumCommonValue = 0;

        for (let i in arr) {
            let numberGoods = arr[i][0];
            let commonValue = arr[i][1];
            sumNumberGoods = sumNumberGoods + numberGoods;
            sumCommonValue = sumCommonValue + commonValue;
        }

        const result = Math.round(sumCommonValue / sumNumberGoods);
        return result;
    };

    const averageValue = getAverageValue(allСashbox);
    console.log('averageValue: ', averageValue);
}

// 2 - reduce
{
    const allСashbox = [
        [12, 4500],
        [7, 3210],
        [4, 650],
        [3, 1250],
        [9, 7830],
        [1, 990],
        [6, 13900],
        [1, 370]
    ];

    const getAverageValue = (arr) => {
        console.log(arr);
        //[...rest] = arr; //если нет ...spread в аргументах
        //[[x, y]] = arr;

        const sumNumberGoods = arr.reduce((acc, [x]) => {
            return acc + x;
        }, 0);

        const sumCommonValue = arr.reduce((acc, [, y]) => {
            return acc + y;
        }, 0);

        console.log(sumNumberGoods);
        console.log(sumCommonValue);

        const result = Math.round(sumCommonValue / sumNumberGoods);
        return result;
    };

    const averageValue = getAverageValue(allСashbox);
    console.log('averageValue: ', averageValue);
}

// 3 - forEach
{
    const allСashbox = [
        [12, 4500],
        [7, 3210],
        [4, 650],
        [3, 1250],
        [9, 7830],
        [1, 990],
        [6, 13900],
        [1, 370]
    ];

    const getAverageValue = (arr) => {
        console.log(arr);

        let sumNumberGoods = 0;
        let sumCommonValue = 0;

        arr.forEach(([x, y]) => {
            sumNumberGoods = sumNumberGoods + x;
            sumCommonValue = sumCommonValue + y;
        });

        console.log(sumNumberGoods);
        console.log(sumCommonValue);

        const result = Math.round(sumCommonValue / sumNumberGoods);
        return result;
    };

    const averageValue = getAverageValue(allСashbox);
    console.log('averageValue: ', averageValue);
}

//Не получается через один reduce, почему?
{
    const allСashbox = [
        [12, 4500],
        [7, 3210],
        [4, 650],
        [3, 1250],
        [9, 7830],
        [1, 990],
        [6, 13900],
        [1, 370]
    ];

    const getAverageValue = (arr) => {

        //Не получается через один reduce, почему?
        const sumNumber = arr.reduce((acc, [x, y]) => {
            return { 'sumNumberGoods': acc + [x], 'sumCommonValue': acc + [y], }
        }, 0);


        console.log(sumNumber);

        const result = Math.round(sumCommonValue / sumNumberGoods);
        return result;
    };

    const averageValue = getAverageValue(allСashbox);
    console.log('averageValue: ', averageValue);
}
