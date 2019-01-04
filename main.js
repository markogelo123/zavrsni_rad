    $(document).mousemove(function(a){
    $("#cursor").css({left:a.pageX, top:a.pageY})
    });
    $(document).scroll(function(e){
        var currentScrollPosition = $(this).scrollTop(); 
        if(currentScrollPosition === 0){
            $("#header").css({"background":"transparent"})
        } else{
            $("#header").css({"background-color":"white"})
        }
        if(currentScrollPosition > 300){
            $("#mid2").css({"opacity": "1"});
        }
        if(currentScrollPosition > 750){
            $("#ideas1").css({"opacity": "1"});
        }
        if(currentScrollPosition > 1400){
            $("#ideas2").css({"opacity": "1"});
        }
    });
    $(document).ready(function(){
        $("#join").mouseenter(function(){
            $("#cursor").css({"width": "60px", "height":"60px", "opacity":"0.3","border-radius":"0%"});
        });
        $("#join").mouseleave(function(){
            $("#cursor").css({"width": "40px", "height":"40px", "opacity":"1","border-radius":"50%"})
        });
        $("button").mouseenter(function(){
            $("#cursor").css({"width": "60px", "height":"60px", "opacity":"0.3","border-radius":"0%"});
        });
        $("button").mouseleave(function(){
            $("#cursor").css({"width": "40px", "height":"40px", "opacity":"1","border-radius":"50%"})
        });
        $("i").mouseenter(function(){
            $("#cursor").css({"width": "60px", "height":"60px", "opacity":"0.3","border-radius":"0%","z-index":"2"});
        });
        $("i").mouseleave(function(){
            $("#cursor").css({"width": "40px", "height":"40px", "opacity":"1","border-radius":"50%"})
        })
    });
    