class Produto{
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValor(): number{
        return this.preco * this.quantidade;
    }
     exibirDetalhe(): void{
        console.log(`Nome do Produto: ${this.nome}`);
        console.log(`Preço Unitário: R$${this.preco.toFixed(2)}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor Total: R$${this.calcularValor().toFixed(2)}`);
    }
     
    getNome(): string{
        return this.nome;
    }

    getPreco(): number{
        return this.preco;
    }

    getQuantidade(): number{
        return this.quantidade;
    }
}

const produto = new Produto("Celular", 1200.00, 3);
produto.exibirDetalhe();