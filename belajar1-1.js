const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataBay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataBay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject
            }
        }, 300)
    })
}

const inputDay = 'monday';

if (inputDay === 'senin' || inputDay === 'selasa' || inputDay === 'rabu' || inputDay === 'kamis' || inputDay === 'jumat') {

} else if (inputDay === 'minggu' || inputDay === 'sabtu') {
    console.log('bukan hari kerja');
} else {
    console.log('Input harus nama hari');
}

cekHariKerja(inputDay)
    .then((result) => {
        console.log(`${result} termasuk hari kerja`);
    })
    .catch((error) => {
        console.log(`Error: ${error.message}`);
    });

// jika inputDay termasuk hari kerja, maka result akan muncul, sebaliknya jika inputDay bukan hari kerja maka terjadi Error.
// ketika inputDay bukan termasuk hari maka terjadi Error juga.


