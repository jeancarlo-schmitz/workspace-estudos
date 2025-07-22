//nome, preco, desconto (0-1), fução PrecoComDesconto
export interface Produto {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: () => number;
};

const produto: Produto = {
  nome: "Caneta Azul",
  preco: 2.5,
  desconto: 0.1,
  precoComDesconto: function() {
    return this.preco - (this.preco * this.desconto);
  }
};

console.log(produto.nome); // Caneta Azul
console.log(produto.preco); // 2.5
console.log(produto.desconto); // 0.1
console.log(produto.precoComDesconto()); // 2.25