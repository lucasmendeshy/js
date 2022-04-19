// Exemplo 1: objeto básico

let livro = {
    //propriedade : valor

    titulo : 'Senhor dos anéis',
    ano : 1954,
    volumes : 3,
    autor :  'J.R.R Tolkien'
};



//exibindo
console.log(livro);

//exibindo
console.log(`Meu livro preferido é o ${livro.titulo} que foi lançado em ${livro.ano}.`)




//Segundo jeito de exibir no console.
/*console.log("Meu livro preferido é o " +livro.titulo+  "e foi lançado em " +livro.ano ) */






//Exemplo 2: objeto contendo array e outro objeto

let pessoa = {
    //propriedades

    nome : 'Certo Alguém',
    idade : 39,
    sexo : 'masculino',
    telefone : ['2222-3333', '5555-6666'],
    cidade : 'São Paulo',
    medidas : {
        peso : 90,
        altura : 1.80
    }

};



console.log(pessoa);

console.log(pessoa.medidas.altura);   // 1.8
console.log( pessoa.telefone[0] );   //2222-3333

//Certo alguém é uma pessoa incrível, contrate através do telefone 5555-6666
console.log(`${pessoa.nome} é uma pessoa incrível, contrate através do ${pessoa.telefone[1]}.`)



//Exemplo 3: Array de Objeto


let livros = [
    {
        titulo : 'Senhor dos Anéis',
        autor : 'J.R.R Tolkien'
    },

    {
        titulo : 'Ghost Rider',
        autor : 'Neil Peart'
    },

    {
        titulo : 'Game Of Thrones',
        autor : 'George R.R. Martin'
    },

    
];


console.log(livros)


console.log(`Meu livro favorito é  ${livros[2].titulo} do autor ${livros[2].autor} `)