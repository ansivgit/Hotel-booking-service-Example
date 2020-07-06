const dropdownOpen = ((event) => {
  const { target } = event;
  const dropdownItem = target.closest('.dropdown__item');
  const submitBtn = dropdownItem.querySelector('button[type = "submit"]');
  const inputFieldsArr = document.querySelectorAll('.input__field');
  const dropdownExpandsArr = document.querySelectorAll('.dropdown__expand');

  if (dropdownItem) {
    const inputField = dropdownItem.querySelector('.input__field');
    const dropdownExpand = dropdownItem.querySelector('.dropdown__expand');

    if (target === inputField) {
      dropdownExpand.classList.toggle('visually-hidden');
      inputField.classList.toggle('input__field--expanded');
    }

    if (target === submitBtn) {
      dropdownExpand.classList.add('visually-hidden');
      inputField.classList.remove('input__field--expanded');
    }
  }

  if (!dropdownItem) {
    inputFieldsArr.forEach((item) => {
      item.classList.remove('input__field--expanded');
    });
    dropdownExpandsArr.forEach((item) => {
      item.classList.add('visually-hidden');
    });
  }
});

const changeover = ((event) => {
  const { target } = event;
  const dropdownItem = target.closest('.dropdown__item');
  const counterValueArr = dropdownItem.querySelectorAll('.counter__value');
  const counterButtons = target.closest('.counter__buttons');
  const resetBtn = dropdownItem.querySelector('button[type = "reset"]');

  if (counterButtons) {
    const counterValue = counterButtons.querySelector('.counter__value');
    const counterBtnMinus = counterButtons.querySelector('.counter__btn--minus');
    const counterBtnPlus = counterButtons.querySelector('.counter__btn--plus');

    if ((target === counterBtnMinus) && counterValue.value !== '0') {
      let counter = Number(counterValue.value);
      counter -= 1;
      counterValue.value = counter;

      if (counter === 0) {
        counterBtnMinus.disabled = true;
      }
    }

    if (target === counterBtnPlus) {
      let counter = Number(counterValue.value);
      counter += 1;
      counterValue.value = counter;
      counterBtnMinus.disabled = false;

      if (resetBtn) {
        resetBtn.classList.remove('visually-hidden');
      }
    }

    let counterSum = 0;

    counterValueArr.forEach((item) => {
      const counter = Number(item.value);
      counterSum += counter;
    });

    if (resetBtn && counterSum === 0) {
      resetBtn.classList.add('visually-hidden');
    }
  }

  const reset = () => {
    const counterButtonsArr = dropdownItem.querySelectorAll('.counter__buttons');

    counterButtonsArr.forEach((item) => {
      const counter = item.querySelector('.counter__value');
      const btnMinus = item.querySelector('.counter__btn--minus');

      counter.value = 0;
      btnMinus.disabled = true;
    });
    resetBtn.classList.add('visually-hidden');
  };
  if (resetBtn) {
    resetBtn.addEventListener('click', reset);
  }
});

document.addEventListener('click', dropdownOpen);
document.addEventListener('click', changeover);
