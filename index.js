// index.js

const prompt = require('prompt-sync')();
const {
    adicionarLivro,
    removerLivro,
    listarLivros,
    atualizarLivro
} = require('./biblioteca');

// Função para mostrar menu e interagir com o usuário
const mostrarMenu = () => {
    console.log("\n=== Menu ===");
    console.log("1. Adicionar Livro");
    console.log("2. Remover Livro");
    console.log("3. Listar Livros");
    console.log("4. Atualizar Livro");
    console.log("5. Sair");

    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            adicionarLivro(
                prompt("Nome do livro: "),
                prompt("Autor do livro: "),
                parseInt(prompt("Tamanho do livro (número de páginas): ")),
                prompt("Gênero do livro: ")
            );
            console.log("Livro adicionado com sucesso!");
            break;
        case '2':
            const nomeRemover = prompt("Digite o nome do livro que deseja remover: ");
            removerLivro(nomeRemover);
            console.log("Livro removido com sucesso!");
            break;
        case '3':
            listarLivros();
            break;
        case '4':
            const nomeAtualizar = prompt("Digite o nome do livro que deseja atualizar: ");
            const novoNome = prompt("Novo nome do livro: ");
            const novoAutor = prompt("Novo autor do livro: ");
            const novoTamanho = parseInt(prompt("Novo tamanho do livro (número de páginas): "));
            const novoGenero = prompt("Novo gênero do livro: ");
            atualizarLivro(nomeAtualizar, novoNome, novoAutor, novoTamanho, novoGenero);
            console.log("Livro atualizado com sucesso!");
            break;
        case '5':
            console.log("Saindo...");
            return;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }

    mostrarMenu(); // Chama recursivamente para exibir o menu novamente
};

// Inicia o programa
mostrarMenu();
