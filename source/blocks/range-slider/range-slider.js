/* eslint-disable */

import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min';

const $range = $('.js-range-slider');
const $valueFrom = $('.range-slider__value--from');
const $valueTo = $('.range-slider__value--to');

let instance;
let min = 0;
let max = 15000;
let from = $valueFrom.val();
let to = $valueTo.val();

$range.ionRangeSlider({
  type: 'double',
  skin: 'big',
  min: min,
  max: max,
  hide_min_max: true,
  hide_from_to: true,
  from: from,
  to: to,
  //postfix: '₽',
  //values_separator: '-',
  onStart: updateValues,
  onChange: updateValues,
});

instance = $range.data('ionRangeSlider');

function updateValues(data) {
  from = data.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  to = data.to.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  $valueFrom.prop("value", from);
  $valueTo.prop("value", to);
};