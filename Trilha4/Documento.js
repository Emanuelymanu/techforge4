"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Texto {
    titulo;
    conteudo;
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}\nConteúdo: ${this.conteudo}`;
    }
}
const doc1 = new Texto("Meu Primeiro Documento", "Este é o conteúdo do meu primeiro documento.");
console.log(doc1.exibir());
//# sourceMappingURL=Documento.js.map