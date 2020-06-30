const expand = ((event) => {
  const { target } = event;

  if (!target.classList.contains('checkbox-list__title--expandable')) { return; }

  const checkboxList = target.closest('.checkbox-list');
  const checkboxListTitle = checkboxList.querySelector('.checkbox-list__title--expandable');
  const checkboxListExpandable = checkboxList.querySelector('.checkbox-list__content--expandable');

  checkboxListTitle.classList.toggle('checkbox-list__title--expandable--open');
  checkboxListExpandable.classList.toggle('checkbox-list--open');
});

document.addEventListener('click', expand);
