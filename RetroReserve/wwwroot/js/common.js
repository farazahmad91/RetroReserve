function validateInputs() {
    let isValid = false;
    $('input:required, select:required').removeClass("is-invalid");
    $('input:required, select:required').addClass("is-valid");
    $('input:required, textarea:required').addClass("is-valid");
    let inputs = $('input:required, select:required,textarea:required');
    let filteredInputs = inputs.filter(function () {
        let currentEle = $(this);
        let value = currentEle.val();
        if (this.tagName.toUpperCase() === 'INPUT' && this.type.toUpperCase() === 'NUMBER' && this.min && value) {
            return parseInt(value) < parseInt(this.min);
        }
        else {
            return value === "";
        }
    });

    if (filteredInputs.length > 0) {
        filteredInputs.each(function () {
            isValid = false;
            var input = $(this);
            if (input[0].required) {
                if (input[0].value != '') {
                    input.removeClass("is-invalid");
                    input.addClass("is-valid");
                }
                else {
                    input.addClass("is-invalid");
                }
            }
        });
    }
    else {
        isValid = true;
    }
    return isValid;
}


function QAlert(statusCode, message) {
    var type, typeText;
    switch (statusCode) {
        case 1:
            type = 'success';
            break;
        case -1:
            type = 'danger';
            break;
        case 2:
            type = 'info';
            break;
        default:
            type = 'primary';
    }

    var alertDiv = $('<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' +
        message +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>');

    $('#alert-container').append(alertDiv);
     alertDiv.fadeIn(1000);
    setTimeout(function () {
        alertDiv.fadeOut('slow', function () {
            $(this).remove();
        });
    }, 1500);
}