const error = {
    empty : false,//空欄の有る無し
    email : false//メールが使用可能なものか
};
window.contact = window.contact || {};//グローバルのオブジェクトとしてcontactを宣言し、contactの中身が空の場合は中身を空のオブジェクトにしておく
window.contact.checkValidation = function(){
    //.valの中身に１つでもnull、空白がある場合    （if文の中身: .valの中身がないとfalse判定になる仕様のため、!をつけて、.valの中身がない場合にtrue判定にさせる）
    if(!$('input[id="name"]').val() || !$('input[id="email"]').val() || !$('input[id="age"]').val() ||!$('input:radio[name="gender"]:checked').val() ||!$('select[id="conduct-contents"]').val() ||!$('textarea[id="message"]').val()){
        $('input[id=submit]').attr('disabled', 'disabled');
        error.empty = true;
        $(".empty-error").html("未記入の項目があります");
    }else{
        $(".empty-error").html("");
        error.empty = false;
    }


    const regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;//使用可能なメールアドレスかの条件
    const email = $('input[id="email"]').val();
    if(email){//emailに入力がある場合
        if (!regex.test(email)){//使用可能なメールアドレスかチェック
            error.email = true;
            $(".email-error").html("使用可能なメールアドレスを入力してください");
        }else{
            error.email = false;
            $(".email-error").html("");

        }
    }

    if(error.empty || error.email){//エラーが１つでもあるならばfalseを返してここより下の処理は行わない
        return false;
    }

    $('input[id="submit"]').removeAttr('disabled');
    return true;
}

window.contact.send = function(){
    var name = $('input[id="name"]').val() 
    var email = $('input[id="email"]').val() 
    var age=$('input[id="age"]').val() 
    var gender = $('input:radio[name="gender"]:checked').val();
    var conduct=$('select[id="conduct-contents"]').val() 
    var message = $('textarea[id="message"]').val()
    data = {
        name: name,
        email: email,
        age: age,
        gender: gender,
        conduct: conduct,
        message: message,
    }
    window.contact.ajax(data);
}

window.contact.ajax = function(data){
    var url = 'https://script.google.com/macros/s/AKfycbx4SaEEjnNtUKUgbyCY3XxPoq0fpBhOxhOm-4bI8ANBeHeaqi1r_tuVC0f0ER8HR2_a/exec'; // Change here: Your GAS URL here
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
