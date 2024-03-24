import { Tarea, agregarTarea, mostrarTareas } from './gestion-tareas.js';

const listaTareas = [];

agregarTarea(listaTareas, 'Hacer la compra');
agregarTarea(listaTareas, 'Estudiar para el examen');


console.log('Lista de tareas:');
mostrarTareas(listaTareas);

listaTareas[0].completar();

console.log('\nLista de tareas después de completar una tarea:');
mostrarTareas(listaTareas);
