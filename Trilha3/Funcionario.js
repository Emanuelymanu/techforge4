"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    _nome;
    _salario;
    constructor(_nome, _salario) {
        this._nome = _nome;
        this._salario = _salario;
    }
    get nome() {
        return this._nome;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.salario * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
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
const funcionarios = [
    new Gerente("Carlos Silva", 8000),
    new Operario("João Santos", 3000),
    new Gerente("Maria Oliveira", 9500),
    new Operario("Pedro Costa", 2500)
];
calcularSalarioComBonus(funcionarios);
//# sourceMappingURL=Funcionario.js.map