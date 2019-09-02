/* Article FructCode.com */
$( document ).ready(function() {
    $("#apply").click(
        function(){
            sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        data: $("#"+ajax_form).serialize(),
        success: function(response) {
            result = $.parseJSON(response);
        },
        error: function(response) {
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}