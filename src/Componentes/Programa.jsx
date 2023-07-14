import React from "react";

const Programacion = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Silabo: Programación Orientada a Objetos</title>
      </head>

      <header>
        <div className="bar-menu2">
          <nav>
            <a href="Aplicaciones2.html">Aplicaciones Web 12</a>
            <a href="Gestion2.html">Gestión de Base de Datos2</a>
            <a href="Programacion2.html">Programación Orientada a Objetos2</a>
          </nav>

          <body>
            <nav>
              <nav className="profile-content2">
                <ul>
                  <a href="home2.html">Inicio</a>
                  <a href="Perfil2.html">Perfil</a>
                  <a href="inicio2.html">Cerrar sesión</a>
                </ul>
              </nav>
            </nav>
          </body>
        </div>
      </header>

      <body>
        <div className="container2">
          <h1>Silabo: Programación Orientada a Objetos</h1>

          <div className="course-info2">
            <h2>Información del curso</h2>
            <p>
              <strong>Unidad Académica:</strong> Ciencias de la Computación y
              Tecnologías de la Información
            </p>
            <p>
              <strong>Carrera:</strong> Ingeniería de Sistemas
            </p>
            <p>
              <strong>Unidad de Organización Curricular:</strong> Ingeniería de
              Software
            </p>
            <p>
              <strong>Unidad Profesional:</strong> Desarrollo de Software
            </p>
            <p>
              <strong>Período Académico:</strong> 2023 Periodo 2
            </p>
            <p>
              <strong>Paralelo:</strong> A
            </p>
            <p>
              <strong>Nivel:</strong> 4
            </p>
          </div>

          <div className="course-outline2">
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
                  Analizar, diseñar e implementar soluciones de software basadas
                  en la Programación Orientada a Objetos.
                </td>
                <td>Alto</td>
                <td>
                  Desarrolla aplicaciones utilizando conceptos y técnicas de
                  Programación Orientada a Objetos.
                </td>
                <td>
                  <ul>
                    <li>
                      Comprender los principios y conceptos fundamentales de la
                      Programación Orientada a Objetos.
                    </li>
                    <li>
                      Implementar clases, objetos, herencia y polimorfismo en
                      aplicaciones.
                    </li>
                    <li>
                      Utilizar patrones de diseño y buenas prácticas en la
                      Programación Orientada a Objetos.
                    </li>
                    <li>
                      Aplicar el encapsulamiento, la abstracción y la modularidad
                      en el diseño y desarrollo de software.
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>

          <div className="course-methodology2">
            <h2>Estructura conceptual y desarrollo metodológico de la asignatura</h2>
            <p>
              <strong>Resultados de aprendizaje de la actividad curricular:</strong>
            </p>
            <p>
              <strong>Fecha planificada de inicio:</strong> lunes, 15 de mayo de 2023
            </p>
            <p>
              <strong>Fecha planificada de fin:</strong> viernes, 9 de junio de 2023
            </p>
            <table>
              <tr>
                <th>Logros de aprendizaje</th>
                <th>Aprendizaje en contacto con el docente</th>
                <th>Aprendizaje práctico - experimental</th>
                <th>Aprendizaje autónomo</th>
              </tr>
              <tr>
                <td>
                  Comprender los principios y conceptos fundamentales de la
                  Programación Orientada a Objetos.
                </td>
                <td>
                  <ul>
                    <li>Introducción a la Programación Orientada a Objetos</li>
                    <li>Clases y objetos en OOP</li>
                    <li>Herencia y polimorfismo</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Implementación de herencia y polimorfismo en aplicaciones
                    </li>
                    <li>
                      Utilización de patrones de diseño en la Programación Orientada a Objetos
                    </li>
                  </ul>
                </td>
                <td>
                  Estudio individual y práctica de los conceptos y técnicas de la
                  Programación Orientada a Objetos
                </td>
              </tr>
            </table>
          </div>

          <div className="course-hours2">
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
                <td>40</td>
                <td>10</td>
                <td>50</td>
                <td>150</td>
                <td>5</td>
              </tr>
            </table>
          </div>

          <div className="course-teacher2">
            <h2>Docente responsable</h2>
            <p>
              <strong>Docente responsable:</strong> Vera Burgos Elsa Patricia
            </p>
          </div>

          <div className="download-syllabus2">
            <a href="Silabo Ingenieria de Requisitos.pdf" download>
              Descargar sílabo
            </a>
          </div>
        </div>
      </body>
    </>
  );
};

export default Programacion;
