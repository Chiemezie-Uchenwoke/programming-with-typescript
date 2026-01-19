"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variables
let movieTitle = "24 Hours";
movieTitle = "Legends of the seeker";
console.log(movieTitle);
// movieTitle = 25; //Error!
const myBoolean = true;
let foundMovie;
const movies = ["Amadeus", "24 Hours", "Megalion"];
for (let movie of movies) {
    if (movie === "Amadeus")
        foundMovie = "Amadeus";
}
console.log(foundMovie);
// Functions without return type annotation
const doSomething = (username) => {
    return username;
};
const resultOfDoSomething = doSomething("Mexixo");
console.log(resultOfDoSomething);
// Return Type Annotation
// Functions - (1)
function squareNumber(num) {
    return num * num;
}
const squareResult = squareNumber(7);
console.log(squareResult);
// Functions - (2)
const welcomeUser = (name, age) => {
    return `Hello ${name}, you are ${age} years old`;
};
const sayHello = welcomeUser("Chiemezie", 35);
console.log(sayHello);
const returnUserData = (name = "mezie", age = 35, role = "React Developer", isExperienced = true) => {
    return {
        name,
        age,
        role,
        isExperienced,
    };
};
const resultData = returnUserData();
console.log(resultData);
// # Union Types - string | number
// Void Type
// It is a return type for functions that don't return anything.
const addNumbers = (x, y) => {
    const result = x + y;
    console.log(result);
};
