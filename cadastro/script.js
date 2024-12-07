document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    window.location.href = '../login/index.html';  // Redireciona para a página de login
});