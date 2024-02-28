class Producto {
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }
}

class Menu {
  constructor() {
    this.items = [];
  }

  agregarItem(item) {
    this.items.push(item);
  }

  mostrarMenu() {
    console.log("=== Menú ===");
    this.items.forEach(item => {
      console.log(`${item.nombre} - $${item.precio}`);
    });
  }
}

class Pedido extends Producto {
  constructor(item, cantidad) {
    super(item.nombre, item.precio);
    this._cantidad = cantidad;
    this._total = item.precio * cantidad;
    this._estado = EstadoPedido.EN_ESPERA;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  get total() {
    return this._total;
  }

  set total(total) {
    this._total = total;
  }

  get estado() {
    return this._estado;
  }

  set estado(estado) {
    this._estado = estado;
  }

  mostrarPedido() {
    console.log(`Pedido: ${this.cantidad} ${this.nombre} - Total: $${this.total}`);
  }
}

class Cocina {
  constructor() {
    this.pedidosEnProceso = [];
  }

  recibirPedido(pedido) {
    this.pedidosEnProceso.push(pedido);
    pedido.estado = EstadoPedido.EN_COCINA;
    console.log(`Pedido de ${pedido.cantidad} ${pedido.nombre} recibido en cocina.`);
  }

  mostrarPedidosEnProceso() {
    console.log("=== Pedidos en Cocina ===");
    this.pedidosEnProceso.forEach(pedido => {
      pedido.mostrarPedido();
    });
  }
}

const EstadoPedido = {
  EN_ESPERA: "En espera",
  EN_COCINA: "En cocina",
  LISTO: "Listo"
};

const menu = new Menu();

const hamburguesas = new Producto("Hamburguesas con Papas", 5.99);
const tacos = new Producto("Tacos de Birria", 7.49);
const nachos = new Producto("Nachos", 3.99);
const bebidas = new Producto("Bebidas de Industria La Constancia", 1.99);

menu.agregarItem(hamburguesas);
menu.agregarItem(tacos);
menu.agregarItem(nachos);
menu.agregarItem(bebidas);

function mostrarMenu() {
  const select = document.getElementById("item");

  menu.items.forEach(item => {
    const option = document.createElement("option");
    option.text = `${item.nombre} - $${item.precio}`;
    option.value = item.nombre;
    select.appendChild(option);
  });
}

mostrarMenu();

function hacerPedido() {
  const itemSeleccionado = document.getElementById("item").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);

  const item = menu.items.find(item => item.nombre === itemSeleccionado);
  if (!item) {
    alert("Selecciona un ítem válido del menú.");
    return;
  }

  const pedido = new Pedido(item, cantidad);
  cocina.recibirPedido(pedido);
  mostrarPedidosEnCocina();
}

const cocina = new Cocina();

function mostrarPedidosEnCocina() {
  const divPedidos = document.getElementById("pedidos");
  divPedidos.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "Pedidos en Cocina";
  divPedidos.appendChild(heading);

  const ul = document.createElement("ul");
  cocina.pedidosEnProceso.forEach(pedido => {
    const li = document.createElement("li");
    li.textContent = `${pedido.cantidad} ${pedido.nombre} - Estado: ${pedido.estado}`;
    ul.appendChild(li);
  });

  divPedidos.appendChild(ul);
}
