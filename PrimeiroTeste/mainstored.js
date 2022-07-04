import { prompt as input } from 'readline-sync'
const output = console.log;



// exercicio; insert player name; perguntar quantos enemys? , quantas rondas? , preguntar para inserir player name? , gerar nomes bots? or insert bot names? ,
// por cada ronda perguntar quem matou quem? TER UM MENU! opçao para sair(fechar o programa), no posso instalar libraries.
// Se algum input for incorreto mostrar ate que utilisador colocar um correto.
// no final de todas as rondas(final do jogo so acotece se uma equipa tiver masi rondas ganhas ex; 3 : 2 = 5 rondas), mostar o score.
// ferramentas : output: conseole.log e input: prompt.
// 7dias mais ou menos "uteis".

// isString()

output("Please insert your Name!")
var setPlayerName = String(input())
myDoWhileLoop = '';
i = (input());
do {
    myDoWhileLoop == setPlayerName[i]
    ===i;  
} while(setPlayerName)[i]=(input(String));

output('How many rounds?')
var rounds = Number(input())
if(Number.isNaN(rounds)){
 output('Invalid number provided');
 throw new Error('invalid');
}