const menuButton = document.querySelector('.fa.fa-bars');
const expandedMenuItems = document.querySelector('.expanded-menu-items');

menuButton.addEventListener('click', function () {
  expandedMenuItems.classList.toggle('expanded-menu-items--hide');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 990) {
    expandedMenuItems.classList.add('expanded-menu-items--hide');
  }
});

