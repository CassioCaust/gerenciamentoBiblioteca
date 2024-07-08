// biblioteca.js

// Array para armazenar os livros da biblioteca
let biblioteca = [];

// Função para adicionar um novo livro
const adicionarLivro = (nome, autor, tamanho, genero) => {
    let livro = {
        nome: nome,
        autor: autor,
        tamanho: tamanho,
        genero: genero
    };
    biblioteca.push(livro);
};

// Função para remover um livro pelo nome
const removerLivro = (nome) => {
    biblioteca = biblioteca.filter(livro => livro.nome !== nome);
};

// Função para listar todos os livros da biblioteca
const listarLivros = () => {
    if (biblioteca.length === 0) {
        console.log("A biblioteca está vazia.");
    } else {
        console.log("Lista de Livros na Biblioteca:");
        biblioteca.forEach(livro => {
            console.log(`Nome: ${livro.nome}, Autor: ${livro.autor}, Tamanho: ${livro.tamanho} páginas, Gênero: ${livro.genero}`);
        });
    }
};

// Função para atualizar um livro pelo nome
const atualizarLivro = (nome, novoNome, novoAutor, novoTamanho, novoGenero) => {
    biblioteca = biblioteca.map(livro => {
        if (livro.nome === nome) {
            return {
                nome: novoNome,
                autor: novoAutor,
                tamanho: novoTamanho,
                genero: novoGenero
            };
        } else {
            return livro;
        }
    });
};

// Exportando as funções para serem utilizadas em outro arquivo
module.exports = {
    adicionarLivro,
    removerLivro,
    listarLivros,
    atualizarLivro
};
