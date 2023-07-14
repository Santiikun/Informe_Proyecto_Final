import React from 'react';


function AplicacionesWeb1() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Aplicaciones web 1 - Syllabus</title>

      </head>
      <header>
        <div className="bar-menu">
          <nav>
            <a href="Aplicaciones.html">Aplicaciones Web 1</a>
            <a href="Gestion.html">Gestión de Base de Datos</a>
            <a href="Programacion.html">Programación Ortientada a Objetos</a>
          </nav>
          <body>
            <nav>
              <nav className="profile-content">
                <ul>
                  <a href="home.html">Inicio</a>
                  <a href="Perfil.html">Perfil</a>
                  <a href="inicio.html">Cerrar sesión</a>
                </ul>
              </nav>
            </nav>
          </body>
        </div>
      </header>

      <body>
        <div className="container">
          <h1>Silabo: Aplicaciones web 1</h1>

          <div className="course-info">
            <h2>Información del curso</h2>
            <p>
              <strong>Unidad Académica:</strong> Ciencias de la Vida y Tecnologías
            </p>
            <p>
              <strong>Carrera:</strong> Tecnologías de la Información 2022
            </p>
            <p>
              <strong>Unidad de Organización Curricular:</strong>
            </p>
            <p>
              <strong>Unidad Profesional:</strong>
            </p>
            <p>
              <strong>Período Académico:</strong> 2023 Periodo 1
            </p>
            <p>
              <strong>Paralelo:</strong> A, B
            </p>
            <p>
              <strong>Nivel:</strong> 5
            </p>
          </div>

          <div className="course-outline">
            <h2>Relación de la asignatura con el perfil de egreso</h2>
            <table>
              <tr>
                <th>Resultado de aprendizaje del perfil de egreso</th>
                <th>Nivel de impacto</th>
                <th>Resultado de aprendizaje de la asignatura</th>
                <th>Logros de aprendizaje</th>
              </tr>
              <tr>
                <td>
                  Adaptar, desarrollar y mantener sistemas, servicios y aplicaciones informáticas empleando las metodologías de ingeniería del software como instrumento para el aseguramiento de su calidad.
                </td>
                <td>Alto</td>
                <td>
                  Desarrolla e implementa aplicaciones de Internet enriquecidas que cumplen con los estándares de los organismos de normalización incluyendo herramientas, directrices y especificaciones.
                </td>
                <td>
                  <ul>
                    <li>Aplicar los conocimientos sobre los estándares de programación web en el lado del cliente y de los formatos para el intercambio de datos en la web.</li>
                    <li>Configurar e implementar librerías y frameworks front end para el desarrollo de aplicaciones web enriquecidas.</li>
                    <li>Integrar paradigmas y conceptos de programación avanzados sobre el lenguaje estándar para el desarrollo de aplicaciones web en el cliente.</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>

          <div className="course-methodology">
            <h2>Estructura conceptual y desarrollo metodológico de la asignatura</h2>
            <p>
              <strong>Resultados de aprendizaje de la actividad curricular:</strong>
            </p>
            <p>
              <strong>Fecha planificada de inicio:</strong> lunes, 20 de marzo de 2023
            </p>
            <p>
              <strong>Fecha planificada de fin:</strong> viernes, 14 de abril de 2023
            </p>
            <table>
              <tr>
                <th>Logros de aprendizaje</th>
                <th>Aprendizaje en contacto con el docente</th>
                <th>Aprendizaje práctico - experimental</th>
                <th>Aprendizaje autónomo</th>
              </tr>
              <tr>
                <td>Aplicar los conocimientos sobre los estándares de programación web en el lado del cliente y de los formatos para el intercambio de datos en la web.</td>
                <td>
                  <ul>
                    <li>Introducción a la programación web</li>
                    <li>Maquetado de página web usando HTML</li>
                    <li>CSS: Reglas para diseño y Grid Layout</li>
                    <li>JavaScript: Funciones básicas, generación de contenido y manipulación del DOM</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Aplicación de Grid CSS en página web</li>
                    <li>Diseño de página web</li>
                    <li>Práctica de maquetado, diseño, validaciones y generación de contenido como prototipo de proyecto para la asignatura</li>
                  </ul>
                </td>
                <td>Trabajo autónomo para el estudio y práctica de los contenidos del curso</td>
              </tr>
            </table>
          </div>

          <div className="course-hours">
            <h2>Organización del tiempo y créditos</h2>
            <table>
              <tr>
                <th></th>
                <th>En contacto con el docente</th>
                <th>Sin contacto con el docente</th>
                <th>Total de horas</th>
                <th>Créditos</th>
              </tr>
              <tr>
                <td>Horas</td>
                <td>48</td>
                <td>16</td>
                <td>32</td>
                <td>48</td>
                <td>144</td>
                <td>3</td>
              </tr>
            </table>
          </div>

          <div className="course-teacher">
            <h2>Docente responsable</h2>
            <p><strong>Docente responsable:</strong> Quiroz Palma Patricia Alexandra</p>
          </div>
        </div>

        <div className="download-syllabus">
          <a href="SILABO APW1 (1).pdf" download>Descargar sílabo</a>
        </div>

        <footer>
          <c>Universidad ULEAM © 2023</c>
        </footer>
        <script src="registro.js"></script>
      </body>
    </>
  );
}

export default AplicacionesWeb1;
