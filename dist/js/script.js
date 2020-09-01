$(document).ready(function () {
    $('.burger').click(function (event) {
        $('body').toggleClass('lock')
        $('.header').toggleClass('active')
    });
});