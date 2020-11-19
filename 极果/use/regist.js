var num=60;
var time=null;
$('.huo').on('click',fn);
function fn(){
    time=setInterval(function(){
        $('.huo').css('pointer-events', 'none');
        num--;
        if(num<=0){
            clearInterval(time);
            $('.huo').html('获取验证码');
            $('.huo').css('pointer-events','auto')
            num=60;
        }else{
            $('.huo').html(num+'后获取验证码')
        }
    },1000)
}

$('.text').on('blur',function(){
    if($('.text').val() == ''){
       $(this).css('border','1px solid red');
        $('.pho').show().text('手机号不能为空')
     
    }else{
        $(this).css('border','none');
        $('.pho').hide().text('')
    }
})
$('.picture').on('blur',function(){
    if($('.picture').val() == ''||$('.picture').val() !='r2b7'){
        $(this).css('border','1px solid red');
         $('.yz').show().text('请输入校验码')
      
     }else{
         $(this).css('border','none');
         $('.yz').hide().text('')
     }
});
$('.username').on('blur',function(){
    if($('.username').val() == ''){
        $(this).css('border','1px solid red');
         $('.user').show().text('用户名为4-8位数字字母下划线')
      
     }else{
         $(this).css('border','none');
         $('.user').hide().text('')
     }
});
$('.password').on('blur',function(){
    if($('.password').val() == ''){
        $(this).css('border','1px solid red');
         $('.pass').show().text('请输入6-12位数字字母下划线')
      
     }else{
         $(this).css('border','none');
         $('.pass').hide().text('')
     }
});
$('.copypass').on('blur',function(){
    if($('.copypass').val() != $('.password').val()){
        $(this).css('border','1px solid red');
         $('.copyp').show().text('两次密码不一致')
      
     }else{
         $(this).css('border','none');
         $('.copyp').hide().text('')
     }
});
$('#zcform').on('submit',function(){
    $.ajax({
        url: 'http://192.168.1.64:3000/users/register',
        type: 'post',
        data: {
            phone: $('.text').val(),
            code: $('.picture').val(),
            username: $('.username').val(),
            pass: $('.password').val()
        },
        success: function (res) {
            console.log(res);
            if (res.msg == '注册成功！') {
                window.open('login.html');
            }
        },
        dataType: 'json'
    });
    return false;
})