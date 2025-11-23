"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VoteSystem {
}
class Election extends VoteSystem {
    votes = new Map();
    voteFor(candidate) {
        const currentVotes = this.votes.get(candidate) || 0;
        this.votes.set(candidate, currentVotes + 1);
    }
    getResults() {
        const result = {};
        this.votes.forEach((votes, candidate) => {
            result[candidate] = votes;
        });
        return result;
    }
}
class Poll extends VoteSystem {
    votes = new Map();
    voteFor(candidate) {
        const currentVotes = this.votes.get(candidate) || 0;
        this.votes.set(candidate, currentVotes + 1);
    }
    getResults() {
        return Array.from(this.votes.entries())
            .map(([candidate, votes]) => ({ candidate, votes }))
            .sort((a, b) => b.votes - a.votes);
    }
}
const eleicao = new Election();
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato C");
const enquete = new Poll();
enquete.voteFor("Opção X");
enquete.voteFor("Opção Y");
enquete.voteFor("Opção X");
enquete.voteFor("Opção X");
enquete.voteFor("Opção Z");
enquete.voteFor("Opção Y");
console.log("Resultados da Eleição:", eleicao.getResults());
console.log("Resultados da Enquete (ordenados):", enquete.getResults());
//# sourceMappingURL=VoteSystem.js.map