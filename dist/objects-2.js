"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum for worker roles
var Role;
(function (Role) {
    Role["Developer"] = "Developer";
    Role["Designer"] = "Designer";
    Role["Manager"] = "Manager";
})(Role || (Role = {}));
// Example Worker object
const worker1 = {
    name: "Chiemezie Uchenwoke",
    phone: "+234559",
    age: 34,
    role: Role.Developer,
    department: "Engineering",
    about() {
        // 'this' refers to worker1 object
        return `${this.name}, age ${this.age}, works as a ${this.role}` +
            (this.department ? ` in ${this.department} department.` : ".");
    },
};
console.log(worker1.about());
// Assigning projects with a tuple
const project1 = ["Stockify App", 12];
const project2 = ["CodeFoundations", 8];
console.log(`${worker1.name} is assigned to ${project1[0]} for ${project1[1]} weeks.`);
console.log(`${worker1.name} is assigned to ${project2[0]} for ${project2[1]} weeks.`);
//# sourceMappingURL=objects-2.js.map