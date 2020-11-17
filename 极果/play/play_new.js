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
            background: 'url(../css/img/loading-icon.gif) no-repeat 500px 0px',
        }).html('正在加载')
        
        $.ajax({
            url:'http://192.168.1.64:3000/play/new',
            success:function(res){
                $('.clic').hide();
                var data=res[0];
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
    
    })
   
    