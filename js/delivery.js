let mapContainer = document.querySelectorAll(".map-container")[0]
let formContainer = document.querySelectorAll(".form-container")[0]

mapContainer.style.display = "flex"
formContainer.style.display = "none"

function showStores() {
    mapContainer.style.display = "flex"
    formContainer.style.display = "none"
}

function showForm() {
    mapContainer.style.display = "none"
    formContainer.style.display = "flex"
}