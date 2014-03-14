var accordable_ul = function(/* jquery_object=*/ $$) {
  var init = function() {
    $li = $$.find('li');
    // Set object style
    $li.find('ul').hide();

    // Events
    $li.click(function(){
      $child_ul = $(this).children('ul');
      if ( $child_ul.is(':visible') ) { // close
        $child_ul.animate({height: 'hide'}, 100, 'swing', function(){
          $(this).hide();
        });
      } else { // open
        $child_ul.animate({height: 'show'}, 100, 'swing').show();
      }
    });

  };

  return {
    init: init
  };
};
