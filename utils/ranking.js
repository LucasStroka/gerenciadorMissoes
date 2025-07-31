const arrayMission = require("../data/arrayMission");
const { askQuestion } = require("./askQuestion");

async function ranking() {
    if (arrayMission.length === 0) {
        console.log("Nenhuma missão em andamento. \nPressione ENTER para voltar...");
        await askQuestion('');
        return;
    }

    const destino = await askQuestion('Qual destino você quer o ranking?: ');
    const destinoAlvo = destino.toLowerCase().trim();

    let contador = arrayMission.filter(missao =>
        missao.destino.toLowerCase().includes(destinoAlvo)
    ).length;

    console.log(`\n--- Ranking para o Destino: ${destinoAlvo.toUpperCase()} ---`);
    console.log(`Total de missões para este destino: ${contador}\n`);
    await askQuestion('Pressione ENTER para retornar ao menu...');
}

module.exports = ranking;
