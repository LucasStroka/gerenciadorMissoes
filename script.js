const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}



const arrayMission = [];

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
            case "1":
                addMission()
                break;
            case "2":
                list()
                break;
            case "3":
                edit();
                break;
            case "4":
                
                break;
            case "5":
                
                break;
            case "6":
                
                break;
            case "7":
                
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


async function addMission() {
    console.log(`
        Adicionando uma Missao....
        `);
        
    let nomeMissao = await askQuestion("Insira o Nome da Missão : ")
    let destino = await askQuestion("Insira o Destino da Tripulação : ")
    let prioridade = await askQuestion("insira a Prioridade (1-5) : ")
    let tripulantes = []
    let conditionAddMission = true 
    while (conditionAddMission) {
        console.log("-".repeat(30));
        let tripulante = await askQuestion("Insira o Nome do Tripulante : ")
        tripulantes.push(tripulante)
        console.log("Nome Adicionado com Sucesso.");
        let addMais = await askQuestion("Deseja Inserir Mais Algum Tripulante ? (S/N)")
        if (addMais.toUpperCase() == "S") {
            continue;
        } else {
            console.log("Adicionado todos os tripulantes desejados...");
            conditionAddMission = !true
        }
    }
    let mission = {
        nomeMissao : nomeMissao,
        destino : destino,
        prioridade : prioridade,
        arrayTripulantes : tripulantes,
        stats : "Pendente"
    }
    arrayMission.push(mission)
    console.log("Missão Registrada.");
    startFunction();
}

async function list() {
    console.log("-=".repeat(15));

    if (arrayMission.length == 0) {
        console.log("Não Tem Missões Registradas");
        
    } else {
        for (let i = 0; i < arrayMission.length; i++) {
            console.log(`------------------------
#${i+1}
Nome da Missão: ${arrayMission[i].nomeMissao}
Destino: ${arrayMission[i].destino}
Prioridade: ${arrayMission[i].prioridade}
Status: ${arrayMission[i].stats}`);
                console.log("=-Tripulantes-=");
                
                for (let j = 0; j < arrayMission[i].arrayTripulantes.length; j++) {
                    console.log(`#${j+1} - ${arrayMission[i].arrayTripulantes[j]}`);
                }
        }
    }
    

}

async function edit() {
    list()
    console.log("\n");
    let idEdit = await askQuestion("Qual Missão Você Deseja Editar: ")
    
    let nomeMissao = await askQuestion("Insira o Nome da Missão : ")
    let destino = await askQuestion("Insira o Destino da Tripulação : ")
    let prioridade = await askQuestion("insira a Prioridade (1-5) : ")
    let stats = await askQuestion("Insira o Status da Missão : ")
    let tripulantes = []
    let conditionAddMission = true 
    while (conditionAddMission) {
        console.log("-".repeat(30));
        let tripulante = await askQuestion("Insira o Nome do Tripulante : ")
        tripulantes.push(tripulante)
        console.log("Nome Adicionado com Sucesso.");
        let addMais = await askQuestion("Deseja Inserir Mais Algum Tripulante ? (S/N)")
        if (addMais.toUpperCase() == "S") {
            continue;
        } else {
            console.log("Adicionado todos os tripulantes desejados...");
            conditionAddMission = !true
        }
    }
    let mission = {
        nomeMissao : nomeMissao,
        destino : destino,
        prioridade : prioridade,
        arrayTripulantes : tripulantes,
        stats : stats
    }
    arrayMission[idEdit-1] = mission
    startFunction();
}


startFunction();