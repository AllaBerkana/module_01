//lesson 8 - 1 - 1

{
    /*Напишите функцию генератор  массива случайных чисел в файле task01.js
    Функция принимает один обязательный параметр это количество элементов в массиве
    И возвращает массив со случайными числами от одного до 100 включительно; */
}

//1 - for
{
    const getGenerator = (amount) => {
        const arr = new Array(amount);

        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.round(Math.random() * 100);
        }
        return arr;
    };
    const generator = getGenerator(10);
    console.log('generator: ', generator);
}

// 2 - как сделать через forEach? не видит длину массива при переборе
{
    const getGenerator = (amount) => {
        const arr = [];
        arr.length = amount;

        const newArr = [];

        arr.forEach((num) => {
            num = Math.round(Math.random() * 100);
            newArr.push(num);
        });

        return newArr;
    };
    const generator = getGenerator(3);
    console.log('generator: ', generator);
}

//lesson 8 - 1 - 2

{
    /**Функция принимает еще два параметра n и m

    Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
    m и n включительно

    Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
    */
}


//1 - for
{
    const getGenerator = (amount, m, n) => {
        const arr = new Array(amount);
        const randomNumsArr = [];
        const diapArr = [];

        for (let i = 0; i < arr.length; i++) {
            let elem = arr[i];
            elem = Math.round(Math.random() * 100);
            randomNumsArr.push(elem);
        }

        for (let y = 0; y < randomNumsArr.length; y++) {
            let num = randomNumsArr[y];
            let lower = Math.min(m, n);
            let upper = Math.max(m, n);

            if (lower <= num && num <= upper) {
                diapArr.push(num);
            } else {
                console.log(`${num} - не входит в диапазон заданных чисел`);
            }
        }

        return diapArr;
    };
    const generator = getGenerator(5, -11, 65);
    console.log('generator: ', generator);
}


{
    const getGenerator = (amount, m, n) => {
        const arr = [];

        const getRandomNums = () => {
            let elem = Math.round(Math.random() * 100);
            arr.push(elem)
            return elem;
        };

        do {
            getRandomNums();
            amount--;
        } while (amount > 0);
        console.log(arr);

        const getDiap = (num) => {
            let lower = Math.min(m, n);
            let upper = Math.max(m, n);

            if (lower <= num && num <= upper) {
                return true;
            } else {
                console.log(`${num} - не входит в диапазон заданных чисел`);
            }
        };

        const newArr = arr.filter(getDiap);
        return newArr;

    };
    const generator = getGenerator(7, 55, -9);
    console.log('generator: ', generator);
}

//lesson 8 - 1 - 3
{
    /*
    4-ый опциональный параметр это строка:
    если функция получает 'even', то функция возвращает массив чётных чисел
    если функция получает 'odd', то функция возвращает массив нечётных чисел
    s*/
}

{
    {
        const getGenerator = (amount, m, n, string) => {
            const arr = [];

            const getRandomNums = () => {
                let elem = Math.round(Math.random() * 100);
                arr.push(elem)
                return elem;
            };

            do {
                getRandomNums();
                amount--;
            } while (amount > 0);

            const getDiap = (num) => {
                let lower = Math.min(m, n);
                let upper = Math.max(m, n);

                if (lower <= num && num <= upper) {
                    return true;
                }
            };

            const newArr = arr.filter(getDiap);

            if (string === 'odd') {
                const odd = newArr.filter(num => (num % 2) !== 0);
                return odd;
            }

            if (string === 'even') {
                const even = newArr.filter(num => (num % 2) === 0);
                return even;
            }

        };
        const generator = getGenerator(10, 1, 51, 'even');
        console.log('generator: ', generator);
    }
}

//lesson 8 - 1 - 4
{
    /*
    Необходимо написать функцию, которая принимает 2 параметра n и m
    И возвращает массив с високосными годами в диапазоне между n и m
    Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора
    Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
    */
}

{
    const checkLeapYears = (m, n) => {
        let lower = Math.min(m, n);
        let upper = Math.max(m, n);

        const years = [];

        for (let y = lower; y <= upper; y++) {
            console.log(y);
            if (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)) {
                years.push(y);
            }
        }

        return years;
    };
    const leapYears = checkLeapYears(2010, 2027);
    console.log('leapYears: ', leapYears);
}