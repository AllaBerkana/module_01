'use strict'

{
    const getString = (string) => {

        let lowerString = string.toLowerCase();
        const firstLetter = lowerString[0].toUpperCase();
        const newString = firstLetter + lowerString.slice(1);

        return console.log('Task2: ', newString);
    };

    getString('привет Мир');
}

{
    const getString = (string) => {
        let newString = string[0].toUpperCase() + string.toLowerCase().slice(1);
        return newString;
    };
    let string = getString('привет Мир!');
    console.log('string: ', string);
}