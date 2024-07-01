const Id = ~~(Math.random() * 12345678);
const token = ~~(Math.random() * 1234);

function login(username) {
    console.log(username)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'wahyu') {
                console.log(Id)
                resolve({Id : Id}); 

            } else {
                reject('Coba lagi');
            }
        }, 200);
    });
}

function getToken(Id) {
    console.log('ini Id', Id)
    return new Promise((resolve, reject) => {
        if (!Id) {
            reject('Tidak ada Id');
        }
        setTimeout(() => {
            resolve(token);
        }, 200);
    });
}

const user = login('wahyu');
user
    .then((response) => {
        console.log(response)
        const { Id } = response;
        return getToken(Id);
    })
    .then((response) => {
        console.log('ini token', response)
        const { token } = response;
        console.log('Token:', response);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

