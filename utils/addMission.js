const {askQuestion} = require("./askQuestion");
const arrayMission = require("../data/arrayMission");
const startFunction = require("../script");

async function addMission() {
    console.log("\nAdicionando uma Missão....\n");

    let nomeMissao = await askQuestion("Insira o Nome da Missão: ");
    let destino = await askQuestion("Insira o Destino da Tripulação: ");
    let prioridade = await askQuestion("Insira a Prioridade (1-5): ");

    let tripulantes = [];
    let conditionAddMission = true;

    while (conditionAddMission) {
        console.log("-".repeat(30));
        let tripulante = await askQuestion("Insira o Nome do Tripulante: ");
        tripulantes.push(tripulante);
        console.log("Nome Adicionado com Sucesso.");

        let addMais = await askQuestion("Deseja Inserir Mais Algum Tripulante? (S/N): ");
        if (addMais.toUpperCase() !== "S") {
            console.log("Adicionado todos os tripulantes desejados...");
            conditionAddMission = false;
        }
    }

    const mission = {
        nomeMissao,
        destino,
        prioridade,
        arrayTripulantes: tripulantes,
        stats: "Pendente"
    };
    arrayMission.push(mission)
    console.log("Missão Registrada.");
    startFunction
}

module.exports = addMission;
