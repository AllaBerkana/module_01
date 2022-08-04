'use strict'
{

    const getReverseString = (string) => {
        const newString = string.split('');
        const reverseString = newString.reverse().join('');

        return console.log('Task3: ', reverseString);
    };

    getReverseString('Привет мир');
}

{
    const getString = (string) => {
        let newString = string.split('');
        newString = newString.reverse().join('');
        return newString;
    };
    let string = getString('Привет мир');
    console.log('string: ', string);
}