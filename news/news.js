

$(function(){

  //こっからメニューボタン関連--------------------------------------------------------------------------------------
  var open = false;
  $(".openbtn").click(function () {
    if(!open){
      $(this).toggleClass('active');
      $(".side-menu").fadeIn();
      open = true;
    }else{
      $(this).toggleClass('active');
      $(".side-menu").fadeOut();
      open = false;

    }
    
  });
  //ここまでメニューボタン関連--------------------------------------------------------------------------------------

  //こっからパスワード関連--------------------------------------------------------------------------------------
  // var pw;
  // var keys = new Object();

  // //cookieから、パスワードが入力されたかの情報を取り出す
  // var elements = document.cookie.split("; );
  // for ( var element of elements){
  //   var val = element.split("=");
  //   keys[val[0]] = val[1];
  // }

  // if(keys["key"] == "open"){
  //   $(".filter").fadeOut();
  // }else{
  //   pw = prompt("このページは工事中です パスワードを入れて下さい"  ,"");
  //   if (pw == "bicky"){
  //     document.cookie = "key=open";
  //     $(".filter").fadeOut();
  //   }else{
  //     alert("パスワードが違います！");
  //   }
  // }
  //ここまでパスワード関連--------------------------------------------------------------------------------------
  
});