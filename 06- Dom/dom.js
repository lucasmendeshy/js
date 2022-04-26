/*Métodos/Funções de acesso e seleção

getElementyById() -> seleciona um elemento pelo ID

querySelector()
-> Seleciona UM elemento de acordo com um seletor

querySelectorAll()
-> seleciona VÁRIOS elementos de acordo com um seletor */





//Selecionando pelo ID
const titulo = document.getElementById("titulo-principal");

console.log(titulo);


//Selecionando pelo TAG
const pagina = document.querySelector("body");


console.log(pagina)


//Selecionando todas as TAGS H2
const subtitulo = document.querySelectorAll("h2");

console.log(subtitulo)



//Modificando elementos

titulo.textContent = "Olá Mundo!";
subtitulo[1]. textContent = "Full Stack";


 const legenda = document.querySelector("figcaption");
 legenda.innerHTML = "<b>Legenda da imagem</b>";


 //CSS VIA JS

titulo.style.textAlign = "center"; 
titulo.style.fontFamily = "arial ";
titulo.style.color = "purple";
titulo.style.backgroundImage = "linear-gradient(lightyellow,lightblue)";

console.log("---------------")


//First-child -> seleciona o primeiro
//Last-child -> seleciona o do meio
//nth-child(2) -> seleciona o último e pode mudar as ordens

const listaEditores = document.querySelector("#lista-editores");

const ultimo = listaEditores.querySelector("li:last-child"); 

const primeiro = listaEditores.querySelector("li:first-child");

const outro = listaEditores.querySelector("li:nth-child(2)");


/*outro.innerHTML = "<b>Deu ruim</b>";
console.error(ultimo);

outro.style.color = "red";
*/

ultimo.classList.add("destaque-item");

//Adicionando o atributo target em todos os links da lista de referências

//Selecionando todos os links contidos na lista ul

const links = document.querySelectorAll("ul li a");
console.log(links);
//links[0].style.backgroundColor = "red"; 

//length -> tamanho de elemento que tem dentro dele
for ( let i = 0; i < links.length; i++ ) {
        links[i].setAttribute("target", "_blank")
};




