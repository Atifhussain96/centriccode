var myPlayer1 = videojs('myvideo-1');
        var myPlayer2 = videojs('myvideo-2');

        $("#video-tab-01 .tabvdo-play").click(function () {
            myPlayer1.ready(function () {
                myPlayer1.play();
                myPlayer2.pause();

            });
        });

        $("#video-tab-02 .tabvdo-play").click(function () {
            myPlayer2.ready(function () {
                myPlayer2.play();
                myPlayer1.pause();

            });
        });


        $(document).ready(videoWidth);
        $(window).on('resize', videoWidth);

        function videoWidth() {
            vdoWidth = $('.tab-player .tab-content').width();
            vdoHeight = $('.videos-tab .tab-navigation').height();
            $('.video-js').css('width', vdoWidth);
            $('.video-js').css('height', vdoHeight);
        }

        $('#video-tab-01').click(function(){
            $('#v-pills-tabContent > .tab-pane').removeClass('show active');
            $('#v-pills-tabContent').find('#video-01').addClass('show active')
            $(this).closest('.tab-navigation').find('.nav-link').removeClass('active')
            $(this).addClass('active');
            myPlayer2.pause();
        });
        $('#video-tab-02').click(function(){
            $('#v-pills-tabContent > .tab-pane').removeClass('show active');
            $('#v-pills-tabContent').find('#video-02').addClass('show active')
            $(this).closest('.tab-navigation').find('.nav-link').removeClass('active')
            $(this).addClass('active');
            myPlayer1.pause();
        });

        $('#wsfyTab .nav-link').click(function(){
            $('#wsfyTabContent > .tab-pane').removeClass('show active');
            $(this).closest('.nav-tabs').find('.nav-link').removeClass('active')
            $(this).addClass('active');
        });
        $('#about-tab').click(function(){
            $('#wsfyTabContent').find('#about').addClass('show active');
        });
        $('#faq-tab').click(function(){
            $('#wsfyTabContent').find('#faq').addClass('show active');
        });
        $('#tnc-tab').click(function(){
            $('#wsfyTabContent').find('#tnc').addClass('show active');
        });
        $('#faq-tab-btn').click(function(){
            $('#wsfyTabContent > .tab-pane').removeClass('show active');
            $('#wsfyTabContent').find('#faq').addClass('show active');
            $('#wsfyTab').find('a').removeClass('active');
            $('#wsfyTab').find('#faq-tab').addClass('active');
        });
        $('#tnc-tab-btn').click(function(){
            $('#wsfyTabContent > .tab-pane').removeClass('show active');
            $('#wsfyTabContent').find('#tnc').addClass('show active');
            $('#wsfyTab').find('a').removeClass('active');
            $('#wsfyTab').find('#tnc-tab').addClass('active');
        });
        
        $('#wsfyTab a').click(function(){
            $('.scond-btn').removeClass('active');
        });
        $(".scond-btn").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#wsfyTab").offset().top
            }, 500);
        });
		
		$(".custom-accordion .btn-link").click(function() {
            $(this).closest('.accordion').find('.btn-link').addClass('collapsed');
            $(this).toggleClass('collapsed');
            $(this).closest('.accordion').find('.collapse').hide('fast');
            $(this).closest('.card').find('.collapse').toggle('fast');
        });