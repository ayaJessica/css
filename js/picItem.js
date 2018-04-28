require(['./js/zepto', './js/swiper_new'], function ($, Swiper) {

    var scrollLayout = $('.scroll-layout-app');
    var divSwiper;

    scrollLayout.find(".item-list").each(function () {
        $(this).css({
            'position': 'relative',
            'float': 'left'
        });

    });
    //console.log(scrollLayout.width())
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