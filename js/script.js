/** SUPPORT FUNCTIONS **/
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function createDivWithContent(itemClass, content) {
    let div = document.createElement("div");
    div.classList.add(itemClass);
    div.innerHTML = content;
    return div;
}

function createOptionWithContent(itemClass, content) {
    let option = document.createElement("option");
    option.classList.add(itemClass);
    option.innerHTML = content;
    return option;
}

function styleProgress(){
    currentPage = window.location.pathname;
    switch(currentPage){
        case "/filter.php": document.getElementById("progress-one").style.fontWeight = "bold";
            break;
        case "/condition.php":  document.getElementById("progress-two").style.fontWeight = "bold";
            break;
        case "/delivery.php":  document.getElementById("progress-four").style.fontWeight = "bold";
            break;
        case "/done.php":  document.getElementById("progress-five").style.fontWeight = "bold";
            break;

        default: console.log("error");
    }
}

styleProgress();