document.addEventListener("DOMContentLoaded", () => {

    let contenedor = document.querySelector('.contenedor');

    carrusel(contenedor);
});





function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("idTitulo").style.marginLeft = "20px";


}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "50px";
    document.getElementById("idTitulo").style.marginLeft = "20px";

}