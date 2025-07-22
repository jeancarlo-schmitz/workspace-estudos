import { multiplicar, saudacao } from '../../src/tipos/funcoes';


describe('Funções', () => {
    test('deve retornar uma saudação com o nome fornecido', () => {
        const resultado = saudacao("João");
        expect(resultado).toBe("Olá, João!");
    });

    test('deve retornar uma saudação com o nome vazio', () => {
        const resultado = saudacao("");
        expect(resultado).toBe("Olá, !");
    });

    test('deve retornar o produto de dois números', () => {
        const resultado = multiplicar(2, 3);
        expect(resultado).toBe(6);
    });

});