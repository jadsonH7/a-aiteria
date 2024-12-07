document.getElementById('login-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    alert('Login realizado com sucesso!');
    window.location.href = '../loja/index.html';  // Redireciona para a página principal
});