'use script'

const isPrime = (number) => {
    
    for(let i = 2; i < number; i++){
        let remainder = number % i;

        if (remainder === 0) {
            return console.log('prime number?', false);
        }
    }
    return console.log('prime number?', true);
};

isPrime();