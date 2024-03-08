class Personas {
    constructor(nombre, edad, carrera) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera
    }
  
    saludar() {
        return console.log(`Hola, te saluda ${this.nombre} y mi carrera es ${this.carrera}`)
    }
}
  
class Persona1 extends Personas {
    saludar() {
        return console.log(`Hola, te saluda ${this.nombre} y mi carrera es ${this.carrera}`)
    }
}
  
class Persona2 extends Personas {
    saludar() {
        return console.log(`Hola, te saluda ${this.nombre} y mi carrera es ${this.carrera}`)
    }
}
class Persona3 extends Personas {
    saludar() {
        return console.log(`Hola, te saluda ${this.nombre} y mi carrera es ${this.carrera}`)
    }
}
  
const persona1 = new Persona1("Alejandro", 18, "Ingeniería")
const persona2 = new Persona2("Victor", 30, "Matemáticas")
const persona3 = new Persona3("Stella", 25, "Psicologia")
persona1.saludar()
persona2.saludar()
persona3.saludar()
  