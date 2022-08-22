'use script'
import { listIPv4 } from './ipv4.js';

//Вам дан список ip-адресов -> IPv4
//задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов

// [... new Set(arr)]
{
    const getSetCol = (arr) => {
        const uniqVals = [... new Set(arr)];
        const number = uniqVals.length;
        return number;
    };
    const numberVals = getSetCol(listIPv4);
    console.log('numberVals: ', numberVals);
}

// Array.from(new Set(arr))
{

    const getSetCol = (arr) => {
        const uniqVals = Array.from(new Set(arr));
        const number = uniqVals.length;
        return number;
    };
    const numberVals = getSetCol(listIPv4);
    console.log('numberVals: ', numberVals);
}
