// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade para o cabeçalho
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    //Funcionalidade para cardapio
    const cardapioToggle = document.getElementById("link-center");
    const cardapStyle = document.getElementById("link-cardapio")
    cardapioToggle.addEventListener("click", (ev) => {
        ev.preventDefault;
        cardapStyle.classList.toggle("active");
    });

    // Funcionalidade do menu móvel
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const toggle = document.querySelector('.menu-toggle');
    const boxRigth = document.querySelector('.box-rigth');
    toggle.addEventListener('click', () => {
        boxRigth.classList.toggle('active');
    });

    // Funcionalidade para adicionar ao carrinho
    const buttonsAdicionarCarrinho = document.querySelectorAll('.adicionar-carrinho');
    const carrinhoLista = document.getElementById('carrinho-lista');

    buttonsAdicionarCarrinho.forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.getAttribute('data-item');
            const preco = event.target.getAttribute('data-preco');
            
            const carrinhoItem = document.createElement('div');
            carrinhoItem.className = 'carrinho-item';
            carrinhoItem.innerHTML = `
                <p>Item: ${item}</p>
                <p>Preço: R$ ${preco}</p>
            `;
            carrinhoLista.appendChild(carrinhoItem);

            // Adiciona animação de fade-in
            setTimeout(() => {
                carrinhoItem.classList.add('fade-in');
            }, 10);
        });
    });

    // Funcionalidade para finalizar a compra
    const botaoFinalizarCompra = document.getElementById('finalizar-compra');
    botaoFinalizarCompra.addEventListener('click', () => {
        alert('Compra finalizada com sucesso!');
        botaoFinalizarCompra.value = " ";
    });
});
