import '../templates/common-template.scss';
import 'dropdown.scss'

console.log('Hello drop.js!')

let expandField = document.querySelector('input[name="rooms"]');

expandField.addEventListener('click', function () {
  console.log('Клик по кнопке');

  let expand = document.querySelector(".expand");
  expand.classList.toggle('visualy-hidden');
});