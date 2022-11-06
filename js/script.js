function countDown(){
    let today=new Date();
    let eventDate=new Date(2022, 10, 14,10,00,00);
    const t = eventDate.getTime() - today.getTime();
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    console.log(days);
    const hours=Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes=Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds=Math.floor((t % (1000 * 60)) / 1000);
    let d="day";
    if (days>1){
        d="days";
    }
    let h="hour";
    if (hours>1){
        h="hours";
    }
    else{
        h="hour";
    }
    let m="minute";
    if (minutes>1){
        m="minutes";
    }
    else{
        m="minute";
    }
    let s="second";
    if (seconds>1){
        s="seconds";
    }
    else{
        s="second";
    }

    document.getElementById("day").innerHTML=days+' '+d;
    document.getElementById("hour").innerHTML=hours+' '+h;
    document.getElementById("minute").innerHTML=minutes+' '+m;
    document.getElementById("second").innerHTML=seconds+' '+s;

    if(t<=0){
        clearInterval(countDown);
        document.getElementById("day").innerHTML="Registration Closed";
    }
}

setInterval(countDown, 1000);


function visible(partial){
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible')); 
}
$(window).scroll(function() {

    if(visible($('.count-digit'))){
        if($('.count-digit').hasClass('counted')){
            console.log($('.count-digit'));
            return;
        }
        $('.count-digit').addClass('counted');
        $('.count-digit').each(function(){
            var $this=$(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
    });
});
}
});

jQuery(function($){
    var doAnimations=function(){
        var offset=$(window).scrollTop()+$(window).height(),
        $animatables=$('.animatable');
        if($animatables.length==0){
            $(window).off('scroll',doAnimations);
        }
        $animatables.each(function(i){
            var $animatable=$(this);
            if(($animatable.offset().top+$animatable.height()-20)<offset){
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
    };
    $(window).on('scroll',doAnimations);
    $(window).trigger('scroll');
});