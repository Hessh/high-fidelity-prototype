let img = document.querySelectorAll(".preview")[0]
let estButton = document.querySelectorAll(".estimate-button")[0]
let estContainer = document.querySelectorAll(".estimate-container")[0]
let conditionContainer = document.querySelectorAll(".condition-container")[0]

img.style.display = "none"
estButton.style.display = "none"
estContainer.style.display = "none"

function showImg() {
    img.style.display = "flex"
    estButton.style.display = "flex"
}

function estimate() {
    estContainer.style.display = "flex"
    estContainer.style.flexDirection = "column"
    conditionContainer.style.display = "none"
}