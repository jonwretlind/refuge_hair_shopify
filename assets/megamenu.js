(function() {
  jQuery(document).ready(function( $ ) {
    var shopMenu = $('.list-menu li:first-child');
    var megaMenu = $('#Megamenu');
    var wrapper = $('#Megamenu .wrapper');
    var header = $('.header');
    header.on('scroll', function() {
      if (! $('div#shopify-section-header').hasClass('shopify-section-header-sticky') ) {
        header.css({
          backgroundColor: 'transparent'
        });
      };
    });
    shopMenu.on("mouseover", function() {
      header.css({
      borderBottom: '1px solid rgba(18,18,18,.7)',
      backgroundColor: 'white'
      });
      header.addClass('active');
      megaMenu.css({
        borderBottom: "1px solid rgba(18,18,18,.2)"
      });
      megaMenu.animate({
        transition: "height .2s ease",
        height: "300px",
        padding: "20px 50px",
      }, .5, function() {
        wrapper.css('display', 'grid');
      });
    });
    megaMenu.on("mouseenter", function() {
      header.addClass('active');
    });
    megaMenu.on("mouseleave", function() {
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
    });
  });
})()
