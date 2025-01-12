function getFirstElement(array: (number | string)[]): string {
    return array[0] as string // asserting that the first element in the array has to be a string
}

const mixedArray1 = [42, 'hello', 233] // output is '42'
const mixedArray2 = ['first', 5, 3] // output is 'first'