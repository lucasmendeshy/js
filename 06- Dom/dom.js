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
