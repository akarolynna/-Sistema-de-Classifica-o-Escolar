class Turma {
    #id;
    #nome;
    #anoLetivo;
    #alunosDaSala = [];
    static #proximoId = 1; // isso pq pertence à classe e é compartilhado entre suas instâncias.

    constructor(pNome, pAnoLetivo) {
        this.#nome = pNome;
        this.anoLetivo = pAnoLetivo;

        this.#id = Turma.#proximoId; //O #id pertence a cada turma individualmente, enquanto #proximoId pertence à classe Turma.
        Turma.#proximoId++;
    }

    set anoLetivo(pAnoLetivo) {
        if (!Number.isInteger(pAnoLetivo) || (pAnoLetivo < 1990) || (pAnoLetivo > new Date().getFullYear())) {
            throw new Error("Erro! Ano letivo inválido. Tente novamente!\n");
        }
        this.#anoLetivo = pAnoLetivo;
    }

    get nome() {
        return this.#nome;
    }

    get anoLetivo() {
        return this.#anoLetivo;
    }

    get alunosDaSala() {
        return [...this.#alunosDaSala];
    }

    get id() {
        return this.#id;
    }

    cadastrarAluno(novoAluno) {
        this.#alunosDaSala.push(novoAluno);
    }



}
module.exports = Turma;