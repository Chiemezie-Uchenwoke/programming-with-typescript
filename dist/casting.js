"use strict";
// Type Casting
Object.defineProperty(exports, "__esModule", { value: true });
/*
Type casting is primarily used when you, the developer, have more knowledge about the type of a variable than the TypeScript compiler does

# When Type Casting Is Used:
Type casting essentially tells the compiler to "trust me, I know what I'm doing." You might use it in scenarios such as:

(1)  Interacting with the DOM: When using document.getElementById('my-element'), the compiler only knows it's a generic HTMLElement. You would cast it to a more specific type like HTMLCanvasElement or HTMLInputElement because you know from your HTML structure that it is that specific type

(2)  Working with external libraries: Sometimes, data returned from a library might have a less specific type than you know it to be based on the library's documentation.

(3) When migrating JavaScript code: You may use casts to quickly assert types as you transition a codebase to TypeScript, with the goal of replacing them with more robust type-safe code later

In summary, type cast is a type assertion technique.

*/
// Casting with as
const apiData = "Hello world";
const lengthOfData = apiData.length;
console.log(lengthOfData);
;
const usersArray = [
    { name: "John", age: 12 },
    { name: "Ade", age: 12 },
    { name: "Gozie", age: 12 },
];
const arrayLength = usersArray.length;
console.log(arrayLength);
// Casting with <>
const x = 'hello';
console.log(x.length);
const personArray = [
    { name: "John", age: 12 },
    { name: "Ade", age: "12" },
    { name: "Gozie", age: 12 },
    { name: "Gozie", age: 12 },
    { name: "Gozie", age: 12 },
];
// const personsLength = (<Person[]>personArray).length;
const personsLength = personArray.length;
console.log(personsLength);
//# sourceMappingURL=casting.js.map