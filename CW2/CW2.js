//Q1

console.log("Q1: ");

const someData = [15];

someData.push(true);
someData.push(7);
someData.push(42 + ", The Hitchhiker's guide to the Galaxy");

console.log(someData);

console.log("Q1 ends.");

//Q2

console.log("Q2: ");

const pet = ['puppy', 'kitten', 'bunny'];
let newPets = pet.map((item) => "cute "+item);

console.log(newPets);

console.log("Q2 ends.");

//Q3

console.log("Q3: ");

const arr = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

let swapIndex=arr.findIndex(obj=>obj=='slinky');
arr[swapIndex]='space tether';

console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.shift());
console.log(arr);

arr.unshift(1138);
arr.push('20 meters');

console.log(arr);

console.log("Q3 ends.");

//Q4

console.log("Q4: ");

const arrVon3 = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

arrVon3.splice(-1);
console.log(arrVon3);

arrVon3.splice(2,4, 'cat', 'fob', 'string cheese');
console.log(arrVon3);

console.log("Q4 ends.");

//Q5

console.log("Q5: ");

const arrFunf = ['B', 'n', 'n', 's']; 

let arrToString = arrFunf.join('a');

console.log(arrToString);

console.log("Q5 ends.");

//Q6

console.log("Q6: ");

const murder =  {
    murderer : 'unknown',
    place: 'kitchen',
    weapon: 'knife'
};

const {murderer, place, weapon} = murder; 

console.log(weapon);

console.log("Q6 ends.");

//Q7

console.log("Q7: ")

const dataOfSuspects = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let suspect = dataOfSuspects.filter(obj => obj.present == true &&  obj.rooms[0].kitchen==true);
console.log(suspect);

const [{name}]=suspect;

console.log(name);

console.log("Q7 ends.");

