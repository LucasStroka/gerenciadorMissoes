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

function listarTripulantes(){
    for(let i = 0; i < arrayMission.length; i++){
        console.log('========= TRIPULANTES EM CADA MISSAO =========');
        console.log(`${i + 1}.\nNome da Missao: ${arrayMission.nomeMissao}\nTripulantes: ${arrayMission.arrayTripulantes}\n\n`);
    }
    console.log('Digite ENTER para retornar ao menu.');
    rl.question('', startFunction);
}