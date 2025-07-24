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

const arrayMission = []



