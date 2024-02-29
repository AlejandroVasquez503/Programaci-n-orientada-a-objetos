class a{
    constructor(nombre){
        this.nombre = nombre;
    }
}

class b{
    constructor(apellido){
        this.apellido = apellido;
    }

}

class c{
    constructor(nombre,apellido){
        this.a = new a(nombre);
        this.b = new b(apellido);
    }
invocar(){
    return `${this.a.nombre}  ${this.b.apellido}`
}
}
let obj = new c ("John","Roosevelt");
alert(obj.invocar())

//buscar que es el done