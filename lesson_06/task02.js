'use script'

{
    const isPrime = (number) => {

        for (let i = 2; i < number; i++) {
            let remainder = number % i;

            if (remainder === 0) {
                return console.log('prime number?', false);
            }
        }
        return console.log('prime number?', true);
    };

    isPrime();
}

{
    const isPrime = (number) => {
        for (let i = 2; i < number; i++) {
            let num = number % i;
            console.log(i, num);

            if (num === 0) {
                console.log(false);
                return number;
            }
        }
        console.log(true);
        return number;

    };
    let primeNum = isPrime(3);
    console.log('primeNum: ', primeNum);
}