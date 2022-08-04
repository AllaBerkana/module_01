'use strict'

{
    let num_1 = 5;
    let num_2 = '-7';

    if (Number.isNaN(parseFloat(num_1))) {
        console.log('Not a Number');
    }

    if (Number.isNaN(parseFloat(num_2))) {
        console.log('Not a Number');
    }

    const getMin = (a, b) => {
        let min = (a < b) ? a : b;
        return min;
    };
    let numberMin = getMin(num_1, num_2);
    console.log('numberMin: ', numberMin);
}