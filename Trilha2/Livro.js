"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    titulo;
    autor;
    paginas;
    lido;
    constructor(titulo, autor, paginas, lido = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarLidos() {
        if (this.lido) {
            console.log(`O livro "${this.titulo}" já foi marcado como lido.`);
            return;
        }
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
    naoLido() {
        if (!this.lido) {
            console.log(`O livro "${this.titulo}" já está marcado como não lido.`);
            return;
        }
        this.lido = false;
        console.log(`O livro "${this.titulo}" foi marcado como não lido.`);
    }
    exibirDetalhes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Número de páginas: ${this.paginas}`);
        console.log(`Status de leitura: ${this.lido ? "Lido" : "Não lido"}`);
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getPaginas() {
        return this.paginas;
    }
}
const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1200);
const livro2 = new Livro("1984", "George Orwell", 328, true);
const livro3 = new Livro("Dom Casmurro", "Machado de Assis", 256);
livro1.exibirDetalhes();
livro2.exibirDetalhes();
livro3.exibirDetalhes();
//# sourceMappingURL=Livro.js.map