"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let apiResponse = [12, "John", false];
function useApiResponse(response) {
    return `${response[1]} (${response[0]}) is ${response[2]}`;
}
console.log(useApiResponse(apiResponse));
// apiResponse = ["john", 12, false];
// Task 2
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Paid"] = 1] = "Paid";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 4] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
;
const getOrderStatus = (orderStatus) => {
    let response;
    switch (orderStatus) {
        case OrderStatus.Pending:
            response = `Order is awaiting payment.`;
            break;
        case OrderStatus.Paid:
            response = "Payment has been confirmed and order is being processed.";
            break;
        case OrderStatus.Shipped:
            response = "Order is on the way.";
            break;
        case OrderStatus.Delivered:
            response = "Order has been delivered.";
            break;
        case OrderStatus.Cancelled:
            response = "Order has been cancelled";
            break;
        default:
            response = "Invalid order";
    }
    ;
    return response;
};
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Paid));
console.log(getOrderStatus(OrderStatus.Shipped));
