"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 12,
    username: "Max Andrews",
    email: "max.andrews@email.com",
    isActive: true,
};
console.log(user);
const productsList = [
    { id: 1, name: "Table Fan", price: 200 },
    { id: 2, name: "Smart Watch", price: 500 },
    { id: 3, name: "Smart TV", price: 1900 },
];
console.log(productsList);
// Task 3
const getTotalProductsPrice = (productsArray) => {
    return productsArray.reduce((acc, product) => acc + product.price, 0);
};
console.log(getTotalProductsPrice(productsList));
let orderStatus = "pending";
orderStatus = "paid";
// orderStatus = "rejected";
// Task 5
const getOutput = (input) => {
    return typeof input === "number" ? `Your input is ${String(input)}` : `Your input is ${input}.`;
};
console.log(getOutput(675));
console.log(getOutput("Chiemezie"));
// Task 6
function checkProductStock(name, quantity) {
    let response;
    if (quantity === 0) {
        response = `${name} is out of stock.`;
    }
    else if (quantity > 0 && quantity <= 7) {
        response = `${name} is low on stock.`;
    }
    else {
        response = `${name} is in stock.`;
    }
    return response;
}
console.log(checkProductStock("smart watch", 0));
console.log(checkProductStock("smart watch", 6));
console.log(checkProductStock("smart watch", 24));
// Task 7
const myArrayList = [1, 2, "Apple", "Gauva"];
console.log(myArrayList);
