(function($){

  $.fn.mousenroll = function(custom_options) {
    var $$ = $(this);
    var options = {
      base_css: {
        position: 'relative',
        overflow: 'hidden'
      },
      over_class: 'over',
      over_css: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#333',
        opacity: 0
      },
      opacity_max: 0.85,
      fade_mode: 'swing'
    };
    $.extend(true, options, custom_options);
    
    var $over = $$.find('.' + options.over_class);

    // Events
    $$.each(function() {
      $(this).mouseenter(function() {
        $(this).find('.' + options.over_class).fadeTo(options.fade_mode, options.opacity_max);
        return false;
      });
      $(this).mouseleave(function() {
        $(this).find('.' + options.over_class).fadeTo(options.fade_mode, 0);
        return false;
      });
    });

    var init = function() {
      $$.css(options.base_css);
      $over.css(options.over_css).fadeTo(0, 0);
    }


    init();

  };
})(jQuery);
