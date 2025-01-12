function describeValue(value: number | string): string {
    if(typeof value === 'number') {
        return 'this is a number'
    } else if(typeof value === 'string'){
        return 'this is a string'
    }
    return 'unknown type'
}

console.log(describeValue(96)); // output should be 'numebr'
console.log(describeValue('hello')); // output should be 'string'

