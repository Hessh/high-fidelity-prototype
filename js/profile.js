/** PROFILE PAGE */

/** NAVBAR STYLE */
let topNavButtons = document.querySelectorAll(".top-nav-button")

function toggle(data){
    for (let i = 0; i < topNavButtons.length; i++) {
        if(i != data) {
            topNavButtons[i].style.textDecoration = "none"
            topNavButtons[i].style.fontWeight = "400"
        } else {
            topNavButtons[i].style.textDecoration = "underline"
            topNavButtons[i].style.fontWeight = "600"
        }
    }
}

toggle(0)

/** HIDE DISCOUNTCARDS ON DEFAULT */
let discountCards = document.querySelectorAll(".discount-card")

for (let i = 0; i < discountCards.length; i++) {
    discountCards[i].style.display = "none"
}

/** HIDE ORDERCARDS ON DEFAULT */
let orderCards = document.querySelectorAll(".order-card")

for (let i = 0; i < orderCards.length; i++) {
    orderCards[i].style.display = "none"
}

/** SHOW ALL DISCOUNTS */
let discountButton = document.getElementById("discounts")
let orderButton = document.getElementById("orders")

function toDiscounts() {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none"
        topNavButtons[i].style.fontWeight = "400"
    }

    topNavButtons[1].style.textDecoration = "underline"
    topNavButtons[1].style.fontWeight = "600"

    discountButton.style.display = "none"
    orderButton.style.display = "none"
    
}

/** SHOW ALL ORDERS */