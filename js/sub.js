$(function(){

    $("a").click(function(e){
        var attr = $(this).attr("href")

        if(attr == "#" || attr == ""){
            e.preventDefault();
        }
    })


        // 메뉴
        $(".main_menu > li").hover(function(){
            $(this).find(".sub").stop().slideDown();
            $(this).find(".line").stop().show();
            var dd= $(this).index()
            main (dd);
        }, function(){
            $(".main_menu > li").find(".sub").hide();
            $(this).find(".line").stop().hide();
    
        })//hover
    
        function main (n){   
            $(".main_menu > li").eq(n).children(".sub").find("li").each(function(i){
            $(this).find("a").delay(i*200).css({ opacity: 0}).animate({ opacity: 1 },500)
            })
        }//

        // 슬라이드이미지
        var now = 0;
        var img = 2;
        $('.slide_move li').eq(0).siblings().hide();
    
        function slide(){
        if (now == img){
            $('.slide_move li').eq(now).fadeOut(2000);
            $('.slide_move li').eq(0).fadeIn(2000);
            now = 0;
        }else{
            $('.slide_move li').eq(now).fadeOut(2000);
            $('.slide_move li').eq(now+1).fadeIn(2000);
            now++;
            }
        }
        setInterval(slide, 4000);

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

        $(function(){
            $(".cont_menu div ul").click(function(){
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
            })
        })//

        $(".cont_menu div").hover(function(){
            $(this).find(".cont_line").stop().show();
        }, function(){
            $(this).find(".cont_line").stop().hide();
    
        })//hover

        // cont_2 슬라이드
        var num = 0;
        var cBox = $(".cont_box");

        function cImg(dir) {
            // 방향에 따라 num 업데이트
            if (dir === 1) { 
                num++;
                if (num === cBox.length) num = 0;
            } else if (dir === 0) { 
                num--;
                if (num === -1) num = cBox.length-1;
            }

            console.log("이미지순번:" + num);
            

            console.log("이미지집합의 개수:" + cBox.length);
            
            cBox.removeClass("on");
            $(cBox[num]).addClass("on");
        }

        // 이전 버튼 클릭 시
        $(".prev").click(function(e) {
            e.preventDefault();
            cImg(0);
        });

        // 다음 버튼 클릭 시
        $(".next").click(function(e) {
            e.preventDefault();
            cImg(1);
        });


})

