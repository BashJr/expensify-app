import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };









// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('notes/-MLryvWCZOwU1hkV2ypV').update({
//     body: 'Buy food'
// });


// database.ref('notes').push({
//     title: 'Course Topcs',
//     body: 'React, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//     const val = snapshot.val();
//     console.log(val.name, 'is a', val.job.title, 'at', val.job.company);
// }, (e) => {
//     console.log('Things are not displaying', e);
// });

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 3500);

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Zach W',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'SD',
//         company: 'Google'
//     },
//     location: {
//         city: 'Chicago',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

//database.ref('isSingle').remove();

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// });

//database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Victorville');

// database.ref('attributes').set({
//     height: 72,
//     weight: 170
// });