/* eslint-disable */

import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min';

$(".js-range-slider").ionRangeSlider({
  type: "double",
  skin: "big",
  min: 100,
  max: 15000,
  hide_min_max: true,
  from: 5000,
  to: 10000,
  //grid: true - scale
  postfix: "₽",
  values_separator: "-",
});