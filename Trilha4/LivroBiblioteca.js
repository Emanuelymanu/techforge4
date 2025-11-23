"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BibliotecaGestao {
    livros = [];
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
    buscarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor.toLowerCase().includes(autor.toLowerCase()));
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
    listarTodosLivros() {
        return this.livros;
    }
}
const bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivro({
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: "Romance",
    disponivel: true
});
bibliotecaGestao.adicionarLivro({
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficção Científica",
    disponivel: false
});
bibliotecaGestao.adicionarLivro({
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    genero: "Infantil",
    disponivel: true
});
bibliotecaGestao.adicionarLivro({
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    genero: "Sátira",
    disponivel: true
});
bibliotecaGestao.adicionarLivro({
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    genero: "Romance",
    disponivel: false
});
console.log("Todos os livros:");
console.log(bibliotecaGestao.listarTodosLivros());
console.log("\nLivros do gênero Romance:");
console.log(bibliotecaGestao.filtrarPorGenero("Romance"));
console.log("\nLivros do autor George Orwell:");
console.log(bibliotecaGestao.buscarPorAutor("Orwell"));
console.log("\nLivros disponíveis ordenados:");
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());
//# sourceMappingURL=LivroBiblioteca.js.map