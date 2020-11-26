function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }

  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
