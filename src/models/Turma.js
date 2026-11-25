class Turma {
    #id;
    #nome;
    #anoLetivo;
    #alunosDaSala = [];
    static #proximoId = 1; // isso pq pertence à classe e é compartilhado entre suas instâncias.

    constructor(pNome, pAnoLetivo) {
        this.nome = pNome;
        this.anoLetivo = pAnoLetivo;

        this.#id = Turma.#proximoId; //O #id pertence a cada turma individualmente, enquanto #proximoId pertence à classe Turma.
        Turma.#proximoId++;
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

    set nome(pNome){
        if(typeof pNome !=="string" || pNome.trim()===""){
            throw new Error("Erro! Nome da turma inválido.");
        }
        this.#nome = pNome;
    }
    set anoLetivo(pAnoLetivo) {
        if (!Number.isInteger(pAnoLetivo) || (pAnoLetivo < 1990) || (pAnoLetivo > new Date().getFullYear())) {
            throw new Error("Erro! Ano letivo inválido. Tente novamente!\n");
        }
        this.#anoLetivo = pAnoLetivo;
    }

    cadastrarAluno(novoAluno) {
        this.#alunosDaSala.push(novoAluno);
    }



}
module.exports = Turma;