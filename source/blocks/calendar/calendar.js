/* eslint-disable */

import './datepicker';
//import 'air-datepicker';


$(function () {

  let isPickerVisible = false;

  const picker = $('#start').datepicker({
    multipleDatesSeparator: ' - ',
    offset: 6,
    minDate: new Date(),
    clearButton: true,
    confirmButton: true,
    navTitles: {
      days: 'MM yyyy',
    },

    prevHtml: '<svg><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z"/></svg>',
    nextHtml: '<svg><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z"/></svg>',

    onSelect: function (fd, d, picker) {
      $('#start').val(fd.split(' - ')[0]);
      $('#end').val(fd.split(' - ')[1]);
    },
    onShow: function(dp, complete) {
      if(complete)
        isPickerVisible = true;
    },
    onHide: function(dp, complete) {
      if(complete)
        isPickerVisible = false;
    },

  }).data('datepicker');

  $('#start,#end').on('click', () => {
    if(isPickerVisible)
      picker.hide();
    else // invisibile
      picker.show();
  });
});