interface Produto{
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto{
    constructor(
        public id: number,
        public nome: string,
        public preco: number
    ){}
}

const produto1 = new ItemLoja(1, "Camiseta", 49.99);
const produto2 = new ItemLoja(2, "Calça Jeans", 89.99);
const produto3 = new ItemLoja(3, "Tênis Esportivo", 129.99);

console.log(produto1);
console.log(produto2);
console.log(produto3);  