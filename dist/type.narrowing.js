"use strict";
//  Typeof Guard
Object.defineProperty(exports, "__esModule", { value: true });
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
console.log(triple("hi!"));
console.log(triple(5));
// Truthy Narrowing
function getLetters(word) {
    if (!word) {
        console.log("Pass a word as an argument to the getLetters function");
    }
    else {
        for (let letter of word) {
            console.log(letter);
        }
    }
}
getLetters();
getLetters("Beautiful");
// Equality Narrowing
// Equality type guard involves comparing types to each other before doing certain operations with values.
const someDemo = (x, y) => {
    if (x === y) {
        if (typeof x === "string") {
            console.log(x.toUpperCase());
        }
        else {
            console.log(x);
        }
    }
};
function getRunTime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRunTime({ title: "Fast and Furious", duration: 120 }));
console.log(getRunTime({ title: "24 hours", numEpisodes: 240, episodeDuration: 50 }));
// instance of Narrowing
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    aboutUser() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const user1 = new User("Chiemezie", 35);
if (user1 instanceof User) {
    console.log("TRUE");
}
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
//# sourceMappingURL=type.narrowing.js.map