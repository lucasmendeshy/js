let formulario = document.querySelector("form");
let numeroEscolhido = parseInt( Math.random() * 11);
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let numeroEscolhido = parseInt( Math.random() * 11);
    let palpiteUsuario = parseInt( document.getElementById("palpite").Value );
    let resultado = document.getElementById("resultado");

    if( palpiteUsuario == numeroEscolhido ) {
          resultado.innerHTML = "Você acertou!";

    } else if ( palpiteUsuario < 0 || palpiteUsuario > 10 ) {
         resultado.innerHTML = "Digite um número entre 0 e 10";

    } else  if (numeroEscolhido > palpiteUsuario) {
        resultado.innerHTML = "Seu palpite é maior que o número sorteado";

    } else if ( numeroEscolhido > palpiteUsuario  ) { 
        resultado.innerHTML = "Seu palpite é menor que o número sorteado";
        
    } else {
        resultado.innerHTML = "errouuuuu";
    }

        

    console.log(palpiteUsuario);
});