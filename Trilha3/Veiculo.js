"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    mover() {
        console.log("o veículo está se movendo");
    }
}
class Carro extends Veiculo {
    mover() {
        console.log("o carro está dirigindo");
    }
}
class Bicicleta extends Veiculo {
    mover() {
        console.log("a bicleta está pedalando");
    }
}
const carro = new Carro();
const bike = new Bicicleta();
carro.mover();
bike.mover();
//# sourceMappingURL=Veiculo.js.map