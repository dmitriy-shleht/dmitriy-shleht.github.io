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
    $('.video-wrap, .form-wrap').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
            $(this).removeClass('animated fadeInDown');
        });

    $('.text, .down').addClass('animated fadeInDownBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
            $(this).removeClass('animated fadeInDownBig');
        });
});