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