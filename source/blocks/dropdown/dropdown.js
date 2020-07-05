const formRoomSearch = document.querySelector('.room-search');
const selectBtnMinus = document.querySelectorAll('.counter__btn--minus');
const selectBtnPlus = document.querySelectorAll('.counter__btn--plus');

const dropdownOpen = (event) => {
  const target = event.target;
  const dropdownItem = target.closest('.dropdown__item');
  //const counterItem = target.closest('.counter__item');
  //const inputField = counterItem.querySelector('.counter__value');

  if (dropdownItem) {
    const dropdownExpand = dropdownItem.querySelector('.dropdown__expand');
    console.log(dropdownExpand);

    dropdownExpand.classList.toggle('visually-hidden');
  }

  const changeover = (event) => {
    const target = event.target;
    const dropdownItem = target.closest('.dropdown__wrapper');
    const selectionItem = target.closest('.selection__buttons');
    const btnMinus = selectionItem.querySelector('.select__btn--minus');
    const btnPlus = selectionItem.querySelector('.select__btn--plus');
    const inputItem = selectionItem.querySelector('.select__value');
    const inputsArray = dropdownItem.querySelectorAll('.select__value');
    const dropdownInput = dropdownItem.querySelector('.dropdown__input');


    if (target == btnMinus && inputItem.value != 0) {
      inputItem.value--;
      if (inputItem.value == 0) {
        btnMinus.classList.add('btn--disabled');
      }
    }

    if (target == btnPlus) {
      btnMinus.classList.remove('btn--disabled');
      inputItem.value++;
    }

    console.log(inputsArray);
    let res = ''; //* переименовать переменную

    const result = inputsArray.forEach((item) => {
      res += `${item.name}: ${item.value}, `;
    });
    console.log(res);

    dropdownInput.placeholder = res;


  };


  formRoomSearch.addEventListener('click', dropdownOpen);

  selectBtnMinus.forEach((item) => {
    item.addEventListener('click', changeover)
  })

  selectBtnPlus.forEach((item) => {
    item.addEventListener('click', changeover)
  })
}