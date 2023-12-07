calcularNivel(102, 0)

// Função que recebe como parâmetro a quantidade de vitórias e derrotas do jogador
function calcularNivel(vitorias, derrotas){

    // Saldo de vitórias
    let saldoVitorias = vitorias - derrotas

    // Variável que guardará o rank no qual o jogador se encontra
    let nivel
    
    // Estrutura de decisão que determinará o rank de acordo com o número de vitórias
    if(vitorias < 10){
        nivel = "Ferro"
    }

    else if(vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze"
    }

    else if(vitorias >= 21 && vitorias <= 50){
        nivel = "Prata"
    }

    else if(vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    }

    else if(vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"
    }

    else if(vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário"
    }

    else{
        nivel = "Imortal"
    }

    // Exibe a mensagem com o saldo de vitórias e o nível
    console.log(`O herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`)

}