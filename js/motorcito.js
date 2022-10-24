let estadoLicuadora = "apagado";
let sonidoLicuadora = document.getElementById("blender-sound");
let sonidoBotonLicuadora = document.getElementById("blender-button-sound");   
let licuadora = document.getElementById("blender");
licuadora.classList.remove("active");

/* esta función controla el estado de la licuadora y asigna 
el respectivo estado tomado*/
function controlarLicuadora() { 
    if (estadoLicuadora == "apagado") { 
        estadoLicuadora = "encendido";         
        controlarSonidoLicuadora();
        licuadora.classList.add("active");                 
        /* console.log("me encendiste"); */
    } else {
        estadoLicuadora = "apagado";
        controlarSonidoLicuadora();
        licuadora.classList.remove("active"); 
        /* console.log("me apagaste"); */
    }
}

function controlarSonidoLicuadora() {
    if (sonidoLicuadora.paused) {
        sonidoBotonLicuadora.play();
        sonidoLicuadora.play();
    }
    else { 
        sonidoBotonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
