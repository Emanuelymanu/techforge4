class Livro{
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarLidos():void{
        if(this.lido){
            console.log(
                `O livro "${this.titulo}" já foi marcado como lido.` );
                return;
        }
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }

    naoLido(): void{
        if(!this.lido){
            console.log(`O livro "${this.titulo}" já está marcado como não lido.`);
            return;
        }
        this.lido = false;
        console.log(`O livro "${this.titulo}" foi marcado como não lido.`);
    }
    exibirDetalhes(): void{
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Número de páginas: ${this.paginas}`);
        console.log(`Status de leitura: ${this.lido ? "Lido" : "Não lido"}`);
    }
    getTitulo(): string{
        return this.titulo;
    }
    getAutor(): string{
        return this.autor;
    }
    getPaginas(): number{
        return this.paginas;
    }

}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1200);
const livro2 = new Livro("1984", "George Orwell", 328, true);
const livro3 = new Livro("Dom Casmurro", "Machado de Assis", 256);

livro1.exibirDetalhes();
livro2.exibirDetalhes();
livro3.exibirDetalhes();