import PropTypes from 'prop-types';
import "./AreaCards.scss";

const AreaCardsCMI = ({ onButtonClick }) => {
  return (
    <section className="content-area-cards-cmi">
      <div className="area-card" onClick={() => onButtonClick('finanzas')}>
        <div className="area-card-info">
          <h5 className="info-title">{"FINANZAS"}</h5>
        </div>
      </div>
      <div className="area-card" onClick={() => onButtonClick('clientes')}>
        <div className="area-card-info">
          <h5 className="info-title">{"CLIENTES"}</h5>
        </div>
      </div>
      <div className="area-card" onClick={() => onButtonClick('procesos')}>
        <div className="area-card-info">
          <h5 className="info-title">{"PROCESOS INTERNOS"}</h5>
        </div>
      </div>
      <div className="area-card" onClick={() => onButtonClick('aprendizaje')}>
        <div className="area-card-info">
          <h5 className="info-title">{"APRENDIZAJE"}</h5>
        </div>
      </div>
    </section>
  );
};

AreaCardsCMI.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default AreaCardsCMI;
