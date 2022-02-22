'use strict'
{

const getReverseString = (string) => {
    const newString = string.split('');
    const reverseString = newString.reverse().join('');

    return console.log('Task3: ', reverseString);  
};

getReverseString('Привет мир');
}