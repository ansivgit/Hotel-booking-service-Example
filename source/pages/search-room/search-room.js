import * as $ from 'jquery';

import '../../blocks/header/header';

import '../../blocks/calendar/calendar';
import '../../blocks/dropdown/dropdown';
import '../../blocks/range-slider/range-slider';
import '../../blocks/checkbox-list/checkbox-list';

import './search-room.scss';

const searchResult = require('./room-base.json');

const roomSelectionTitle = document.querySelector('.room-selection__title');

const renderCard = (arrResponse) => {
  if (!arrResponse) {
    roomSelectionTitle.textContent = 'По вашему запросу ничего не найдено';
    return;
  }

  roomSelectionTitle.textContent = 'Номера, которые мы для вас подобрали';

  const searchResult = document.querySelector('.search-result');

  arrResponse.forEach((item) => {
    const {
      roomNumber,
      roomPhoto: [],
      roomType,
      costPerDay,
      currency,
      vote,
      votesNumber,
    } = item;

    const card = document.createElement('li');
    card.className = 'card-room';
    card.innerHTML = `
      <div class = "card-room__img img--base">
        <div class = "card-room__btn card-room__btn--prev material-icons expand_more"></div>
        <div class = "card-room__btn card-room__btn--next material-icons expand_more"></div>
      </div>
      <div class = "card-room__dotes"></div>
      <div class = "card-room__content">
        .card-room__info
          .card-room__roomID
            span.card-room__roomNumber= roomNumber
            span.card-room__roomType= roomType
          .card-room__costPerDay
            span.card-room__cost
              +numFormatted(costPerDay)
            span.card-room__costComment= ' в сутки'
        .card-room__vote
          +rating(vote)
          .card-room__votes
            span.card-room__votesNumber= votesNumber
            span.card-room__votesComment= ' Отзывов'
      </div>
    `;

    searchResult.append(card);

  });
};

renderCard(searchResult);
