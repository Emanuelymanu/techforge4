"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    produtos = [];
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
    listarProdutos() {
        return this.produtos;
    }
}
const loja = new Loja();
loja.adicionarProduto({ codigo: 101, nome: "Smartphone" });
loja.adicionarProduto({ codigo: 102, nome: "Notebook" });
loja.adicionarProduto({ codigo: 103, nome: "Tablet" });
console.log(loja.buscarProdutoPorCodigo(102));
console.log(loja.buscarProdutoPorCodigo(999));
//# sourceMappingURL=ProdutoLoja.js.map