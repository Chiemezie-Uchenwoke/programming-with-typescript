"use strict";
// Generics allows us to define reusable functions and classes that work with multiple types rather than a single type.
Object.defineProperty(exports, "__esModule", { value: true });
// Generics in TypeScript are a powerful tool for creating reusable, flexible, and type-safe components (functions, classes, and interfaces) that can work with a variety of data types, rather than a single specific one. They use placeholder types, or "type variables" (commonly denoted by <T>), which are specified when the component is used. 
// Examples of using a generic
const nums = [];
const colors = [];
const inputEl = document.querySelector("#input-el");
const btn = document.querySelector(".btn");
// usage
// inputEl?.value;
// btn?.addEventListener
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
console.log(identity(7));
console.log(identity({ name: "Uche Joy", role: "DevOps", age: 26 }));
// generic function -- Ex 2
function getRandomElement(list) {
    if (list.length === 0)
        throw new Error("Array cannot be empty");
    const randomElementIndex = Math.floor((Math.random() * list.length));
    const el = list[randomElementIndex];
    if (typeof el === "undefined") {
        throw new Error("Element not found!");
    }
    return el;
}
console.log(getRandomElement([1, 2, 3, 4, 5]));
console.log(getRandomElement([1, 2, 3, 4, 5])); // Typescript can infer the type of a generic type
const numberBox = { value: 123 };
console.log(numberBox);
const person1 = { name: "Joh", age: 22 };
console.log(person1);
// Generics with multiple types
function merge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
;
const userWorkDetail = merge({ name: "John Doe", age: 30 }, { type: "Software Engineering", role: "Fullstack Developer" });
console.log(userWorkDetail);
function getArray(obj, item) {
    return [obj, item];
}
const userProfile = getArray({ type: "Tech" }, 88);
console.log(userProfile);
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // ✅ Works (strings have length)
logLength([1, 2]); // ✅ Works (arrays have length)
// logLength(5);    // ❌ Error: numbers don't have length
// Generics with default type parameters
// 1 Create the function with a generic type
// function makeEmptyArray<T>(): T[] {
//     return [];
// }
// const strings = makeEmptyArray<string>(); // strings is an empty array that expects strings
// strings.push("John");
// strings.push("Mark");
// console.log(strings);
// 2 Passing a default type parameter
function makeEmptyArray() {
    return [];
}
const numsArray = makeEmptyArray();
numsArray.push(1);
numsArray.push(2);
console.log(numsArray);
// Generic Classes
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
    getPlaylist() {
        return this.queue;
    }
}
//# sourceMappingURL=generics.js.map