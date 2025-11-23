"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Temperatura {
    celsius;
    constructor(celsius) {
        this.celsius = celsius;
    }
    temperaturaCelsius() {
        return this.celsius;
    }
    calcularFahrenheit(celsius) {
        return (this.celsius * 9 / 5) + 32;
    }
    calcularKelvin(celcius) {
        return this.celsius + 273.15;
    }
}
const minhaPesquisa = new Temperatura(25);
console.log("A temperatura " + minhaPesquisa.temperaturaCelsius() + "C° convertido em Fahrenheit " + minhaPesquisa.calcularFahrenheit + "°F e convertido em kelvin " + minhaPesquisa.calcularKelvin + "K");
//# sourceMappingURL=Temperatura.js.map