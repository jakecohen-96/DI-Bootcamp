export const persons = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

export function calculateAverageAge(persons) {
    const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
    return totalAge / persons.length;
}