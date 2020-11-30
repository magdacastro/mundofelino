function initSlide() {
  const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
  });

  /* class slidesConfig {
      constructor() {
        this.swiperArray = [...this.swiper.children].map((item) => {
          item.element.classList.remove(this.activeClass);
          return item;
        });
        this.slideArray[this.index.active].element.classList.add(this.activeClass);
      }
    }

    swiper.addEventListener('click', slidesConfig); */
}
