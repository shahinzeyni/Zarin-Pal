const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.cross-icon');
const showMoreMenu = document.querySelector('#show-more-submenu');
const showProductMenu = document.querySelector('#show-product-submenu');

hamburgerIcon.addEventListener('click', function () {
  hamburgerMenu.classList.add('show-hamburger-menu');
});

crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show-hamburger-menu');
});

showMoreMenu.addEventListener('mouseenter', function (e) {
  const ul = e.target.childNodes[5];
  ul.style.animation = 'dropdownAnimation 0.4s 1';
  ul.style.display = 'block';
});

showMoreMenu.addEventListener('mouseleave', function (e) {
  const ul = e.target.childNodes[5];
  ul.style.display = 'none';
});

showProductMenu.addEventListener('mouseenter', function (e) {
  const div = e.target.childNodes[5];
  div.style.animation = 'dropdownAnimation 0.4s 1';
  div.style.display = 'flex';
});

showProductMenu.addEventListener('mouseleave', function (e) {
  const div = e.target.childNodes[5];
  div.style.display = 'none';
});
