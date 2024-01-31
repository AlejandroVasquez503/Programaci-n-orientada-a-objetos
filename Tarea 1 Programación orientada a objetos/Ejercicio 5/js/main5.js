class Yo{
    constructor(nombre, apellido, edad){
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }

    Jugar(){
        return`Mi nombre es ${this._nombre} y mi apellido es ${this._apellido} sigue mi edad la cual es ${this._edad} años practico para aprender a programar en diferentes lenguajes de programación`
    }

    VerAnime(){
        return`Mi nombre es ${this._nombre} y mi apellido es ${this._apellido} sigue mi edad la cual es ${this._edad} años y me gusta ver anime en mis tiempos libres`
    }

    EscucharMusica(){
        return`Mi nombre es ${this._nombre} y mi apellido es ${this._apellido} sigue mi edad la cual es ${this._edad} años y me gusta hacer los ejercicios dificiles que nos pone el ingenerio en sus clases xd`
    }
}

const Alejandro = new Yo('Alejandro', 'Vásquez', 18)
console.log(Alejandro.Jugar())
console.log(Alejandro.VerAnime())
console.log(Alejandro.EscucharMusica())



