$(document).ready(function() {
    window.scrollTo(0, document.body.scrollHeight);

    // половина выстоты экрана
    var half_height = $(window).height() / 2;

    var scrollPos = 0,
        racketOffset = 0;

    var onScroll = function() {
        toggleMenuStyle();
        var amountScrolled = $(document).scrollTop();

        $(".menu a").each(function() {
            var currentHighlighted = $(this);
            var activeElement = $(currentHighlighted.attr("href"));


            var theTop = $(window).scrollTop(),
                theDocHeight = $(document).height(), //max размер страницы
                theWinHeight = $(window).height(); // высота экрана
            scrollPos = ((theTop / (theDocHeight - theWinHeight)) * 100) / 6.8;

            //if (activeElement.position().top <= amountScrolled && activeElement.position().top + (activeElement.outerHeight()) > amountScrolled) {
            if ($(document).scrollTop() + half_height > activeElement.offset().top && $(document).scrollTop() - activeElement.offset().top < activeElement.outerHeight()) {
                $(".menu a").removeClass("active");
                currentHighlighted.addClass("active");
                //punktMenu = currentHighlighted.position().top;
            } else {
                currentHighlighted.removeClass("active");
            }
        });

        // смещение ракеты
        if (racketOffset === 0) {
            racketOffset = 59 - scrollPos;
        }
        $("#racket").css({
            top: scrollPos + racketOffset + '%'
        });

        parallaxScroll();
    };

    // переключение цвета в зависимости от положения (темный/светлый фон)
    var toggleMenuStyle = function() {
        if ($(window).scrollTop() + 350 + $(window).height() >= $(document).height()) {
            $('.menu a').addClass('bottom');
            $('#racket').removeClass('racket-white');
        } else {
            $('.menu a').removeClass('bottom');
            $('#racket').addClass('racket-white');
        }
    };

    toggleMenuStyle();

    var callFunctionScroll = function() {
        $(document).on("scroll", onScroll);
    }
    callFunctionScroll();

    $(".menu a").on("click", function(e) {
        e.preventDefault();

        $(".menu a").each(function() {
            $(this).removeClass("active");
        });

        $(this).addClass("active");

        var target = this.hash,
            $target = $(target);

        // смещение блока, что бы он был по середине экрана
        var off_set = $target.outerHeight() / 2;
        $("body,html").animate({
            scrollTop: $target.offset().top - (half_height - off_set),
        }, 3000);
        //Math.abs(window.scrollY - $(this.hash).offset().top) * 2.5)
    });

    // переход к старту при клике на индикатор
    $(".header__scroll").on("click", function(e) {
        e.preventDefault();

        var off_set = $("#start-point").outerHeight() / 2;

        $('body,html').animate({
            scrollTop: $("#start-point").offset().top - (half_height - off_set)
        }, 1500);
    });

    $(window).paroller();
});

function getActiveElement(element) {
    if (element.hasClass("active")) {
        return element;
    } else {
        return $(".menu > ul > li:last-child a");
        //console.log(2);
    }
}
//////////////////////////////
//паралакс
/////////////////////////////
function parallaxScroll() {
    var scrolled = $(window).scrollTop();

    // $('.planeta_top').css({
    //     '-webkit-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     '-moz-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     '-ms-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     '-o-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     'transform': 'translateY(' + ((scrolled * .2)) + 'px)'
    // });

    $('.sputnik').css({
        '-webkit-transform': 'scale(' + (0.2 + (scrolled * .0002)) + ') translateY(' + ((scrolled * .2) - 300) + 'px)',
        '-moz-transform': 'scale(' + (0.2 + (scrolled * .0002)) + ') translateY(' + ((scrolled * .2) - 300) + 'px)',
        '-ms-transform': 'scale(' + (0.2 + (scrolled * .0002)) + ') translateY(' + ((scrolled * .2) - 300) + 'px)',
        '-o-transform': 'scale(' + (0.2 + (scrolled * .0002)) + ') translateY(' + ((scrolled * .2) - 300) + 'px)',
        'transform': 'scale(' + (0.2 + (scrolled * .0002)) + ') translateY(' + ((scrolled * .2) - 300) + 'px)'
    });

    // $('.tuman').css({
    //     '-webkit-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     '-moz-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     '-ms-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     '-o-transform': 'translateY(' + ((scrolled * .2)) + 'px)',
    //     'transform': 'translateY(' + ((scrolled * .2)) + 'px)'
    // });

    // $('.bg').css({
    //     '-webkit-transform': 'translateY(' + ((scrolled * .1)) + 'px)',
    //     '-moz-transform': 'translateY(' + ((scrolled * .1)) + 'px)',
    //     '-ms-transform': 'translateY(' + ((scrolled * .1)) + 'px)',
    //     '-o-transform': 'translateY(' + ((scrolled * .1)) + 'px)',
    //     'transform': 'translateY(' + ((scrolled * .1)) + 'px)'
    // });
}