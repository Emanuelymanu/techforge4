abstract class Funcionario {
    constructor(
        private _nome: string,
        private _salario: number
    ) {}

    abstract calcularBonus(): number;

    get nome(): string {
        return this._nome;
    }

    get salario(): number {
        return this._salario;
    }

    set salario(salario: number) {
        this._salario = salario;
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.salario + bonus;
        console.log(`${funcionario.nome} (${funcionario.constructor.name}):`);
        console.log(`  Salário base: R$ ${funcionario.salario.toFixed(2)}`);
        console.log(`  Bônus: R$ ${bonus.toFixed(2)}`);
        console.log(`  Salário final: R$ ${salarioFinal.toFixed(2)}`);
        console.log("-".repeat(40));
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Carlos Silva", 8000),
    new Operario("João Santos", 3000),
    new Gerente("Maria Oliveira", 9500),
    new Operario("Pedro Costa", 2500)
];

calcularSalarioComBonus(funcionarios);