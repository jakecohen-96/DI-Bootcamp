import { handleData } from "./handleData";

const testData: (any)[] = [
    { type: 'user', name: 'Jake', age: 30 },
    { type: 'product', id: 101, price: 19.99 },
    { type: 'order', orderId: 'A123', amount: 250.5 },
    { type: 'user', name: 'Alice', age: 25 },
    { type: 'product', id: 202, price: 5.75 }
];

const result = handleData(testData)

result.forEach(result => console.log(result))