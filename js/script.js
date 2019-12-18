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


/** PROGRESS BAR*/

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

function styleProgress() {
    let circleBack = document.getElementById("circle-back");
    let circleOne = document.getElementById("circle-one");
    let circleTwo = document.getElementById("circle-two");
    let circleFour = document.getElementById("circle-four");
    let circleFive = document.getElementById("circle-five");
    let currentPage = window.location.pathname;

    let finishedColor = "#A1D192";
    let currentColor =  "#E7F3F5";

    let back = document.getElementById("progress-back-container");
    let one = document.getElementById("progress-one-container");
    let two = document.getElementById("progress-two-container");
    let four = document.getElementById("progress-four-container");
    let five = document.getElementById("progress-five-container");

    let imageOne = document.getElementById("product");
    let imageTwo = document.getElementById("condition");
    let imageFour = document.getElementById("delivery");

    switch (currentPage) {
        case "/filter.php":
            document.getElementById("progress-one").style.fontWeight = "bold";
            circleOne.style.backgroundColor = currentColor;
            back.addEventListener("click", function () {
                window.location = "/index.php"
            });

            circleBack.style.display = "none";
            break;
        case "/condition.php":
            document.getElementById("progress-two").style.fontWeight = "bold";
            circleOne.style.borderColor = finishedColor;
            imageOne.src ="img/search2.svg";
            circleTwo.style.backgroundColor = currentColor;

            one.addEventListener("click", function () {
                window.location = "/filter.php"
            });
            back.addEventListener("click", function () {
                window.location = "/filter.php"
            });

            mouseOver(one, circleOne);
            mouseOver(back, circleBack);

            one.style.cursor = "pointer";

            break;
        case "/delivery.php":
            document.getElementById("progress-four").style.fontWeight = "bold";
            circleOne.style.borderColor = finishedColor;
            circleTwo.style.borderColor = finishedColor;
            imageOne.src ="img/search2.svg";
            imageTwo.src ="img/book2.svg";
            circleFour.style.backgroundColor = currentColor;
            one.addEventListener("click", function () {
                window.location = "/filter.php"
            });
            two.addEventListener("click", function () {
                window.location = "/condition.php"
            });
            back.addEventListener("click", function () {
                window.location = "/condition.php"
            });
            mouseOver(one, circleOne);
            mouseOver(two, circleTwo);
            mouseOver(back, circleBack);

            one.style.cursor = "pointer";
            two.style.cursor = "pointer";

            break;
        case "/done.php":
            document.getElementById("progress-five").style.fontWeight = "bold";
            circleOne.style.borderColor = finishedColor;
            circleTwo.style.borderColor = finishedColor;
            circleFour.style.borderColor = finishedColor;
            imageOne.src ="img/search2.svg";
            imageTwo.src ="img/book2.svg";
            imageFour.src="img/deliver2.svg";

            circleFive.style.backgroundColor = currentColor;
            one.addEventListener("click", function () {
                window.location = "/filter.php"
            });
            two.addEventListener("click", function () {
                window.location = "/condition.php"
            });
            four.addEventListener("click", function () {
                window.location = "/delivery.php"
            });
            back.addEventListener("click", function () {
                window.location = "/delivery.php"
            });

            mouseOver(one, circleOne);
            mouseOver(two, circleTwo);
            mouseOver(four, circleFour);
            mouseOver(back, circleBack);

            one.style.cursor = "pointer";
            two.style.cursor = "pointer";
            four.style.cursor = "pointer";
            break;
        default:
            console.log("error");
    }

}

styleProgress();