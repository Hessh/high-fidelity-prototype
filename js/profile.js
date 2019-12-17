/** PROFILE PAGE */

/** DOM  BUTTONS */
let topNavButtons = document.querySelectorAll(".top-nav-button")
let discountButton = document.getElementById("discounts")
let orderButton = document.getElementById("orders")

/** DOM CARDS */
let discountCards = document.querySelectorAll(".discount-card")
let orderCards = document.querySelectorAll(".order-card")

/** NAVBAR */
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
        topNavButtons[i].style.textDecoration = "none"
        topNavButtons[i].style.fontWeight = "400"
    }

    topNavButtons[0].style.textDecoration = "underline"
    topNavButtons[0].style.fontWeight = "600"

    discountButton.style.display = "flex"
    orderButton.style.display = "flex"

    for (let i = 0; i < discountCards.length; i++) {
        discountCards[i].style.display = "none"
    }

    for (let i = 0; i < orderCards.length; i++) {
        orderCards[i].style.display = "none"
    }
    
}

/** SHOW ALL DISCOUNTS */
function toDiscounts() {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none"
        topNavButtons[i].style.fontWeight = "400"
    }

    topNavButtons[1].style.textDecoration = "underline"
    topNavButtons[1].style.fontWeight = "600"

    discountButton.style.display = "none"
    orderButton.style.display = "none"

    for (let i = 0; i < discountCards.length; i++) {
        discountCards[i].style.display = "flex"
    }
    for (let i = 0; i < orderCards.length; i++) {
        orderCards[i].style.display = "none"
    }
    
}

/** SHOW ALL ORDERS */
function toOrders() {
    for (let i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].style.textDecoration = "none"
        topNavButtons[i].style.fontWeight = "400"
    }

    topNavButtons[2].style.textDecoration = "underline"
    topNavButtons[2].style.fontWeight = "600"

    discountButton.style.display = "none"
    orderButton.style.display = "none"

    for (let i = 0; i < orderCards.length; i++) {
        orderCards[i].style.display = "flex"
    }
    for (let i = 0; i < discountCards.length; i++) {
        discountCards[i].style.display = "none"
        
    }
    
}