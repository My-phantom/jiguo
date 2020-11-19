
$('.report-new-text>a').on('click',function(){
    $('.report-new-text a').removeClass();
    $(this).toggleClass('col')
})
$('.new').on('click',function(){
    $('.report-img').show();
    $('.report-img_').hide();

})
$('.hot').on('click',function(){
    $('.report-img').hide();
    $('.report-img_').show();

})



$.ajax({
    url:'http://192.168.1.64:3000/report/new',
    success:function(res){
        $('.clic').hide();
        var data=res;
        var dot_tem=doT.template($('#new').text());
        $('#list').html(dot_tem(data))
        console.log(data)
    },
    error:function(err){
            console.log(err);
          },
    timeout:3000,

    dataType:'json'
})