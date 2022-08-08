'use strict'

{
    /*
    Написать простой игровой бот, который умеет следующее:
    Загадывает число от 1 до 100;
    предлагает пользователю ввести свой вариант отгадки;
    если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
    если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
    если пользователь вводит правильное число, то бот выводит “Правильно!”;
    если пользователь ввел не число, то выводит “Введи число!”;
    если пользователь нажимает “Отмена”, то игра заканчивается.
    */
}

{
    let userSaid = prompt('Guess a number from 1 to 100');
    let newUserSaid;

    let randomNumber = Math.ceil(Math.random() * 100);
    console.log('randomNumber: ', randomNumber);

    const checkNumber = () => {
        if (userSaid === null) {
            alert('Game is over');
            return;
        }

        newUserSaid = (Number.isNaN(parseFloat(userSaid))) ? prompt('Введи число!') : userSaid;

        if (Number.isNaN(parseFloat(newUserSaid))) {
            alert('Game is over');
            return;
        }

        return newUserSaid;

    };
    const userNumber = checkNumber();
    console.log('userNumber: ', userNumber);

    const guessNumber = (num) => {

        while (true) {
            if (num == randomNumber) {
                alert('Right!');
                return num;
            }
            if (num > randomNumber) {
                num = prompt("Less!");
            }
            if (num < randomNumber) {
                num = prompt('More!')
            }
            if (num === null) {
                alert('Game is over');
                return;
            }
        }
    };
    const number = guessNumber(userNumber);
    console.log('number: ', number);
}
