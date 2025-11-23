interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }

    listarTodosLivros(): Livro[] {
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