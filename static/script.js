function openNote() {
    document.querySelector('#notes').style.display = "flex";
    document.querySelector('#music').style.display = "none";
}
function openMusic() {
    document.querySelector('#notes').style.display = "none";
    document.querySelector('#music').style.display = "grid";
}

// hamburger menu

let menu = document.getElementById("navLinks");
let hamburgerIcon = document.getElementById('hamburgerIcon');
// if (menu) {
//     menu.style.maxHeight = "0px";
// }

function openMenu() {
    if (menu.style.maxHeight === "0px") {
        menu.style.maxHeight = "50px";
    } else {
        menu.style.maxHeight = "0px";
    }
}