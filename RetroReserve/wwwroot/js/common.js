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