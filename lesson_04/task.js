'use strict'

//Вторая задача:
{
    const rain = Math.round(Math.random());
    console.log('rain: ', rain);
    if (rain) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else {
        console.log('Дождя нет!');
    }
}

//Третья задача:

{
    const scoreMath = prompt('Введите кол-во баллов по математике:');
    const scoreLang = prompt('Введите кол-во баллов по русскому языку:');
    const scoreInformatics = prompt('Введите кол-во баллов по информатике:');
    const sumScores = scoreMath + scoreLang + scoreInformatics;

    if (sumScores >= 256) {
        console.log('Поздравляю, вы поступили на бюджет!');
    }

}

//Четвёртая задача:

//1
{
    const money = prompt("Сколько денег Вы хотите снять?");
    const minCash = 100;

    const remainder = money % 100;
    const cash = money - remainder;

    if (money < 100) {
        console.log('Вы не можете снять деньги с карты');
    } else if (remainder === 0) {
        console.log('Можете снять всю сумму');
    } else {
        console.log(`Вы можете снять ${cash}. Остаток на карточке ${remainder} рублей`);
    }
}

//2
{
    let money = 50;
    if (money % 100 === 0 && money !== 0) {
        console.log(`Take your money ${money}`);
    } else if (money === 0) {
        console.log(`Nothing to take`);
    } else if (money % 100 > 0) {
        console.log('Must end on 00');
        let res = money - (money % 100);
        console.log(`You cantake only ${res}`);
    }
}

//3
{
    let money = 2205;
    switch (true) {
        case money % 100 === 0 && money !== 0:
            console.log(`take your money ${money}`);
            break;
        case money === 0:
            console.log(`Nothing to take`);
            break;
        case money % 100 > 0:
            {
                let res = money - (money % 100);
                console.log(`You cantake only ${res}`);
            }
            break;
    }
}
