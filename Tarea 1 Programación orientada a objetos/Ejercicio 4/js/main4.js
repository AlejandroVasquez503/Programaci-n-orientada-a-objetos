class Estudiante {
    constructor(nombre, promedio, ciclo) {
      this._nombre = nombre;
      this._promedio = promedio;
      this._ciclo = ciclo;
    }
  
    mostrarMensaje() {
      return `El/La estudiante ${this._nombre} ha obtenido un promedio de ${this._promedio} en el ciclo ${this._ciclo}.`;
    }
  }
  
  const estudiante1 = new Estudiante("Maxi", 7.5, 4);
  const estudiante2 = new Estudiante("María", 9.2, 2);
  const estudiante3 = new Estudiante("Alejandro", 10.0, 1);
  const estudiante4 = new Estudiante("Manases", 9.5, 2);
  const estudiante5 = new Estudiante("Angel", 4.5, 5);
  
  console.log(estudiante1.mostrarMensaje());
  console.log(estudiante2.mostrarMensaje());
  console.log(estudiante3.mostrarMensaje());
  console.log(estudiante4.mostrarMensaje());
  console.log(estudiante5.mostrarMensaje());
  
  