"use strict";
// Union Types: Allows more than one type annotation.
Object.defineProperty(exports, "__esModule", { value: true });
// An alternative approach
// type ExampleArray = Array< string | number | boolean | User >;
const myLists = ["apple", 1, "gauva", true, { name: "Uche", age: 12 }];
console.log(myLists);
myLists.push("World");
console.log(myLists);
let age = 12;
age = "15";
console.log(age);
// An array of type string and number
// Union array types always use the (). Example (string | number)[]
const myDetails = [1, "apple", "banana", 2.5, "7"];
console.log(myDetails);
const workArray = [
    { name: "John Sax", currentRole: "Engineer" },
    { preferredRole: "Software Engineer", isOpen: true },
];
console.log(workArray);
// Type Narrowing using "typeof"
function printAge(age) {
    if (typeof age === "string") {
        return Number(age);
    }
    return age;
}
printAge(23);
// Literal Types
const greet = "Hi";
console.log(greet);
let mood = "Happy";
mood = "Sad";
// mood = "Angry"; //Error.
console.log(mood);
function getFarmAnimalSound(animal) {
    let response;
    switch (animal.kind) {
        case "pig":
            response = "It is a pig";
            break;
        case "cow":
            response = "It is a cow";
            break;
        case "rooster":
            response = "It is a rooster";
            break;
        default:
            response = "Invalid kind value!";
    }
    return response;
}
const animalType = getFarmAnimalSound({ name: "Rooster", weight: 100, age: 18, kind: "rooster" });
console.log(animalType);
