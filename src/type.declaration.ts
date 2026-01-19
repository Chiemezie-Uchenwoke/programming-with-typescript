function getArray<T>(input: T): T[] {
    return [input];
}

const result = getArray<string>("john");
console.log(result);