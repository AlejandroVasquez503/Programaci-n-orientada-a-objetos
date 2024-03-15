class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd){
        this.usuario = usuario;
        this.pass = pass;
        this.bdusuario = bdusuario;
        this.bdpwd = bdpwd;
    }

    validar() {
        if (this.usuario === this.bdusuario && this.pass === this.bdpwd) {
            alertify.success('Inicio de sesión exitoso');
            mostrarFormularioPerfil();
        } else if (this.usuario !== this.bdusuario && this.pass === this.bdpwd) {
            alertify.error('Usuario incorrecto');
        } else if (this.usuario === this.bdusuario && this.pass !== this.bdpwd) {
            alertify.error('Contraseña incorrecta');
        } else {
            alertify.error('Usuario y contraseña incorrectos');
        }
    }
}

class Usuario extends Sesion {
    constructor(usuario, pass, bdusuario, bdpwd){
        super(usuario, pass, bdusuario, bdpwd);
    }
}

function login() {
    let user = document.getElementById('user').value;
    let pwd = document.getElementById('pwd').value;

    let consulta = new Usuario(user, pwd, 'William', '123');
    consulta.validar();
}

function mostrarFormularioPerfil() {
    let formPerfil = `
        <h2>Perfil de Usuario</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required>
        <label for="fecha">Fecha de Nacimiento:</label>
        <input type="date" id="fecha" required>
        <label for="genero">Género:</label>
        <input type="text" id="genero" required>
        <label for="departamento">Departamento:</label>
        <input type="text" id="departamento" required>
        <label for="ciudad">Ciudad:</label>
        <input type="text" id="ciudad" required>
        <label for="telefono">Número de Teléfono:</label>
        <input type="text" id="telefono" required>
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" required></textarea>
        <br>
        <input type="button" value="Guardar Perfil" onclick="enviarInformacion()">
    `;

    document.querySelector('.contenedor').innerHTML = formPerfil;
}

function enviarInformacion() {
    window.location.href = "perfil.html";
}
