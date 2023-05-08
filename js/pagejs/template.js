
// 页面滚动
function pageScroll() {
    var start_hight = 0;
    $(window).on('scroll', function () {
        var end_hight = $(window).scrollTop();
        var distance = end_hight - start_hight;
        start_hight = end_hight;
        var $header = $('#header');
        if (distance > 0 && end_hight > 50) {
        $header.hide();
        } else if (distance < 0) {
        $header.show();
        } else {
        return false;
        }
    })
    }
    // 回到顶部
    function scrollToTop() {
    $("#totop-toggle").on("click", function (e) {
        $("body").animate({scrollTop: 0}, 200);
    });
    }