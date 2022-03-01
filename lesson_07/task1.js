'use strict'

const allStudents =['Petrov', 'Sidorov', 'Ivanov', 'Smith', 'Fedorov', 'Jackson'];
const failedStudents = ['Smith', 'Jackson'];

const filter = (all, failed) => {
    const result =  all.filter( (student) =>{
        return !failed.includes(student)} );

    console.log(result);
};

filter(allStudents, failedStudents)

