$(document).ready(function () {


    $(document).on("submit", "#login-form", function () {
        var user = $('#login-email').val().trim();
        var password = $('#login-password').val().trim();
        event.preventDefault();
        console.log('this button works');
        $.get('/login/' + user + '/' + password, function (data) {
        $('#btn-signup').hide();
        $('#btn-signin').hide();
        $('#btn-logout').show();
        });
    });
});