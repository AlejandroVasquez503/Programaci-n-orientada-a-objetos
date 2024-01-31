class DispensadorElectrico{
    constructor(producto, precio){
        this._producto=producto
        this._precio=precio
    }

    DarProducto(){
        return`El cliente pidio una: ${this._producto} con el precio de $${this._precio}`
    }
}

var Cliente1 = new DispensadorElectrico('Coca-Cola', 1.00)
var Cliente2 = new DispensadorElectrico('Pepsi', 0.75)
var Cliente3 = new DispensadorElectrico('Fanta', 0.85)
console.log(Cliente1.DarProducto())
console.log(Cliente2.DarProducto())
console.log(Cliente3.DarProducto())