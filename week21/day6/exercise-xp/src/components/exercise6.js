"use strict";
function describeEmployee(employee) {
    if (employee.position === 'manager') {
        return `${employee.name} is a Manager in the ${employee.department} department`;
    }
    else if (employee.position === 'developer') {
        return `${employee.name} is a Developer in the ${employee.department} department`;
    }
    return `${employee.name} works as a ${employee.position} in the ${employee.department} department`;
}
const manager1 = {
    name: "Alice",
    age: 40,
    position: "Manager",
    department: "Sales"
};
const developer1 = {
    name: "Bob",
    age: 25,
    position: "Developer",
    department: "Engineering"
};
const randomEmployee = {
    name: 'Dan',
    age: 30,
    position: 'Rep',
    department: 'HR'
};
console.log(describeEmployee(manager1));
console.log(describeEmployee(developer1));
console.log(describeEmployee(randomEmployee));
