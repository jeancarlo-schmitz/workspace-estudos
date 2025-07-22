let hobies: string[] = ["Ler", "Escrever", "Programar"];
let numeros: number[] = [1, 2, 3, 4, 5];
let booleanos: boolean[] = [true, false, true];
let misto: (string | number | boolean)[] = ["Texto", 42, true, "Outro Texto", 100]; // Usando a sintaxe alternativa
let misto2: Array<string | number | boolean> = ["Texto", 42, true, "Outro Texto", 100]; // Usando a sintaxe alternativa
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let mistoMatriz: (string | number | boolean)[][] = [
  ["Texto", 42, true],
  [100, "Outro Texto", false],
  [1, 2, 3]
];

console.log("Hobbies:", hobies);
console.log("Números:", numeros);
console.log("Booleanos:", booleanos);
console.log("Misto:", misto);
console.log("Misto2:", misto2);
console.log("Matriz:", matriz);
console.log("MistoMatriz:", mistoMatriz);