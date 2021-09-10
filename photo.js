$(window).load(function () {
  //facebook-jsonを取得して表示
      var count = 0;
      var limit = 10; //表示件数
      var text = '';
      var data;
      var graph_api = 'https://graph.facebook.com/v4.0/';
      var accessToken = 'YOUR-ACCESS-TOKEN'; EAAVeXxsR9D8BADXRvdsMXOBObjZCEmi50iUgQTtvkmZBaxAYZBGE3f92MhEqgzEF1bi8ibaUBWWw3EBEtfKZBu5PZBt1KWkaNZBod7Hp5NjeSd3crY6Bj2HzmTznrcQshjIKyGtYZAotPOafNLV7D0W5ZAiZA8UliUFHaVEeyGpKZBpLLa6MCCgdO1ZAmBoXy3ZBjiDQNrPw1sPMbFALbBhAV405y11ZCZAgBXhhrATlPj6YsHkjWpKo1W6cHg
      var businessID = 'YOUR-BUSINESS-ID'; 17841434273658865
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


 
