class Aluno {
    #matricula;
    #nome;
    #notaProva1;
    #notaProva2;
    #notaTrabalho;

    constructor(pMatricula, pNome, pNotaProva1, pNotaProva2, pNotaTrabalho) {
        this.matricula = pMatricula;
        this.nome = pNome;
        this.notaProva1 = pNotaProva1;
        this.notaProva2 = pNotaProva2;
        this.notaTrabalho = pNotaTrabalho;
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

    set matricula(pMatricula){
        // if( pMatricula.length !== 12 || typeof pMatricula !== "string" || pMatricula.trim() ===""){
        /*
        ^: Lê o início da string
        [0-9]: Permite apenas números de 0 a 9
        {12}: Exige exatamente 12 dígitos
        $: Final da string
        .test(): verifica se o valor corresponde ao padrão | é um método padrão nativo do JS.
        !: nega o resultado da validação. 
        */

        if (typeof pMatricula !== "string" || !/^[0-9]{12}$/.test(pMatricula)) { 
            throw new Error("Erro! Matricula inválida.");
        }
        this.#matricula = pMatricula;
    }

    set nome(pNome) {
        if (typeof pNome !== "string" || pNome.trim() === "") {
            throw new Error("Erro! Nome do aluno inválido.");
        }
        this.#nome = pNome;
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


