let operacao: () => void = () => { };
let operacao2: (a: number, b: number) => number = (a, b) => a + b;

console.log(operacao); // function
console.log(operacao2(2, 3)); // 5