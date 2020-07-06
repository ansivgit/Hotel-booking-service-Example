const dropdownOpen = ((event) => {
  const { target } = event;
  const dropdownItem = target.closest('.dropdown__item');
  const inputFieldsArr = document.querySelectorAll('.input__field');
  const dropdownExpandsArr = document.querySelectorAll('.dropdown__expand');

  if (dropdownItem) {
    const inputField = dropdownItem.querySelector('.input__field');
    const dropdownExpand = dropdownItem.querySelector('.dropdown__expand');
    const submitBtn = dropdownItem.querySelector('button[type = "submit"]');

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

  if (dropdownItem) {
    const inputField = dropdownItem.querySelector('.input__field');
    const counterValueArr = dropdownItem.querySelectorAll('.counter__value');
    const counterButtons = target.closest('.counter__buttons');
    const amountBabies = dropdownItem.querySelector('input[name = "babies"]');
    const amountChildren = dropdownItem.querySelector('input[name = "children"]');
    const amountAdults = dropdownItem.querySelector('input[name = "adults"]');
    const resetBtn = dropdownItem.querySelector('button[type = "reset"]');

    let totalGuests = 0;

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

      counterValueArr.forEach((item) => {
        const counter = Number(item.value);
        totalGuests += counter;
      });

      if (resetBtn && totalGuests === 0) {
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

    const numericCases = (name) => {
      if (name === 'guests') {
        const babies = Number(amountBabies.value);
        const children = Number(amountChildren.value);
        const adults = Number(amountAdults.value);
        const otherGuests = children + adults;

        let caption = '';
        let babiesCaption = '';
        let isBabies = '';

        switch (otherGuests) {
        case 0:
          caption = '';
          break;
        case 1:
          caption = 'гость';
          break;
        case 2:
        case 3:
        case 4:
          caption = 'гостя';
          break;
        default:
          caption = 'гостей';
        }

        switch (babies) {
        case 0:
          babiesCaption = '';
          break;
        case 1:
          babiesCaption = 'младенец';
          break;
        case 2:
        case 3:
        case 4:
          babiesCaption = 'младенца';
          break;
        default:
          babiesCaption = 'младенцев';
        }

        isBabies = babies ? `, ${babies} ${babiesCaption}` : '';
        inputField.value = otherGuests ? `${otherGuests} ${caption}${isBabies}` : 'Сколько гостей';
      }
    };

    numericCases('guests');
  }
});

document.addEventListener('click', dropdownOpen);
document.addEventListener('click', changeover);
