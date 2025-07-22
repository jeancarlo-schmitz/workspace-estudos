interface Id {
    id: number;
}

interface IdComDatas extends Id{
    criadoEm: string;
    atualizadoEm: string;
    deleteadoEm?: string
}

class Cliente implements IdComDatas {
    id!: number;
    nome!: string;
    criadoEm!: string;
    atualizadoEm!: string;
}

const cliente1: Cliente = {
    id: 123,
    nome: "Teste",
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
}
console.log(cliente1);

interface Vendavel {
    preco: number;
    desconto: number;
}

class Produto implements IdComDatas, Vendavel {
    id!: number;
    criadoEm!: string;
    atualizadoEm!: string;
    deleteadoEm?: string;
    preco!: number;
    desconto!: number;
}
