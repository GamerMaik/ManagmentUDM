import {AreaTop, AreaBarChartAprendizaje,AreaBarChartPublicaciones } from "../../components";

const Aprendizaje = () => {
  return (
    <div className="content-area">
      <AreaTop nombre={"PERSPECTIVA APRENDIZAJE"}/>
      <AreaBarChartAprendizaje />
      <br></br>
      <AreaBarChartPublicaciones />
    </div>
  );
};

export default Aprendizaje;
