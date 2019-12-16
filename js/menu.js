var nav = document.getElementById("nav");
var menuShow = false;
function showMenu(){
    if(!menuShow) {
        nav.style.left = 0;
        menuShow = true;
    }else {
        nav.style.left = -999 + "%";
        menuShow = false;
    }
}