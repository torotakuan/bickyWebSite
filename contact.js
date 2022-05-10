<<<<<<< HEAD
window.contact = window.contact || {};
window.contact.checkValidation = function () {
    
    if(!$('input[id="name"]').val() || !$('input[id="email"]').val() || !$('input[id="age"]').val() ||!$('input[id="male"]').val() ||!$('input[id="female"]').val() ||!$('select[id="conduct-contents"]').val() ||!$('textarea[id="message"]').val()){
        $('input[id=submit]').attr('disabled', 'disabled');
        
=======
const error = {
    empty : false,//空欄の有る無し
    email : false//メールが使用可能なものか
};
var submited = false;
var loading = false;
window.contact = window.contact || {};//グローバルのオブジェクトとしてcontactを宣言し、contactの中身が空の場合は中身を空のオブジェクトにしておく
window.contact.checkValidation = function(){
    //未記入のinput要素に対してemptyクラスを付与&削除　、１つでも未記入ならerror.emptyをtrueに
    var $inputs = [$('input[id="name"]'),$('input[id="email"]'),$('textarea[id="message"]')];

    error.empty = false;
    $(".empty-error").html("");
    
    $inputs.forEach(elem => {
        if(!elem.val()){
            error.empty = true;
            $('input[id=submit]').addClass('disabled');
            if(submited){
                elem.addClass('error');
                $(".empty-error").html("未記入の必須項目があります");
            }
        }else{
            elem.removeClass('error');
        }
    });

    const regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;//使用可能なメールアドレスかの条件
    const email = $('input[id="email"]').val();
    if(email){//emailに入力がある場合
        if (!regex.test(email)){//使用可能なメールアドレスかチェック
            error.email = true;
            $(".email-error").html("使用不可能なメールアドレスです");
            $('input[id="email"]').addClass('error');
        }else{
            error.email = false;
            $(".email-error").html("");

        }
    }

    if(error.empty || error.email){//エラーが１つでもあるならばfalseを返してここより下の処理は行わない
>>>>>>> c17d2e9965f0a7da7c9638b411fa5b2c4ba16c89
        return false;
    } 

    $('input[id="submit"]').removeClass('disabled');
    return true;
}


$(document).on('click', '.submit',function(){
    window.contact.checkValidation();
    if(error.empty || error.email){
        console.error('error');
        submited = true;
        window.contact.checkValidation();
        return;
    }
    loading = true;
    $('.loader').css("display","inline-block");
    $('.spinner').css('display','inline-block');
    $('.loader p').html('送信中');
    var name = $('input[id="name"]').val() 
    var email = $('input[id="email"]').val() 
    var age=$('input[id="age"]').val() 
    var gender = $('input:radio[name="gender"]:checked').val();
    var contact=$('select[id="contact-contents"]').val() 
    var message = $('textarea[id="message"]').val()
    
    data = {
        name: name,
        email: email,
        age: age,
        gender: gender,
        contact: contact,
        message: message,
    }

    window.contact.ajax(data);
    $('.exclamation').css('display','none');
    $('.check').css('display','none');

});


window.contact.ajax = function(data){
    var url = 'https://script.google.com/macros/s/AKfycbx4SaEEjnNtUKUgbyCY3XxPoq0fpBhOxhOm-4bI8ANBeHeaqi1r_tuVC0f0ER8HR2_a/exec'; // Change here: Your GAS URL here
    $.ajax({
        url: url,
        type:'POST',
        data: data
    }).done(function(res){
        $('.spinner').css('display','none');
        if(res.response != "success") {
            console.log(JSON.stringify(res.error));
            $('.loader p').html('送信失敗');
            $('.exclamation').css('display','inline-block');
            return;
        }
        $('.loader p').html('送信完了');
        $('.check').css('display','inline-block');
    }).fail(function(){
        $('.spinner').css('display','none');
        console.log("flag2");
        $('.loader p').html('送信失敗');
        $('.exclamation').css('display','inline-block');
    }).always(function(){
        // location.href="./contact.html";
        loading = false;
    })
}
$(function(){
    $('.loader').click(function(){
        console.log('clicked')
        console.log(loading)
        if(!loading){
            location.href="./contact.html";
        }
    });
    /*
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
    */
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