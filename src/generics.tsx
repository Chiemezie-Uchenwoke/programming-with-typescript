const getRandomElement = <T,>(list: T[]): T => {
    return list[Math.floor(Math.random() * list.length)];
    
}

// In using generics in React using arrow functions, we must use the comma after the type. Ex <T,>