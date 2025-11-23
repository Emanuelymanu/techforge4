class Pagamento{
    processar(): void{

    }
}

class PagamentoCartao extends Pagamento{
    constructor(private numeroCartao: string){
        super();
    }
    private validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if(this.validarCartao()){
            console.log("Pagamento com o cartão" + this.numeroCartao.slice(-4) + "processado");
        }else{
            console.log("Número de cartão inválido. Pagamento não processado.");
        }
    }
}

class PagamentoBoleto extends Pagamento{
   private gerarCodigoBoleto(): string {
        const randomNum = Math.floor(Math.random() * 90000) + 10000;
        return `23793.38128 60000.123456 25000.123456 8 93420000${randomNum}`;
    }

      processar(): void {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado: ${codigo}`);
    }
}   

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => {
        pagamento.processar();
    });
}

const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567812345678"),
    new PagamentoBoleto(),
    new PagamentoCartao("1234")
];
processarPagamentos(pagamentos);