class Tarea {
  constructor(descripcion) {
    this.descripcion = descripcion;
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }
}


function agregarTarea(lista, descripcion) {
  const tarea = new Tarea(descripcion);
  lista.push(tarea);
}

function mostrarTareas(lista) {
  lista.forEach((tarea, index) => {
    console.log(`Tarea ${index + 1}: ${tarea.descripcion} - Completada: ${tarea.completada ? 'Sí' : 'No'}`);
  });
}

export { Tarea, agregarTarea, mostrarTareas };
