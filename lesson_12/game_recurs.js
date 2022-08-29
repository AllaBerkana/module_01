'use strict';

{
    /*
    Задача #1
    Переписать игровой бот из 8-го задания
    Функционал остаётся прежний, но вместо цикла (while или for) 
    используйте рекурсию
    */
}

//рекурсия
//эту задачу я быстро сделала (за 5 мин)

{
    let userSaid = parseFloat(prompt('Число от 1 до 100'));

    let randomNumber = Math.ceil(Math.random() * 100);
    console.log('randomNumber: ', randomNumber);

    if (Number.isNaN(userSaid)) {
        userSaid = parseFloat(prompt('Введи число!'));
    }

    const checkNum = (num) => {

        if (Number.isNaN(num)) {
            return;
        }

        if (num !== randomNumber) {
            if (num > randomNumber) {
                num = parseFloat(prompt('Меньше!'));
            }
            if (num < randomNumber) {
                num = parseFloat(prompt('Больше!'));
            }
            return checkNum(num);
        }

        alert('Правильно!' + ' ' + num);
        return num;
    };

    const num = checkNum(userSaid);

    if (num === undefined) {
        alert("Game is over");
    }

}

{
    /*
    Задача #2
    Напишите рекурсивную функцию, которая принимает один параметр массив,
    генерирует целое число от 0 до 10 включительно и добавляет его в массив.
    Каждый раз после добавления нового числа проверяет сумму элементов массива,
    если она меньше 50 запускается снова передавая себе массив
    Если сумма больше 50-ти, то функция возвращает этот массив.
     */
}

//А вот эту нет.Красивого решения не выходит.
// Цикл получается, рекурсия как в задании -не получается.
// несколько вариантов делала и всё не то.
//Если меняю условия, то ошибка или переполненный стек. 
//Где-то у меня отсутствует понимание

//цикл
{
    const arrNum = [];
    const sumNum = (arr) => {
        let sum = 0;
        for (let i = 0; i <= 10; i++) {
            sum = sum + i;
            if (sum <= 50) {
                arr.push(i);
            }
        }
        return arr;
    }
    console.log('sumNum: ', sumNum(arrNum));
}

//попытки рекурсии:

//тут, если меняю getNum(10) на 9 например - то undefined
{
    const arrNum = [];
    const sumNum = (arr) => {

        const getNum = (n) => {
            if (n === 0) return 0;
            arr.push(n);
            return n + getNum(n - 1);
        };

        let sum = getNum(10);

        if (sum > 50) {
            return arr;
        }
    };
    console.log('sumNum: ', sumNum(arrNum));

}

//тут у меня с переполнением стека не то
{
    const arrNum = [];

    const getArr = (arr) => {

        const getNum = (n) => {
            if (n === 0) {
                return arr.reduce((sum, item) => {
                    return sum += item;
                }, 0)
            }
            arr.push(n);
            return getNum(n - 1);
        };

        if (getNum(10) < 50) {
            return getArr();
        } else {
            return arr;
        }
    };
    console.log('getArr: ', getArr(arrNum));
}

//на этом этапе уже психанула

{
    const arrNum = [];
    console.log('arrNum: ', arrNum);
    let sum = 0;
    const getArr = (arr) => {

        const getNum = (n) => {
            if (n === 0) return n;
            console.log(n);
            sum = sum + n;
            if (sum < 50) {
                arr.push(n)
            }
            return getNum(n - 1);
        };
        getNum(10);

        console.log(sum);

        return arr;
    };
    //getArr(arrNum)
    console.log('getArr(arrNum): ', getArr(arrNum));

}
