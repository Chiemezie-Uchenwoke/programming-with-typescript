// Tuples are arrays with a fixed length and ordered with a fixed set of types. 
// You define the types for each element of the array
// They are fixed in their length and types.
// They follow the order they are defined.
// We use a square bracket to define the types

const myArray: [number, string] = [1, "Hello"];
myArray.push("Hello");
console.log(myArray);

//  Limitations of tuples 
// - You can add to the array using the push() method
//  You can delete an element from it using the pop() method.