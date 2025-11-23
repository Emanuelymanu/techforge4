class Veiculo{
    mover(): void{
        console.log("o veículo está se movendo");
    }
}

class Carro extends Veiculo{
    mover(): void{
        console.log("o carro está dirigindo");
    }
}

class Bicicleta extends Veiculo{
    mover():void{
        console.log("a bicleta está pedalando");
    }
}

const carro = new Carro();
const bike = new Bicicleta();

carro.mover();
bike.mover();