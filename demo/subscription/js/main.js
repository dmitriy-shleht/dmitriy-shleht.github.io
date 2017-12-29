$(document).ready(function() {
    $('#form').submit(function() {
        $(".btn").prop('disabled', true);

        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this).serialize()
        }).done(function() {
            $(".btn").prop('disabled', false);
            alert("Ok");
        });
        return false;
    });

    $('.video-wrap').addClass('animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated bounceInLeft');
        });
    $('.form-wrap').addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated bounceInRight');
        });
    // $('.form-wrap').addClass('animated bounceInRight');


    $('.text, .down').addClass('animated fadeInDownBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated fadeInDownBig');
        });
});