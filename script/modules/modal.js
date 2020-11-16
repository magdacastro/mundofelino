function initModal() {

  const botaoAbrirModal = document.querySelector('[data-modal="abrir"]');
  const botaoFecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const botaoEnviar = document.querySelector('.btn-submit');

  if (botaoAbrirModal && botaoFecharModal && containerModal && botaoEnviar) {
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.add('ativo');
    }

    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove('ativo');
    }

    function clicarForaModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    function enviarDados(event) {
      let email = document.getElementById('email');
      let senha = document.getElementById('senha');

      if (email.value !== '' && senha.value !== '') {
        console.log(email.value);
        var meuText = email.innerText;
        console.log(meuText);
        botaoAbrirModal.innerText = meuText;
      }
    }

    botaoAbrirModal.addEventListener('click', abrirModal);
    botaoFecharModal.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', clicarForaModal);
    botaoEnviar.addEventListener('click', enviarDados);
  }
}


