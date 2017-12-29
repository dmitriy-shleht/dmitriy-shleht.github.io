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

    $(function () {
        var animationFadeUp = 'animated fadeInUp';
        var animationFadeDown = 'animated fadeInDown';
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        $('.form-wrap, .text').addClass(animationFadeUp).one(animationEnd, function () {
            $(this).removeClass(animationFadeUp);
        });

        $('.video-wrap, .up').addClass(animationFadeDown).one(animationEnd, function () {
            $(this).removeClass(animationFadeDown);
        });
    });
});