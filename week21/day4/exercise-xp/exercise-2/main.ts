class Product {
    public readonly id: number;
    public name: string;
    public price: number;

    constructor(
        id: number,
        name: string,
        price: number,
    ){
        this.id = id;
        this.name = name;
        this.price = price
    }
    public getProductInfo(): string {
        return `product: ${this.name} price: ${this.price}`
    }
}

const testProduct = new Product(1, 'laptop', 10)

console.log(testProduct.getProductInfo());
