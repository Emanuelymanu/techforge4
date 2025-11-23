abstract class Animal {
    private energia: number = 100;

    constructor(protected nome: string) {}

    abstract comer(): void;

    statusEnergia(): string {
        return `${this.nome} - Energia: ${this.energia}`;
    }

    protected getEnergia(): number {
        return this.energia;
    }

    protected setEnergia(valor: number): void {
        this.energia = Math.max(0, Math.min(valor, 100)); // Limita entre 0 e 100
    }
}

class Leao extends Animal {
    comer(): void {
        const energiaAtual = this.getEnergia();
        if (energiaAtual >= 20) {
            this.setEnergia(energiaAtual - 20); // Gasta energia para caçar
            this.setEnergia(this.getEnergia() + 40); // Recupera mais energia
            console.log(`${this.nome} caçou e se alimentou!`);
        } else {
            console.log(`${this.nome} está com pouca energia para caçar!`);
        }
    }
}

class Passaro extends Animal {
    comer(): void {
        const energiaAtual = this.getEnergia();
        this.setEnergia(energiaAtual + 15);
        console.log(`${this.nome} se alimentou!`);
    }
}


const animais: Animal[] = [
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