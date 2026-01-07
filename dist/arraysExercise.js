"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (products) => {
    const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
    return totalPrice;
};
const allProducts = [
    { name: "coffee mug", price: 11.50 },
    { name: "smart watch", price: 150.50 },
    { name: "Mouse Pad", price: 23.00 },
];
console.log(getTotal(allProducts));
//# sourceMappingURL=arraysExercise.js.map