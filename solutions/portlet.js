(function($){

$.fn.portlet = function(opts) {
  opts = $.extend({}, $.fn.portlet.defaults, opts || {});

  return this.each(function(){
    var content = $(this),

        visible = 1,

        portlet = $('<div/>', {
          "class" : "portlet"
        }),

        buttons = $('<ul/>', {
          "class" : "buttons"
        }),

        openClose = $('<li/>', {
          "class" : "open-close",
          text : opts.openCloseText[visible]
        }).appendTo(buttons),

        openCloseAll = $('<li/>', {
          "class" : "open-close-all",
          text : opts.openCloseAllText[visible]
        }).appendTo(buttons),

        title = $('<h1/>', {
          "class" : "title",
          text : opts.title
        });

    function toggleVisible(){
      visible = visible ? 0 : 1;
      openClose.text(opts.openCloseText[visible]);
      content[visible ? 'show' : 'hide']();
    }

    content.wrap(portlet);
    content.before(buttons.before(title));

    openClose.click(toggleVisible);
    openCloseAll.click(function() { $(document).trigger('togglePortlet'); });
    $(document).bind('togglePortlet', toggleVisible);
  });
};

$.fn.portlet.defaults = {
  title : 'Portlet',
  openCloseText : [ 'Open', 'Close' ],
  openCloseAllText : [ 'Open All', 'Close All' ]
};

}(jQuery));
