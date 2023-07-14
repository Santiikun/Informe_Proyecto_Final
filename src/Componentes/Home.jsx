import React from 'react';


export const Home = (props) => {
  return (
    <>
      <head>
        <title>Página de Inicio Universitario</title>

      </head>
      <body>

        <img src={process.env.PUBLIC_URL + './uleam.png'} alt="Logo" className="logo" />
        <header>
          <div className="bar-menu">
            <nav>
            <button type="submit" onClick={() => props.onFormSwitch('Aplicaciones')}>Aplicaciones Web 1</button>
            <span> | </span>
            <button type="submit" onClick={() => props.onFormSwitch('Gestion')}>Gestión y Base de Datos</button>
            <span> | </span>
            <button type="submit" onClick={() => props.onFormSwitch('Programacion')}>Progamacion Orientada a Objetos</button>
            </nav>
            <body>
              <nav>
                <nav className="profile-content">
                  <ul>
                  <button type="submit" onClick={() => props.onFormSwitch('Inicio')}>Inicio</button>
                  <span>  -  </span>
                  <button type="submit" onClick={() => props.onFormSwitch('Perfil')}>Perfil</button>
                  <span> -  </span>
                  <button type="submit" onClick={() => props.onFormSwitch('Gestion')}>Cerrar Sesion</button>
                  </ul>
                </nav>
              </nav>
            </body>
          </div>
        </header>

        <main>
          <div className="caja">
            <h1>Bienvenido(a) a la página principal para silabos universitarios ULEAM</h1>
            <b>Seleccionar una materia para que pueda visualizar el silabo.</b>
          </div>
          <div className="container">
          <img src={process.env.PUBLIC_URL + './silabo.png'} alt="imagen1" className="imagen1" />
          <img src={process.env.PUBLIC_URL + './silabo3.png'} alt="imagen2" className="imagen2" />
          <img src={process.env.PUBLIC_URL + './silabox.png'} alt="imagen3" className="imagen3" />
          </div>
          <div className="course-info">
            <h2>Misión</h2>
            <p>
              Desarrollo de un Sistema de Silabos Universitario para una Institución Educativa, permitirá a la institución educativa brindar una formación académica de excelencia, adaptada a los desafíos y demandas de la sociedad y el mundo laboral, y contribuir así al desarrollo integral de sus estudiantes y al avance de la educación superior.
            </p>
          </div>
          <div className="course-infx">
            <h2>Visión</h2>
            <p>
              Facilitar un enfoque educativo integral y de calidad a través de un Sistema de Silabos Universitario eficiente y actualizado, que promueva el aprendizaje significativo, el desarrollo de habilidades y competencias, y la formación de profesionales altamente capacitados.
            </p>
          </div>
        </main>
        <footer>
          <p2>Universidad ULEAM © 2023</p2>
        </footer>
        <script>
            
        </script>
      </body>
    </>
  );
}

export default Home;
