$.ajax({
  type: 'GET',
  url: 'https://graph.facebook.com/v9.0/17841434273658865?fields=name%2Cmedia.limit(1)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cusername%7D&access_token=EAAVeXxsR9D8BAIeOs6mfE3YXyZBRFNikEmwau4p1zSzTShrwZBVXwwyBszpvh3EqEtT5EyRjZBNZBjwX0FPbTZA9HqXsqIiXfYyXOdVdhX3U2ZBdC1MxzTUs4RQRoGVaKWiYOZBLKxVFdbvgz7dcJEWUwMWIFGECXo03vJTt7aPvYd8YlgybEoUNFJv7fG9IZCFmXSQO1KxPHgZDZD',
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

