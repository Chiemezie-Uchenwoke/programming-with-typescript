//  # 1
function printName(person: {first: string, last: string}): void {
    console.log(`My first name is ${person.first} and last name is ${person.last} `);
}

printName({first: "John", last: "Doe"});

// Type Alias
type Point = {
    x: number;
    y: number;
}

// # 2
const coordinate: Point = {x: 20, y: 5};
console.log(coordinate);

// # 3
const randomCoordinate = (): Point => {
    return {x: Math.random(), y: Math.random()};
}

console.log(randomCoordinate());


// Nested Objects
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {producer: string, writer: string};
}

type Artist = {
    title: string;
    artist: string;
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

const mySong: Song = {
    title: "Live with excellence",
    artist: "Chiemezie Uchenwoke",
    numStreams: 263655,
    credits: {producer: "Frank Edwards", writer: "Moses Bliss"},
}

console.log(calculatePayout(mySong));

const printSong = (song: Song): Artist => {
    return {
        title: `${song.title}`,
        artist: `${song.artist}`
    }
}

console.log(printSong(mySong));



// Type Alias with optional properties (?)

type StudentBio = {
    fullname: string;
    age?: number;
    course: string;
    isActive?: boolean;
}

const studentBio: StudentBio = {
    fullname: "Chiemezie Uchenwoke",
    course: "Software Engineering",
    isActive: true,
}

console.log(studentBio);



// Setting readonly properties
type User = {
    readonly id: number;
    name: string;
}

const user: User = {
    id: 23,
    name: "Chiemezie Uchenwoke",
}

console.log(user.id);
// user.id = 10; //Error - It is a readonly property.


// Intersection Types (&)
type Circle = {
    radius: number;
}

type Color = {
    color: string;
}

type ColorfulCircle = Circle & Color;

const circleProps: ColorfulCircle = {
    radius: 14,
    color: "Blue",
}
console.log(circleProps);


type Bio = {
    name: string;
    role: string;
}

type Behaviour = {
    isResponsible: boolean;
}

// Adding extra type to defined types
type BehavedStudent = Bio & Behaviour & {
    isSelfless: boolean;
}

const bestStudent: BehavedStudent = {
    name: "John Max",
    role: "Developer",
    isResponsible: true,
    isSelfless: true,
}
console.log(bestStudent);




interface Client {
    name: string;
    phone: string;
}

function getCLient({name, phone}: Client): string {
    return `Client name is ${name} and phone number is ${phone}`;
};

const firstClient: Client = {
    name: "John Sax",
    phone: "+234559",
};

console.log(getCLient(firstClient));


interface Worker extends Client {
    age: number;
    role: string;
    about: () => string;
    // about(): string  // alternative way
    sayFavoriteFood: (favFood: string) => string;
};

const newWorker: Worker = {
    name: "Chiemezie Uchenwoke",
    phone: "+234",
    age: 35,
    role: "Fullstack Developer",
    about: function(): string {
        return `${this.name} is a ${this.role}`;
    },
    sayFavoriteFood: function(favFood: string): string {
        return `${this.name}'s favorite food is ${favFood}`;
    }

};

// alternative
/* 

about() {
        return `${this.name} is a ${this.role}`;
    },

*/

console.log(newWorker);
console.log(newWorker.about());
console.log(newWorker.sayFavoriteFood("Bitter-Leaf soup and fufu"));


interface Personal {
    name: string;
    desc: string;
};

const p1: Personal = {name: "Hello", desc: "World"};
const p2: Personal = {...p1, name: "Beauty"};

console.log(p1)
console.log(p2)



