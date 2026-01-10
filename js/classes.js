class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}. Welcome to our class`;
    }
};


const mezie = new Person("chiemezie", 33);
console.log(mezie.name);
console.log(mezie.age);
console.log(mezie.greet());


class Profession extends Person {
    constructor(name, age, role) {
        super(name, age); //  references the constructor of the parent or derived class
        this.role = role;
    }

    sayVision() {
        return `${this.name} wants to make a difference`;
    }
};

const john = new Profession("John Sax", 39, "Developer");
console.log(john.name);
console.log(john.age);
console.log(john.role);
console.log(john.sayVision());

// In create private fields, we use a pound sign (#) to indicate a private field.
// To access a private field, we define a method to access them.

class Player {
    #score = 0; // Initialize fixed values
    #numLives = 10;
    static description = "A fun game for developers";
    // Static properties are not accessible on instances. They are only accessible on the class. Ex Player.description.
    // Same applies with static methods.
    static aboutGame() {
        console.log("A fun game");
    }
    constructor(first, last) {
        this.first = first;
        this.last = last;
    };

    loseLife() {
        this.#numLives -= 1;
    }

    getScore() {
        return this.#score;
    }

    setScore(newScore) {
        this.#score = newScore;
    }

    getLives() {
        return this.#numLives;
    }

    // getters
    get fullname() {
        return `${this.first} - ${this.last}`;
    }

    set score(newScore) {
        if (this.#score < 0) {
            throw new Error("Score must be positive");
        }

        return this.#score = newScore; 
    }

    static getRandomPlayer() {
        return new Player("Max", "Andrews"); // uses constructor
    }
}

const player1 = new Player("John", "Doe");
console.log(player1.getLives());
console.log(player1.first);
player1.loseLife();
console.log(player1.numLives);
console.log(player1.getScore());
player1.setScore(55);
console.log(player1.getScore());
console.log(player1.fullname);
try {
    console.log(player1.description);
    console.log(player1.aboutGame());
} catch (e) {
    console.error(e.message);
}

console.log(Player.description); // static property
Player.aboutGame(); // static method
console.log(Player.getRandomPlayer());