require(['./js/zepto', './js/swiper_new'], function ($, Swiper) {

    var scrollLayout = $('.layout-flex');

    scrollLayout.find(".list-img-flex").each(function () {
        $(this).css({
            'position': 'relative',
            'float': 'left'
        });
    });

    $.each(scrollLayout,function(index, el) {
        divSwiper = Swiper(scrollLayout[index], {
            auto: 0,
            continuous: false,
            disableScroll: false,
            stopPropagation: true,
            callback: function (index) {
                scrollLayout.parent().find('.box-toggle i').eq(index).addClass("active").siblings("i").removeClass("active");
            }
        });
    });

});