var accordable_ul = function(/* jquery_object=*/ $$, /* css=*/ css) {

  var init = function() {
    $li = $$.find('li');
    // Set object style
    $li.find('ul').hide();

    // Events
    $li.click(function(){
      $child_ul = $(this).children('ul');
      if ( $child_ul.is(':visible') ) { // close
        // css change
        if ( typeof css != 'undefined' && typeof css.close != 'undefined' ) {
          for ( var selector_str in css.close ) {
            var  $selector = $(this);
            if ( selector_str != ':self' ) {
              $selector = $(this).find(selector_str);
            }
            $selector.css(css.close[selector_str]);
          }
        }

        // animation
        $child_ul.animate({height: 'hide'}, 100, 'swing', function(){
          $(this).hide();
        });
      } else { // open
        // css change
        if ( typeof css != 'undefined' && typeof css.close != 'undefined' ) {
          for ( var selector_str in css.open ) {
            var $selector = $(this);
            if ( selector_str != ':self' ) {
              $selector = $(this).find(selector_str);
            }
            $selector.css(css.open[selector_str]);
          }
        }
        
        // animation
        $child_ul.animate({height: 'show'}, 100, 'swing').show();
      }
    });

  };

  return {
    init: init
  };
};
