$(function(){
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');


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
  //こっからパスワード関連--------------------------------------------------------------------------------------
  /*
  var pw;
  var keys = new Object();

  //cookieから、パスワードが入力されたかの情報を取り出す
  var elements = document.cookie.split("; ");
  console.log(document.cookie);
  for ( var element of elements){
    var val = element.split("=");
    keys[val[0]] = val[1];
  }

  if(keys["key"] == "open" ){
    $(".filter").fadeOut();
  }else{
    pw = prompt("このページは工事中です パスワードを入れて下さい"  ,"");
    if (pw == "bicky"){
      document.cookie = "key=open";
      $(".filter").fadeOut();
    }else{
      alert("パスワードが違います！");
    }
  }
  */
  //ここまでパスワード関連--------------------------------------------------------------------------------------
  var open = false;
  var animateTime = 2000;
  var animateSpeed = 1;
  $('#loader-bg').delay(900*animateSpeed).fadeOut(800*animateSpeed);
  $('#loader').delay(600*animateSpeed).fadeOut(300*animateSpeed);
  $('#wrap').css('display', 'block');

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
    



  
  if($(window).innerWidth()<= 750){
    $(".texts").delay(900*animateSpeed).fadeIn(3500);
    $('#firstLine hr').delay(900*animateSpeed).animate({width:'100%'},animateTime);
    $('#secondLine hr').delay(900*animateSpeed).animate({width:'70%'},animateTime);
    $('#thirdLine hr').delay(900*animateSpeed).animate({width:'47%'},animateTime);
    $('#fourthLine hr').delay(900*animateSpeed).animate({width:'35%'},animateTime);
    $('#fifthLine hr').delay(900*animateSpeed).animate({width:'30%'},animateTime);

 

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
var msg = 'hello world';
console.log(msg);

  
