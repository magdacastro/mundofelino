function initModal() {
  const botaoAbrirModal = document.querySelector('[data-modal="abrir"]');
  const botaoFecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const botaoEnviar = document.querySelector('.btn-submit');

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
    event.preventDefault();
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    if (email.value.length > 0 && senha.value.length > 0) {
      const result = email.value.includes('@');
      if (result) {
        const novoEmail = email.value.split('@');
        botaoAbrirModal.innerText = novoEmail[0];
      } else {
        botaoAbrirModal.innerText = email.value;
      }
      fecharModal(event);
    }
  }

  if (botaoAbrirModal && botaoFecharModal && containerModal && botaoEnviar) {
    botaoAbrirModal.addEventListener('click', abrirModal);
    botaoFecharModal.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', clicarForaModal);
    botaoEnviar.addEventListener('click', enviarDados);
  }
}
