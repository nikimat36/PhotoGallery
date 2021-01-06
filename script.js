        count = 0;
        $('.left').click(function(){
            count -= 45;
            $('.box').css("transform", "perspective(1400px) rotateX(" + count + "deg)");
            $('.box').css("transition", "transform 1.5s ease-out");

        });

        $('.right').click(function(){
            count += 45;
            $('.box').css("transform", "perspective(1400px) rotateX(" + count + "deg)");
            $('.box').css("transition", "transform 1.5s ease-out");
        });


        $('button').click(function(){
            obrazkyOpacity();
        });

        function obrazkyOpacity(){
            let b = 0;
            for(let i = 0; i < $('.box div').length; i++){
            b = (((i + 1)*45) + count);
            if(b % 360 == 0){
                $('.box div:eq(' + i + ')').css("opacity", "1");
                $('.box div:eq(' + i + ')').css("transition", "opacity 0s ease-in");
            }else {
                $('.box div:eq(' + i + ')').css("opacity", "0.5");
                $('.box div:eq(' + i + ')').css("transition", "opacity 1s ease-in");
            }
        }
        };

        let countb = 0; let m = 100;
        $('.box div').click(function(){
            if (countb == 0){
                countb++;
                m = $('.box div').index(this);
                $('.bigimgs .big' + (m + 1) ).css("visibility", "visible");
                $('button').css("pointer-events", "none");
                $('button').css("visibility", "hidden");
            }
        });

        $('.bigimgs div').click(function(){
            if (countb != 0){
                countb = 0;
                $('.bigimgs .big' + (m + 1) ).css("visibility", "hidden");
                $('button').css("pointer-events", "auto");
                $('button').css("visibility", "visible");
            }
        });