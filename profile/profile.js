$(function () {


    // $(".detail-open-btn").click(function () {
    //     $(".detail-open-btn").hide()
    //     $(".detail-section").fadeIn(2000)
    //     $(".main-sentence").hide()

    // })
    // $(".detail-close-btn").click(function () {
    //     $(".detail-section").hide()
    //     $(".detail-open-btn").show()
    //     $(".main-sentence").show()
   
    // })
    $(".openbtn").click(function () {
        if ($('.side-menu').css('display') == 'none') {
            // 表示されている場合の処理
         $(this).toggleClass('active');
        $(".side-menu").fadeIn();
        } else {
            // 非表示の場合の処理
            $(this).toggleClass('active');
        $(".side-menu").fadeOut();
        }
        
    });
});
