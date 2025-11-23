class Temperatura{
    private celsius: number;

    constructor(celsius: number){
        this.celsius= celsius;
    }
    temperaturaCelsius(){
        return this.celsius;
    }

    calcularFahrenheit(celsius:number): number{
        return (this.celsius * 9/5 ) + 32;
    }

    calcularKelvin(celcius:number): number{
        return this.celsius + 273.15;
    }
}

const minhaPesquisa = new Temperatura(25);
console.log("A temperatura " + minhaPesquisa.temperaturaCelsius() + "C° convertido em Fahrenheit " + minhaPesquisa.calcularFahrenheit + "°F e convertido em kelvin " + minhaPesquisa.calcularKelvin + "K");