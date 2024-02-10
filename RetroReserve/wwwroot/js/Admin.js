function Status() {
    $.get("/Dashboard/Status").done(function (res) {
        console.log(res);
        $("#deliverdobadge").html(res[0].deliverdOrder);
        $("#newobadge").html(res[0].newOrders);
        $("#newmessagebadge").html(res[0].newMessage);
        $("#nwbadge").html(res[0].newMessage);
        $(".nwbadge").html(" New Message: " + res[0].newMessage);
        $("#newdate").html(res[0].newMessageDate);
    }).fail(function () {
        alert("error");
    });
}
Status();