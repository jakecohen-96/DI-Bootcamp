class Animal {
    public name: string;

    constructor(
        name: string,
    ){
        this.name = name;
    }
    public makeSound(): string {
        return 'sounds'
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    public makeSound(): string {
        return 'bark bark'
    }
}

const testDog = new Dog('max')
console.log(testDog.name);
console.log(testDog.makeSound());

