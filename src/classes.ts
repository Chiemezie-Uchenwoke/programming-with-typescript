// By default properties are public and are accessible on instances of the class.

// Typescript has 3 modifiers: public, private, protected

// Private properties are only accessible within that class

// Protected properties are available in child classes. That any class that inherits a parent class.

class Player {
    readonly first: string;
    readonly last: string;

    public level: number = 0;
    protected score: number = 0;
    private numLives: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    get playerScore() {
        return this.score;
    }

    set playerScore(newScore: number) {
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
    role: string;

    constructor (first: string, last: string, role: string) {
        super(first, last);
        this.role = role;
    }

    get adminName(): string {
        return `${this.first} ${this.last}`;
    }

    changeScore(newScore: number): void {
        this.score = newScore;
    }

    getScore(): number {
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



// classes with implements
interface Credentials {
    fullname: string;
    email: string;
    password: string;
}

class Login implements Credentials {
    fullname: string;
    email: string;
    password: string;
    
    constructor(fullname: string, email: string, password: string) {
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