let estadoLicuadora = "apagado";
let licuadora = document.getElementById("blender");
licuadora.classList.remove("active");

/* esta función controla el estado de la licuadora y asigna 
el respectivo estado tomado*/
function controlarLicuadora() { 
    if (estadoLicuadora == "apagado") { 
        estadoLicuadora = "encendido"; 
        licuadora.classList.add("active"); 
        /* console.log("me encendiste"); */
    } else {
        estadoLicuadora = "apagado";
        licuadora.classList.remove("active"); 
        /* console.log("me apagaste"); */
    }
}
