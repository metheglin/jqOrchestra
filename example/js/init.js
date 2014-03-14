$(function(){
  hover_pulldown($('.hover-pulldown')).init();
  accordable_ul(
    $('.accordable-ul'),
    {
      close: {
        ':self': {
          background: '#00f'
        },
        'span': {
          color: '#000'
        }
      },
      open: {
        ':self': {
          background: '#f00'
        },
        'span': {
          color: '#fff'
        }
      }
    }
  ).init();
});
