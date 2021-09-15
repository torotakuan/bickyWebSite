$(function(){
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');


});

  // 取得した情報をHTMLに反映
  function DomEdit(_fbObj) {
    var elmText = document.querySelector('#app-text') || false
    var elmImg = document.querySelector('#app-img') || false
    var noImgSrc = 'https://www.rakumachi.jp/images/frontend/smartphone/nophoto_thumbnail.png'
    if (_fbObj) {
      if (elmText) {
        var text = _fbObj.posts.data[0].message || false
        if (text) {
          elmText.textContent = text
        } else {
          elmText.textContent = '本文が無いです。'
        }
      }
      if (elmImg) {
        var src = _fbObj.posts.data[0].full_picture || false
        if (src) {
          elmImg.setAttribute('src', src)
        } else {
          elmImg.setAttribute('src', noImgSrc)
        }
      }
    }
  }

  // AjaxとAPIで情報を取得
  function GetFacebook() {
    var data;
    var graph_api = 'https://graph.facebook.com/v7.0/me';
    var param = '?fields=posts{message, full_picture}';
    var token = EAAVeXxsR9D8BACMLIJqnab3hK9NUawN3IPYToCmdQxlAVeVoDkFnFf3JcvAgRrC5ug7UYdnZA7UBbYGaMQs5eI5pNqcckbp5ZA8vZAQMXJAsl60bRB2LdQ6ZBcP7wqDwzR7Eku1ZBr0b9b2gjQUEJAGX9XutW1jSx98H8qwAc9Tzw9ZAuBmDT75pg5H3qL4nqR6qZBxSA4NvQZDZD;
    $.ajax({
        url: graph_api + param + '&access_token=' + token
      })
      .done(function (res) {
        data = res.data;
      })
      .fail(function (jqXHR, status) {
        console.log(status)
      })
      .always(function (res) {
        console.log(res)
        DomEdit(res)
      });
  }
  window.addEventListener('load', () => {
    GetFacebook()
  }) 


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
var msg = 'hello world';
console.log(msg);

  
