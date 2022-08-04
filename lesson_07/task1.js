'use strict'

{
    const allStudents = ['Petrov', 'Sidorov', 'Ivanov', 'Smith', 'Fedorov', 'Jackson'];
    const failedStudents = ['Smith', 'Jackson'];

    const filter = (all, failed) => {
        const result = all.filter((student) => {
            return !failed.includes(student)
        });

        console.log(result);
    };

    filter(allStudents, failedStudents);
}
{
    const allStudents = ['Ivanov', 'Petrov', 'Sidorov', 'Kovpak', 'Korniev', 'Dickson'];
    const failedStudents = ['Kovpak', 'Dickson'];

    const filter = (all, failed) => {
        const newArr = [];

        for (let i = 0; i < all.length; i++) {

            if (!failed.includes(all[i])) {
                console.log(all[i]);
                newArr.push(all[i]);
            }
        }

        return newArr;
    };

    const passedStudents = filter(allStudents, failedStudents);
    console.log('passedStudents: ', passedStudents);
}

{
    const allStudents = ['Ivanov', 'Petrov', 'Sidorov', 'Kovpak', 'Korniev', 'Dickson'];
    const failedStudents = ['Kovpak', 'Dickson'];

    const filter = (all, failed) => {
        const newArr = [];

        for (let i = 0; i < all.length; i++) {

            for (let y = 0; y < failed.length; y++) {
                if (all[i] === failed[y]) {
                    console.log(all[i]);
                    delete all[i];
                }
            }

            if (all[i]) {
                newArr.push(all[i]);
            }

        }
        return newArr;
    };

    const passedStudents = filter(allStudents, failedStudents);
    console.log('passedStudents: ', passedStudents);
}

{
    const allStudents = ['Ivanov', 'Petrov', 'Sidorov', 'Kovpak', 'Korniev', 'Dickson'];
    const failedStudents = ['Kovpak', 'Dickson'];

    const filter = ((all, failed) => {
        const result = all.filter(student => !failed.includes(student));
        return result;
    })

    const passedStudents = filter(allStudents, failedStudents);
    console.log('passedStudents: ', passedStudents);
}

