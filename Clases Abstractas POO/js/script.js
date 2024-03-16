class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd){
        this.usuario=usuario
        this.pass= pass
        this.bdusuario=bdusuario
        this.bdpwd=bdpwd
    }

    validar() {
        if (this.usuario === this.bdusuario && this.pass === this.bdpwd) {
            alertify.success('Inicio de sesión exitoso');
            window.location.href='registro.html'
        } else if (this.usuario !== this.bdusuario && this.pass === this.bdpwd) {
            alertify.error('Usuario incorrecto');
        } else if (this.usuario === this.bdusuario && this.pass !== this.bdpwd) {
            alertify.error('Contraseña incorrecta');
        } else {
            alertify.error('Usuario y contraseña incorrectos');
        }
    }
}


class usuario extends Sesion{
    constructor(usuario, pass, bdusuario, bdpwd){
        super(usuario, pass, bdusuario, bdpwd)
    }
}

function login (){
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    Consulta = new usuario(user,pwd,'William','123')
    Consulta.validar()

}

function informacion() {              
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let genero = document.getElementById('genero').value
    let departamento = document.getElementById('departamento').value
    let ciudad = document.getElementById('ciudad').value
    let telefono = document.getElementById('telefono').value
    let direccion = document.getElementById('direccion').value
  
    var url = 'perfil.html?nombre=' + encodeURIComponent(nombre) +
              '&fecha=' + encodeURIComponent(fecha) +
              '&genero=' + encodeURIComponent(genero) +
              '&departamento=' + encodeURIComponent(departamento) +
              '&ciudad=' + encodeURIComponent(ciudad) +
              '&telefono=' + encodeURIComponent(telefono) +
              '&direccion=' + encodeURIComponent(direccion);
    window.location.href = url;
  }
  