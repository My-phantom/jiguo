$('.ren').on('click', function () {
    window.open('repertoire.html', '_self');
});
$('.clic').on('click', function () {
    $('.clic').css({
        background: 'url(../css/img/loading-icon.gif) no-repeat 500px 0px',
    })
    $.ajax({
        url: 'http://192.168.1.64:3000/guid/hot',
            success: function(res) {
                var arr = res;
                console.log(res);
                var str = doT.template($('#one').text());
                $('#xx').html(str(arr));
                $('.clic').hide();
            },
            dataType:'json'
    })
});