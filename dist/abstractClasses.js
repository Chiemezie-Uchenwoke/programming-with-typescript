"use strict";
// Abstracts are hybrid structures of classes. They define the structure of a class.
Object.defineProperty(exports, "__esModule", { value: true });
// An abstract class is a blueprint class that cannot be instantiated on its own. It defines shared properties and enforces required methods that child classes must implement.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    // duration: string;
    constructor(first, last, duration) {
        super(first, last);
        this.duration = duration;
        this.duration = duration;
    }
    getPay() {
        return 45000;
    }
    getDuration() {
        return this.duration;
    }
}
;
const firstFulltimeWorker = new FullTimeEmployee("John", "Sax", "40 hours weekly");
console.log(firstFulltimeWorker.first);
console.log(firstFulltimeWorker.last);
console.log(firstFulltimeWorker.getDuration());
console.log(firstFulltimeWorker.getPay());
// constructor(public first: string, public last: string) {}
// using public creates this.first = first, etc.
