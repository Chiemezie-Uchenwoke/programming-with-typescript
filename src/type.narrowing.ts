//  Typeof Guard

function triple(value: string | number): string | number {
    if (typeof value === "string") {
        return value.repeat(3);
    }

    return value * 3;
}

console.log(triple("hi!"));
console.log(triple(5));


// Truthy Narrowing
function getLetters(word?: string): void {

    if (!word) {
       console.log("Pass a word as an argument to the getLetters function");
    } else {
        for(let letter of word) {
            console.log(letter);
        }
    }

}

getLetters();
getLetters("Beautiful");


// Equality Narrowing
// Equality type guard involves comparing types to each other before doing certain operations with values.

const someDemo = (x: string | boolean, y: string | boolean): void  => {
    if (x === y) {
        if (typeof x === "string") {
            console.log(x.toUpperCase());
        } else {
            console.log(x);
        }
    }
}



// In operator narrowing
// In-operator narrowing is a technique used to compare two objects using their properties.

interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }

    return media.duration;
}

console.log(getRunTime({title: "Fast and Furious", duration: 120}));
console.log(getRunTime({title: "24 hours", numEpisodes: 240, episodeDuration: 50}));




// instance of Narrowing
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    aboutUser() {
        return `${this.name} is ${this.age} years old.`
    }
}

const user1 = new User("Chiemezie", 35);

if (user1 instanceof User) {
    console.log("TRUE");
}


// Type Predicate -- --



// Discriminated unions

