'use strict'
const string = 'привет Мир'
{
    const getString = () => {
    
        let lowerString = string.toLowerCase();
        const firstLetter = lowerString[0].toUpperCase();
        const newString = firstLetter + lowerString.slice(1);
        
        return console.log('Task2: ', newString);
    };

    getString();
}