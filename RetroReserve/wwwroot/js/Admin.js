﻿var ContactId = 0;
function Status() {
    $.get("/Dashboard/Status").done(function (res) {
        console.log(res);
        $("#deliverdobadge").html(res[0].deliverdOrder);
        $("#newobadge").html(res[0].newOrders);
    }).fail(function () {
        alert("error");
    });
}
Status();


function NewMessage1() {
    $.get("/ContactUS/GetNewMessageNotification").done(function (res) {
        console.log(res);

        // Assuming you want to append the dropdown menu to a specific element, replace "#dropdownContainer" with the actual selector.
        var dropdownMenu = $('<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right"></div>');

        res.forEach(function (message) {
            var dropdownItem = $('<a href="/ContactUS/ContactusList" class="dropdown-item"></a>');
            var envelopeIcon = $('<i class="fas fa-envelope mr-2" id="nbadge"></i>').text(' ' + message.userName);
            var dateSpan = $('<span class="float-right text-muted text-sm" id="newdate"></span>').text(message.newMessageDate);

            dropdownItem.append(envelopeIcon, dateSpan);
            dropdownMenu.append(dropdownItem);
            // Perform actions for each message
            $(".totalmessage").html(message.newMessage);

        });
       
        // Add the dropdown divider and "See All Messages" link
        dropdownMenu.append('<div class="dropdown-divider"></div>');
        dropdownMenu.append('<a href="/ContactUS/ContactusList" class="dropdown-item dropdown-footer">See All Messages</a>');

        // Append the generated dropdown menu to a specific element, replace "#dropdownContainer" with the actual selector.
        $("#dropdownContainer").html(dropdownMenu);
    }).fail(function () {
        alert("error");
    });
}
NewMessage1();

function UpdateNewMessageNotify(ContactId) {
    debugger;
        var data = {
            ContactId: ContactId,
            status: 1,
        };

        $.post('/ContactUS/UpdateContactUsStatus', data)
            .done(function (res) {
                
            })
            .fail(function () {
                // Handle the failure case
                alert("Failed update");
            });

}