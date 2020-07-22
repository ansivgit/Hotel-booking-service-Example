const mainNav = document.querySelector('.main-nav');
const btnMenuMobile = mainNav.querySelector('.menu-mobile');
const menuLayout = mainNav.querySelector('.menu__layout--horizontal');

let submenu = null;

const submenuOpen = ((event) => {
  const menuItemBtn = event.target.closest('.menu-item__btn');
  if (menuItemBtn) {
    const menuItem = menuItemBtn.closest('.menu-item');
    submenu = menuItem.querySelector('.submenu');

    submenu.classList.remove('submenu--close');

    submenu.addEventListener('mouseleave', () => submenu.classList.add('submenu--close'));
    menuItem.addEventListener('click', () => submenu.classList.toggle('submenu--close'));
  }
});

const menuMobileOpenClose = (() => {
  btnMenuMobile.classList.toggle('menu-mobile--active');

  if (menuLayout.style.display === 'flex') {
    menuLayout.style.display = 'none';
  } else {
    menuLayout.style.display = 'flex';
  }
});

mainNav.addEventListener('mouseover', submenuOpen);
btnMenuMobile.addEventListener('click', menuMobileOpenClose);
