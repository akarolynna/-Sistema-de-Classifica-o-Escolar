const Turma = require('../models/Turma.js');
const prompt = require('prompt-sync')();

function pedirDadosTurma() {

    let turmaInformacoes = prompt("Digite os dados da turma ( Nome | Ano Letivo): ").split('|');
    let turmaNome = turmaInformacoes[0];
    let turmaAnoLetivo = parseInt(turmaInformacoes[1]);

    return {
        nome: turmaNome,
        anoLetivo: turmaAnoLetivo
    };
}

function criarTurma(turmaService) {
    // console.log("Iniciando cadastro...");
    try {
        const dadosTurma = pedirDadosTurma();
        const turma = new Turma(dadosTurma.nome, dadosTurma.anoLetivo);
        turmaService.cadastrarTurma(turma);
        console.log("Turma cadastrada com sucesso!\n"); //melhorar futuramente para ago mais robusto
        return turma;
    } catch (error) {
        console.log(`Erro ao cadastrar turma: ${error.message}`);
        return null;
    }
}

module.exports = { pedirDadosTurma, criarTurma };

