$(document).ready(function(){
    $('#form1').validate({
        rules: {
        nome: {
            required: true,
            maxlength: 20
        },
        sobrenome: {
            required: true,
            maxlength: 30
        },
        texto1: {
            required: true,
            maxlength: 300
        }
    },
    messages: {
        nome: {
            required: "Type your first name",
            maxlength: "Max 20 letters"
        },
        sobrenome: {
            required: "Type your last name",
            maxlength: "Max 30 letters"
        },
        texto1: {
            required: "Type a text",
            maxlength: "Max 300 letters"
        }
    }
    })
})