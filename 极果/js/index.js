function ssy() {
    var timer = null;
    timer = setInterval(function () {
        var new_ = new Date('12 12,2020').getTime();
        var now_ = new Date().getTime();
        var err = new_ - now_;


        var _day = Math.floor(err / 24 / 60 / 60 / 1000);
        var _hour = Math.floor(err / 60 / 60 / 1000 % 24);
        var _minute = Math.floor(err / 60 / 1000 % 60);
        var _sec = Math.floor(err / 1000 % 60);

        $('.nav>div p').text('申请时间剩余：' + _day + '天' + _hour + '小时' + _minute + '分' + _sec + '秒');
    },1000)
}
ssy();

$('.clic').on('click', function () {
    $('.clic').css({
        background: 'url(./css/img/loading-icon.gif) no-repeat 440px 0px',
    }).html('正在加载');
})
var inner=document.getElementsByClassName('bottom')[0];
var li_=document.getElementById ('one').getElementsByTagName('li');
var time=null,timer=null;
var index=1;
console.log(li_)
inner.scrollLeft=li_[0].offsetWidth;
function auto(){
    timer=setInterval(function(){
        clearInterval(time);
        index++;
        if(index>=li_.length){
            index=1
            inner.scrollLeft=0;
        };

        var  step=0;
        var max=40;
        var star=inner.scrollLeft;
        var end=li_[0].offsetWidth*index;
        var  evenstep=(end - star)/max;
        time=setInterval(function(){
            step++;
            if(step>=max){
                step=0;
                clearInterval(time);
            };
            star=star+evenstep;
            inner.scrollLeft=star;

        },20)

    },2000)
}
auto();
$('.inner li').hover(function(){
    clearInterval(timer);
    clearInterval(time)
},function(){
    auto();
})
var  up=document.getElementsByClassName('up')[0];
window.onscroll=function(){
    if(document.documentElement.scrollTop===0){
        up.style.display='none'
    }else{
        up.style.display='block'
    }
}