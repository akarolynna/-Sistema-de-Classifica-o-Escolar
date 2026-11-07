class Aluno {
    matricula;
    nome;
    notaProva1;
    notaProva2;
    notaTrabalho;

    constructor(pMatricula, pNome, pNotaProva1, pNotaProva2, pNotaTrabalho) {
        this.matricula = pMatricula;
        this.nome = pNome;
        this.notaProva1 = pNotaProva1;
        this.notaProva2 = pNotaProva2;
        this.notaTrabalho = pNotaTrabalho;
    }

    calcularMedia() {
        let media = ((this.notaProva1 * 2.5) + (this.notaProva2 * 2.5) + (this.notaTrabalho * 1)) / (1 + 2.5 + 2.5);
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
        dados += `Matricula: ${this.matricula}\n`;
        dados += `Nome: ${this.nome}\n`;
        return dados;
    }
}

module.exports = Aluno;


