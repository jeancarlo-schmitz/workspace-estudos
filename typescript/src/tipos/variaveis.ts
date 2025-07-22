let nome: string = "João";
let idade: number = 30;
// nome = 123; // Erro: Type 'number' is not assignable to type 'string'.
let ativo: boolean = true;
let salario: number = 2500.50;
let dataNascimento: Date = new Date("1993-05-15");
let habilidades: string[] = ["JavaScript", "TypeScript", "Node.js"];
let endereco: { rua: string; numero: number } = {
  rua: "Rua Exemplo",
  numero: 123
};

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Ativo: ${ativo}`);
console.log(`Salário: ${salario}`);
console.log(`Data de Nascimento: ${dataNascimento}`);
console.log(`Habilidades: ${habilidades.join(", ")}`);
console.log(`Endereço: ${endereco.rua}, ${endereco.numero}`);