type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: "Jake",
    age: 28,
    street: "random street",
    city: "Tel Aviv"
};

console.log(personWithAddress);