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

function mouseOver(element, circle) {
    element.onmouseover = function () {
        this.style.fontWeight = "bold";
        circle.style.borderWidth = "2px"
    };
    element.onmouseout = function () {
        this.style.fontWeight = "";
        circle.style.borderWidth = ""
    };
}


function clickableProgress() {

    let circleOne = document.getElementById("circle-one");
    let circleTwo = document.getElementById("circle-two");
    let circleFour = document.getElementById("circle-four");
    let circleFive = document.getElementById("circle-five");


    let one = document.getElementById("progress-one-container");
    let two = document.getElementById("progress-two-container");
    let four = document.getElementById("progress-four-container");
    let five = document.getElementById("progress-five-container");

    one.style.cursor = "pointer";
    two.style.cursor = "pointer";
    four.style.cursor = "pointer";
    five.style.cursor = "pointer";

    mouseOver(one, circleOne);
    mouseOver(two, circleTwo);
    mouseOver(four, circleFour);
    mouseOver(five, circleFive);


    one.addEventListener("click", function () {
        window.location = "/filter.php"
    });
    two.addEventListener("click", function () {
        window.location = "/condition.php"
    });
    four.addEventListener("click", function () {
        window.location = "/delivery.php"
    });
    five.addEventListener("click", function () {
        window.location = "/done.php"
    });

}


function styleProgress() {
    let circleOne = document.getElementById("circle-one");
    let circleTwo = document.getElementById("circle-two");
    let circleFour = document.getElementById("circle-four");
    let circleFive = document.getElementById("circle-five");
    let currentPage = window.location.pathname;
    let finishedColor = "#A1D192";
    let currentColor = "#fa9741";
    switch (currentPage) {
        case "/filter.php":
            document.getElementById("progress-one").style.fontWeight = "bold";
            circleOne.style.backgroundColor = currentColor;
            break;
        case "/condition.php":
            document.getElementById("progress-two").style.fontWeight = "bold";
            circleOne.style.backgroundColor = finishedColor;
            circleTwo.style.backgroundColor = currentColor;
            break;
        case "/delivery.php":
            document.getElementById("progress-four").style.fontWeight = "bold";
            circleOne.style.backgroundColor = finishedColor;
            circleTwo.style.backgroundColor = finishedColor;
            circleFour.style.backgroundColor = currentColor;
            break;
        case "/done.php":
            document.getElementById("progress-five").style.fontWeight = "bold";
            circleOne.style.backgroundColor = finishedColor;
            circleTwo.style.backgroundColor = finishedColor;
            circleFour.style.backgroundColor = finishedColor;
            circleFive.style.backgroundColor = currentColor;
            break;
        default:
            console.log("error");
    }
}

styleProgress();
clickableProgress();