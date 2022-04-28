const pagina = document.querySelector("body");
const titulo = document.querySelector("h1");
const msg = document.querySelector("#mensagem");
const sub01 = document.querySelector("#subtitulo-exemplo01");


//Exemplo 01

sub01.addEventListener("mouseover", function()  {
   msg.textContent = "Você passou o mouse sobre";  
});


sub01.addEventListener("mouseout", function() {
    msg.textContent = "";     
});


//Exemplo 02

const botao = pagina.querySelector("#noturno");
botao.addEventListener('click', function() {
    pagina.classList.toggle("modo-noturno");


    //Desafio: mudar o rótulo do botão a medida em que o usuário clica

    if(botao.textContent == "Ativar") {
        botao.textContent = "Desativar";
    } else {
        botao.textContent = "Ativar";
    };
});

//Exemplo 3: Formulário

const formulario = pagina.querySelector("form");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");
const corpoTabela = pagina.querySelector("tbody");

formulario.addEventListener("submit", function(event) {
    //Previne o comportamento padrão do formulário
    event.preventDefault();

    //Capturando os dados digitados

    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    //Calculando a média
    let media = calculaMedia(nota1, nota2);

    //Verificando a situação

    let situacao = verificaSituacao(media);

    //Montagem do resumo do aluno

    montaResumo(nome,media,situacao);

    // Resetando o formulário
     formulario.reset();

     // Levando o foco para campo nome
     campoNome.focus();
     
});

function calculaMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
};

function verificaSituacao(media) {
   if(media >= 7) {
       return "aprovado";
   } else {
       return "reprovado";
   }
};

function montaResumo(nome,media,situacao) {
    // 1) Criar o elemento dinamicamente
    let linha = document.createElement("tr");

    // 2) Montar o conteúdo do elemento criado
    linha.innerHTML = `<td> ${nome} </td>
                       <td> ${media} </td>
                       <td> ${situacao} </td>`

    // 3) Adicionar o elemento ao DOM (corpoTabela)
    corpoTabela.appendChild(linha);                   
};




























































































/*let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");



function clique () {
    let nome = document.getElementById("nome");
    let resultado = document.getElementById("resultado");
 return   resultado.textContent =  nome.value;

};
*/

