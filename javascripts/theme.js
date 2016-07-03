(function($) {

  $(document).ready(function() {

$.each($(".wiki, .wiki-edit"), function(i,v){
    var txt = $(v).text();
    for(ci in txt) {
        if (txt.charCodeAt(ci) > 0x600 && txt.charCodeAt(ci) < 0x700) {
            $(v).css("direction", "rtl");
            break;
        }
    }
});

$.each($(".issue .subject a"), function(i,v){
    var txt = $(v).text();
    console.log(txt);
    for(ci in txt) {
        if (txt.charCodeAt(ci) > 0x600 && txt.charCodeAt(ci) < 0x700) {
            $(v).parent().css("direction", "rtl");
            $(v).parent().css("text-align", "right");
            break;
        }
    }
});


    var update = $('#update')
    var close = $("<div>", {'class': "update-close"}).text('x');

    update.prepend(close);
    close.click(function() {
      update.hide();
    });

    // toggleFieldset();
    $('#update fieldset.tabular legend').click(function() {
      $(this).closest('fieldset').toggleClass('show-children');
    });
  });

})(jQuery);
