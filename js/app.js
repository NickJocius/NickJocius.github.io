

$(function() {
    
    let btn = $(".proceed_btn");
    let title = $(".section1_h1 span");
    let author = $(".section2_h2");

    $(btn).hide();

    setTimeout(function(){
        $(btn).show('slow');
        $(btn).removeClass('shadow-none');
        $(btn).addClass('glowing');
    }, 10000);

    $(btn).on("mouseover", function(){
        $(this).css("transform", "rotate(5deg)");
    })
    .on("mouseout", function(){
        $(this).css("transform", "rotate(0deg)");
    })

    $(btn)
    .on("click", function(){
        console.log("clicked");
        $(author).addClass('authorAnimation');
        $(title).addClass('showAnimation');
        $(btn).hide();
    });
    

    $(title)
    .on("mouseover", function(){
        $(this).css("text-shadow", "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 60px #0073e6, 0 0 70px #0073e6")
    })
    .on("mouseout", function(){
        $(this).css("text-shadow","none");
    });
});

