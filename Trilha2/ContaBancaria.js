"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    _titular;
    _saldo;
    constructor(_titular, _saldo = 0) {
        this._titular = _titular;
        this._saldo = _saldo;
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this._saldo.toFixed(2)}`);
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (valor > this._saldo) {
            console.log("Saldo insuficiente para o saque.");
            return;
        }
        this._saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this._saldo.toFixed(2)}`);
    }
    get titular() {
        return this._titular;
    }
    get saldo() {
        return this._saldo;
    }
}
const conta = new ContaBancaria("João Silva", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(`Saldo final de ${conta.titular}: R$${conta.saldo.toFixed(2)}`);
//# sourceMappingURL=ContaBancaria.js.map