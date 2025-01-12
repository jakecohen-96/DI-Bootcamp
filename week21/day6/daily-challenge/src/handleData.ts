type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

// initialize the type for mixed arrays 
type MixedType = User | Product | Order;

// type fuards for each type
function isUser(item: MixedType): item is User {
    return item.type === 'user'
}

function isProduct(item: MixedType): item is Product {
    return item.type === 'product'
}

function isOrder(item: MixedType): item is Order {
    return item.type === 'order'
}

export function handleData(data: MixedType[]): string[] {
    return data.map(item => {
        if(isUser(item)) {
            `hello ${item.name} you are ${item.age} years old`
        } else if (isProduct(item)) {
            return `product: ${item.id} price: ${item.price}`
        } else if(isOrder(item)) {
            return `order: ${item.orderId} total amount: $${item.amount}`
        }
        return 'Unknown type entered'
    })
}  
