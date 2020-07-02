const mainNav = document.querySelector('.main-nav');
let submenu = null;

const submenuOpen = ((event) => {
  const menuItemBtn = event.target.closest('.menu-item__btn');
  if (menuItemBtn) {
    const menuItem = menuItemBtn.closest('.menu-item');
    submenu = menuItem.querySelector('.submenu');

    submenu.classList.remove('submenu--close');
  }
});

const submenuClose = (() => {
  submenu.classList.add('submenu--close');
});

mainNav.addEventListener('mouseover', submenuOpen);
mainNav.addEventListener('mouseleave', submenuClose);
