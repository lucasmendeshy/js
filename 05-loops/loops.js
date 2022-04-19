//Estrutas de Controle de Repetição

//while (enquanto)
//do/while (faça/enquanto)
//for (para uma determinada quantidade de vez)


//Exemplo 1: While
//while (condição) {comando};


let i = 1;

while (i < 20) {
    console.log(`O valor de i é: ${i}`);
    i++; // para sair do loop infinito
}


console.log("----------------------------------------------------")

//Exemplo 2: do/while

let j = 1;

do {
    console.log(`J é ${j}`);
    j++; //incremento
} while  (j < 10)


console.log ("----------------------------------------------------")


//Exemplo 3: For

for (let k = 1; k <= 5; k++){
    console.log(`K vale: ${k}`)


}
console.log("----------------------------------------------------")


//Exemplo 4: loop iterando sobre os dados de array

let alunos = [
    "Chiquinha", "Chaves", "Madruga", "Kiko"
];

//Cache do tamanho array

let tamanho = alunos.length;

for (let i = 0; i < tamanho; i++ ) {
    console.log(alunos[i]);

}


console.log("----------------------------------------------------");