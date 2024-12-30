const inputElement = document.getElementById("username") as HTMLInputElement;

if (inputElement) {
    inputElement.value = "Hello, TypeScript!";
    console.log(`Input value set to: ${inputElement.value}`);
} else {
    console.error("Element with ID 'username' not found.");
}