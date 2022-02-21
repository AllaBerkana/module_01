'use strict'

const salary = +prompt('Введите зарплату');

const tax1 = salary * 0.13;

const tax2 = (salary - 15000) * 0.2;
const sumTax2 = tax1 + tax2;

const tax3 = (salary - 50000) * 0.3;
const sumTax3 = tax2 + tax3;

if (salary <= 15000){
    console.log('Налог:', tax1);
}else if( 50000 <= salary <= 15001 ){
    console.log('Налог:', sumTax2);
}else if (salary <= 50001){
    console.log('Налог:', sumTax3);
}
