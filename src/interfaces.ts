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



/* 
interface

An interface is primarily used to define object shapes (or classes).

Key points:
- Can only describe objects (or classes)
- Can be extended or merged (this is a big advantage)

Example:
interface User {
  id: number;
  name: string;
}

interface User {
  email: string;
}

// User now has id, name, email ✅

*/



/* 
Example of both
*/

// type alias with intersection
type Worker = {
  id: number;
  name: string;
} & { role: string }; // intersection type


// interface with intersection
interface Manager {
  id: number;
  name: string;
}

interface Manager {
  department: string; // merged
}




// Interface with extends
interface Person {
  name: string;
  age: number;
}

// Extend with another interface
interface Employee extends Person {
  role: string;
}

// Now Employee has: name, age, role
const emp: Employee = {
  name: "Chiemezie",
  age: 34,
  role: "Fullstack Developer",
};

console.log(emp);