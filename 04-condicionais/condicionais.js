//Estruras de Controle Controle

//if/else, else if

let nome = "Lucas";
let idade = 19;

//Verificar a idade de uma pessoa

//Condicional Encadeada
let mensagem;

/*if (idade < 18) {  
     mensagem = "Você é maior de idade";
 } else {
     mensagem = "Você é menor de idade";
 }     

// document.write(mensagem)
console.log(mensagem)*/
 

if (idade >= 60) {

    mensagem = "é idoso";

} else if (idade >=18) {

    mensagem = "é adulto, mas não idoso(a)";
} else  {
    //mensagem = "Menor de idade";

    //Condicional aninhada
    if (idade >= 12 &&  idade < 18) {

        mensagem = "é adolescente";

    } else {
        mensagem = "é baby shark";
    }
    
}


console.log(`${nome} ${mensagem}`);
console.log(`----------------------------------------------------`)

let nota1 = 10;
let nota2 = 5;
let media = (nota1 + nota2)  /2;
console.log(media);



/*if (media >= 10){

   resultado = ("Aprovado");

} else {
 resultado =("Reprovado");
} 


console.log(resultado); */

//Resolvendo com operador ternário
//media >= 7 ? resultado = "Aprovado" : resultado = "Reprovado";

resultado = media >=7 ? "Aprovado" : "Reprovado";
console.log(resultado) 


console.log("----------------------------------------------------");


let opcao = 1;
let textoOpcao;

switch (opcao) {
    case 1 :
        textoOpcao = "Legal, o que deseja saber?";
        break;

    case 2 :
        textoOpcao = "Que pena, o que aconteceu?";
        break;

    case 3 :
        textoOpcao = "Certo, qual sua dúvida?";
        break;

    default  :
        textoOpcao = "Hum, não entendi... vou te transferir.";
        break;
}

console.log(`Você escolheu a opção ${opcao}`)
console.log(textoOpcao)

console.log("----------------------------------------------------")
//Operadores de comparação

let a = 10;
let b = "10";

// = atribuindo == Semelhante === Iguais
console.log(a == b); // True ou false
