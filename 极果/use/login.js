//用户
if (localStorage.getItem('miss') == 'true') {
    $('#tel').val(localStorage.getItem('username'));
    $('#password').val(localStorage.getItem('password'));
<<<<<<< HEAD
    // $('.loadGiet').is(':checked');
    $('.loadGiet').attr('checked',true);
    window.open('../index.html');

=======
    $('.loadGiet').attr('checked', true);
    window.open('../index.html');
>>>>>>> 473efbd9e99a2adbbe2439580204f1942da09eb2
}
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
                if ($('.loadGiet').is(':checked')) {
                    localStorage.setItem('username', $('#tel').val());
                    localStorage.setItem('password', $('#password').val());
                    localStorage.setItem('miss', $('.loadGiet').is(':checked'))
                } else {
                    localStorage.clear();
                    window.open('../index.html');
                }

            }
        },
        dataType: 'json'
    })
    return false;
}) 