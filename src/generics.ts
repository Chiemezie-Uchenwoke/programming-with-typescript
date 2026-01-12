// Generics allows us to define reusable functions and classes that work with multiple types rather than a single type.

// Generics in TypeScript are a powerful tool for creating reusable, flexible, and type-safe components (functions, classes, and interfaces) that can work with a variety of data types, rather than a single specific one. They use placeholder types, or "type variables" (commonly denoted by <T>), which are specified when the component is used. 

// Examples of using a generic
const nums: number[] = [];
const colors: Array<string> = [];
const inputEl = document.querySelector<HTMLInputElement>("#input-el");
const btn = document.querySelector<HTMLButtonElement>(".btn");

// usage
// inputEl?.value;
// btn?.addEventListener

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}



// generic function -- Ex 1
interface User {
    name: string;
    role: string;
    age: number;
}

function identity<T>(item: T): T {
    return item;
}

console.log(identity<number>(7));
console.log(identity<User>({name: "Uche Joy", role: "DevOps", age: 26}));



// generic function -- Ex 2
function getRandomElement<T>(list: T[]): T {
    if (list.length === 0) throw new Error("Array cannot be empty");

    const randomElementIndex = Math.floor((Math.random() * list.length));
    const el = list[randomElementIndex];

    if (typeof el === "undefined") {
        throw new Error("Element not found!");
    }

    return el;
} 

console.log(getRandomElement<number>([1, 2, 3, 4, 5]));
console.log(getRandomElement([1, 2, 3, 4, 5])); // Typescript can infer the type of a generic type


// generics -- EX 3
interface Box<T> {
  value: T;
}
const numberBox: Box<number> = { value: 123 };
console.log(numberBox);


type Person<T> = {
    name: string;
    age: T
}

const person1: Person<number> = {name: "Joh", age: 22};
console.log(person1);


// Generics with multiple types
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return {
        ...obj1,
        ...obj2,
    }
};

interface Individual {
    name: string;
    age: number;
}

interface Job {
    type: string;
    role: string
}

const userWorkDetail = merge<Individual, Job>({name: "John Doe", age: 30}, {type: "Software Engineering", role: "Fullstack Developer"});
console.log(userWorkDetail);

interface Profile {
    type: string;
}

function getArray<T extends Profile, U>(obj: T, item: U) {
    return [obj, item];
}



const userProfile = getArray({type: "Tech"}, 88 );
console.log(userProfile);


// More Examples
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength("Hello"); // ✅ Works (strings have length)
logLength([1, 2]);  // ✅ Works (arrays have length)
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
function makeEmptyArray<T = number>(): T[] {
    return [];
}

const numsArray = makeEmptyArray(); 
numsArray.push(1);
numsArray.push(2);
console.log(numsArray);




// Generic Classes
class Playlist<T> {
    queue: T[] = [];
    add(el: T) {
        this.queue.push(el);
    }
    getPlaylist() {
        return this.queue;
    }
}