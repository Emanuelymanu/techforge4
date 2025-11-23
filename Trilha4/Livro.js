"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    livros = [];
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
    listarTodosLivros() {
        return this.livros;
    }
}
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    disponivel: true
});
biblioteca.adicionarLivro({
    titulo: "1984",
    autor: "George Orwell",
    disponivel: false
});
biblioteca.adicionarLivro({
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    disponivel: true
});
console.log("Todos os livros:");
console.log(biblioteca.listarTodosLivros());
console.log("\nLivros disponíveis:");
console.log(biblioteca.buscarLivrosDisponiveis());
//# sourceMappingURL=Livro.js.map