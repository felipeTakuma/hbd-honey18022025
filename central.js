document.addEventListener("DOMContentLoaded", function(){
    const secciones = document.querySelectorAll(".seccion");
    const enlaces = document.querySelectorAll(".menu_link");

    function mostrarSeccion(id){
        secciones.forEach(sec => sec.classList.remove("Activa"))
        document.getElementById(id).style.display = "block";
    }

    mostrarSeccion("helen");

    document.getElementById("btnHome").addEventListener("click", () => mostrarSeccion("home"))
    document.getElementById("btnHelen").addEventListener("click", () => mostrarSeccion("helen"))
    document.getElementById("btnNosotros").addEventListener("click", () => mostrarSeccion("nosotros"))
    document.getElementById("btnCarta").addEventListener("click", () => mostrarSeccion("carta"))

    document.getElementById("cerrar-helen").addEventListener("click", function(){
        const us = document.getElementById("helen");
            if(us.style.display == "none"){
            us.style.display = "block";
            this.textContent = "Cerrar"
            } else{
                us.style.display = "none";
                this.textContent = "Cerrar";
            }
        });



    document.getElementById("cerrar-nosotros").addEventListener("click", function(){
        const us = document.getElementById("nosotros");
            if(us.style.display == "none"){
            us.style.display = "block";
            this.textContent = "Cerrar"
            } else{
                us.style.display = "none";
                this.textContent = "Cerrar";
            }
        });


    //evento que abre la carta
    document.getElementById("mostrar-carta").addEventListener("click", function() { 
        const carta = document.getElementById("contenido-carta");
        if(carta.style.display == "none"){
            carta.style.display = "block";
            this.textContent = "Cerrar";
        } else {
            carta.style.display = "none";
            this.textContent = "Mostrar Carta";
        }
    });

});