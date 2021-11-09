window.contact = window.contact || {};
window.contact.checkValidation = function(){
    if(!$('input[id="name"]').val() || !$('input[id="email"]').val() || !$('input[id="age"]').val() ||!$('input[id="male"]').val() ||!$('input[id="female"]').val() ||!$('select[id="conduct-contents"]').val() ||!$('textarea[id="message"]').val()){
        $('input[id=submit]').attr('disabled', 'disabled');
        return false;
    }

    $('input[id="submit"]').removeAttr('disabled');
    return true;
}

window.contact.send = function(){
    var name = $('input[id="name"]').val() 
    var email = $('input[id="email"]').val() 
    var age=$('input[id="age"]').val() 
    var male = $('input[id="male"]').val()
    var female=$('input[id="female"]').val() 
    var conduct=$('select[id="conduct-contents"]').val() 
    var message = $('textarea[id="message"]').val()
    data = {
        name: name,
        email: email,
        age:age,
        male: male,
        female: female,
        conduct:conduct,
        message: message,
    }
    window.contact.ajax(data);
}

window.contact.ajax = function(data){
    var url = 'https://script.google.com/macros/s/AKfycbyrx4euxRNW6kremix8VJ4YXie6H3HKjt87UApihsZuPVlr6kk8wYqNj9kZI_I4a1pu/exec'; // Change here: Your GAS URL here
    $.ajax({
        url: url,
        type:'POST',
        data: data
    }).done(function(res){
        if(res.response != "success") {
            console.log(JSON.stringify(res.error));
            alert('送信失敗'); 
            return;
        }
        alert('送信完了');
    }).fail(function(){
        alert('送信失敗'); 
    }).always(function(){
        location.href="./contact.html";
    })
}
$(function(){
    //こっからパスワード関連--------------------------------------------------------------------------------------
    var pw;
    if(document.cookie == "key=open"){
        $(".filter").fadeOut();
    }else{
        pw = prompt("パスワードを入れて下さい。"+document.cookie,"");
        if (pw == "bicky"){
        document.cookie = "key=open";
        $(".filter").fadeOut();
        }else{
        alert("パスワードが違います！");
        }
    }
    //ここまでパスワード関連--------------------------------------------------------------------------------------
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
});
