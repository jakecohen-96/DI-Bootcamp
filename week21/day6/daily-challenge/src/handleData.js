"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleData = handleData;
// type fuards for each type
function isUser(item) {
    return item.type === 'user';
}
function isProduct(item) {
    return item.type === 'product';
}
function isOrder(item) {
    return item.type === 'order';
}
function handleData(data) {
    return data.map(item => {
        if (isUser(item)) {
            `hello ${item.name} you are ${item.age} years old`;
        }
        else if (isProduct(item)) {
            return `product: ${item.id} price: ${item.price}`;
        }
        else if (isOrder(item)) {
            return `order: ${item.orderId} total amount: $${item.amount}`;
        }
        return 'Unknown type entered';
    });
}
