class Salida {
    constructor(nombre, idea, ganas) {
      this.nombre = nombre;
      this.idea = idea;
      this.ganas = ganas;
    }
  
    MostrarSalida() {
        return console.log(`Hola, te saluda ${this.nombre} mi idea a donde podriamos ir es a ${this.idea} ya que tengo ${this.ganas}`)
    }
}
  
class Amigo1 extends Salida {
    MostrarSalida() {
        return console.log(`Hola, te saluda ${this.nombre} mi idea a donde podriamos ir es a ${this.idea} ya que tengo ${this.ganas}`)
    }
}
  
class Amigo2 extends Salida {
    MostrarSalida() {
        return console.log(`Hola, te saluda ${this.nombre} mi idea a donde podriamos ir es a ${this.idea} ya que tengo ${this.ganas}`)
    }
}
class Amigo3 extends Salida {
    MostrarSalida() {
        return console.log(`Hola, te saluda ${this.nombre} mi idea a donde podriamos ir es ${this.idea} ya que tengo ${this.ganas}`)
    }
}
  
const amigo1 = new Amigo1("Alejandro", "al cine a ver sonic 3", "muchisimas ganas de ir")
const amigo2 = new Amigo2("Victor", "Aquapark a bañar", "no muchas ganas pero sera divertido")
const amigo3 = new Amigo3("Stella", "al carajo", "0 ganas de salir con ustedes bola de inutiles")
amigo1.MostrarSalida()
amigo2.MostrarSalida()
amigo3.MostrarSalida()
  