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
    var token = 'EAAVeXxsR9D8BACMLIJqnab3hK9NUawN3IPYToCmdQxlAVeVoDkFnFf3JcvAgRrC5ug7UYdnZA7UBbYGaMQs5eI5pNqcckbp5ZA8vZAQMXJAsl60bRB2LdQ6ZBcP7wqDwzR7Eku1ZBr0b9b2gjQUEJAGX9XutW1jSx98H8qwAc9Tzw9ZAuBmDT75pg5H3qL4nqR6qZBxSA4NvQZDZD';
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
