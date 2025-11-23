interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    constructor(public titulo: string, public conteudo: string) {}

    exibir(): string{
        return `Título: ${this.titulo}\nConteúdo: ${this.conteudo}`;
    }
}

const doc1 = new Texto("Meu Primeiro Documento", "Este é o conteúdo do meu primeiro documento.");
console.log(doc1.exibir());