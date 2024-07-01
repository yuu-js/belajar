const getMonth = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            const result = month.map(myFunction)
            if (!error) {
                resolve(result)
            } else {
                reject(new Error('Sorry Data not Found'), [])
            }
        }, 400)
    })
}

function myFunction(item) {
    return item;
}

getMonth()
    .then(months => {
        if (months && months.length > 0)
            {months.map((item) => console.log(item))}
        console.log(months);
    })
    .catch(error => {
        console.error(error.message);
    });