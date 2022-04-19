//comentário de uma linha - atalho CTRL;
/*bloco de
 comentário - atalho SHIFT ALT A */



 //Comando de saída para o controle
 //console.log -> fica armazenado no console, para acessar basta abrir o inspecionar

console.log("Olá, Mundo!");


/* Variáveis e constante
Palavras-chave: vat,let,const


var -> variável de escopo global
let -> variável de escopo de bloco
const -> const escopo de bloco */


const nome = "Lucas"; // Isso é uma constante e não aceita um novo valor
let ano = 2022;; // variável de escopo local
var curso = "Técnico em informática para internet"; //variável global

/*nome = "Mendes";
ano = 2025;
curso = "Como se torna um jogador de basquete";
*/


//Recuperando os valores
console.log(nome);
console.log(ano);
console.log(curso);

//Concatenação

//Eu sou o(a) XXXXXX, e em ANO estou estudando no curso CURSO.
console.log("Eu sou o " + nome + " e em " + ano + " estou estudando no curso " +curso+ "." );


//String literal | template string para saber mais sobre.
console.log(`eu sou o ${nome} e em ${ano} estou estudando no curso ${curso}.`);


/*Operadores matemáticos:
+ adição
- subtração
/ divisão
* multiplicação */

let produto = "Tv led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;


console.log(produto);
console.log(preco);
console.log(quantidade);
console.log(total);

console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de  ${quantidade} unidades, ao custo de ${preco} cada e ao valor total de: ${total}.`)