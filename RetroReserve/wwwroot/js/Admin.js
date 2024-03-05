var ContactId = 0;
function Status() {
    $.get("/Dashboard/Status").done(function (res) {
        console.clear();
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
            var dropdownItem = $('<a href="/Inbox" class="dropdown-item"></a>');
            var envelopeIcon = $('<i class="fas fa-envelope mr-2" id="nbadge"></i>').text(' ' + message.userName);
            var dateSpan = $('<span class="float-right text-muted text-sm" id="newdate"></span>').text(message.newMessageDate);

            dropdownItem.append(envelopeIcon, dateSpan);
            dropdownMenu.append(dropdownItem);
            // Perform actions for each message
            $(".totalmessage").html(message.newMessage);

        });
       
        // Add the dropdown divider and "See All Messages" link
        dropdownMenu.append('<div class="dropdown-divider"></div>');
        dropdownMenu.append('<a href="/Inbox" class="dropdown-item dropdown-footer">See All Messages</a>');

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

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const meridiem = hours >= 12 ? 'pm' : 'am';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes}`;
    document.getElementById('clock').innerText = timeString;
}


// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

function NewOrderStatusDboy() {
    $.get("/Employee/DashboardStatus").done(function (res) {
        $(".new_order").text(res[0].newOrderStatus);
    }).fail(function () {
        alert("error");
    });
}
NewOrderStatusDboy();

