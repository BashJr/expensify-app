//
// Object Destructuring
//

// const person = {
//     name: 'Zach',
//     age: 24,
//     location: {
//         city: 'LA',
//         temp: 100
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;


// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// // if (person.location.city && person.location.temp) {
// //     console.log(`It's ${person.location.temp} in ${person.location.city}`);
// // }

// if (city && temp) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philly', 'PA', '99999'];

// const [, city, state = 'NY'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, ,medPrice] = item;

console.log(`A medium ${coffee} costs ${medPrice}`);