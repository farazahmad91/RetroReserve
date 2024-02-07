function Orderbook() {
    Show_Loader();
    setTimeout(function () {
        
        alert("Please Wait!!");
        Show_Loader();
        setTimeout(function () {

            BookTable() 
        }, 2500)
    }, 5500)
}

function BookTable() {
    Show_Loader();
    setTimeout(function () {
        if (validateTableBooking()) {
            let param = {

                TableId: $("#tableid").val(),
                Email: $("#email").val(),
                BookingTime: $("#date").val(),
                People: $("#people").val(),
                description: $("#message").val(),

            };
            $.post("/BookingTable/BookingTable", param)
                .done(function () {
                    Hide_Loader();
                    Swal.fire({
                        title: 'Success',
                        text: 'Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!',
                        icon: 'success'
                    }).then(function () {
                        Hide_Loader();
                        window.location.href = "/User/Index";
                    });
                })
                .fail(function () {
                    Hide_Loader();
                    Swal.fire("Error", "Table could not be booked successfully!", "error");
                });

        }
    }, 1500)
}

function validateTableBooking() {
    let isvalidated = true;
    let msg = "<ul>";

    function addError(message) {
        msg += `<li>${message}</li>`;
        isvalidated = false;
    }
    if ($("#tableid").val() === "") {
        addError("Choose TableNo");
    }
    if ($("#email").val() === "") {
        addError("Please enter Email");
    }
    if ($("#date").val() === "") {
        addError("Please enter date time");
    }
    if ($("#people").val() === "") {
        addError("Please enter  people's");
    }
    if ($("#message").val() === "") {
        addError("Please enter message");
    }

    if (!isvalidated) {
        msg += "</ul>";
        Hide_Loader();
        showerrors(msg);
    }

    return isvalidated;
}

function refresh() {
    $("#tableid").val("");
    $("#email").val("");
    $("#date").val("");
    $("#people").val("");
    $("#message").val("");
}

function Show_Loader() {
    jQuery(".overlay-spinner").show();
}

function Hide_Loader() {
    jQuery(".overlay-spinner").hide();
}
function showinsertsuccess(msg) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
    jQuery("#snackbar").html(msg);
}

function showupdatesuccess(msg) {
    var x = document.getElementById("snackbar2");
    x.className = "show2";
    setTimeout(function () { x.className = x.className.replace("show2", ""); }, 4000);
    jQuery("#snackbar2").html(msg);
}

function showerrors(msg) {
    var x = document.getElementById("snackbar3");
    x.className = "show3";
    setTimeout(function () { x.className = x.className.replace("show3", ""); }, 4000);
    jQuery("#snackbar3").html(msg);
}

function info() {
    alert("Apologies, but this service is currently unavailable. Please make payment using only the QR code method.");

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function CreateQR() {
    var link = $("#dp").val();
    var randomColor = getRandomColor();

    var qrcode = new QRCode("qrcode", {
        text: link,
        width: 125,
        height: 120,
        colorDark: randomColor, // Change this to color: randomColor,
    });
    document.getElementById("qrcode").style.backgroundColor = randomColor;
}

CreateQR();