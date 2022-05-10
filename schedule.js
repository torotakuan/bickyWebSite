
$(".fc-button").on("click", function(){
    if($(window).width() < 750){
        console.log("clicked");
        let dateText = $(".fc-center h2").html();
        dateText = dateText.replace("年","年<br>");
        $(".fc-center h2").html(dateText);
        $(".fc-today-button").css("display","none");
    }
    
});