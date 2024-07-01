const cekMusim = (season) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataBay = ['WINTER', 'spring', 'summer', 'fall']
            let cek = dataBay.find((item) => {
                return item === season
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Musim tidak valid'))
            }
        }, 3000)
    })
}

const inputSeason = 'WINTER';

cekMusim(inputSeason)
    .then((result) => {
        console.log(`Correct: ${result}`);
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });