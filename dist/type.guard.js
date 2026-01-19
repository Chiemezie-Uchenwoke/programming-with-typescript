"use strict";
/*

When using "Type Guards" (i.e., if statements that check which concrete type is being used), TypeScript performs so-called "Type Narrowing".

This means that TypeScript is able to narrow a broader type down to a more specific type.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Example
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a} ${b}`;
}
// function login(u: User | Admin) {
//   if (typeof u === User) {
//     // do something
//   }
// }
/*

But you could check for the existence of the permissions property since only the Admin object will have one:

*/
function login(u) {
    if ('permissions' in u) {
        // do something
    }
}
