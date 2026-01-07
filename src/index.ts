// Variables
let movieTitle: string = "24 Hours";
movieTitle = "Legends of the seeker";
console.log(movieTitle);

// movieTitle = 25; //Error!


const myBoolean: boolean = true;
let foundMovie;

const movies: string[] = ["Amadeus", "24 Hours", "Megalion"];
for(let movie of movies) {
    if (movie === "Amadeus") foundMovie = "Amadeus";
}

console.log(foundMovie);

// Functions without return type annotation
const doSomething = (username: string) => {
    return username;
}

const resultOfDoSomething = doSomething("Mexixo");
console.log(resultOfDoSomething);


// Return Type Annotation
// Functions - (1)
function squareNumber(num: number): number{
    return num * num;
}

const squareResult = squareNumber(7);
console.log(squareResult);

// Functions - (2)
const welcomeUser = (name: string, age: number): string => {
    return `Hello ${name}, you are ${age} years old`;
}

const sayHello = welcomeUser("Chiemezie", 35);
console.log(sayHello);

// Functions with default values
type WorkerData = {
    name: string,
    age: number,
    role: string,
    isExperienced: boolean,
}

const returnUserData = (name: string="mezie", age: number=35, role: string="React Developer", isExperienced: boolean=true): WorkerData => {
    return {
        name,
        age,
        role,
        isExperienced,
    }
};

const resultData = returnUserData();
console.log(resultData);


// # Union Types - string | number



// Void Type
// It is a return type for functions that don't return anything.
const addNumbers = (x: number, y: number): void => {
    const result = x + y;
    console.log(result);
} 
