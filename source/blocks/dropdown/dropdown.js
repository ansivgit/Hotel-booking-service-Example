//import '../templates/common-template.scss';
//import 'dropdown.scss'

//console.log('Hello drop.js!')

let expandField = document.querySelector('.input__field--expanded');

expandField.addEventListener('click', function () {
  console.log('Клик по кнопке');
  expandField.classList.toggle('input__field--expanded');

  let expand = document.querySelector('.expand');
  expand.classList.toggle('visually-hidden');
});