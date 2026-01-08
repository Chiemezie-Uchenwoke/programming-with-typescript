"use strict";
/*
# type alias

A type is used to give a name to any type, including:

- Primitives (string, number)
- Objects ({ name: string; age: number })
- Unions (string | number)
- Tuples ([string, number])
- Functions ((x: number) => string)


Summary
- Flexible — can represent any type.
- Cannot be “reopened” after definition.

Example
type Person = { name: string };
type Person = { age: number }; // ❌ Error
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Now Employee has: name, age, role
const emp = {
    name: "Chiemezie",
    age: 34,
    role: "Fullstack Developer",
};
console.log(emp);
//# sourceMappingURL=interfaces.js.map