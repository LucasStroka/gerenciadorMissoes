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

const arrayMission = [];

function concluirMissao(){
    if(arrayMission.length == 0){
        console.log('Sem missões para concluir.');
        menu();
    } else {
        for(let i = 0; i < arrayMission.length; i++){
            console.log('========= MISSÕES LISTADAS =========');
            console.log(`${i + 1} - Nome: ${arrayMission.nomeMissao}, Destino: ${arrayMission.destino}, Prioridade: ${arrayMission.prioridade}, Tripulantes: ${arrayMission.arrayTripulantes}, Status: ${arrayMission.stats}`);
        }
        rl.question('Escreva o número da missão que você quer concluir: ', (input) => {
            const index = parseInt(input) - 1;
            if(isNaN(index) || index < 0 || index > arrayMission.length){
                console.log('Opcao invalida!!');
                menu();
            } else {
                arrayMission[index].stats = 'concluida';
                console.log('Missao concluida com sucesso!!');
                menu();
            }
        });
    }
}