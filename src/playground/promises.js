const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong');
        //resolve('This is my resolved data');
    }, 1500)
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).then(() => {
    console.log('Does this run?');
}).catch((error) => {
    console.log('Error: ', error);
});

console.log('after');