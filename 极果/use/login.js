//用户
$('#loginform').on('submit', function () {
    $.ajax({
        user: 'http://192.168.1.64:3000/users/login',
        type: 'post',
        data: {
         
            username: $('#tel').val(),
            password:$('#password').val()
        },
        success: function (res) {
            console.log(res)
        },
        dataType:'json'
    })
    return false;
})