// Array de objetos com as informações dos produtos
const produtos = [
    {
        id: 1,
        nome: "Camiseta Meme 1",
        descricao: "A clássica camiseta do meme que nunca morre. Perfeita para qualquer ocasião!",
        imagem: "https://via.placeholder.com/300x250?text=Meme+1",
        precos: {
            p: 49.90,
            m: 54.90,
            g: 59.90,
            gg: 64.90,
            xg: 69.90
        },
        cores: ["Preto", "Branco", "Cinza"],
        tecido: "Algodão 100%"
    },
    {
        id: 2,
        nome: "Camiseta Meme 2",
        descricao: "Para os amantes de memes que entendem as referências mais profundas da internet.",
        imagem: "https://via.placeholder.com/300x250?text=Meme+2",
        precos: {
            p: 49.90,
            m: 54.90,
            g: 59.90,
            gg: 64.90,
            xg: 69.90
        },
        cores: ["Branco", "Azul Claro"],
        tecido: "Poliéster"
    },
    {
        id: 3,
        nome: "Camiseta Meme 3",
        descricao: "Seja a lenda que você sempre quis ser com essa estampa épica!",
        imagem: "https://via.placeholder.com/300x250?text=Meme+3",
        precos: {
            p: 49.90,
            m: 54.90,
            g: 59.90,
            gg: 64.90,
            xg: 69.90
        },
        cores: ["Preto", "Vermelho"],
        tecido: "Algodão 100%"
    }
];

// Função para exibir os produtos na página
function exibirProdutos() {
    const container = document.getElementById('product-container');

    // Verifica se o container existe na página (para não dar erro na página inicial)
    if (!container) return;

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Cria o HTML para cada produto
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Camiseta ${produto.nome}">
            <div class="product-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p><strong>Tamanhos:</strong> P, M, G, GG, XG</p>
                <p><strong>Cores:</strong> ${produto.cores.join(', ')}</p>
                <p><strong>Tecido:</strong> ${produto.tecido}</p>
                <p class="price">R$ ${produto.precos.m.toFixed(2)}</p>
                <p class="payment-options">
                    <strong>Formas de Pagamento:</strong> Cartão, Pix ou Boleto
                </p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', exibirProdutos);