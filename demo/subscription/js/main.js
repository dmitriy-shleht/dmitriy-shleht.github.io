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

    $('.form-wrap, .text').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated fadeInUp');
        });

    $('.video-wrap, .up').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated fadeInDown');
        });
});