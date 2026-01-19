"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
const highScore = true;
console.log(highScore);
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff = [1, 2, 3];
stuff = ["apple", "banana"];
console.log(stuff);
// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors = [
    { r: 2, g: 5, b: 7 },
    { h: 4, s: 7, l: 10 },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (person) => {
    if (Array.isArray(person)) {
        person.forEach(p => console.log(`Hello ${p}`));
    }
    else {
        console.log(`Hello ${person}`);
    }
};
greet("Chiemezie");
greet(["John", "Alice", "Kehinde"]);
