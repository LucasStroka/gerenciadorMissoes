const addMission = require("./utils/addMission")
const {askQuestion, rl} = require("./utils/askQuestion")
const list = require("./utils/list")
const edit = require("./utils/edit")
const ranking = require("./utils/ranking") 
const concludeMission = require("./utils/concludeMission")
const filtrarPrioridade = require("./utils/filtProp")
const listarTripulantes = require("./utils/listEmployee")

let cond = !false;

async function startFunction() {
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
    
        switch (menu.trim()) {
            case "1": await addMission(); break;
            case "2": await list(); break;
            case "3": await edit(); break;
            case "4": await concludeMission(); break;
            case "5": await filtrarPrioridade(); break;
            case "6": await ranking(); break;
            case "7": await listarTripulantes(); break;
            case "8":
                console.log("Saindo...");
                cond = false;
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
        }
    }
}
startFunction();
module.exports = startFunction;