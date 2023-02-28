// Joãozinho tirou na primeira prova 5 e tirou 7 na segunda prova. A média para ele ser aprovado é: 6//

let notaProva1 = 7;
let notaProva2 = 4;

let media = (notaProva1 + notaProva2) / 2;

if(media >= 6){
    console.log("João, arrasou. Sambou na cara da sociedade! Sua média foi: " +  media);
} else if(media < 6 && media > 5){
    console.log("João, não desista. Faça uma pesquisa e me traga na segunda. Sua média: " + media);
} else {
    console.log(`Deu ruim boy! Sua média foi: ${media}`);
};