import React from 'react';


function Registro() {
  return (
    <div className="container3">
      <div className="box-uleam3">
        <img src="logo_ULEAM.png" alt="foto de persona" />
      </div>
      <div className="box-register3">
        <h1>Ingrese sus datos</h1>
        <form id="register-form3">
          <input type="text" placeholder="Nombre y Apellidos" id="nombre3" required />
          <input type="text" placeholder="Nombre de Usuario" id="user3" required />
          <input type="text" placeholder="Cédula" id="cedula3" required />
          <input type="date" placeholder="Fecha de Nacimiento" id="nacimiento3" required />
          <input type="email" placeholder="Correo electrónico" id="email3" required />
          <input type="password" placeholder="Contraseña" id="contraseña3" required />
          <button type="submit">Registrarse</button>
        </form>
      </div>
      <div className="links3">
        <a href="inicio.html"></a>
      </div>
    </div>
  );
}

export default Registro;
