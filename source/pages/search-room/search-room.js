import * as $ from 'jquery';

import '../../blocks/header/header';

import '../../blocks/calendar/calendar';
import '../../blocks/dropdown/dropdown';
import '../../blocks/range-slider/range-slider';
import '../../blocks/checkbox-list/checkbox-list';

import './search-room.scss';

/*
const roomBase = require('./room-base.json');

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
      roomPhoto,
      roomType,
      costPerDay,
      currency,
      vote,
      votesNumber,
    } = item;

    const costFormatted = costPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&#160;') + currency;

    const card = document.createElement('li');
    card.className = 'card-room';
    card.innerHTML = `
      <div class = "card-room__img img--base">
        <div class = "card-room__btn card-room__btn--prev material-icons expand_more"></div>
        <div class = "card-room__btn card-room__btn--next material-icons expand_more"></div>
      </div>
      <div class = "card-room__dotes"></div>
      <div class = "card-room__content">
        <div class = "card-room__info">
          <div class = "card-room__roomID">
            <span class = "card-room__roomNumber">${roomNumber}</span>
            <span class = "card-room__roomType">${roomType}</span>
          </div>
          <div class = "card-room__costPerDay">
            <span class = "card-room__cost">${costFormatted}</span>
            <span class = "card-room__costComment"> в сутки</span>
          </div>
        </div>
        <div class = "card-room__vote">
          +rating(vote)
          <div class = "card-room__votes">
            span.card-room__votesNumber= votesNumber
            span.card-room__votesComment= ' Отзывов'
      </div>
    `;

    searchResult.append(card);
  });
};

renderCard(roomBase);
*/
