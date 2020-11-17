$('.new_').on('click',function(){
    window.open('play_new.html','_self')
});
$('.hot_').on('click',function(){
    window.open('play_hot.html','_self')
});
$('.cl_').on('click',function(){
    window.open('play_cl.html','_self')
});



$('.clic').on('click',function(){
    $('.clic').css({
        background: 'url(../css/img/loading-icon.gif) no-repeat 440px 0px',
    }).html('正在加载')
    

})

