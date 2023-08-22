burgerMenu = document.getElementById("burger");
burgerButton = document.getElementById("burger-button");

function BurgerMenu() {
    if(burgerMenu.classList.contains("active")) {
        //close
        burgerMenu.classList.remove("active");
        burgerButton.classList.remove("active");
    } else {
        //open
        burgerMenu.classList.add("active");
        burgerButton.classList.add("active");
    }
}