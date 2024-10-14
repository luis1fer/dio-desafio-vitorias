const readlineSync = require('readline-sync');

// essa é a função utilizada para calcular o nível com base nas vitórias
function calcularNivel(vitorias) {
    let nivel; // var para guardar o nível

    // Estrutura condicional para classificar o nível com base nas vitórias - derrrotas
    if (vitorias < 10) {
        nivel = "Ferro"; 
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze"; 
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"; 
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"; 
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"; 
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário"; 
    } else {
        nivel = "Imortal"; 
    }

    return nivel; // Retorna a var nível
}


function main() {
    let continuar = true; // Variável para controlar o laço

    while (continuar) {
        // Guarda a quantidade de vitórias e derrotas do jogador
        let vitorias = parseInt(readlineSync.question("Digite a quantidade de vitórias: "));
        let derrotas = parseInt(readlineSync.question("Digite a quantidade de derrotas: "));

        // Cálculo do saldo de vitórias
        let saldoVitorias = vitorias - derrotas;

        // Chama a função para determinar o nível
        let nivel = calcularNivel(vitorias);

        // Saída
        console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);

        // Adicionei essa parte pois facilita os testes do código
        let resposta = readlineSync.question("Deseja calcular novamente? (s/n): ").toLowerCase();
        continuar = (resposta === 's'); 
    }

    console.log("Boa sorte nas suas próximas partidas!");
}

main();
