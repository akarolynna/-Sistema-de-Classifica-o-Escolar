class Aluno {
    #matricula;
    #nome;
    #notaProva1;
    #notaProva2;
    #notaTrabalho;

    constructor(pMatricula, pNome, pNotaProva1, pNotaProva2, pNotaTrabalho) {
        this.#matricula = pMatricula;
        this.#nome = pNome;
        this.notaProva1 = pNotaProva1;
        this.notaProva2 = pNotaProva2;
        this.notaTrabalho = pNotaTrabalho;
    }

    set notaProva1(pNotaProva1) {
        if (!Number.isFinite(pNotaProva1) || (pNotaProva1 < 0) || (pNotaProva1 > 10)) {
            throw new Error("A nota da Prova 1 deve estar entre 0 e 10! "); //Este carinha para a execução na hora! Então se ele não passar aqui ele nem roda o   this.#notaProva1 = pNotaProva1; mesmo este estando fora do IF

        }
        this.#notaProva1 = pNotaProva1;
    }

    set notaProva2(pNotaProva2) {
        if (!Number.isFinite(pNotaProva2) || (pNotaProva2 < 0) || (pNotaProva2 > 10)) {
            throw new Error("A nota da Prova 2 deve estar entre 0 e 10! ");

        }
        this.#notaProva2 = pNotaProva2;
    }

    set notaTrabalho(pNotaTrabalho) {
        if (!Number.isFinite(pNotaTrabalho) || (pNotaTrabalho < 0) || (pNotaTrabalho > 10)) {
            throw new Error("A nota do Trabalho deve estar entre 0 e 10!");

        }
        this.#notaTrabalho = pNotaTrabalho;
    }

    get matricula() {
        return this.#matricula;
    }
    get nome() {
        return this.#nome;
    }
    get notaProva1() {
        return this.#notaProva1;
    }
    get notaProva2() {
        return this.#notaProva2;
    }
    get notaTrabalho() {
        return this.#notaTrabalho;
    }




    calcularMedia() {
        let media = ((this.#notaProva1 * 2.5) + (this.#notaProva2 * 2.5) + (this.#notaTrabalho * 1)) / (1 + 2.5 + 2.5);
        return media;
    }
    notaParaProvaFinal() {
        let media = this.calcularMedia();
        let notaNecessariaVS = 0;
        if (media < 6) {
            notaNecessariaVS = (50 - media * 6) / 4;
        }

        return notaNecessariaVS;
    }

    toString() {
        let dados = `\n = = = = = Sistema de Classificação = = = = = \n\n`;
        dados += `Matricula: ${this.#matricula}\n`;
        dados += `Nome: ${this.#nome}\n`;
        return dados;
    }
}

module.exports = Aluno;


