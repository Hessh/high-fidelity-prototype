/** PROFILE PAGE */
let topNav = document.querySelectorAll(".top-nav")[0]
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