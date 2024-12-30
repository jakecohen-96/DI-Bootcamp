type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return {name, age};
}

const person = createPerson('Jake', 28)
console.log(person);
