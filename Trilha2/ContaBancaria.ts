class ContaBancaria {
    constructor(
        private _titular: string,
        private _saldo: number = 0) { }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this._saldo.toFixed(2)}`);
    }

    sacar(valor: number): void {
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

    public get titular(): string {
        return this._titular;
    }
    public get saldo(): number {
        return this._saldo;
    }
}

const conta = new ContaBancaria("João Silva", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(`Saldo final de ${conta.titular}: R$${conta.saldo.toFixed(2)}`);