import React from 'react';


function GestionBaseDatos() {
  return (
    <>
      <head>

        <title>Silabos: Gestión de Base de Datos</title>

      </head>

      <header>
        <div className="bar-menu">
          <nav>
            <a href="Aplicaciones.html">Aplicaciones Web 1</a>
            <a href="Gestion.html">Gestión de Base de Datos</a>
            <a href="Programacion.html">Programación Orientada a Objetos</a>
          </nav>
          <body>
            <nav>
              <nav1 className="profile-content1">
                <ul>
                  <a href="home.html">Inicio</a>
                  <a href="Perfil.html">Perfil</a>
                  <a href="inicio.html">Cerrar sesión</a>
                </ul>
              </nav1>
            </nav>
          </body>
        </div>
      </header>

      <body>
        <div className="container1">
          <h1>Silabo: Gestión de Base de Datos</h1>

          <div className="course-info">
            <h2>Información del curso</h2>
            <p>
              <strong>Unidad Académica:</strong> Ciencias de la Computación y Tecnologías de la Información
            </p>
            <p>
              <strong>Carrera:</strong> Tecnologías de la Información 2022
            </p>
            <p>
              <strong>Unidad de Organización Curricular:</strong> Unidad de Base de Datos
            </p>
            <p>
              <strong>Unidad Profesional:</strong> Base de Datos y Sistemas de Información
            </p>
            <p>
              <strong>Período Académico:</strong> 2023 Periodo 1
            </p>
            <p>
              <strong>Paralelo:</strong> A
            </p>
            <p>
              <strong>Nivel:</strong> 5
            </p>
          </div>

          <div className="course-outline1">
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
                  Diseñar, implementar y gestionar bases de datos para aplicaciones empresariales y sistemas de información.
                </td>
                <td>Alto</td>
                <td>Diseña y administra bases de datos relacionales y no relacionales para aplicaciones y sistemas de información.</td>
                <td>
                  <ul>
                    <li>Comprender los conceptos fundamentales de las bases de datos relacionales y no relacionales.</li>
                    <li>Modelar y diseñar estructuras de bases de datos utilizando herramientas y técnicas adecuadas.</li>
                    <li>Implementar y gestionar bases de datos utilizando sistemas de gestión de bases de datos.</li>
                    <li>Optimizar y asegurar el rendimiento de las bases de datos.</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>

          <div className="course-methodology1">
            <h2>Estructura conceptual y desarrollo metodológico de la asignatura</h2>
            <p>
              <strong>Resultados de aprendizaje de la actividad curricular:</strong>
            </p>
            <p>
              <strong>Fecha planificada de inicio:</strong> lunes, 10 de abril de 2023
            </p>
            <p>
              <strong>Fecha planificada de fin:</strong> viernes, 5 de mayo de 2023
            </p>
            <table>
              <tr>
                <th>Logros de aprendizaje</th>
                <th>Aprendizaje en contacto con el docente</th>
                <th>Aprendizaje práctico - experimental</th>
                <th>Aprendizaje autónomo</th>
              </tr>
              <tr>
                <td>Comprender los conceptos fundamentales de las bases de datos relacionales y no relacionales.</td>
                <td>
                  <ul>
                    <li>Introducción a las bases de datos</li>
                    <li>Modelado de bases de datos relacionales</li>
                    <li>Lenguaje SQL para consulta y manipulación de datos</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Implementación de bases de datos relacionales</li>
                    <li>Administración de bases de datos con SQL Server</li>
                  </ul>
                </td>
                <td>Estudio y práctica individual para afianzar los conocimientos adquiridos</td>
              </tr>
            </table>
          </div>

          <div className="course-hours1">
            <h2>Organización del tiempo y créditos</h2>
            <table>
              <tr>
                <tc></tc>
                <tc>En contacto con el docente</tc>
                <tc>Sin contacto con el docente</tc>
                <tc>Total de horas</tc>
                <tc>Créditos</tc>
              </tr>
              <tr>
                <td>Horas</td>
                <td>32</td>
                <td>8</td>
                <td>40</td>
                <td>120</td>
                <td>4</td>
              </tr>
            </table>
          </div>

          <div className="course-teacher1">
            <h2>Docente responsable</h2>
            <p>
              <strong>Docente responsable:</strong> Robert Moreira
            </p>
          </div>

          <div className="download-syllabus1">
            <a href="Ingenie.pdf" download>
              Descargar sílabo
            </a>
          </div>
        </div>
      </body>
    </>
  );
}

export default GestionBaseDatos;
