//  Task 1
// Name tuple type
type APIResponse = [id: number, username: string, isActive: boolean];

let apiResponse: APIResponse = [12, "John", false];

function useApiResponse(response: APIResponse): string {
    return `${response[1]} (${response[0]}) is ${response[2]}`;
}

console.log(useApiResponse(apiResponse));

// apiResponse = ["john", 12, false];


// Task 2

enum OrderStatus {
    Pending,
    Paid,
    Shipped,
    Delivered,
    Cancelled,
};

const getOrderStatus = (orderStatus: OrderStatus): string => {
    let response: string;
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
    };

    return response;
};

console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Paid));
console.log(getOrderStatus(OrderStatus.Shipped));