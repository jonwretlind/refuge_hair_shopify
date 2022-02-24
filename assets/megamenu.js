(function() {
  jQuery(window).ready(function( $ ) {
    var megaMenu = $('#Megamenu');
    var wrapper = $('#Megamenu .wrapper');
    var header = $('.header');
    var topMenuItem = $('.header .menu-link');

    topMenuItem.on("mouseenter mouseover", function(event) {
      if ( $(event.target).hasClass("has-children") ) {
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
          height: "300px",
          padding: "20px 50px",
        }, .5, function() {
          wrapper.css('display', 'grid');
        });
      } else {
        menuOff();
      }

      removeActive();

      var classList = $(event.target).attr("class").split(/\s+/);
      var num = Number(classList[1].substr(-1, 1));
      $('.submenu-' + num ).addClass('active');


      if ( $('.header__submenu.icon-menu').hasClass('active') ) {
        $('.megathumb').hide();
        $('#Megamenu .wrapper').addClass('icons-menu');
      } else {
        $('.megathumb').show();
        $('#Megamenu .wrapper').removeClass('icons-menu');
      };
    }); //topMenuItem mouseover

    megaMenu.on("mouseenter", function() {
      header.addClass('active');
    });

    megaMenu.on("mouseleave", function() {
      menuOff();
    });

    function menuOff() {
      header.removeClass('active');
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
    };

    function removeActive() {
      if ( $('.submenu ul').hasClass('active') ) {
        // clear active classes
        $('.submenu ul, summary.active, a.menu-link').removeClass('active');
      }
    };

  }); //document.ready
})()
