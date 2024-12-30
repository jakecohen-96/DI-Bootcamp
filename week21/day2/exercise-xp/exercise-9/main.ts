function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, World!";
    }
}

console.log(greet());
console.log(greet("Alice"));