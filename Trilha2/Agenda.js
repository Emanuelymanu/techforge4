"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agenda {
    compromissos;
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromissos) {
        this.compromissos.push(compromissos);
        console.log("compromisso adicionado: " + compromissos);
    }
    listarCompromissos() {
        if (this.compromissos.length === 0) {
            console.log("nenhum compromisso agendado!");
            return;
        }
    }
}
const minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião com cliente - 10:00");
minhaAgenda.adicionarCompromisso("Almoço de negócios");
minhaAgenda.listarCompromissos();
//# sourceMappingURL=Agenda.js.map