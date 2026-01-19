"use strict";
// By default properties are public and are accessible on instances of the class.
Object.defineProperty(exports, "__esModule", { value: true });
// Typescript has 3 modifiers: public, private, protected
// Private properties are only accessible within that class
// Protected properties are available in child classes. That any class that inherits a parent class.
class Player {
    constructor(first, last) {
        this.level = 0;
        this.score = 0;
        this.numLives = 0;
        this.first = first;
        this.last = last;
    }
    get playerScore() {
        return this.score;
    }
    set playerScore(newScore) {
        if (this.score < 0) {
            throw new Error("Score cannot be negative");
        }
        this.score = newScore;
    }
    getNumLives() {
        return this.numLives;
    }
}
const player1 = new Player("Chiemezie", "Uchenwoke");
console.log(player1.first);
console.log(player1.last);
console.log(player1.playerScore);
console.log(player1.getNumLives());
// player1.score = 45;
class Admin extends Player {
    constructor(first, last, role) {
        super(first, last);
        this.role = role;
    }
    get adminName() {
        return `${this.first} ${this.last}`;
    }
    changeScore(newScore) {
        this.score = newScore;
    }
    getScore() {
        return this.score;
    }
}
const admin1 = new Admin("Sax", "Stevens", "Editor");
console.log(admin1.role);
console.log(admin1.first);
console.log(admin1.last);
console.log(admin1.playerScore);
console.log(admin1.adminName);
admin1.changeScore(50);
console.log(admin1.getScore());
class Login {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }
    LogUser() {
        return `${this.fullname} logged in successful`;
    }
}
const user1 = new Login("John doe", "john@email.com", "123456");
console.log(user1);
console.log(user1.LogUser());
