const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

let mission = {
    nomeMissao : " ",
    destino : " ",
    prioridade : 0,
    arrayTripulantes : [],
    stats : " "
}

function listar(){
    if(arrayMission.length == 0){
        console.log('Sem missões para concluir.');
        menu();
    } else {
        for(let i = 0; i < arrayMission.length; i++){
            console.log('========= MISSÕES LISTADAS =========');
            console.log(`${i + 1} - Nome: ${arrayMission.nomeMissao}, Destino: ${arrayMission.destino}, Prioridade: ${arrayMission.prioridade}, Tripulantes: ${arrayMission.arrayTripulantes}, Status: ${arrayMission.stats}`);
        }
        console.log('Digite ENTER para retornar ao menu.');
        rl.question('', startFunction);
    }
}