'use script'
{
    const getRubbles = (cashEuros) => {
        let euros = cashEuros;
        const dollars = euros * 1.2;
        const rubbles = dollars * 73;
        return console.log('rubbles: ', rubbles);
    };

    getRubbles(100);
    getRubbles(5000);
}

{
    const createConvert = (euro) => {
        const dollar = euro * 0.97;
        const ruble = dollar * 63.5;
        return ruble;
    };
    let convert = createConvert(1);
    console.log('convert: ', convert);
}