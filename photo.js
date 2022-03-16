
var urls = [];
var accessToken ;
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
  var pw;
  var keys = new Object();

  //cookieから、パスワードが入力されたかの情報を取り出す
  var elements = document.cookie.split(";");
  for ( var element of elements){
    var val = element.split("=");
    keys[val[0]] = val[1];
  }

  if(keys[" key"] == "open"){
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
  //ここまでパスワード関連--------------------------------------------------------------------------------------
  
});

var accessToken = "IGQVJWbTRJZAl9XN0p1ZAmR2V1NCR3lmSHk2VUozV0ZAVZAEY0LTBkcjhsZAjRSUy1mb2FUakttYWFLaS1NbDJfWkdadThYVlRoOWFZAVWN5UlJsblR3WWR3M2o5SGw1bG5xQVhZAaklaY3dn";
//instagram上の全メディアのid,url,media_typeなどを貰ってくる
$.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url&access_token=' + accessToken, getFunc);
//GETリクエストが成功したら下の関数getFuncが実行される（貰ってきたデータは変数myDataに格納されてる）
function getFunc(myData){
  //jsonデータは配列として扱えるので、普段通り配列の要素を一つ一ついじっていく
  for (let i = 0; i < myData.data.length; ++i) {

    //メディアが写真の時の処理 :jsonからmedia_url（写真のURL）を抜き出してurls(画像のURLをまとめておく配列)に入れる
    if(myData.data[i].media_type == 'IMAGE'){
      urls.push(myData.data[i].media_url);

    //メディアがビデオの時の処理 :jsonからthumbnail_url（ビデオのサムネ画像のURL）を抜き出してurls(画像のurlをまとめておく配列)に入れる
    }else if(myData.data[i].media_type == 'VIDEO'){
      urls.push(myData.data[i].thumbnail_url);

    //メディアがアルバムの時の処理　:アルバムは追加でidとURLを貰う必要があるので追加でGET、非同期通信だと実行順がややこしいからこっちは同期通信。
    }else if(myData.data[i].media_type == 'CAROUSEL_ALBUM'){

      //ここからinstagramAPIからアルバム内の写真達のidを貰ってくるおまじない〜
      let request = new XMLHttpRequest();
      request.open('GET', 'https://graph.instagram.com/' + myData.data[i].id + '/children?access_token=IGQVJWcGZARR0ZA2Y0xZAU1JfSHU2bW1mZA25PUjJVT0w5VjY4ZAlBlZAkdjYzV5dkxDTWpzU181TUZAsMGhOVmcwZAUdZARGNfaXNwR1Ewdjh2SGl0UkhuOTNKNEl0bUhfOGJXblM5cHYzc2N3', false);
      request.send(null);
      if (request.status == 200){
        //〜ここまでおまじない

        var childrenText = JSON.parse( request.response );// request.responseに帰ってきたデータが格納されてる。　text形式になってるこれを扱いやすいようにjsonに変換　データの中身は（data:{ id:〜〜〜〜〜 id:〜〜〜〜〜 id:〜〜〜〜〜 id:〜〜〜〜〜}）こんな感じでアルバム内の各写真のidが入ってる
        
        //アルバムの写真のid一つ一つから画像を取得してurls配列に格納
        for(let j = 0; j < childrenText.data.length; ++j){
          var url = getUrl(childrenText.data[j].id);//getUrl(): idからurlを取得する関数（中身は下の行の方に書いてある）
          urls.push(url);
        }
      }
    }
    
  }
  console.log(urls);
  for(let i = 0; i < urls.length; ++i){
    displayImage(urls[i]);
  }
};



//メディアidからメディアのURLを貰ってくる関数
function getUrl(id){
  var url;
  //ここからinstagramAPIからURLを貰ってくるおまじない〜
  let request = new XMLHttpRequest();
  request.open('GET', 'https://graph.instagram.com/' + id + '?fields=media_url&access_token=IGQVJWcGZARR0ZA2Y0xZAU1JfSHU2bW1mZA25PUjJVT0w5VjY4ZAlBlZAkdjYzV5dkxDTWpzU181TUZAsMGhOVmcwZAUdZARGNfaXNwR1Ewdjh2SGl0UkhuOTNKNEl0bUhfOGJXblM5cHYzc2N3', false);
  request.send(null);
  if (request.status == 200){
    //〜ここまでおまじない
    console.log(request.responseText);
    var text = JSON.parse( request.responseText );//stringからJSONに変換
    url = text.media_url;//JSON内のmedia_urlにURLが格納されてるので　変数urlに代入
    console.log(url);
  }
  return url;
}
//画像のurlを引数に渡すと、html上に画像として表示する関数
function displayImage(url){
  var htmlText = '<div class="imgBox"><img src=" ' + url + ' "></div>'
  $('.instagram').append(htmlText);
}

