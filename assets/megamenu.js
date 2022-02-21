(function() {
  jQuery(document).ready(function( $ ) {
    var megaMenu = $('#Megamenu');
    var wrapper = $('#Megamenu .wrapper');
    var header = $('.header');
    var topMenuItem = $('.top-menu li.menu a.menu-link');

    topMenuItem.on("mouseover", function(event) {
      header.css({
      borderBottom: '1px solid rgba(18,18,18,.7)',
      backgroundColor: 'white'
      });
      header.addClass('active');
      $(event.target).parent().addClass('active');
      megaMenu.css({
        borderBottom: "1px solid rgba(18,18,18,.2)"
      });
      megaMenu.animate({
        transition: "height 1s ease",
        height: "350px",
        padding: "20px 50px",
      }, .5, function() {
        wrapper.css('display', 'grid');
      });
    });
    megaMenu.on("mouseenter", function() {
      header.addClass('active');
    });
    megaMenu.on("mouseleave", function() {
      menuOff();
    });
    topMenuItem.on('mouseenter', function( event ) {
      if ( $(event.target).hasClass('has-children') ) {
        removeActive();
        var classList = $(event.target).attr("class").split(/\s+/);
        var num = Number(classList[1].substr(-1, 1));
        $('.submenu-' + num ).addClass('active');
      } else  {
        menuOff();
      };
    });


    function menuOff() {
      header.removeClass('active');
      //removeActive();
      header.css({
      borderBottom: '1px solid transparent',
      borderBottom: "unset"
      });
      megaMenu.css({
        borderBottom: "unset"
      });
      megaMenu.animate({
        height: "0px",
        padding: "0px 50px"
      }, .5, function() {
        wrapper.css('display', 'none');
      });
    }

    function removeActive() {
      if ( $('.submenu ul').hasClass('active') ) $('.submenu ul, summary.active').removeClass('active'); // clear active classes
    }

  }); //document.ready
})()
