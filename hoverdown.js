var hover_pulldown = function($$) {
  // Initialize the each jquery object
  var init = function() {
    // Set object style
    $$.find('ul').hide();
    $$.find('ul').css({position: 'absolute'});

    // Events
    $$.hover(
      function(){ // over
        $(this).get(0).hoverdown.over();
      },
      function(){ // out
        $(this).get(0).hoverdown.out();
      }
    );

    // Stateful object
    $$.each(function() {
      $(this).get(0).hoverdown = (function($each) {
        var $pulldown_ul = $each.find('ul');
        var $main_button = $each.find('img:first');
        var splitted = $main_button.attr('src').split('.');
        var filename = splitted[0];
        var ext = splitted[1];
        
        return {
          //filename: filename,
          over: function() {
            $main_button.attr('src', filename + '_bk' + '.' + ext);
            $pulldown_ul.show();
          },
          out: function() {
            $main_button.attr('src', filename + '.' + ext);
            $pulldown_ul.hide();
          }
        };
      })($(this));

    });

  };

  return {
    init: init
  };
};
