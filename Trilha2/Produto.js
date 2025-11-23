"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    preco;
    quantidade;
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValor() {
        return this.preco * this.quantidade;
    }
    exibirDetalhe() {
        console.log(`Nome do Produto: ${this.nome}`);
        console.log(`Preço Unitário: R$${this.preco.toFixed(2)}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor Total: R$${this.calcularValor().toFixed(2)}`);
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    getQuantidade() {
        return this.quantidade;
    }
}
const produto = new Produto("Celular", 1200.00, 3);
produto.exibirDetalhe();
//# sourceMappingURL=Produto.js.map