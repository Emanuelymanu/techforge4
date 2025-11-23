"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemLoja {
    id;
    nome;
    preco;
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
const produto1 = new ItemLoja(1, "Camiseta", 49.99);
const produto2 = new ItemLoja(2, "Calça Jeans", 89.99);
const produto3 = new ItemLoja(3, "Tênis Esportivo", 129.99);
console.log(produto1);
console.log(produto2);
console.log(produto3);
//# sourceMappingURL=Produto.js.map