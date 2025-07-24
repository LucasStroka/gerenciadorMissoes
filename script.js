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

RankingDestinos()
function RankingDestinos(){
    if (arrayMission === 0){
        console.log("Nenhuma missão em andamento. \nPrecione ENTER para voltar...")
        rl.question('', MenuPrincipal)
    }else{
        rl.question('Qual destino você quer o ranking?: ', (input) => {
        let certo = input.toLowerCase().trim()
        let ranking = 0
            for(i = 0; i < arrayMission.length; i++){
                if(arrayMission[i].includes(certo)){
                    ranking++
                }
            }
            console.log(`Missão: ${certo} \nRanking: ${ranking} missões`)
            console.log("\nPrecione ENTER para voltar...")
            rl.question('', MenuPrincipal)
        })
    }
}



