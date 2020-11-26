function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.quantidade}</span>`;
    return div;
  }
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');
    animaisJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    initAnimacaoNumeros();
  }

  fetchAnimais('./API/animais_api.json');
}

/* Função de animar números */

function initAnimacaoNumeros() {
  function animarNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = parseInt(numero.innerText, 10);
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50);
    });
  }

  let observer = 0;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      animarNumeros();
      observer.disconnect();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
