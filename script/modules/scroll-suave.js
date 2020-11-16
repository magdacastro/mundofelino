function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });

      /* Forma Alternativa */
      /* section.scrollIntoView({
          behavior: 'smooth',
          block: 'start' //Alinhar o bloco ao início
      }); */
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}