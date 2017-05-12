function myFunction() {
    var hamburguesa = document.getElementById("myTopnav");
    if (hamburguesa.className === "topnav") {
        hamburguesa.className += " responsive";
    } else {
        hamburguesa.className = "topnav";
    }
}
