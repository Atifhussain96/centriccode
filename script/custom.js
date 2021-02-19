var app = {};

app.videoPlayer1 = function () {
    var video1 = $("ban_video");
    video1.currentTime = 0;

    $(".whatsNewVideo-holder .play-bt").click(function () {
        $(this).hide();
        $(this).parent().find(".pause-bt").show();
        $(this).parent().find("video.tv_video").get(0).play();
        //$("#" + vdplayerId).get(0).play();
    });
    $(".whatsNewVideo-holder .pause-bt").click(function () {
        $(this).addClass("active");
        $(this).hide();
        $(this).parent().find(".play-bt").show();
        $(this).parent().find("video.tv_video").get(0).pause();
    });
    $(".slick-dots li").click(function () {
        $(this).closest('.whatsNew-slider').find(".play-bt").show();
        $(this).closest('.whatsNew-slider').find(".pause-bt").hide();

        var videoplyrs = $(this).closest('.whatsNew-slider').find("video.tv_video");
        $(videoplyrs).each(function (index) {
            $(this).get(0).pause();
        });
    });
};
app.videoPlayer2 = function () {
    var video3 = $("slider_video");
    video3.currentTime = 0;

    $(".sliderVideo-holder .play-bt").click(function () {
        $(this).hide();
        $(this).parent().find(".pause-bt").show();
        $("#slider_video").get(0).play();
    });
    $(".sliderVideo-holder .pause-bt").click(function () {
        $(this).parent().find(".play-bt").show();
        $(this).hide();
        $(this).addClass("active");
        if ($("#slider_video")) {
            if ($("#slider_video").length > 0) {
                $("#slider_video").get(0).pause(); //commented by Faraz
            }
        }
    });
    $(".slick-arrow").click(function () {
        $(this).closest('.main-slide').find(".play-bt").show();
        $(this).closest('.main-slide').find(".pause-bt").hide();
        if ($("#slider_video")) {
            if ($("#slider_video").length > 0) {
                $("#slider_video").get(0).pause();
            }
        }
    });
};
app.videoPlayer3 = function () {
    //var video2 = $("ban_video2");
    //video2.currentTime = 0; //commented by Faraz

    $(".video-box .play-bt").click(function () {
        $(this).hide();
        $(this).parent().find(".pause-bt").show();
        $(this).parent().find("video.tv_video").get(0).play();
        //$("#ban_video2").get(0).play();
    });
    $(".video-box .pause-bt").click(function () {
        $(this).addClass("active");
        $(this).hide();
        $(this).parent().find(".play-bt").show();
        $(this).parent().find("video.tv_video").get(0).pause();
    });
};
app.searchDropDown = function () {
    $('.searchbox').on('click', function (event) {
        $(this).toggleClass('open');
    });
};
app.slick = function () {
    var mydir = $("html").attr("lang");
    var rtlVal = false;
    if (mydir === 'ar') {
        rtlVal = true;
    } else {
        rtlVal = false;
    }

    $(".main-slide").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 100000
    });

    $(".whatsNew-slider").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    $(".event-slider").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
    $(".inspiration-slider").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false
    });
    $(".first-banner").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });
    $(".second-banner").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });
    $(".forth-banner").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });
    $(".feature-slider").slick({
        rtl: rtlVal,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
    $(".brand-slider").slick({
        rtl: rtlVal,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
        ]
    });

};

app.readyFuntions = function () {

    // document.getElementById('signup').onclick = function () {
    //     document.getElementsByClassName('newsletter-choices')[0].style.display = 'block';
    // };

    $(document).ready(function () {
        $("#signup").click(function () {
            $(".newsletter-choices").show();
        });
        $(".mob-options .search").click(function () {
            $(".searchbox").toggleClass("open");
        });
    });
};

app.init = function () {
    app.slick();
    app.readyFuntions();
    app.videoPlayer1();
    app.videoPlayer2();
    app.videoPlayer3();
    app.searchDropDown();
};
document.addEventListener("DOMContentLoaded", function () {
    app.init();
});


// var myPlayer = videojs('my-video');

// myPlayer.ready(function() {
//   myPlayer.play();
// });



