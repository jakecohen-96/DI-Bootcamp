function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}

const numberValue = 33;
const stringValue = 'test';
const booleanValue = false;

console.log(validateUnionType(numberValue, ['number', 'string']));
console.log(validateUnionType(stringValue, ['number', 'string']));
console.log(validateUnionType(booleanValue, ['number', 'string']));

console.log(validateUnionType(booleanValue, ['boolean']));
console.log(validateUnionType(stringValue, ['boolean', 'object']));


