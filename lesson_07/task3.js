'use strict';

{
    const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
    const addPrefix = (arr, prefix) => {
        const newArr = [];
        arr.forEach(item => {
            item = prefix + ' ' + item;
            newArr.push(item);
        });
        return newArr;
    };
    const prefixArr = addPrefix(names, 'Mr');
    console.log('prefixArr: ', prefixArr);
}

{
    const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    const addPrefix = (arr, prefix) => {
        for (let i in arr) {
            arr[i] = `${prefix} ${arr[i]}`;
        }
        return arr;
    };
    const prefixArr = addPrefix(names, 'Mr');
    console.log('prefixArr: ', prefixArr);
}

/*
Напишите функцию addPrefix 
Функция получает массив в виде параметров и возвращает массив с префиксами
После префикса пробел добавляется 

Входящий массив:
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

Вызов функции:
addPrefix(names, 'Mr')

Результат функции:
['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander']
*/