'use strict'

const salary = +prompt('Введите ваш доход');
console.log(typeof salary);

if (Number.isNaN(salary)){
    console.log('Введите корректные данные');
} else {

    if (salary <= 15000){
        console.log('Сумма налога:', salary * 0.15);
    }else if(15001 < salary <= 50000){
        console.log('Сумма налога:', salary * 0.2);
    } else if(salary > 50001){
        console.log('Сумма налога:', salary * 0.3);
    }

}
