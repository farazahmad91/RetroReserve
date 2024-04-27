


document.addEventListener('DOMContentLoaded', function () {
        // Example: Attach the updateTotal function to the quantity input change event
        var quantityInputs = document.querySelectorAll('.cart-qty');
        quantityInputs.forEach(function(input) {
            input.addEventListener('input', function() {
                updateTotal(input.closest('.cartrow'));
            });

            // Set initial total value on page load
            updateTotal(input.closest('.cartrow'));
        });


        // Function to update the total for a specific row
        function updateTotal(row) {
            var price = parseFloat(row.querySelector('.cart-prize').innerText.replace('₹', ''));
            var quantity = parseInt(row.querySelector(".cart-qty").value);
            var total = price * quantity;

            row.querySelector('.cart-total-prize').innerText = '₹' + total.toFixed(2);

            updateSubtotal(); // Update subtotal after updating row total
        }

        // Function to update the subtotal
        function updateSubtotal() {
            var rows = document.querySelectorAll('.cartrow');
            var subtotal = 0;

            rows.forEach(function(row) {
                var total = parseFloat(row.querySelector('.cart-total-prize').innerText.replace('₹', ''));
                subtotal += total;
            });

            document.querySelector('.subtotal-prize').innerText = '₹' + subtotal.toFixed(2);
            document.querySelector('.lastprice').innerHTML = '₹' + subtotal.toFixed(2);

        }

        // Function to update the total quantity in the navbar
        function updateCartQuantity() {
            var rows = document.querySelectorAll('.cartrow');
            var totalQuantity = 0;

            rows.forEach(function(row) {
                var quantity = parseInt(row.querySelector(".cart-qty").value);
                totalQuantity += quantity;
            });

            // Update the total quantity in the navbar
            document.getElementById('cart-quantity-navbar').innerText = quantity;
        }
        // Function to update the cart badge based on the sum of all .cart-qty values
        function updateCartBadge() {
            var cartBadge = document.getElementById('cart-badge');
            if (cartBadge) {
                var cartQtyInputs = document.querySelectorAll('.cart-qty');
                var totalQuantity = Array.from(cartQtyInputs).reduce(function(accumulator, input) {
                    return accumulator + parseInt(input.value, 10);
                }, 0);
                cartBadge.innerText = totalQuantity.toString();
            }
            console.log(totalQuantity);
            if (totalQuantity == 0) {
                        $(".hdn").hide();
                    } else {
                        $(".hdn").show(); 
                    }
        }
     

        var quantityInputs = document.querySelectorAll('.cart-qty');
        quantityInputs.forEach(function(input) {
            input.addEventListener('input', function() {
                updateCartBadge();
            });
        });

        // Call the updateCartBadge function initially to set the initial value
        updateCartBadge();
});





/*function checkoutOrder() {
    var selectedAddress = document.querySelector('input[name="address"]:checked');

    if (!selectedAddress) {
        alert("Please select an address before checking out.");
        return;
    }

    var param = {
        AddressId: selectedAddress.value
    };

    Show_Loader();

    setTimeout(function () {
        $.post('/Order/BookingOrder', param)
            .done(function (res) {
                Hide_Loader();
                alert("Payment Successfully Completed!");

                Show_Loader();

                setTimeout(function () {
                    Hide_Loader();
                    Swal.fire({
                        title: 'Success',
                        text: 'Order Placed',
                        icon: 'success',
                    }).then((data) => {
                        // Redirect to a different page after successful order placement
                        window.location.href = "/Cart"; // Change the URL as needed
                    });
                }, 1500);
            })
            .fail(function () {
                Hide_Loader();
                Swal.fire("Error", "Order could not be placed !!", "error");
            });
    }, 1500);
}*/

function DeleteCart(CartId) {
    Swal.fire({
        title: 'Are you sure you want to delete?',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: '/Cart/DeleteCart',
                type: 'POST',
                data: { CartId: CartId },
                success: function (data) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Deleted Successfully',
                        icon: 'success',
                    }).then((data) => {
                        // Redirect to a different page after successful deletion
                        window.location.href = "/Cart"; // Change the URL as needed
                    });
                },
                error: function (error) {
                    /*Swal.fire("Error", "Something went wrong!", "error");*/
                    window.location.href = "/Cart";
                }
            });
        }
    });
}
function AddCart(Id) {
    let data = {
        Id: Id,
    };

    $.post('/Cart/AddCart', data)
        .done(function (res) {
            if (res == -1) {
                errors("This dish is already in the cart");
            } else {
                success("Dish added successfully to your cart.");
                cartstatus();
            }
        })
        .fail(function (res) {
            errors("Kindly log in before adding a dish to your cart.");

        });
}

function Getconfirmdatashow() {
    window.location.href = '/Invoice/Confirmation?Id=' + UserId;
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
function errors(msg) {
    var x = document.getElementById("snackbar5");
    x.className = "show5";
    setTimeout(function () { x.className = x.className.replace("show5", ""); }, 4000);
    jQuery("#snackbar5").html(msg);
}
function success(msg) {
    var x = document.getElementById("snackbar4");
    x.className = "show4";
    setTimeout(function () { x.className = x.className.replace("show4", ""); }, 4000);
    jQuery("#snackbar4").html(msg);
}
function cartstatus() {
    $.get("/Cart/GetQtyInCart").done(function (res) {
        var quantity = res.quantity;
        $(".cartcount").text(quantity); 
    }).fail(function () {
        alert("error");
    });
}
cartstatus();




