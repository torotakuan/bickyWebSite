$(function(){
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');


});

$.getJSON("php/instagram.php", function(instagram_data){

const gallery_data = instagram_data["business_discovery"]["media"]["data"];
let photos = "";
const photo_length = 9;

for(let i = 0; i < photo_length ;i++){
photos += '<li class="gallery-item"><img src="' + gallery_data[i].media_url + '"></li>';
}
$("#gallery").append(photos);

});

$(function(){
  setTimeout('stopload()',3000);
});
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

$(window).load(function () { //全ての読み込みが完了したら実行
  
  var animateTime = 2000;
  var animateSpeed = 1;
  $('#loader-bg').delay(900*animateSpeed).fadeOut(800*animateSpeed);
  $('#loader').delay(600*animateSpeed).fadeOut(300*animateSpeed);
  $('#wrap').css('display', 'block');
  if($(window).innerWidth()<= 750){
    $(".texts").delay(900*animateSpeed).fadeIn(3500);
    $('#firstLine hr').delay(900*animateSpeed).animate({width:'100%'},animateTime);
    $('#secondLine hr').delay(900*animateSpeed).animate({width:'70%'},animateTime);
    $('#thirdLine hr').delay(900*animateSpeed).animate({width:'47%'},animateTime);
    $('#fourthLine hr').delay(900*animateSpeed).animate({width:'35%'},animateTime);
    $('#fifthLine hr').delay(900*animateSpeed).animate({width:'30%'},animateTime);


    
    $("#side-menu-btn").click(function(){

      $(".side-menu").fadeIn();
    

    });

    $(".side-menu-top").click(function(){

      $(".side-menu").fadeOut();


    });
    $("#bar-icon2").click(function(){

      $(".side-menu").fadeIn();
    });
  }else{
    $(".container").delay(900*animateSpeed).fadeIn(3500);
    $('#firstLine hr').delay(900*animateSpeed).animate({width:'85%'},animateTime);
    $('#secondLine hr').delay(900*animateSpeed).animate({width:'60%'},animateTime);
    $('#thirdLine hr').delay(900*animateSpeed).animate({width:'40%'},animateTime);
    $('#fourthLine hr').delay(900*animateSpeed).animate({width:'30%'},animateTime);
    $('#fifthLine hr').delay(900*animateSpeed).animate({width:'25%'},animateTime);

    $("#side-menu-btn").click(function(){
      $(".side-menu").fadeIn();
    });

    $(".side-menu-top").click(function(){

      $('.side-menu').fadeOut();

    });
    
  }
});


  
