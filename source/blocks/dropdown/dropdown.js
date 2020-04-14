// import '../templates/common-template.scss';
// import 'dropdown.scss'

// console.log('Hello drop.js!')

const expandField = document.querySelector('.input__field--expanded');

expandField.addEventListener('click', () => {
  // console.log('Клик по кнопке');
  expandField.classList.toggle('input__field--expanded');

  const expand = document.querySelector('.expand');
  expand.classList.toggle('visually-hidden');
});
