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

        $('.sub-page__item').addClass(animationFadeUp).one(animationEnd, function () {
            $(this).removeClass(animationFadeUp);
        });

        $('.sub-text').addClass(animationFadeDown).one(animationEnd, function () {
            $(this).removeClass(animationFadeDown);
        });
    });
});