$.ajax({
  type: 'GET',
  url: 'https://graph.facebook.com/v8.0/【InstagramビジネスアカウントID】?fields=name%2Cmedia.limit(【表示したい画像数】)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cthumbnail_url%7D&access_token=【アクセストークン】',
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


 
