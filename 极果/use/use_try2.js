
$('.new_').on('click',function(){
    window.open('use_try1.html','_self')
});
$('.rep').on('click',function(){
    window.open('use_try2.html','_self')
});
$('.try').on('click',function(){
    window.open('use_try_re.html','_self')
});
$('.end').on('click',function(){
    window.open('use_tr_end.html','_self')
});
$('.new_').on('click',function(){
    window.open('use_try1.html','_self')
})
$('.hot_').on('click',function(){
    window.open('use_exc.html','_self')
})

$('.clic').on('click',function(){
    $('.clic').css({
        background: 'url(../css/img/loading-icon.gif) no-repeat 450px 0px',
    }).html('正在加载')
    
    $.ajax({
        url:'http://192.168.1.64:3000/useing/master',
        success:function(res){
            $('.clic').hide();
            // var data=res[1];
            var dot_tem=doT.template($('#new').text());
            $('#list').html(dot_tem(res))
            console.log(res)
        },


        dataType:'json'
    })

})

