'use script'
{
    for (let a = 1; a <= 10; a++) {
        console.log('_________');

        for (let m = 1; m <= 10; m++) {
            console.log(`${a}^${m} = ${a ** m}`);
        }
    }
}

{
    for (let a = 2; a < 10; a++) {
        console.log('_______________________');
        for (let m = 2; m < 10; m++) {
            let string = `${a} ^ ${m} = ${a ** m}`;
            string = string.padStart(20, ' ').padEnd(27, '   |');
            console.log(string);
        }
    }
}