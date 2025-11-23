interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[] = [];

    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }

    listarProdutos(): ProdutoLoja[] {
        return this.produtos;
    }
}

const loja = new Loja();
loja.adicionarProduto({ codigo: 101, nome: "Smartphone" });
loja.adicionarProduto({ codigo: 102, nome: "Notebook" });
loja.adicionarProduto({ codigo: 103, nome: "Tablet" });

console.log(loja.buscarProdutoPorCodigo(102));
console.log(loja.buscarProdutoPorCodigo(999)); 