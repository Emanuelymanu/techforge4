"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    energia = 100;
    constructor(nome) {
        this.nome = nome;
    }
    statusEnergia() {
        return `${this.nome} - Energia: ${this.energia}`;
    }
    getEnergia() {
        return this.energia;
    }
    setEnergia(valor) {
        this.energia = Math.max(0, Math.min(valor, 100)); // Limita entre 0 e 100
    }
}
class Leao extends Animal {
    comer() {
        const energiaAtual = this.getEnergia();
        if (energiaAtual >= 20) {
            this.setEnergia(energiaAtual - 20); // Gasta energia para caçar
            this.setEnergia(this.getEnergia() + 40); // Recupera mais energia
            console.log(`${this.nome} caçou e se alimentou!`);
        }
        else {
            console.log(`${this.nome} está com pouca energia para caçar!`);
        }
    }
}
class Passaro extends Animal {
    comer() {
        const energiaAtual = this.getEnergia();
        this.setEnergia(energiaAtual + 15);
        console.log(`${this.nome} se alimentou!`);
    }
}
const animais = [
    new Leao("Simba"),
    new Passaro("Piu-Piu"),
    new Leao("Scar")
];
animais.forEach(animal => {
    console.log(animal.statusEnergia());
    animal.comer();
    console.log(animal.statusEnergia());
    console.log("-".repeat(20));
});
//# sourceMappingURL=Animal.js.map