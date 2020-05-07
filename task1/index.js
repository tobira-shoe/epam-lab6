$(document).ready(function () {
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },

        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: {
                required: "Please type message",
                minlength: "Your message it too short"
            },
        },

        submitHandler(form) {
            form.submit();
        }
    })
});
