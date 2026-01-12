// Union Types: Allows more than one type annotation.

type User = {
    name: string;
    age: number;
}

type ExampleArray = (string | number | boolean | User)[];
// An alternative approach
// type ExampleArray = Array< string | number | boolean | User >;

const myLists: ExampleArray = ["apple", 1, "gauva", true, {name: "Uche", age: 12}];
console.log(myLists);
myLists.push("World");
console.log(myLists);


let age: (number | string) = 12;
age = "15";
console.log(age);


// An array of type string and number
// Union array types always use the (). Example (string | number)[]

const myDetails: (string | number)[] = [1, "apple", "banana", 2.5, "7"];
console.log(myDetails); 

// An array of different object types
type Person = {
    name: string;
    currentRole: string;
};

type JobRole = {
    preferredRole: string;
    isOpen: boolean;
}

const workArray: (Person | JobRole)[] = [
    {name: "John Sax", currentRole: "Engineer"},
    {preferredRole: "Software Engineer", isOpen: true},
];

console.log(workArray);


// Type Narrowing using "typeof"

function printAge(age: number | string): number {
    if (typeof age === "string") {
        return Number(age);
    }

    return age;
}
printAge(23);


// Literal Types
const greet: "Hi" = "Hi";
console.log(greet);

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Angry"; //Error.

console.log(mood);





// Discriminated unions
interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
    let response: string;
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

const animalType: string = getFarmAnimalSound({name: "Rooster", weight: 100, age: 18, kind: "rooster"});
console.log(animalType);