"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  # 1
function printName(person) {
    console.log(`My first name is ${person.first} and last name is ${person.last} `);
}
printName({ first: "John", last: "Doe" });
// # 2
const coordinate = { x: 20, y: 5 };
console.log(coordinate);
// # 3
const randomCoordinate = () => {
    return { x: Math.random(), y: Math.random() };
};
console.log(randomCoordinate());
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
const mySong = {
    title: "Live with excellence",
    artist: "Chiemezie Uchenwoke",
    numStreams: 263655,
    credits: { producer: "Frank Edwards", writer: "Moses Bliss" },
};
console.log(calculatePayout(mySong));
const printSong = (song) => {
    return {
        title: `${song.title}`,
        artist: `${song.artist}`
    };
};
console.log(printSong(mySong));
const studentBio = {
    fullname: "Chiemezie Uchenwoke",
    course: "Software Engineering",
    isActive: true,
};
console.log(studentBio);
const user = {
    id: 23,
    name: "Chiemezie Uchenwoke",
};
console.log(user.id);
const circleProps = {
    radius: 14,
    color: "Blue",
};
console.log(circleProps);
const bestStudent = {
    name: "John Max",
    role: "Developer",
    isResponsible: true,
    isSelfless: true,
};
console.log(bestStudent);
//# sourceMappingURL=objects.js.map