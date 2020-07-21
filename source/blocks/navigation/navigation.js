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

/* на завтра:
ищем элемент button.menu - mobile
и по клику на него добавляем ему стиль
.menu-mobile--active
а также добавляем видимость меню мобильному
*/
