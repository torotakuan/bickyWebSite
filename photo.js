$(window).load(function () {
  //facebook-jsonを取得して表示
      var count = 0;
      var limit = 10; //表示件数
      var text = '';
      var data;
      var graph_api = 'https://graph.facebook.com/v4.0/';
      var accessToken = 'YOUR-ACCESS-TOKEN'; EAAVeXxsR9D8BAOZB3LpKy9mdlYkefjvUfB7TF780jK7UNnPYLyyO3YWNIZAQGPQXk0bg9XiNwBJjcAwUZBOsP1nhiYkSDRZAC6meQylOfwivbilfZAZBZAqYV9aVMfSTlAZCd8RUEa5znVFl6outpGEq9a5VEGJjDvkqUKc21ZAIgi5etMerRUBK6df5xsZAsO11jZC5bZCHpAQ4EAZDZD
      var businessID = 'YOUR-BUSINESS-ID'; 203267225056267
      var fields = 'media{caption,media_url,permalink,timestamp,username}';
      var url = graph_api + businessID + '?fields=' + fields + "&access_token=" + accessToken;
      $.ajax({
          url: url
      })
      .done(function(res) {
          data = res.media;
          limit = 9;
          count = 0;
          $.each(data, function(index, val) {
              $.each(val, function(i, elem) {
                  if (elem.media_url && count < limit) {
                      text1 = '<li><a href="'+elem.permalink+'" target="_blank">';
                      text2 = '<img src="'+elem.media_url+'">';
                      text3 = '</a></li>';
                      count ++;
                      text = text + text1 + text2 + text3;
                  }
              });
          });
          $('#instagram-list').html(text);
      })
      .fail(function(jqXHR, status) {
          $('#instagram-list').html('<li>読み込みに失敗しました。</li>');
      })
  });
    
  window.addEventListener('load', () => {
    GetFacebook()
  }) 
