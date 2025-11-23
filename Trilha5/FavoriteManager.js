"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteManager {
}
class MoviesFavoriteManager extends FavoriteManager {
    favorites = new Set();
    addFavorite(movie) {
        if (this.favorites.has(movie)) {
            console.log(`Filme "${movie}" já está nos favoritos`);
            return;
        }
        this.favorites.add(movie);
    }
    getFavorites() {
        return Array.from(this.favorites).sort();
    }
}
class BooksFavoriteManager extends FavoriteManager {
    favorites = [];
    addFavorite(book) {
        this.favorites = this.favorites.filter(b => b !== book);
        this.favorites.unshift(book);
    }
    getFavorites() {
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
//# sourceMappingURL=FavoriteManager.js.map