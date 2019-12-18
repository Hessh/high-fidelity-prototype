/** PROFILE PAGE */

/** DOM  BUTTONS */
let topNavButtons = document.querySelectorAll(".top-nav-button");
let discountButton = document.getElementById("discounts");
let orderButton = document.getElementById("orders");


/** DOM CARDS */
let discountCards = document.querySelectorAll(".discount-card")
let orderCards = document.querySelectorAll(".order-card")

toOverview()

/** SHOW ALL DISCOUNTS */
discountButton.addEventListener("click", function () {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none";
        topNavButtons[i].style.fontWeight = "400"
    }
    navButtonStyling(1);
    hideOrders();

});

/** SHOW ALL ORDERS */
orderButton.addEventListener("click", function () {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none";
        topNavButtons[i].style.fontWeight = "400";
    }

    navButtonStyling(2);
    hideDiscounts();
});

/** NAVBAR */

/** HIDE DISCOUNTCARDS ON DEFAULT */
for (let i = 0; i < discountCards.length; i++) {
    discountCards[i].style.display = "none"
}

/** HIDE ORDERCARDS ON DEFAULT */
for (let i = 0; i < orderCards.length; i++) {
    orderCards[i].style.display = "none"
}

/** SHOW OVERVIEW */
function toOverview() {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none";
        topNavButtons[i].style.fontWeight = "400"
    }

    navButtonStyling(0);

    discountButton.style.display = "flex";
    orderButton.style.display = "flex";

    for (let i = 0; i < discountCards.length; i++) {
        discountCards[i].style.display = "none"
    }

    for (let i = 0; i < orderCards.length; i++) {
        orderCards[i].style.display = "none"
    }

}

function toDiscounts() {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none"
        topNavButtons[i].style.fontWeight = "400"
    }
    navButtonStyling(1);
    hideOrders();

}

/** SHOW ALL ORDERS */
function toOrders() {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none";
        topNavButtons[i].style.fontWeight = "400";
    }

    navButtonStyling(2);
    hideDiscounts();

}

function navButtonStyling(index) {
    topNavButtons[index].style.textDecoration = "underline";
    topNavButtons[index].style.fontWeight = "600";
}

function hideDiscounts() {

    discountButton.style.display = "none";
    orderButton.style.display = "none";

    for (let i = 0; i < orderCards.length; i++) {
        orderCards[i].style.display = "flex"
    }
    for (let i = 0; i < discountCards.length; i++) {
        discountCards[i].style.display = "none"

    }
}

function hideOrders() {

    discountButton.style.display = "none";
    orderButton.style.display = "none";

    for (let i = 0; i < orderCards.length; i++) {
        orderCards[i].style.display = "none"
    }
    for (let i = 0; i < discountCards.length; i++) {
        discountCards[i].style.display = "flex"

    }
}