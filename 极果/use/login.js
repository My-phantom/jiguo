//用户
var pass=$('#password').val()-0;
$('#loginform').on('submit', function () {
    $.ajax({
        url: 'http://192.168.1.64:3000/users/login',
        type: 'post',
        data: {
            username: $('#tel').val(),
            password: $('#password').val(),
        },
        success: function (res) {
            console.log(res)
            if (res.msg == '登录成功！') {
                window.open('http://127.0.0.1:5500/index.html');
            }
        },
        dataType: 'json'
    })
    return false;
}) 