
(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(".menu__links").slideToggle(500);
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);
// Burger menu
/*$('.hamburger').click(function () {

    $('#navigation#nav_list').slideToggle(500);
    $(this).toggleClass('is-active');

    $('#navigation').toggleClass('open');
});*/
