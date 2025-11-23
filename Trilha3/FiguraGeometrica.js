"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    raio;
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}
class Quadrado extends FiguraGeometrica {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
}
class Triangulo extends FiguraGeometrica {
    base;
    altura;
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach(figura => {
        const area = figura.calcularArea();
        console.log(`Área do ${figura.constructor.name}: ${area.toFixed(2)}`);
    });
}
const figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];
imprimirAreas(figuras);
//# sourceMappingURL=FiguraGeometrica.js.map