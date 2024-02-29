class Cliente{
    constructor(nombre, apellido){
        this.nombre=nombre;nombre;
        this.apellido=apellido;
    }
}

class Carro{
    constructor(marca){
        this.marca=marca;
    }
}

class Credito{
    constructor(nombre, apellido, marca){
        this.Cliente = new Cliente(nombre, apellido);
        this.Carro = new Carro(marca);
    }
invocar(){
    return `El cliente ${this.Cliente.nombre} de apellido ${this.Cliente.apellido} adquiere un auto cuya marca es ${this.Carro.marca} y su credito`
}
}
let obj = new Credito ("Fulano","de tal", "Nissan", "credito");
alert(obj.invocar())
