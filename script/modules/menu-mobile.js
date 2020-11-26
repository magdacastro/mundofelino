function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button-mobile"]');
  const menuList = document.querySelector('[data-menu="list"]');
  function openMenu(event) {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
  }
  if (menuButton && menuList) {
    menuButton.addEventListener('click', openMenu);
  }
}
