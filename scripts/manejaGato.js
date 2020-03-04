{

    let botonJugar, botonComer, botonDormir, botonEdad, peso;

    let dormir = function() {
        imagen.src = "src/gatoDurmiendo.jpg";

    }

    let jugar = function() {
        imagen.src = "src/gatoJugando.jpg";
        gato.jugar()
        peso.textContent = gato.peso;
        compruebaPeso();
    }
    let comer = function() {
        imagen.src = "src/gatoComiendo.jpg";
        gato.comer();
        peso.innerHTML = gato.peso;
        compruebaPeso();
    }

    let calcEdad = function() {
        edad.innerHTML = "Nació hace" + Math.floor( ((new Date()) - Date.parse(gato.fNacimiento)) / 86400000)+" días";
    }

    let compruebaPeso = function() {
        if (gato.peso < gato.PESOMIN){
            estado.innerHTML = "El gato está hambriento y se ha ido a buscar comida.";
            imagen.src = "src/seva.jpg";
           deshabilitar();
        }else if(gato.peso > gato.PESOMAX){
            estado.innerHTML = "Protección de animales se ha enterado de que sobrealimentas al gato y se lo llevan para que haga dieta.";
            imagen.src = "src/gordo.jpeg";
            deshabilitar();
        }
    }

    let deshabilitar = function() {
        botonJugar.disabled = true;
        botonComer.disabled = true;
        botonDormir.disabled = true;
        botonEdad.disabled = true;
    }


    document.addEventListener("DOMContentLoaded", function init() {
        imagen = document.getElementById("imagen");
        document.getElementById("nombre").innerHTML += gato.nombre;
        document.getElementById("raza").innerHTML += gato.raza;
        peso = document.getElementById("peso");
        peso.innerHTML += gato.peso;
        estado = document.getElementById("estado");
        edad = document.getElementById("edad");
        botonJugar = document.getElementById("jugar");
        botonJugar.addEventListener("click", jugar);

        botonComer = document.getElementById("comer");
        botonComer.addEventListener("click", comer);

        botonDormir = document.getElementById("dormir");
        botonDormir.addEventListener("click", dormir);

        botonEdad = document.getElementById("conocerEdad");
        botonEdad.addEventListener("click", calcEdad);
    });
}