$(function () {


    $(".detail-open-btn").click(function () {
        $(".detail-open-btn").hide()
        $(".detail-section").fadeIn(2000)
        $(".main-sentence").hide()

    })
    $(".detail-close-btn").click(function () {
        $(".detail-section").hide()
        $(".detail-open-btn").show()
        $(".main-sentence").show()
   
    })
});