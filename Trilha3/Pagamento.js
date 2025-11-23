"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
    processar() {
    }
}
class PagamentoCartao extends Pagamento {
    numeroCartao;
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarCartao() {
        return this.numeroCartao.length === 16;
    }
    processar() {
        if (this.validarCartao()) {
            console.log("Pagamento com o cartão" + this.numeroCartao.slice(-4) + "processado");
        }
        else {
            console.log("Número de cartão inválido. Pagamento não processado.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto() {
        const randomNum = Math.floor(Math.random() * 90000) + 10000;
        return `23793.38128 60000.123456 25000.123456 8 93420000${randomNum}`;
    }
    processar() {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado: ${codigo}`);
    }
}
function processarPagamentos(pagamentos) {
    pagamentos.forEach(pagamento => {
        pagamento.processar();
    });
}
const pagamentos = [
    new PagamentoCartao("1234567812345678"),
    new PagamentoBoleto(),
    new PagamentoCartao("1234")
];
processarPagamentos(pagamentos);
//# sourceMappingURL=Pagamento.js.map