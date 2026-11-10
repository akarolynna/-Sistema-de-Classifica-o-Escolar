class Turma{
    #nome;
    #anoLetivo; 
    #alunosDaSala = [];

    constructor(pNome, pAnoLetivo){
        this.#nome = pNome;
        this.#anoLetivo = pAnoLetivo;
    }

    get nome(){
        return this.#nome;
    }

    get anoLetivo(){
        return this.#anoLetivo;
    }

    get alunosDaSala(){
        return [...this.#alunosDaSala]; 
    }
    
    cadastrarAluno(novoAluno) {
        this.#alunosDaSala.push(novoAluno);
    }


}
module.exports = Turma;