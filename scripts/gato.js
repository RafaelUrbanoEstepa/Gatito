{

    function Gato(nombreGato, razaGato, fNacimientoGato, pesoGato) {
        this.nombre = nombreGato;
        this.raza = razaGato;
        this.fNacimiento = (fNacimientoGato = new Date(fNacimientoGato));
        this.peso = pesoGato;
    }

    Gato.prototype.PESOMAX = 5;
    Gato.prototype.PESOMIN = 1;

    Gato.prototype.jugar = function() {
        this.peso = (parseFloat(this.peso) - 0.5);
        return this.peso;
    }

    Gato.prototype.comer = function() {
        this.peso = (parseFloat(this.peso) + 0.5);
        return this.peso;
    }

}