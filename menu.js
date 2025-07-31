const { rl, askQuestion } = require("./readline");

const addMission = require("./addMission");
const list = require("./listMissions");
const concludeMission = require("./concludeMission");
const listarTripulantes = require("./tripulantes");
const filtrarPrioridade = require("./filtrar");
const Ranking = require("./ranking");
const edit = require('./edit')


let cond = true;
async function startFunction(params) {
    while (cond) {
        let menu = await askQuestion(`
                Menu de Opções
            1 - Adicionar Missão
            2 - Listar Missões
            3 - Editar Missões
            4 - Marcar Como Concluida
            5 - Filtrar por Prioridade
            6 - Ranking de Destinos
            7 - Listar Tripulantes
            8 - Sair 
            `)

        switch (menu) {
            case "1": await addMission()
                break;
            case "2": await list()
                break;
            case "3": await edit();
                break;
            case "4": await concludeMission();
                break;
            case "5": await filtrarPrioridade() 
                break;
            case "6": await Ranking();
                break;
            case "7": await listarTripulantes();
                break;
            case "8":
                console.log("Saindo...");
                cond = !true
                rl.close();
                break;
            default:
                break;
        }
    }
}

startFunction();