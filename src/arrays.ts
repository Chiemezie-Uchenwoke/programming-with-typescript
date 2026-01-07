// Arrays with single types
const favFruits: string[] = ["banana", "pawpaw"];
favFruits.push("orange");
console.log(favFruits);

type Price = number[];

const totalPrice = (arr: Price): number => {
    return arr.reduce((acc, price) => acc + price, 0);
}
console.log(totalPrice([12, 20, 40, 18, 10]));


// An alternative syntax for declaring an array in TypeScript
const numberArray: Array<number> = [1, 2, 3, 4];
numberArray.push(5);
console.log(numberArray);


// Array of objects
type Workers = {
    fullname: string;
    age: number;
}

/* const allWorkers: Array<Workers> = [
    {fullname: "John Doe", age: 20},
    {fullname: "Max Williams", age: 29},
]; */

const allWorkers: Workers[] = [
    {fullname: "John Doe", age: 20},
    {fullname: "Max Williams", age: 29},
];
allWorkers.push({fullname: "Alice May", age: 21});
console.log(allWorkers);


// Multi-dimensional Arrays
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["O", "O", "X"],
];
console.log(board);


// Array of type any
const details: any[] = ["5", 2, {name: "John Doe"}];

// Arrays with For-Of Loop
const allNums: number[] = [19, 27, 13, 34, 45];
for (let number of allNums) {
    console.log(number);
}
