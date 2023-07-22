let linkCNodeList = document.querySelectorAll('.menu__link')

function findSubMenu(link) {
  const parent = link.closest('.menu__item');
  if (parent) {
    return parent.querySelector('.menu_sub');
  }
  return null;
}

function hideSubMenu() {
  const activeMenu = document.querySelector('.menu_active');
  if (activeMenu) {
    activeMenu.className = "menu menu_sub";
  }
}

function showSubMenuclick(event) {
  hideSubMenu();
  const subMenu = findSubMenu(event.target);
  if (subMenu) {
    event.preventDefault();
    subMenu.classname ='menu_active';
  } else {
    console.log('false');
  }
}

linkCNodeList.forEach((link) => {
  link.addEventListener('click', showSubMenuclick);
});
