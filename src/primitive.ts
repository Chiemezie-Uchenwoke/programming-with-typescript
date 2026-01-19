const num = 10;

const userName = "Chiemezie";

const isValid = true;

interface Person {
    name: string;
    age: number | string;
    about(): string;
    isActive?: boolean;
}

let person1: Person = {
    name: "Chiemezie Uche",
    age: 12,
    about() {
        return `${this.name} is ${this.age} years old and is a developer`;
    },
    isActive: true,
}

console.log(num, userName, isValid);
console.log(person1);
console.log(person1.about());

interface Staff extends Person {
    role: string;
}

const worker1: Staff = {
    name: "John Doe",
    age: "33",
    about() {
        return `${this.name} is ${this.age} years old and is a ${this.role}.`;
    },
    isActive: true,
    role: "Full-Stack Developer",
}

console.log(worker1);
console.log(worker1.role);
console.log(worker1.about());