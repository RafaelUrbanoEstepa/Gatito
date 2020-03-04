{

    let botonCrear, nombre, raza, fNacimiento, peso;

    let datosGato = function(event) {
        event.preventDefault();
        let gato = new Gato(nombre.value, raza.value, fNacimiento.value, peso.value);
        crearVentana(gato);
    }

    let crearVentana = function(gato) {

        ventana = window.open("", "", "height=1000,width=1000");
        ventana.document.open();
        ventana.document.write(`
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//ES" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="author" content="Rafael Urbano Estepa" />
        <link rel="stylesheet" href="./css/estiloGato.css">
        <title>Gatete</title>
        <script src="./scripts/gato.js"></script>
        <script src="./scripts/manejaGato.js"></script>
        </head>
        <body>
        <img src="./src/gatoJugando.jpg" alt="Estados del Gatete" id="imagen">
        
        <div id="datos">
        <p id = "nombre">Este es el gatete: </p>
        <p id = "raza">De raza: </p>
        <p>Con un peso de: <div id = "peso"></div> kg</p>
        <p id = "estado">El gato está contento</p>
        <p id = "edad"></p>  
        </div>
        <div>
        <button id="comer">Alimentar</button>
        <button id="jugar">Jugar con</button>
        <button id="dormir">Dejar dormir</button>
        <button id="conocerEdad">Conocer la edad</button>
        </div>
        </body>
        </html>`);

        ventana.document.close();
        ventana.gato = gato;
    }

    document.addEventListener("DOMContentLoaded", function init() {

        nombre = document.getElementById("nombre");
        raza = document.getElementById("raza");
        fNacimiento = document.getElementById("fechaNacimiento");
        peso = document.getElementById("peso");

        botonCrear = document.getElementById("crear");
        botonCrear.addEventListener("click", datosGato);
    });

}