/*Sintaxe 1 (tradicional)
Função literal/anõnima*/
let exemplo1 = function() {
    console.log("Função anõnima / literal");
};
//chamando a função
exemplo1();

/*Sintaxe 2 (tradicional)
Função nomeada */
function exemplo2 () {
    console.log("Função nomeada");
};
//chamando a função
exemplo2();

/* Sintaxe 3 (moderna)
Função Seta/Flecha (Arrow Function) */

let exemplo3 = () => {
   console.log("Arrow Function");
}; 
//chamando a função
exemplo3();

//Outro exemplo de exibir a função Arrow Function
let exemplo3b = () => console.log("Arrow Function B");
 exemplo3b();
 
 
 //Função nomeada

 function dobra  (valor)  {
    return valor * 2;
 }

 console.log( dobra(10) );

//document.write(dobra(10) );

//Exemplo com Arrow Function

let dobraB = (valor) => {
   return valor * 2;
}
console.log( dobra(100) );

//Outro exemplo de exibir Arrow Function sem usar return
let dobraC = valor =>  valor * 100;
console.log( dobraC(20) );

console.log("-----------------")

//Exemplos anteriores

let preco = 1250;
let desconto = 77.58;
let precoFinal = preco - desconto;

    function formataMoeda (valor) {
        return valor.toLocaleString("en", {
            style: "currency",
            currency: "USD"
        });

    };

    //Arrow
    let formataValor = valor => {
        return valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });

    };


    console.log (formataValor(preco) );
    console.log (formataMoeda(desconto) );
    console.log (formataMoeda(precoFinal) );

    console.log("---------------");
