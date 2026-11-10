const prompt = require('prompt-sync')();

function pedirDadosTurma(){
    
    let turmaInformacoes = prompt("Digite os dados da turma ( Nome | Ano Letivo): ").split('|');
    let turmaNome = turmaInformacoes[0];
    let turmaAnoLetivo = parseInt(turmaInformacoes[1]);

    return{
        nome: turmaNome,
        anoLetivo: turmaAnoLetivo
    };
}
module.exports = { pedirDadosTurma };