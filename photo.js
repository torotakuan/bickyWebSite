window.addEventListener('DOMContentLoaded', ajax({
  type: 'GET',
  url: 'https://graph.facebook.com/v8.0/203267225056267?fields=name%2Cmedia.limit(1)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cthumbnail_url%7D&access_token=EAAVeXxsR9D8BACMLIJqnab3hK9NUawN3IPYToCmdQxlAVeVoDkFnFf3JcvAgRrC5ug7UYdnZA7UBbYGaMQs5eI5pNqcckbp5ZA8vZAQMXJAsl60bRB2LdQ6ZBcP7wqDwzR7Eku1ZBr0b9b2gjQUEJAGX9XutW1jSx98H8qwAc9Tzw9ZAuBmDT75pg5H3qL4nqR6qZBxSA4NvQZDZD',
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