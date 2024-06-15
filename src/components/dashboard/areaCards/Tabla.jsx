import PropTypes from 'prop-types';



const dataMap = {
  finanzas: {
    title: "TABLA DE FINANZAS",
    headers: ["OBJETIVOS ESTRATÉGICOS", "KEY PERFORMANCE INDICATOR"],
    rows: [
      { objetivo: "Invertir en Infraestructura y Tecnología", indicador: "Monto de inversión" },
      { objetivo: "Maximizar la eficiencia en la gestión de recursos humanos", indicador: "Satisfacción laboral del personal" },
    ],
  },
  clientes: {
    title: "TABLA DE CLIENTES",
    headers: ["OBJETIVOS ESTRATÉGICOS", "KEY PERFORMANCE INDICATOR"],
    rows: [
      { objetivo: "Mejorar la satisfacción y experiencia de los estudiantes", indicador: "Índice de satisfacción de los estudiantes" },
      { objetivo: "Mejorar la calidad académica y la excelencia", indicador: "Índice de calidad académica" },
    ],
  },
  procesos: {
    title: "TABLA PROCESOS INTERNOS",
    headers: ["OBJETIVOS ESTRATÉGICOS", "KEY PERFORMANCE INDICATOR"],
    rows: [
      { objetivo: "Mejorar el proceso de registro de cursos.", indicador: "Tasa de finalización del proceso de registro de cursos." },
      { objetivo: "Mejorar el proceso de gestión académica.", indicador: "Tiempo promedio de respuesta a consultas académicas." },
    ],
  },
  aprendizaje: {
    title: "TABLA APRENDIZAJE",
    headers: ["OBJETIVOS ESTRATÉGICOS", "KEY PERFORMANCE INDICATOR"],
    rows: [
      { objetivo: "Mejorar la calidad de la educación", indicador: "Tasa de aprobación de asignaturas" },
      { objetivo: "Fomentar la investigación y la innovación", indicador: "Número de publicaciones científicas por año" },
    ],
  },
};

const Tabla = ({ perspectiva }) => {
  const data = dataMap[perspectiva];

  if (!data) {
    return null;
  }

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title" style={{textAlign:"center", padding:"20px", fontSize:"30px"}}>{data.title}</h4>
      </div>
      <div className="data-table-diagram">
        <table style={{tableLayout:"fixed"}}>
          <thead>
            <tr style={{textAlign:"center"}}>
              {data.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody style={{textAlign:"center", fontSize:"20px"}}>
            {data.rows.map((row, index) => (
              <tr key={index} >
                <td style={{padding:"20px"}}>{row.objetivo}</td>
                <td>{row.indicador}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

Tabla.propTypes = {
  perspectiva: PropTypes.string.isRequired,
};

export default Tabla;
