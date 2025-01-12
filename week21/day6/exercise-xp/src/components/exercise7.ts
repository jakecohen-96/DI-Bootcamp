function formatInput<T extends { toString(): string }>(input: T): string {
    const formatInput = (input.toString() as string)
    return formatInput
}

const numberInput = 123456
const stringInput = 'hello'