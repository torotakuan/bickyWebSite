$(function(){
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');


});

$.ajax({
type: 'GET',
url: 'https://graph.facebook.com/v8.0/17841434273658865?fields=name%2Cmedia.limit(5)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cthumbnail_url%7D&access_token=EAAVeXxsR9D8BADxFfQJ2zC1wqdUmWpyv6IBhX00ZCQ1X8MNReOAzkhJHNeWTGD32srpnOv7M1OgZCXJiORNzgDSiZCliObsXPViP6I8X7K0Rvo1Ujf8hBqoZB8sf2EbXyVKtgsJPNVrJcOmBuZChrDniQV9x3fVf2gK54Gadv9Vb3FAQmFPfN',
dataType: 'json',
 success: function(json) {
var ig = json.media.data;
var html = "";
for (var i = 0; i < ig.length; i++) {
var link = ig[i].permalink;
var image
if(!ig[i].thumbnail_url) {
// 動画の場合はこちら
image = ig[i].media_url;}
else {
// 写真の場合はこちら
image = ig[i].thumbnail_url;
}
html += '<div><a href="' + link + '" target="_blank"><img src="' + image + '"></a></div>'
}
$(".instagram").append(html);
}
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


  
