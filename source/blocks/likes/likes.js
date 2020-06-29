const likeButtonsArr = document.querySelectorAll('.like-button-block');

const isLike = ((event) => {
  event.preventDefault();

  const likeButtonBlock = event.target.closest('.like-button-block');
  const likeButtonInput = likeButtonBlock.querySelector('.like-button__input');
  const likeButtonLabel = likeButtonBlock.querySelector('.like-button__label');

  let likesValue = Number(likeButtonInput.dataset.value);
  let currentVote = 0;

  if (likeButtonInput.checked) {
    currentVote = -1;
    likeButtonInput.checked = false;
    likesValue += currentVote;
    likeButtonInput.dataset.value = likesValue;
  } else {
    currentVote = 1;
    likeButtonInput.checked = true;
    likesValue += currentVote;
    likeButtonInput.dataset.value = likesValue;
  }

  likeButtonLabel.textContent = likesValue;
});

likeButtonsArr.forEach((item) => {
  item.addEventListener('click', isLike);
});
