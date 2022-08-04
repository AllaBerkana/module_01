'use strict'

{
    //NOD- наибольший общий делитель
    
    const egcd = (a, b) => {
        if (a === 0)
            return b;

        while (b !== 0) {
            if (a > b) a = a - b;
            else b = b - a;
        }
        return a;
    };
    console.log(egcd(5, 15));
}
