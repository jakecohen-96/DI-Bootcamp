function logLength<T extends { length: number}>(input: T): void {
    console.log(input.length);
}

logLength('test')
logLength([1, 2, 3, 4, 5])