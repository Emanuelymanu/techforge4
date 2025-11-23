abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set();

    addFavorite(movie: string): void {
        if (this.favorites.has(movie)) {
            console.log(`Filme "${movie}" já está nos favoritos`);
            return;
        }
        this.favorites.add(movie);
    }

    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(book: string): void {
       
        this.favorites = this.favorites.filter(b => b !== book);
       
        this.favorites.unshift(book);
    }

    getFavorites(): string[] {
        return [...this.favorites]; 
    }
}

// Testando
const filmesFavoritos = new MoviesFavoriteManager();
filmesFavoritos.addFavorite("O Poderoso Chefão");
filmesFavoritos.addFavorite("Matrix");
filmesFavoritos.addFavorite("Clube da Luta");
filmesFavoritos.addFavorite("Matrix"); 

const livrosFavoritos = new BooksFavoriteManager();
livrosFavoritos.addFavorite("1984");
livrosFavoritos.addFavorite("Dom Casmurro");
livrosFavoritos.addFavorite("O Pequeno Príncipe");
livrosFavoritos.addFavorite("1984"); 

console.log("Filmes Favoritos (ordenados):", filmesFavoritos.getFavorites());
console.log("Livros Favoritos (mais recente primeiro):", livrosFavoritos.getFavorites());