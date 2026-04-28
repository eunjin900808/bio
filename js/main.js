$(function(){

    // 메뉴
    $(".main_menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(this).find(".line").stop().show();
        var dd= $(this).index()
        main (dd);
        // $(this).find(".sub li a").delay().slideDown(1000)
        // .css({ opacity: 0}).delay().animate({ opacity: 1 });
    }, function(){
        $(".main_menu > li").find(".sub").hide();
        $(this).find(".line").stop().hide();

    })//hover

    function main (n){   
        $(".main_menu > li").eq(n).children(".sub").find("li").each(function(i){
        $(this).find("a").delay(i*200).css({ opacity: 0}).animate({ opacity: 1 },500)
        })
    }//


    // // 슬라이드이미지
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: true,
        pause: 4000,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<img src="img/free-icon-right.png" alt="free-icon-right">',
        prevText: '<img src="img/free-icon-left.png" alt="free-icon-left">',
        pagerCustom: '#bx-pager'
    });

    // 
    $('.slick_slide').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });


    $("a").click(function(e){
        var attr = $(this).attr("href")

        if(attr == "#" || attr == ""){
            e.preventDefault();
        }
    })


    //언어 메뉴

    $(".lang").hover(function(){
        $(this).find(".lang_sub").stop().slideDown();
    }, function(){
        $(".lang").find(".lang_sub").stop().slideUp();
    })


        $(".m-btn").click(function(){
            $(".m_right").fadeToggle();
            $('.m_right_menu').toggleClass("on");
            $(".m-btn, .m_cursor").toggleClass("act");
    
    })//click


    $(".m_menu > li").click(function(){
        
        if($(this).hasClass("act1") ){
            $(".m_menu > li").removeClass("act1")
            $(".m_sub").stop().slideUp();
            $(".m-sub_btn").stop().removeClass("on");            
            $(this).find(".m_sub").stop().slideUp()
            $(this).find(".m-sub_btn").stop().removeClass("on");
            
        }else{
            $(this).addClass("act1");
            $(".m_sub").stop().slideUp();
            $(".m-sub_btn").stop().removeClass("on");
            $(this).find(".m_sub").stop().slideDown()
            $(this).find(".m-sub_btn").stop().addClass("on");            
        }

    })

    $(function(){
        AOS.init({
            duration:800,
            easing:'ease-in-out',
            delay:0,
            offset:100
        })
    })//j end
})

