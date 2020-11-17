

$.ajax({
    url: 'http://192.168.1.64:3000/guid/new',
    success: function(res) {
        var arr = res;
        console.log(res);
        var str = doT.template($('#one').text());
        $('#lis').html(str(arr));
    },
    dataType:'json'
})