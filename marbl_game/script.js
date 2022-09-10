'use strict';

let userPrint = prompt('Введите число от 1 до 5');
console.log('userPrint: ', userPrint);

let computerPrint = 0;

let userChoice = 0;
console.log('userChoice: ', userChoice);

let computerChoice = 0;

//result
const result = {
    player: 5,
    computer: 5,
};

const getComputerPrint = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
};
computerPrint = getComputerPrint(1, result.computer);
console.log('computerPrint: ', computerPrint);


const getCompChoice = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
};
computerChoice = getCompChoice(1, 2);
console.log('computerChoice: ', computerChoice);

//check for isNaN
const checkNaN = () => {
    if (Number.isNaN(userPrint) || !Number.isFinite(userPrint)) {
        userPrint = prompt('Введи число!');
        console.log('userPrint checkNaN: ', userPrint);
        return userPrint;
    }
};
checkNaN();


/*

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
*/



/*
//print
let userPrint = +prompt('Введите число от 1 до 5');
let computerPrint = 0;
let userChoice = '';

console.log('userPrint: ', userPrint);

//check for isNaN
const checkNaN = () => {
    if (Number.isNaN(parseFloat(userPrint)) ||
        !Number.isFinite(userPrint)) {
        userPrint = +prompt('Введите число правильно.');
    }
    return userPrint;
};

//юзер угадывыает %2
const getUserChoice = () => {
    userChoice = confirm('Какое число? OK - Четное, Отмена - Нечетное');
    if (userChoice) {
        userChoice = 2;
    } else {
        userChoice = 1;
    }
    console.log('userChoice: ', userChoice);
    return userChoice;
};
//getUserChoice();

//комп угадывает %2   1 or 2
const getCompChoice = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
};

const game = () => {
    //result
    const result = {
        player: 5,
        computer: 5,
    };

    if (userPrint === 0) {
        console.log('exit');
        alert(`Игра окончена.
        Счёт Игрок ${result.player}: Компьютер ${result.computer}`);
        return;
    } else {

        checkNaN();

        const compChoice = getCompChoice(1, 2);
        console.log('compChoice: ', compChoice);

        //Комп загадывает число
        const getCompNum = (min, max) => {
            return Math.round(min + Math.random() * (max - min));
        };
        computerPrint = getCompNum(1, result.computer);
        console.log('computerPrint: ', computerPrint);


        //фция prompt шариков
        const numBall = () => {
            if (result.player <= 0 || result.computer <= 0) {
                alert(`Игра окончена.
                    Счёт Игрок ${result.player}: Компьютер ${result.computer}`);
                return;
            } else {
                userPrint = +prompt(`У вас шариков: ${result.player} шт.
                    Введите число.`);
                console.log('userPrint: ', userPrint);
                return userPrint;
            }
        }

        //правила начисления
        const rules = () => {
            if ((compChoice === 1 && userPrint % 2 === 0) ||
                (compChoice === 2 && userPrint % 2 !== 0)) {
                result.player += userPrint;
                result.computer -= userPrint;
                console.log('1', result.player, result.computer);

            } else if ((compChoice === 2 && userPrint % 2 === 0) ||
                (compChoice === 1 && userPrint % 2 !== 0)) {
                result.player -= userPrint;
                result.computer += userPrint;
                console.log('2', result.player, result.computer);
            }
            numBall();
        };
        rules();

        console.log('result.player: ', result.player);

        //if result === 0   end рекурсия
        if (result.player <= 0 || result.computer <= 0) {
            return;
        } else {
            return game();
        }
    }
};
game();

*/